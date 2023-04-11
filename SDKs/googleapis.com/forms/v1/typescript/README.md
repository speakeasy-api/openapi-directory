# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/forms/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/forms/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FormsFormsBatchUpdateRequest,
  FormsFormsBatchUpdateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  MediaPropertiesAlignmentEnum,
  FileUploadQuestionTypesEnum,
  ChoiceQuestionTypeEnum,
  OptionGoToActionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FormsFormsBatchUpdateRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchUpdateFormRequestInput: {
    includeFormInResponse: false,
    requests: [
      {
        createItem: {
          item: {
            description: "distinctio",
            imageItem: {
              image: {
                altText: "quibusdam",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 857946,
                },
                sourceUri: "corrupti",
              },
            },
            itemId: "illum",
            pageBreakItem: {
              "error": "deserunt",
              "suscipit": "iure",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.SubmitForm,
                      goToSectionId: "ipsa",
                      image: {
                        altText: "delectus",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 383441,
                        },
                        sourceUri: "molestiae",
                      },
                      isOther: false,
                      value: "minus",
                    },
                    {
                      goToAction: OptionGoToActionEnum.SubmitForm,
                      goToSectionId: "voluptatum",
                      image: {
                        altText: "iusto",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 392785,
                        },
                        sourceUri: "recusandae",
                      },
                      isOther: false,
                      value: "temporibus",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "quis",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 648172,
                },
                sourceUri: "perferendis",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "quo",
                        image: {
                          altText: "odit",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 870088,
                          },
                          sourceUri: "maiores",
                        },
                        isOther: false,
                        value: "molestiae",
                      },
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "quod",
                        image: {
                          altText: "esse",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 780529,
                          },
                          sourceUri: "dolorum",
                        },
                        isOther: false,
                        value: "dicta",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "officia",
                        image: {
                          altText: "occaecati",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 537373,
                          },
                          sourceUri: "hic",
                        },
                        isOther: false,
                        value: "optio",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "beatae",
                        image: {
                          altText: "commodi",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 264555,
                          },
                          sourceUri: "qui",
                        },
                        isOther: false,
                        value: "impedit",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Checkbox,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "esse",
                    maxFileSize: "ipsum",
                    maxFiles: 568434,
                    types: [
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "natus",
                        },
                        {
                          value: "sed",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "dolor",
                            uri: "https://hoarse-upper.org",
                          },
                          video: {
                            displayText: "fuga",
                            youtubeUri: "in",
                          },
                        },
                        {
                          link: {
                            displayText: "corporis",
                            uri: "https://innocent-thinking.net",
                          },
                          video: {
                            displayText: "architecto",
                            youtubeUri: "ipsa",
                          },
                        },
                        {
                          link: {
                            displayText: "reiciendis",
                            uri: "https://prize-plier.biz",
                          },
                          video: {
                            displayText: "dolorem",
                            youtubeUri: "corporis",
                          },
                        },
                      ],
                      text: "explicabo",
                    },
                    pointValue: 750686,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "omnis",
                            uri: "http://general-mobster.com",
                          },
                          video: {
                            displayText: "iure",
                            youtubeUri: "culpa",
                          },
                        },
                        {
                          link: {
                            displayText: "doloribus",
                            uri: "https://buttery-petitioner.biz",
                          },
                          video: {
                            displayText: "culpa",
                            youtubeUri: "consequuntur",
                          },
                        },
                      ],
                      text: "repellat",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "occaecati",
                            uri: "http://immediate-instructor.info",
                          },
                          video: {
                            displayText: "velit",
                            youtubeUri: "error",
                          },
                        },
                        {
                          link: {
                            displayText: "quia",
                            uri: "http://cautious-poker.name",
                          },
                          video: {
                            displayText: "enim",
                            youtubeUri: "odit",
                          },
                        },
                        {
                          link: {
                            displayText: "quo",
                            uri: "http://weary-fright.name",
                          },
                          video: {
                            displayText: "possimus",
                            youtubeUri: "aut",
                          },
                        },
                      ],
                      text: "quasi",
                    },
                  },
                  questionId: "error",
                  required: false,
                  rowQuestion: {
                    title: "Dr.",
                  },
                  scaleQuestion: {
                    high: 673660,
                    highLabel: "quasi",
                    low: 971945,
                    lowLabel: "voluptatibus",
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
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "praesentium",
                        image: {
                          altText: "voluptatibus",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 604846,
                          },
                          sourceUri: "voluptate",
                        },
                        isOther: false,
                        value: "cum",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "doloremque",
                        image: {
                          altText: "reprehenderit",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 979587,
                          },
                          sourceUri: "dicta",
                        },
                        isOther: false,
                        value: "corporis",
                      },
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "iusto",
                        image: {
                          altText: "dicta",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 317983,
                          },
                          sourceUri: "accusamus",
                        },
                        isOther: false,
                        value: "commodi",
                      },
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "quae",
                        image: {
                          altText: "ipsum",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 565189,
                          },
                          sourceUri: "excepturi",
                        },
                        isOther: false,
                        value: "pariatur",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Radio,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "praesentium",
                    maxFileSize: "rem",
                    maxFiles: 916723,
                    types: [
                      FileUploadQuestionTypesEnum.Audio,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "veritatis",
                        },
                        {
                          value: "itaque",
                        },
                        {
                          value: "incidunt",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "consequatur",
                            uri: "https://tender-carload.name",
                          },
                          video: {
                            displayText: "distinctio",
                            youtubeUri: "quibusdam",
                          },
                        },
                        {
                          link: {
                            displayText: "labore",
                            uri: "http://delightful-graph.name",
                          },
                          video: {
                            displayText: "quos",
                            youtubeUri: "perferendis",
                          },
                        },
                      ],
                      text: "magni",
                    },
                    pointValue: 828940,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "alias",
                            uri: "http://rapid-moat.biz",
                          },
                          video: {
                            displayText: "facilis",
                            youtubeUri: "tempore",
                          },
                        },
                        {
                          link: {
                            displayText: "labore",
                            uri: "https://infantile-demur.net",
                          },
                          video: {
                            displayText: "sint",
                            youtubeUri: "aliquid",
                          },
                        },
                      ],
                      text: "provident",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "sint",
                            uri: "https://edible-tectonics.org",
                          },
                          video: {
                            displayText: "dolorum",
                            youtubeUri: "in",
                          },
                        },
                        {
                          link: {
                            displayText: "in",
                            uri: "https://wonderful-proof-reader.com",
                          },
                          video: {
                            displayText: "magnam",
                            youtubeUri: "cumque",
                          },
                        },
                        {
                          link: {
                            displayText: "facere",
                            uri: "http://humming-police.org",
                          },
                          video: {
                            displayText: "non",
                            youtubeUri: "occaecati",
                          },
                        },
                        {
                          link: {
                            displayText: "enim",
                            uri: "https://white-printing.name",
                          },
                          video: {
                            displayText: "nam",
                            youtubeUri: "id",
                          },
                        },
                      ],
                      text: "blanditiis",
                    },
                  },
                  questionId: "deleniti",
                  required: false,
                  rowQuestion: {
                    title: "Dr.",
                  },
                  scaleQuestion: {
                    high: 230533,
                    highLabel: "deserunt",
                    low: 394869,
                    lowLabel: "vel",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "natus",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 474867,
                },
                sourceUri: "perferendis",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "distinctio",
                      image: {
                        altText: "id",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 290077,
                        },
                        sourceUri: "suscipit",
                      },
                      isOther: false,
                      value: "natus",
                    },
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "eum",
                      image: {
                        altText: "vero",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                          width: 102863,
                        },
                        sourceUri: "magnam",
                      },
                      isOther: false,
                      value: "et",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.Checkbox,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "ullam",
                  maxFileSize: "provident",
                  maxFiles: 551816,
                  types: [
                    FileUploadQuestionTypesEnum.FileTypeUnspecified,
                    FileUploadQuestionTypesEnum.Pdf,
                    FileUploadQuestionTypesEnum.Audio,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "ad",
                      },
                      {
                        value: "eum",
                      },
                      {
                        value: "dolor",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "odit",
                          uri: "http://bumpy-hosiery.org",
                        },
                        video: {
                          displayText: "debitis",
                          youtubeUri: "eius",
                        },
                      },
                      {
                        link: {
                          displayText: "maxime",
                          uri: "https://rotating-identification.com",
                        },
                        video: {
                          displayText: "architecto",
                          youtubeUri: "repudiandae",
                        },
                      },
                      {
                        link: {
                          displayText: "ullam",
                          uri: "https://knobby-zither.org",
                        },
                        video: {
                          displayText: "sed",
                          youtubeUri: "saepe",
                        },
                      },
                      {
                        link: {
                          displayText: "pariatur",
                          uri: "http://cute-lens.name",
                        },
                        video: {
                          displayText: "magni",
                          youtubeUri: "sunt",
                        },
                      },
                    ],
                    text: "quo",
                  },
                  pointValue: 848009,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "maxime",
                          uri: "http://nimble-caution.info",
                        },
                        video: {
                          displayText: "accusantium",
                          youtubeUri: "ab",
                        },
                      },
                      {
                        link: {
                          displayText: "maiores",
                          uri: "https://harmonious-in-joke.info",
                        },
                        video: {
                          displayText: "nam",
                          youtubeUri: "eaque",
                        },
                      },
                      {
                        link: {
                          displayText: "pariatur",
                          uri: "http://wise-airbag.org",
                        },
                        video: {
                          displayText: "amet",
                          youtubeUri: "aut",
                        },
                      },
                      {
                        link: {
                          displayText: "cumque",
                          uri: "http://wasteful-rectangle.net",
                        },
                        video: {
                          displayText: "dolores",
                          youtubeUri: "quis",
                        },
                      },
                    ],
                    text: "totam",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "eaque",
                          uri: "http://disfigured-collapse.com",
                        },
                        video: {
                          displayText: "dolores",
                          youtubeUri: "minus",
                        },
                      },
                      {
                        link: {
                          displayText: "quam",
                          uri: "http://trusty-filter.org",
                        },
                        video: {
                          displayText: "recusandae",
                          youtubeUri: "omnis",
                        },
                      },
                    ],
                    text: "facilis",
                  },
                },
                questionId: "perspiciatis",
                required: false,
                rowQuestion: {
                  title: "Mr.",
                },
                scaleQuestion: {
                  high: 783645,
                  highLabel: "consequuntur",
                  low: 500026,
                  lowLabel: "error",
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
              "occaecati": "rerum",
            },
            title: "Mrs.",
            videoItem: {
              caption: "asperiores",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Center,
                  width: 267262,
                },
                youtubeUri: "iste",
              },
            },
          },
          location: {
            index: 679091,
          },
        },
        deleteItem: {
          location: {
            index: 535633,
          },
        },
        moveItem: {
          newLocation: {
            index: 864282,
          },
          originalLocation: {
            index: 589910,
          },
        },
        updateFormInfo: {
          info: {
            description: "nobis",
            title: "Miss",
          },
          updateMask: "delectus",
        },
        updateItem: {
          item: {
            description: "quaerat",
            imageItem: {
              image: {
                altText: "quos",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 212390,
                },
                sourceUri: "dolorem",
              },
            },
            itemId: "dolor",
            pageBreakItem: {
              "ipsum": "hic",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "voluptate",
                      image: {
                        altText: "dignissimos",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 227414,
                        },
                        sourceUri: "dolorum",
                      },
                      isOther: false,
                      value: "numquam",
                    },
                    {
                      goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                      goToSectionId: "ipsa",
                      image: {
                        altText: "ipsa",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 487838,
                        },
                        sourceUri: "quaerat",
                      },
                      isOther: false,
                      value: "accusamus",
                    },
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "voluptatibus",
                      image: {
                        altText: "voluptas",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 179603,
                        },
                        sourceUri: "atque",
                      },
                      isOther: false,
                      value: "sit",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "ab",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 679393,
                },
                sourceUri: "iusto",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "omnis",
                        image: {
                          altText: "necessitatibus",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 990339,
                          },
                          sourceUri: "nihil",
                        },
                        isOther: false,
                        value: "ipsum",
                      },
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "id",
                        image: {
                          altText: "saepe",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 137220,
                          },
                          sourceUri: "perferendis",
                        },
                        isOther: false,
                        value: "amet",
                      },
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "accusamus",
                        image: {
                          altText: "ad",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 383464,
                          },
                          sourceUri: "deserunt",
                        },
                        isOther: false,
                        value: "provident",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Radio,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "repellendus",
                    maxFileSize: "totam",
                    maxFiles: 628982,
                    types: [
                      FileUploadQuestionTypesEnum.Video,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "tempora",
                        },
                        {
                          value: "vel",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "officiis",
                            uri: "http://raw-venue.info",
                          },
                          video: {
                            displayText: "harum",
                            youtubeUri: "iusto",
                          },
                        },
                        {
                          link: {
                            displayText: "ipsum",
                            uri: "https://wavy-cuisine.net",
                          },
                          video: {
                            displayText: "accusamus",
                            youtubeUri: "numquam",
                          },
                        },
                        {
                          link: {
                            displayText: "enim",
                            uri: "http://well-lit-literature.info",
                          },
                          video: {
                            displayText: "sit",
                            youtubeUri: "expedita",
                          },
                        },
                        {
                          link: {
                            displayText: "neque",
                            uri: "http://improbable-redhead.info",
                          },
                          video: {
                            displayText: "deserunt",
                            youtubeUri: "quam",
                          },
                        },
                      ],
                      text: "ipsum",
                    },
                    pointValue: 277628,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "cupiditate",
                            uri: "https://tough-reunion.com",
                          },
                          video: {
                            displayText: "laborum",
                            youtubeUri: "totam",
                          },
                        },
                      ],
                      text: "incidunt",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "dolores",
                            uri: "https://rotten-grandfather.info",
                          },
                          video: {
                            displayText: "molestias",
                            youtubeUri: "temporibus",
                          },
                        },
                      ],
                      text: "qui",
                    },
                  },
                  questionId: "neque",
                  required: false,
                  rowQuestion: {
                    title: "Mr.",
                  },
                  scaleQuestion: {
                    high: 164959,
                    highLabel: "odio",
                    low: 124833,
                    lowLabel: "ullam",
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
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "voluptatem",
                        image: {
                          altText: "cumque",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 748664,
                          },
                          sourceUri: "et",
                        },
                        isOther: false,
                        value: "saepe",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "veritatis",
                        image: {
                          altText: "nobis",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 731694,
                          },
                          sourceUri: "cupiditate",
                        },
                        isOther: false,
                        value: "aperiam",
                      },
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "dolorem",
                        image: {
                          altText: "dolore",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 240829,
                          },
                          sourceUri: "dolorum",
                        },
                        isOther: false,
                        value: "architecto",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "aut",
                    maxFileSize: "quas",
                    maxFiles: 929530,
                    types: [
                      FileUploadQuestionTypesEnum.Pdf,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "porro",
                        },
                        {
                          value: "doloribus",
                        },
                        {
                          value: "ut",
                        },
                        {
                          value: "facilis",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "qui",
                            uri: "http://magnificent-kangaroo.name",
                          },
                          video: {
                            displayText: "voluptatibus",
                            youtubeUri: "quisquam",
                          },
                        },
                        {
                          link: {
                            displayText: "vero",
                            uri: "https://glorious-crash.org",
                          },
                          video: {
                            displayText: "voluptate",
                            youtubeUri: "consectetur",
                          },
                        },
                        {
                          link: {
                            displayText: "vero",
                            uri: "https://liquid-underweight.net",
                          },
                          video: {
                            displayText: "quod",
                            youtubeUri: "odio",
                          },
                        },
                      ],
                      text: "similique",
                    },
                    pointValue: 708548,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "ducimus",
                            uri: "http://terrible-status.biz",
                          },
                          video: {
                            displayText: "natus",
                            youtubeUri: "impedit",
                          },
                        },
                        {
                          link: {
                            displayText: "aut",
                            uri: "https://grateful-stumbling.com",
                          },
                          video: {
                            displayText: "porro",
                            youtubeUri: "maiores",
                          },
                        },
                        {
                          link: {
                            displayText: "doloribus",
                            uri: "http://silver-lanai.com",
                          },
                          video: {
                            displayText: "officia",
                            youtubeUri: "tempora",
                          },
                        },
                        {
                          link: {
                            displayText: "ipsam",
                            uri: "http://concrete-hill.net",
                          },
                          video: {
                            displayText: "magnam",
                            youtubeUri: "ratione",
                          },
                        },
                      ],
                      text: "ex",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "dicta",
                            uri: "http://wordy-bother.info",
                          },
                          video: {
                            displayText: "nulla",
                            youtubeUri: "excepturi",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptatibus",
                            uri: "http://well-worn-sequence.org",
                          },
                          video: {
                            displayText: "ea",
                            youtubeUri: "impedit",
                          },
                        },
                        {
                          link: {
                            displayText: "corporis",
                            uri: "http://husky-bid.biz",
                          },
                          video: {
                            displayText: "ea",
                            youtubeUri: "quo",
                          },
                        },
                      ],
                      text: "consectetur",
                    },
                  },
                  questionId: "recusandae",
                  required: false,
                  rowQuestion: {
                    title: "Mr.",
                  },
                  scaleQuestion: {
                    high: 325310,
                    highLabel: "eaque",
                    low: 952871,
                    lowLabel: "libero",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "aut",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 533466,
                },
                sourceUri: "impedit",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                      goToSectionId: "accusamus",
                      image: {
                        altText: "inventore",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 89603,
                        },
                        sourceUri: "dolorum",
                      },
                      isOther: false,
                      value: "laborum",
                    },
                    {
                      goToAction: OptionGoToActionEnum.SubmitForm,
                      goToSectionId: "velit",
                      image: {
                        altText: "eum",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 752135,
                        },
                        sourceUri: "quas",
                      },
                      isOther: false,
                      value: "assumenda",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "voluptas",
                  maxFileSize: "libero",
                  maxFiles: 96549,
                  types: [
                    FileUploadQuestionTypesEnum.Document,
                    FileUploadQuestionTypesEnum.Any,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "ipsa",
                      },
                      {
                        value: "molestiae",
                      },
                      {
                        value: "magnam",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "eius",
                          uri: "http://jolly-lord.net",
                        },
                        video: {
                          displayText: "reprehenderit",
                          youtubeUri: "quidem",
                        },
                      },
                      {
                        link: {
                          displayText: "fugiat",
                          uri: "http://infantile-geek.net",
                        },
                        video: {
                          displayText: "eos",
                          youtubeUri: "praesentium",
                        },
                      },
                    ],
                    text: "quisquam",
                  },
                  pointValue: 86377,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "id",
                          uri: "https://dishonest-screw.org",
                        },
                        video: {
                          displayText: "quo",
                          youtubeUri: "fuga",
                        },
                      },
                    ],
                    text: "eius",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "voluptas",
                          uri: "http://official-admin.biz",
                        },
                        video: {
                          displayText: "debitis",
                          youtubeUri: "ipsam",
                        },
                      },
                    ],
                    text: "aspernatur",
                  },
                },
                questionId: "sequi",
                required: false,
                rowQuestion: {
                  title: "Miss",
                },
                scaleQuestion: {
                  high: 459856,
                  highLabel: "recusandae",
                  low: 44612,
                  lowLabel: "distinctio",
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
              "dignissimos": "inventore",
              "nihil": "totam",
              "accusamus": "aliquam",
              "odio": "occaecati",
            },
            title: "Ms.",
            videoItem: {
              caption: "sapiente",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 645570,
                },
                youtubeUri: "molestiae",
              },
            },
          },
          location: {
            index: 35362,
          },
          updateMask: "porro",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: false,
            },
          },
          updateMask: "eum",
        },
      },
      {
        createItem: {
          item: {
            description: "quas",
            imageItem: {
              image: {
                altText: "praesentium",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 536178,
                },
                sourceUri: "fugit",
              },
            },
            itemId: "fuga",
            pageBreakItem: {
              "incidunt": "atque",
              "explicabo": "minima",
              "nisi": "fugit",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                      goToSectionId: "ratione",
                      image: {
                        altText: "explicabo",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 578922,
                        },
                        sourceUri: "atque",
                      },
                      isOther: false,
                      value: "et",
                    },
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "eveniet",
                      image: {
                        altText: "accusamus",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                          width: 458604,
                        },
                        sourceUri: "quod",
                      },
                      isOther: false,
                      value: "nam",
                    },
                    {
                      goToAction: OptionGoToActionEnum.SubmitForm,
                      goToSectionId: "aliquid",
                      image: {
                        altText: "quasi",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 426306,
                        },
                        sourceUri: "harum",
                      },
                      isOther: false,
                      value: "molestiae",
                    },
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "occaecati",
                      image: {
                        altText: "minima",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 756779,
                        },
                        sourceUri: "sit",
                      },
                      isOther: false,
                      value: "culpa",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.Checkbox,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "adipisci",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Center,
                  width: 160538,
                },
                sourceUri: "consequatur",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "consectetur",
                        image: {
                          altText: "esse",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 590984,
                          },
                          sourceUri: "a",
                        },
                        isOther: false,
                        value: "nulla",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "esse",
                        image: {
                          altText: "quasi",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 621679,
                          },
                          sourceUri: "sint",
                        },
                        isOther: false,
                        value: "pariatur",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.DropDown,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "quia",
                    maxFileSize: "eveniet",
                    maxFiles: 992430,
                    types: [
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                      FileUploadQuestionTypesEnum.Any,
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                      FileUploadQuestionTypesEnum.Pdf,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "aliquid",
                        },
                        {
                          value: "tenetur",
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
                            displayText: "vel",
                            uri: "http://extra-small-recession.org",
                          },
                          video: {
                            displayText: "soluta",
                            youtubeUri: "accusantium",
                          },
                        },
                        {
                          link: {
                            displayText: "aliquam",
                            uri: "https://clear-fly.info",
                          },
                          video: {
                            displayText: "ullam",
                            youtubeUri: "nisi",
                          },
                        },
                        {
                          link: {
                            displayText: "aut",
                            uri: "https://dense-stallion.info",
                          },
                          video: {
                            displayText: "deleniti",
                            youtubeUri: "itaque",
                          },
                        },
                        {
                          link: {
                            displayText: "dolorum",
                            uri: "http://paltry-utensil.com",
                          },
                          video: {
                            displayText: "at",
                            youtubeUri: "et",
                          },
                        },
                      ],
                      text: "voluptate",
                    },
                    pointValue: 55965,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "veritatis",
                            uri: "http://enormous-orator.org",
                          },
                          video: {
                            displayText: "accusantium",
                            youtubeUri: "rem",
                          },
                        },
                        {
                          link: {
                            displayText: "aut",
                            uri: "https://inconsequential-performance.com",
                          },
                          video: {
                            displayText: "corrupti",
                            youtubeUri: "non",
                          },
                        },
                      ],
                      text: "voluptatem",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "occaecati",
                            uri: "http://sneaky-cardigan.info",
                          },
                          video: {
                            displayText: "aut",
                            youtubeUri: "dignissimos",
                          },
                        },
                      ],
                      text: "dicta",
                    },
                  },
                  questionId: "maiores",
                  required: false,
                  rowQuestion: {
                    title: "Miss",
                  },
                  scaleQuestion: {
                    high: 244651,
                    highLabel: "voluptatibus",
                    low: 374323,
                    lowLabel: "asperiores",
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
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "quaerat",
                        image: {
                          altText: "consequuntur",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 638762,
                          },
                          sourceUri: "maxime",
                        },
                        isOther: false,
                        value: "dignissimos",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Checkbox,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "asperiores",
                    maxFileSize: "nemo",
                    maxFiles: 65304,
                    types: [
                      FileUploadQuestionTypesEnum.Image,
                      FileUploadQuestionTypesEnum.Video,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "ab",
                        },
                        {
                          value: "adipisci",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "id",
                            uri: "http://everlasting-parking.name",
                          },
                          video: {
                            displayText: "recusandae",
                            youtubeUri: "totam",
                          },
                        },
                        {
                          link: {
                            displayText: "fugiat",
                            uri: "http://lonely-mentor.info",
                          },
                          video: {
                            displayText: "labore",
                            youtubeUri: "possimus",
                          },
                        },
                        {
                          link: {
                            displayText: "facilis",
                            uri: "https://immense-icing.info",
                          },
                          video: {
                            displayText: "reiciendis",
                            youtubeUri: "assumenda",
                          },
                        },
                      ],
                      text: "nemo",
                    },
                    pointValue: 924967,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "aperiam",
                            uri: "https://emotional-ignorant.info",
                          },
                          video: {
                            displayText: "earum",
                            youtubeUri: "facere",
                          },
                        },
                        {
                          link: {
                            displayText: "numquam",
                            uri: "https://helpless-warming.net",
                          },
                          video: {
                            displayText: "saepe",
                            youtubeUri: "necessitatibus",
                          },
                        },
                      ],
                      text: "dolore",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "asperiores",
                            uri: "http://excellent-crystal.com",
                          },
                          video: {
                            displayText: "dignissimos",
                            youtubeUri: "a",
                          },
                        },
                      ],
                      text: "debitis",
                    },
                  },
                  questionId: "consectetur",
                  required: false,
                  rowQuestion: {
                    title: "Mrs.",
                  },
                  scaleQuestion: {
                    high: 689768,
                    highLabel: "laboriosam",
                    low: 58356,
                    lowLabel: "voluptates",
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
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "accusamus",
                        image: {
                          altText: "similique",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 132815,
                          },
                          sourceUri: "voluptas",
                        },
                        isOther: false,
                        value: "voluptas",
                      },
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "minima",
                        image: {
                          altText: "nobis",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 237807,
                          },
                          sourceUri: "minus",
                        },
                        isOther: false,
                        value: "dolores",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "in",
                        image: {
                          altText: "dolore",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 885963,
                          },
                          sourceUri: "temporibus",
                        },
                        isOther: false,
                        value: "ullam",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "cum",
                    maxFileSize: "blanditiis",
                    maxFiles: 555361,
                    types: [
                      FileUploadQuestionTypesEnum.Document,
                      FileUploadQuestionTypesEnum.Pdf,
                      FileUploadQuestionTypesEnum.Drawing,
                      FileUploadQuestionTypesEnum.Video,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "hic",
                        },
                        {
                          value: "exercitationem",
                        },
                        {
                          value: "nobis",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "rerum",
                            uri: "http://wide-carnation.org",
                          },
                          video: {
                            displayText: "facilis",
                            youtubeUri: "voluptate",
                          },
                        },
                      ],
                      text: "expedita",
                    },
                    pointValue: 70869,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "dolore",
                            uri: "https://criminal-id.info",
                          },
                          video: {
                            displayText: "quidem",
                            youtubeUri: "explicabo",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptas",
                            uri: "https://burly-geometry.org",
                          },
                          video: {
                            displayText: "debitis",
                            youtubeUri: "illo",
                          },
                        },
                        {
                          link: {
                            displayText: "reiciendis",
                            uri: "http://motionless-whisker.biz",
                          },
                          video: {
                            displayText: "sed",
                            youtubeUri: "provident",
                          },
                        },
                      ],
                      text: "eius",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "ipsum",
                            uri: "http://obedient-medicine.org",
                          },
                          video: {
                            displayText: "tempora",
                            youtubeUri: "tempora",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptate",
                            uri: "https://ideal-amendment.biz",
                          },
                          video: {
                            displayText: "officiis",
                            youtubeUri: "praesentium",
                          },
                        },
                        {
                          link: {
                            displayText: "facilis",
                            uri: "http://feline-futon.org",
                          },
                          video: {
                            displayText: "rem",
                            youtubeUri: "sit",
                          },
                        },
                        {
                          link: {
                            displayText: "nobis",
                            uri: "https://glass-eyelid.org",
                          },
                          video: {
                            displayText: "reiciendis",
                            youtubeUri: "nulla",
                          },
                        },
                      ],
                      text: "magni",
                    },
                  },
                  questionId: "aperiam",
                  required: false,
                  rowQuestion: {
                    title: "Dr.",
                  },
                  scaleQuestion: {
                    high: 253642,
                    highLabel: "veniam",
                    low: 446135,
                    lowLabel: "officiis",
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
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "exercitationem",
                        image: {
                          altText: "praesentium",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 386827,
                          },
                          sourceUri: "dolorum",
                        },
                        isOther: false,
                        value: "voluptatum",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Checkbox,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "hic",
                    maxFileSize: "expedita",
                    maxFiles: 892863,
                    types: [
                      FileUploadQuestionTypesEnum.Pdf,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "officia",
                        },
                        {
                          value: "dolorum",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "accusamus",
                            uri: "http://monthly-chapter.biz",
                          },
                          video: {
                            displayText: "fugiat",
                            youtubeUri: "voluptatem",
                          },
                        },
                        {
                          link: {
                            displayText: "culpa",
                            uri: "https://forceful-activity.info",
                          },
                          video: {
                            displayText: "ipsam",
                            youtubeUri: "sit",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptatum",
                            uri: "https://valid-forestry.com",
                          },
                          video: {
                            displayText: "blanditiis",
                            youtubeUri: "ex",
                          },
                        },
                      ],
                      text: "sed",
                    },
                    pointValue: 24313,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "nostrum",
                            uri: "https://phony-ad.biz",
                          },
                          video: {
                            displayText: "reiciendis",
                            youtubeUri: "dolorem",
                          },
                        },
                        {
                          link: {
                            displayText: "harum",
                            uri: "http://burly-morsel.biz",
                          },
                          video: {
                            displayText: "quidem",
                            youtubeUri: "atque",
                          },
                        },
                      ],
                      text: "laborum",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "tenetur",
                            uri: "http://adorable-cruelty.name",
                          },
                          video: {
                            displayText: "voluptate",
                            youtubeUri: "unde",
                          },
                        },
                        {
                          link: {
                            displayText: "reiciendis",
                            uri: "https://talkative-volcano.org",
                          },
                          video: {
                            displayText: "perferendis",
                            youtubeUri: "est",
                          },
                        },
                        {
                          link: {
                            displayText: "quidem",
                            uri: "http://stupendous-pray.name",
                          },
                          video: {
                            displayText: "mollitia",
                            youtubeUri: "veniam",
                          },
                        },
                      ],
                      text: "voluptatem",
                    },
                  },
                  questionId: "quisquam",
                  required: false,
                  rowQuestion: {
                    title: "Dr.",
                  },
                  scaleQuestion: {
                    high: 97243,
                    highLabel: "atque",
                    low: 442036,
                    lowLabel: "asperiores",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "totam",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 693957,
                },
                sourceUri: "maxime",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "amet",
                      image: {
                        altText: "assumenda",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 539118,
                        },
                        sourceUri: "error",
                      },
                      isOther: false,
                      value: "officiis",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "accusamus",
                  maxFileSize: "natus",
                  maxFiles: 328303,
                  types: [
                    FileUploadQuestionTypesEnum.Spreadsheet,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "corrupti",
                      },
                      {
                        value: "at",
                      },
                      {
                        value: "error",
                      },
                      {
                        value: "blanditiis",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "repudiandae",
                          uri: "https://modest-cactus.org",
                        },
                        video: {
                          displayText: "dolorum",
                          youtubeUri: "repellendus",
                        },
                      },
                      {
                        link: {
                          displayText: "labore",
                          uri: "https://arctic-tracking.com",
                        },
                        video: {
                          displayText: "accusantium",
                          youtubeUri: "beatae",
                        },
                      },
                    ],
                    text: "dolores",
                  },
                  pointValue: 316488,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "velit",
                          uri: "https://negative-election.org",
                        },
                        video: {
                          displayText: "consequuntur",
                          youtubeUri: "occaecati",
                        },
                      },
                      {
                        link: {
                          displayText: "officiis",
                          uri: "https://international-dame.org",
                        },
                        video: {
                          displayText: "occaecati",
                          youtubeUri: "consequuntur",
                        },
                      },
                    ],
                    text: "fugit",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "quis",
                          uri: "http://pitiful-beginner.info",
                        },
                        video: {
                          displayText: "quidem",
                          youtubeUri: "eveniet",
                        },
                      },
                      {
                        link: {
                          displayText: "non",
                          uri: "https://any-hope.com",
                        },
                        video: {
                          displayText: "totam",
                          youtubeUri: "quae",
                        },
                      },
                      {
                        link: {
                          displayText: "molestiae",
                          uri: "https://delirious-representation.info",
                        },
                        video: {
                          displayText: "necessitatibus",
                          youtubeUri: "ratione",
                        },
                      },
                    ],
                    text: "laborum",
                  },
                },
                questionId: "distinctio",
                required: false,
                rowQuestion: {
                  title: "Ms.",
                },
                scaleQuestion: {
                  high: 523006,
                  highLabel: "aliquam",
                  low: 320565,
                  lowLabel: "repellat",
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
              "corporis": "perspiciatis",
            },
            title: "Ms.",
            videoItem: {
              caption: "mollitia",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 5189,
                },
                youtubeUri: "maiores",
              },
            },
          },
          location: {
            index: 970222,
          },
        },
        deleteItem: {
          location: {
            index: 174658,
          },
        },
        moveItem: {
          newLocation: {
            index: 663866,
          },
          originalLocation: {
            index: 327988,
          },
        },
        updateFormInfo: {
          info: {
            description: "dolore",
            title: "Miss",
          },
          updateMask: "nesciunt",
        },
        updateItem: {
          item: {
            description: "quae",
            imageItem: {
              image: {
                altText: "recusandae",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 309251,
                },
                sourceUri: "molestiae",
              },
            },
            itemId: "ex",
            pageBreakItem: {
              "culpa": "adipisci",
              "debitis": "laudantium",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "recusandae",
                      image: {
                        altText: "esse",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 337477,
                        },
                        sourceUri: "eum",
                      },
                      isOther: false,
                      value: "reiciendis",
                    },
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "aspernatur",
                      image: {
                        altText: "ullam",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                          width: 657020,
                        },
                        sourceUri: "nostrum",
                      },
                      isOther: false,
                      value: "mollitia",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.Checkbox,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "possimus",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 402767,
                },
                sourceUri: "aliquid",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "ullam",
                        image: {
                          altText: "in",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 937636,
                          },
                          sourceUri: "officia",
                        },
                        isOther: false,
                        value: "laborum",
                      },
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "modi",
                        image: {
                          altText: "voluptatibus",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 889794,
                          },
                          sourceUri: "sapiente",
                        },
                        isOther: false,
                        value: "cumque",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "rerum",
                        image: {
                          altText: "tempora",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 82057,
                          },
                          sourceUri: "fugit",
                        },
                        isOther: false,
                        value: "cumque",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "perferendis",
                        image: {
                          altText: "velit",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 432281,
                          },
                          sourceUri: "eius",
                        },
                        isOther: false,
                        value: "rem",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.DropDown,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "impedit",
                    maxFileSize: "eos",
                    maxFiles: 958741,
                    types: [
                      FileUploadQuestionTypesEnum.Any,
                      FileUploadQuestionTypesEnum.Presentation,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "cupiditate",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "earum",
                            uri: "https://warlike-station.com",
                          },
                          video: {
                            displayText: "earum",
                            youtubeUri: "perspiciatis",
                          },
                        },
                        {
                          link: {
                            displayText: "maiores",
                            uri: "https://icky-seal.info",
                          },
                          video: {
                            displayText: "dolorem",
                            youtubeUri: "fugit",
                          },
                        },
                        {
                          link: {
                            displayText: "cumque",
                            uri: "https://deserted-piano.org",
                          },
                          video: {
                            displayText: "nulla",
                            youtubeUri: "consequatur",
                          },
                        },
                      ],
                      text: "quasi",
                    },
                    pointValue: 90233,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "natus",
                            uri: "https://hidden-deal.com",
                          },
                          video: {
                            displayText: "magni",
                            youtubeUri: "doloribus",
                          },
                        },
                        {
                          link: {
                            displayText: "nulla",
                            uri: "https://babyish-dissemination.info",
                          },
                          video: {
                            displayText: "molestiae",
                            youtubeUri: "dicta",
                          },
                        },
                      ],
                      text: "iusto",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "praesentium",
                            uri: "https://wicked-hellcat.com",
                          },
                          video: {
                            displayText: "fugiat",
                            youtubeUri: "doloremque",
                          },
                        },
                        {
                          link: {
                            displayText: "dicta",
                            uri: "http://fat-infant.info",
                          },
                          video: {
                            displayText: "consectetur",
                            youtubeUri: "aliquid",
                          },
                        },
                      ],
                      text: "ipsa",
                    },
                  },
                  questionId: "laborum",
                  required: false,
                  rowQuestion: {
                    title: "Mr.",
                  },
                  scaleQuestion: {
                    high: 344718,
                    highLabel: "fugiat",
                    low: 713767,
                    lowLabel: "aliquid",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "officia",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 399161,
                },
                sourceUri: "perferendis",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "iste",
                      image: {
                        altText: "id",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                          width: 625358,
                        },
                        sourceUri: "possimus",
                      },
                      isOther: false,
                      value: "voluptates",
                    },
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "laborum",
                      image: {
                        altText: "libero",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 536923,
                        },
                        sourceUri: "enim",
                      },
                      isOther: false,
                      value: "vitae",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "ex",
                  maxFileSize: "quo",
                  maxFiles: 405373,
                  types: [
                    FileUploadQuestionTypesEnum.Presentation,
                    FileUploadQuestionTypesEnum.Image,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "molestias",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "aliquid",
                          uri: "http://messy-occupation.com",
                        },
                        video: {
                          displayText: "rerum",
                          youtubeUri: "est",
                        },
                      },
                      {
                        link: {
                          displayText: "culpa",
                          uri: "http://well-off-tax.com",
                        },
                        video: {
                          displayText: "fuga",
                          youtubeUri: "pariatur",
                        },
                      },
                      {
                        link: {
                          displayText: "debitis",
                          uri: "http://able-makeup.org",
                        },
                        video: {
                          displayText: "ex",
                          youtubeUri: "sapiente",
                        },
                      },
                    ],
                    text: "rem",
                  },
                  pointValue: 796320,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "asperiores",
                          uri: "http://gross-album.org",
                        },
                        video: {
                          displayText: "totam",
                          youtubeUri: "impedit",
                        },
                      },
                      {
                        link: {
                          displayText: "quibusdam",
                          uri: "https://harmonious-parenthesis.biz",
                        },
                        video: {
                          displayText: "aliquam",
                          youtubeUri: "inventore",
                        },
                      },
                    ],
                    text: "deleniti",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "tempora",
                          uri: "http://acidic-bower.com",
                        },
                        video: {
                          displayText: "modi",
                          youtubeUri: "fugit",
                        },
                      },
                    ],
                    text: "ab",
                  },
                },
                questionId: "laudantium",
                required: false,
                rowQuestion: {
                  title: "Mr.",
                },
                scaleQuestion: {
                  high: 222658,
                  highLabel: "fugiat",
                  low: 369490,
                  lowLabel: "consequuntur",
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
              "quas": "eveniet",
            },
            title: "Miss",
            videoItem: {
              caption: "officiis",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 897277,
                },
                youtubeUri: "sed",
              },
            },
          },
          location: {
            index: 332191,
          },
          updateMask: "nesciunt",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: false,
            },
          },
          updateMask: "expedita",
        },
      },
      {
        createItem: {
          item: {
            description: "eum",
            imageItem: {
              image: {
                altText: "vel",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 301692,
                },
                sourceUri: "exercitationem",
              },
            },
            itemId: "ab",
            pageBreakItem: {
              "autem": "nobis",
              "laboriosam": "recusandae",
              "consequuntur": "voluptatem",
              "exercitationem": "necessitatibus",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "at",
                      image: {
                        altText: "vero",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 690785,
                        },
                        sourceUri: "sequi",
                      },
                      isOther: false,
                      value: "doloribus",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "optio",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Right,
                  width: 364544,
                },
                sourceUri: "voluptate",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "numquam",
                        image: {
                          altText: "nemo",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 260904,
                          },
                          sourceUri: "aspernatur",
                        },
                        isOther: false,
                        value: "ducimus",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "fuga",
                        image: {
                          altText: "laudantium",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 97493,
                          },
                          sourceUri: "rem",
                        },
                        isOther: false,
                        value: "fugiat",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "nisi",
                        image: {
                          altText: "consequuntur",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 46806,
                          },
                          sourceUri: "cupiditate",
                        },
                        isOther: false,
                        value: "reiciendis",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.Checkbox,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "alias",
                    maxFileSize: "omnis",
                    maxFiles: 178580,
                    types: [
                      FileUploadQuestionTypesEnum.Pdf,
                      FileUploadQuestionTypesEnum.Any,
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "accusamus",
                        },
                        {
                          value: "voluptatibus",
                        },
                        {
                          value: "distinctio",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "delectus",
                            uri: "http://lumbering-sibling.biz",
                          },
                          video: {
                            displayText: "temporibus",
                            youtubeUri: "quos",
                          },
                        },
                        {
                          link: {
                            displayText: "commodi",
                            uri: "https://impassioned-local.org",
                          },
                          video: {
                            displayText: "modi",
                            youtubeUri: "nam",
                          },
                        },
                        {
                          link: {
                            displayText: "vero",
                            uri: "http://harmful-heron.com",
                          },
                          video: {
                            displayText: "quasi",
                            youtubeUri: "non",
                          },
                        },
                      ],
                      text: "maiores",
                    },
                    pointValue: 318233,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "nulla",
                            uri: "https://joyous-fourths.info",
                          },
                          video: {
                            displayText: "est",
                            youtubeUri: "quis",
                          },
                        },
                        {
                          link: {
                            displayText: "sint",
                            uri: "https://soggy-usher.org",
                          },
                          video: {
                            displayText: "asperiores",
                            youtubeUri: "ex",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptas",
                            uri: "https://whole-banyan.net",
                          },
                          video: {
                            displayText: "fuga",
                            youtubeUri: "laborum",
                          },
                        },
                      ],
                      text: "consectetur",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "atque",
                            uri: "http://sociable-class.net",
                          },
                          video: {
                            displayText: "repudiandae",
                            youtubeUri: "nam",
                          },
                        },
                      ],
                      text: "dolore",
                    },
                  },
                  questionId: "iusto",
                  required: false,
                  rowQuestion: {
                    title: "Ms.",
                  },
                  scaleQuestion: {
                    high: 194023,
                    highLabel: "dignissimos",
                    low: 205566,
                    lowLabel: "quo",
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
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "iure",
                        image: {
                          altText: "odit",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 426904,
                          },
                          sourceUri: "magnam",
                        },
                        isOther: false,
                        value: "quibusdam",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "facere",
                        image: {
                          altText: "libero",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 975425,
                          },
                          sourceUri: "quia",
                        },
                        isOther: false,
                        value: "porro",
                      },
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "velit",
                        image: {
                          altText: "illo",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 424663,
                          },
                          sourceUri: "ea",
                        },
                        isOther: false,
                        value: "beatae",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.DropDown,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "excepturi",
                    maxFileSize: "eum",
                    maxFiles: 246557,
                    types: [
                      FileUploadQuestionTypesEnum.Drawing,
                      FileUploadQuestionTypesEnum.Audio,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "impedit",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "iste",
                            uri: "https://adorable-goodbye.org",
                          },
                          video: {
                            displayText: "velit",
                            youtubeUri: "laborum",
                          },
                        },
                        {
                          link: {
                            displayText: "non",
                            uri: "http://left-amber.com",
                          },
                          video: {
                            displayText: "consequatur",
                            youtubeUri: "officia",
                          },
                        },
                        {
                          link: {
                            displayText: "recusandae",
                            uri: "http://required-gasket.net",
                          },
                          video: {
                            displayText: "placeat",
                            youtubeUri: "perspiciatis",
                          },
                        },
                        {
                          link: {
                            displayText: "expedita",
                            uri: "https://weird-income.info",
                          },
                          video: {
                            displayText: "unde",
                            youtubeUri: "necessitatibus",
                          },
                        },
                      ],
                      text: "animi",
                    },
                    pointValue: 769967,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "corporis",
                            uri: "https://petty-indication.biz",
                          },
                          video: {
                            displayText: "veritatis",
                            youtubeUri: "vero",
                          },
                        },
                        {
                          link: {
                            displayText: "consectetur",
                            uri: "http://bogus-counsel.biz",
                          },
                          video: {
                            displayText: "qui",
                            youtubeUri: "iste",
                          },
                        },
                      ],
                      text: "ex",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "soluta",
                            uri: "https://mellow-pony.info",
                          },
                          video: {
                            displayText: "fugit",
                            youtubeUri: "alias",
                          },
                        },
                        {
                          link: {
                            displayText: "magni",
                            uri: "http://belated-bandolier.biz",
                          },
                          video: {
                            displayText: "neque",
                            youtubeUri: "exercitationem",
                          },
                        },
                      ],
                      text: "itaque",
                    },
                  },
                  questionId: "et",
                  required: false,
                  rowQuestion: {
                    title: "Mrs.",
                  },
                  scaleQuestion: {
                    high: 602229,
                    highLabel: "nulla",
                    low: 714376,
                    lowLabel: "maxime",
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
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "nostrum",
                        image: {
                          altText: "omnis",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Right,
                            width: 115661,
                          },
                          sourceUri: "id",
                        },
                        isOther: false,
                        value: "libero",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.DropDown,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "officia",
                    maxFileSize: "quos",
                    maxFiles: 811939,
                    types: [
                      FileUploadQuestionTypesEnum.Spreadsheet,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "voluptates",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "aperiam",
                            uri: "https://flippant-robotics.net",
                          },
                          video: {
                            displayText: "voluptatem",
                            youtubeUri: "autem",
                          },
                        },
                      ],
                      text: "esse",
                    },
                    pointValue: 172951,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "beatae",
                            uri: "https://submissive-masterpiece.info",
                          },
                          video: {
                            displayText: "provident",
                            youtubeUri: "accusamus",
                          },
                        },
                        {
                          link: {
                            displayText: "necessitatibus",
                            uri: "https://noteworthy-halt.info",
                          },
                          video: {
                            displayText: "ipsam",
                            youtubeUri: "rerum",
                          },
                        },
                        {
                          link: {
                            displayText: "laudantium",
                            uri: "http://unhappy-waterspout.net",
                          },
                          video: {
                            displayText: "at",
                            youtubeUri: "alias",
                          },
                        },
                        {
                          link: {
                            displayText: "quia",
                            uri: "https://realistic-trachoma.com",
                          },
                          video: {
                            displayText: "expedita",
                            youtubeUri: "officiis",
                          },
                        },
                      ],
                      text: "eos",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "odio",
                            uri: "https://constant-cap.info",
                          },
                          video: {
                            displayText: "error",
                            youtubeUri: "earum",
                          },
                        },
                        {
                          link: {
                            displayText: "adipisci",
                            uri: "https://pleasing-drapes.net",
                          },
                          video: {
                            displayText: "quis",
                            youtubeUri: "beatae",
                          },
                        },
                        {
                          link: {
                            displayText: "unde",
                            uri: "http://whimsical-mystery.com",
                          },
                          video: {
                            displayText: "numquam",
                            youtubeUri: "numquam",
                          },
                        },
                        {
                          link: {
                            displayText: "nesciunt",
                            uri: "https://popular-kitty.net",
                          },
                          video: {
                            displayText: "necessitatibus",
                            youtubeUri: "corporis",
                          },
                        },
                      ],
                      text: "qui",
                    },
                  },
                  questionId: "expedita",
                  required: false,
                  rowQuestion: {
                    title: "Ms.",
                  },
                  scaleQuestion: {
                    high: 587375,
                    highLabel: "minima",
                    low: 809594,
                    lowLabel: "enim",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "neque",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 796397,
                },
                sourceUri: "eum",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "magnam",
                      image: {
                        altText: "voluptates",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 731744,
                        },
                        sourceUri: "aperiam",
                      },
                      isOther: false,
                      value: "libero",
                    },
                    {
                      goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                      goToSectionId: "labore",
                      image: {
                        altText: "totam",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Right,
                          width: 375994,
                        },
                        sourceUri: "quo",
                      },
                      isOther: false,
                      value: "velit",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "fuga",
                  maxFileSize: "nostrum",
                  maxFiles: 669237,
                  types: [
                    FileUploadQuestionTypesEnum.Audio,
                    FileUploadQuestionTypesEnum.Image,
                    FileUploadQuestionTypesEnum.Video,
                    FileUploadQuestionTypesEnum.Any,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "pariatur",
                      },
                      {
                        value: "nemo",
                      },
                      {
                        value: "reprehenderit",
                      },
                      {
                        value: "aperiam",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "minima",
                          uri: "http://lone-mission.biz",
                        },
                        video: {
                          displayText: "error",
                          youtubeUri: "veritatis",
                        },
                      },
                      {
                        link: {
                          displayText: "ducimus",
                          uri: "http://tragic-tuba.name",
                        },
                        video: {
                          displayText: "optio",
                          youtubeUri: "ex",
                        },
                      },
                    ],
                    text: "quaerat",
                  },
                  pointValue: 416692,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "placeat",
                          uri: "https://gray-innovation.biz",
                        },
                        video: {
                          displayText: "modi",
                          youtubeUri: "ipsa",
                        },
                      },
                      {
                        link: {
                          displayText: "sint",
                          uri: "https://diligent-tower.net",
                        },
                        video: {
                          displayText: "dicta",
                          youtubeUri: "earum",
                        },
                      },
                      {
                        link: {
                          displayText: "veniam",
                          uri: "https://decisive-real.com",
                        },
                        video: {
                          displayText: "consequuntur",
                          youtubeUri: "necessitatibus",
                        },
                      },
                      {
                        link: {
                          displayText: "nobis",
                          uri: "http://lone-wholesale.com",
                        },
                        video: {
                          displayText: "quasi",
                          youtubeUri: "laboriosam",
                        },
                      },
                    ],
                    text: "pariatur",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "excepturi",
                          uri: "https://handy-encirclement.info",
                        },
                        video: {
                          displayText: "doloribus",
                          youtubeUri: "eligendi",
                        },
                      },
                      {
                        link: {
                          displayText: "sint",
                          uri: "http://watchful-pickaxe.name",
                        },
                        video: {
                          displayText: "totam",
                          youtubeUri: "molestias",
                        },
                      },
                      {
                        link: {
                          displayText: "odio",
                          uri: "http://unselfish-breadfruit.name",
                        },
                        video: {
                          displayText: "iste",
                          youtubeUri: "assumenda",
                        },
                      },
                    ],
                    text: "tempore",
                  },
                },
                questionId: "libero",
                required: false,
                rowQuestion: {
                  title: "Mrs.",
                },
                scaleQuestion: {
                  high: 38557,
                  highLabel: "delectus",
                  low: 773110,
                  lowLabel: "cum",
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
              "adipisci": "saepe",
            },
            title: "Miss",
            videoItem: {
              caption: "doloremque",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 333072,
                },
                youtubeUri: "libero",
              },
            },
          },
          location: {
            index: 99733,
          },
        },
        deleteItem: {
          location: {
            index: 584593,
          },
        },
        moveItem: {
          newLocation: {
            index: 475589,
          },
          originalLocation: {
            index: 756654,
          },
        },
        updateFormInfo: {
          info: {
            description: "possimus",
            title: "Mrs.",
          },
          updateMask: "magnam",
        },
        updateItem: {
          item: {
            description: "itaque",
            imageItem: {
              image: {
                altText: "sed",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Center,
                  width: 330267,
                },
                sourceUri: "consequuntur",
              },
            },
            itemId: "facere",
            pageBreakItem: {
              "odit": "pariatur",
              "amet": "exercitationem",
              "ab": "velit",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.RestartForm,
                      goToSectionId: "nisi",
                      image: {
                        altText: "voluptatibus",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Left,
                          width: 503748,
                        },
                        sourceUri: "distinctio",
                      },
                      isOther: false,
                      value: "nisi",
                    },
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "nisi",
                      image: {
                        altText: "libero",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 815200,
                        },
                        sourceUri: "facilis",
                      },
                      isOther: false,
                      value: "ipsum",
                    },
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "voluptatibus",
                      image: {
                        altText: "voluptatibus",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                          width: 891581,
                        },
                        sourceUri: "labore",
                      },
                      isOther: false,
                      value: "rerum",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "reprehenderit",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.Left,
                  width: 207296,
                },
                sourceUri: "iusto",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "fugiat",
                        image: {
                          altText: "unde",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 495617,
                          },
                          sourceUri: "dolor",
                        },
                        isOther: false,
                        value: "dicta",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "porro",
                        image: {
                          altText: "vitae",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 458970,
                          },
                          sourceUri: "fugiat",
                        },
                        isOther: false,
                        value: "ad",
                      },
                      {
                        goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                        goToSectionId: "enim",
                        image: {
                          altText: "delectus",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 491201,
                          },
                          sourceUri: "libero",
                        },
                        isOther: false,
                        value: "illo",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "incidunt",
                    maxFileSize: "accusamus",
                    maxFiles: 902581,
                    types: [
                      FileUploadQuestionTypesEnum.Presentation,
                      FileUploadQuestionTypesEnum.Any,
                      FileUploadQuestionTypesEnum.Audio,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "reprehenderit",
                        },
                        {
                          value: "praesentium",
                        },
                        {
                          value: "nemo",
                        },
                        {
                          value: "repellat",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "sequi",
                            uri: "http://minor-beech.biz",
                          },
                          video: {
                            displayText: "assumenda",
                            youtubeUri: "aliquam",
                          },
                        },
                        {
                          link: {
                            displayText: "quisquam",
                            uri: "https://male-trailpatrol.com",
                          },
                          video: {
                            displayText: "maxime",
                            youtubeUri: "aspernatur",
                          },
                        },
                        {
                          link: {
                            displayText: "nam",
                            uri: "https://nautical-nest.org",
                          },
                          video: {
                            displayText: "rerum",
                            youtubeUri: "dignissimos",
                          },
                        },
                        {
                          link: {
                            displayText: "corporis",
                            uri: "https://pleasant-spectrograph.info",
                          },
                          video: {
                            displayText: "dolorem",
                            youtubeUri: "commodi",
                          },
                        },
                      ],
                      text: "impedit",
                    },
                    pointValue: 415033,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "voluptatem",
                            uri: "http://baggy-cultivar.org",
                          },
                          video: {
                            displayText: "praesentium",
                            youtubeUri: "quidem",
                          },
                        },
                      ],
                      text: "cum",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "quasi",
                            uri: "http://male-argument.org",
                          },
                          video: {
                            displayText: "iusto",
                            youtubeUri: "amet",
                          },
                        },
                      ],
                      text: "provident",
                    },
                  },
                  questionId: "dolorum",
                  required: false,
                  rowQuestion: {
                    title: "Dr.",
                  },
                  scaleQuestion: {
                    high: 592880,
                    highLabel: "repudiandae",
                    low: 10063,
                    lowLabel: "nemo",
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
                        goToAction: OptionGoToActionEnum.SubmitForm,
                        goToSectionId: "facilis",
                        image: {
                          altText: "corrupti",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 574092,
                          },
                          sourceUri: "accusamus",
                        },
                        isOther: false,
                        value: "eos",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "dicta",
                        image: {
                          altText: "voluptatem",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 224413,
                          },
                          sourceUri: "sunt",
                        },
                        isOther: false,
                        value: "a",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.ChoiceTypeUnspecified,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "occaecati",
                    maxFileSize: "atque",
                    maxFiles: 107472,
                    types: [
                      FileUploadQuestionTypesEnum.Document,
                      FileUploadQuestionTypesEnum.Image,
                      FileUploadQuestionTypesEnum.Spreadsheet,
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "rerum",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "aperiam",
                            uri: "http://zealous-decision-making.net",
                          },
                          video: {
                            displayText: "provident",
                            youtubeUri: "consectetur",
                          },
                        },
                        {
                          link: {
                            displayText: "eligendi",
                            uri: "http://energetic-response.name",
                          },
                          video: {
                            displayText: "temporibus",
                            youtubeUri: "officia",
                          },
                        },
                      ],
                      text: "amet",
                    },
                    pointValue: 948541,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "quo",
                            uri: "https://these-pliers.info",
                          },
                          video: {
                            displayText: "vero",
                            youtubeUri: "qui",
                          },
                        },
                      ],
                      text: "consectetur",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "explicabo",
                            uri: "http://green-interviewer.biz",
                          },
                          video: {
                            displayText: "ab",
                            youtubeUri: "illo",
                          },
                        },
                        {
                          link: {
                            displayText: "hic",
                            uri: "https://white-depth.net",
                          },
                          video: {
                            displayText: "in",
                            youtubeUri: "exercitationem",
                          },
                        },
                        {
                          link: {
                            displayText: "labore",
                            uri: "http://vain-dirt.info",
                          },
                          video: {
                            displayText: "explicabo",
                            youtubeUri: "accusamus",
                          },
                        },
                        {
                          link: {
                            displayText: "rem",
                            uri: "http://conventional-mallet.biz",
                          },
                          video: {
                            displayText: "voluptate",
                            youtubeUri: "similique",
                          },
                        },
                      ],
                      text: "minima",
                    },
                  },
                  questionId: "libero",
                  required: false,
                  rowQuestion: {
                    title: "Mrs.",
                  },
                  scaleQuestion: {
                    high: 24272,
                    highLabel: "modi",
                    low: 430116,
                    lowLabel: "nesciunt",
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
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "fugiat",
                        image: {
                          altText: "nostrum",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Left,
                            width: 330600,
                          },
                          sourceUri: "reiciendis",
                        },
                        isOther: false,
                        value: "ab",
                      },
                      {
                        goToAction: OptionGoToActionEnum.NextSection,
                        goToSectionId: "aut",
                        image: {
                          altText: "aut",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.Center,
                            width: 483753,
                          },
                          sourceUri: "commodi",
                        },
                        isOther: false,
                        value: "numquam",
                      },
                      {
                        goToAction: OptionGoToActionEnum.RestartForm,
                        goToSectionId: "possimus",
                        image: {
                          altText: "voluptate",
                          properties: {
                            alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                            width: 200637,
                          },
                          sourceUri: "quaerat",
                        },
                        isOther: false,
                        value: "itaque",
                      },
                    ],
                    shuffle: false,
                    type: ChoiceQuestionTypeEnum.DropDown,
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "sunt",
                    maxFileSize: "distinctio",
                    maxFiles: 481375,
                    types: [
                      FileUploadQuestionTypesEnum.FileTypeUnspecified,
                      FileUploadQuestionTypesEnum.Image,
                      FileUploadQuestionTypesEnum.Document,
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "fuga",
                        },
                        {
                          value: "alias",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "aut",
                            uri: "https://mad-speaker.com",
                          },
                          video: {
                            displayText: "quae",
                            youtubeUri: "eaque",
                          },
                        },
                        {
                          link: {
                            displayText: "saepe",
                            uri: "https://prime-strawman.name",
                          },
                          video: {
                            displayText: "sed",
                            youtubeUri: "voluptatem",
                          },
                        },
                        {
                          link: {
                            displayText: "alias",
                            uri: "https://warm-ancestor.biz",
                          },
                          video: {
                            displayText: "qui",
                            youtubeUri: "qui",
                          },
                        },
                      ],
                      text: "necessitatibus",
                    },
                    pointValue: 691508,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "beatae",
                            uri: "http://familiar-ruckus.org",
                          },
                          video: {
                            displayText: "molestias",
                            youtubeUri: "officia",
                          },
                        },
                      ],
                      text: "libero",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "sequi",
                            uri: "http://imaginative-schema.info",
                          },
                          video: {
                            displayText: "odit",
                            youtubeUri: "velit",
                          },
                        },
                        {
                          link: {
                            displayText: "reiciendis",
                            uri: "https://tired-plot.name",
                          },
                          video: {
                            displayText: "accusamus",
                            youtubeUri: "doloremque",
                          },
                        },
                        {
                          link: {
                            displayText: "nisi",
                            uri: "https://vast-tomorrow.biz",
                          },
                          video: {
                            displayText: "rem",
                            youtubeUri: "quia",
                          },
                        },
                      ],
                      text: "ullam",
                    },
                  },
                  questionId: "quisquam",
                  required: false,
                  rowQuestion: {
                    title: "Mr.",
                  },
                  scaleQuestion: {
                    high: 973017,
                    highLabel: "eligendi",
                    low: 62035,
                    lowLabel: "officiis",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "architecto",
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 317898,
                },
                sourceUri: "optio",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: OptionGoToActionEnum.GoToActionUnspecified,
                      goToSectionId: "facilis",
                      image: {
                        altText: "reiciendis",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 615058,
                        },
                        sourceUri: "dicta",
                      },
                      isOther: false,
                      value: "quos",
                    },
                    {
                      goToAction: OptionGoToActionEnum.NextSection,
                      goToSectionId: "dolore",
                      image: {
                        altText: "modi",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 807419,
                        },
                        sourceUri: "modi",
                      },
                      isOther: false,
                      value: "consequuntur",
                    },
                    {
                      goToAction: OptionGoToActionEnum.SubmitForm,
                      goToSectionId: "vero",
                      image: {
                        altText: "doloribus",
                        properties: {
                          alignment: MediaPropertiesAlignmentEnum.Center,
                          width: 783397,
                        },
                        sourceUri: "accusamus",
                      },
                      isOther: false,
                      value: "totam",
                    },
                  ],
                  shuffle: false,
                  type: ChoiceQuestionTypeEnum.DropDown,
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "ab",
                  maxFileSize: "sint",
                  maxFiles: 472414,
                  types: [
                    FileUploadQuestionTypesEnum.Spreadsheet,
                    FileUploadQuestionTypesEnum.Spreadsheet,
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "debitis",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "neque",
                          uri: "http://hateful-citron.name",
                        },
                        video: {
                          displayText: "reprehenderit",
                          youtubeUri: "distinctio",
                        },
                      },
                      {
                        link: {
                          displayText: "eius",
                          uri: "http://measly-whack.com",
                        },
                        video: {
                          displayText: "veniam",
                          youtubeUri: "saepe",
                        },
                      },
                    ],
                    text: "neque",
                  },
                  pointValue: 816365,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "quos",
                          uri: "https://this-platform.org",
                        },
                        video: {
                          displayText: "velit",
                          youtubeUri: "vitae",
                        },
                      },
                      {
                        link: {
                          displayText: "nesciunt",
                          uri: "https://blank-zen.info",
                        },
                        video: {
                          displayText: "doloribus",
                          youtubeUri: "possimus",
                        },
                      },
                    ],
                    text: "unde",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "explicabo",
                          uri: "http://obvious-rum.com",
                        },
                        video: {
                          displayText: "quidem",
                          youtubeUri: "nesciunt",
                        },
                      },
                      {
                        link: {
                          displayText: "commodi",
                          uri: "https://damp-face.org",
                        },
                        video: {
                          displayText: "officia",
                          youtubeUri: "sint",
                        },
                      },
                    ],
                    text: "ut",
                  },
                },
                questionId: "numquam",
                required: false,
                rowQuestion: {
                  title: "Dr.",
                },
                scaleQuestion: {
                  high: 236790,
                  highLabel: "libero",
                  low: 448386,
                  lowLabel: "minima",
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
              "minus": "ab",
              "beatae": "hic",
            },
            title: "Mrs.",
            videoItem: {
              caption: "quisquam",
              video: {
                properties: {
                  alignment: MediaPropertiesAlignmentEnum.AlignmentUnspecified,
                  width: 496548,
                },
                youtubeUri: "fuga",
              },
            },
          },
          location: {
            index: 326903,
          },
          updateMask: "architecto",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: false,
            },
          },
          updateMask: "qui",
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "aliquid",
      targetRevisionId: "magni",
    },
  },
  accessToken: "incidunt",
  alt: AltEnum.Json,
  callback: "praesentium",
  fields: "dolor",
  formId: "exercitationem",
  key: "expedita",
  oauthToken: "facilis",
  prettyPrint: false,
  quotaUser: "impedit",
  uploadType: "sit",
  uploadProtocol: "nemo",
};

sdk.forms.formsFormsBatchUpdate(req).then((res: FormsFormsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

