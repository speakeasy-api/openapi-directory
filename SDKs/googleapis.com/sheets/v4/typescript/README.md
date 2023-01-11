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
import { SheetsSpreadsheetsBatchUpdateRequest, SheetsSpreadsheetsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SheetsSpreadsheetsBatchUpdateRequest = {
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
    spreadsheetId: "sit",
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
    includeSpreadsheetInResponse: false,
    requests: [
      {
        addBanding: {
          bandedRange: {
            bandedRangeId: 5617773211005988520,
            columnProperties: {
              firstBandColor: {
                alpha: 26.200001,
                blue: 50.099998,
                green: 94.199997,
                red: 68.099998,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 80.199997,
                  blue: 86.099998,
                  green: 20.200001,
                  red: 12.200000,
                },
                themeColor: "ACCENT6",
              },
              footerColor: {
                alpha: 45.099998,
                blue: 78.199997,
                green: 0.100000,
                red: 49.099998,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 87.099998,
                  blue: 76.099998,
                  green: 19.200001,
                  red: 68.099998,
                },
                themeColor: "BACKGROUND",
              },
              headerColor: {
                alpha: 77.099998,
                blue: 88.099998,
                green: 52.200001,
                red: 0.200000,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 94.099998,
                  blue: 4.100000,
                  green: 7.200000,
                  red: 78.099998,
                },
                themeColor: "ACCENT1",
              },
              secondBandColor: {
                alpha: 19.100000,
                blue: 69.199997,
                green: 3.100000,
                red: 64.199997,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 78.199997,
                  blue: 89.099998,
                  green: 63.200001,
                  red: 94.099998,
                },
                themeColor: "BACKGROUND",
              },
            },
            range: {
              endColumnIndex: 7663837986485606015,
              endRowIndex: 7132033595893905170,
              sheetId: 8086159467323165929,
              startColumnIndex: 35604086129376003,
              startRowIndex: 8559453321117178323,
            },
            rowProperties: {
              firstBandColor: {
                alpha: 12.100000,
                blue: 76.099998,
                green: 40.099998,
                red: 28.100000,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 29.100000,
                  blue: 90.199997,
                  green: 31.200001,
                  red: 9.200000,
                },
                themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
              },
              footerColor: {
                alpha: 59.200001,
                blue: 6.100000,
                green: 82.099998,
                red: 26.100000,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 19.200001,
                  blue: 59.200001,
                  green: 64.099998,
                  red: 53.200001,
                },
                themeColor: "ACCENT6",
              },
              headerColor: {
                alpha: 78.099998,
                blue: 47.200001,
                green: 35.200001,
                red: 20.200001,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 26.200001,
                  blue: 87.099998,
                  green: 42.099998,
                  red: 15.200000,
                },
                themeColor: "ACCENT4",
              },
              secondBandColor: {
                alpha: 50.099998,
                blue: 9.200000,
                green: 79.199997,
                red: 97.099998,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 93.099998,
                  blue: 27.200001,
                  green: 84.099998,
                  red: 70.199997,
                },
                themeColor: "ACCENT6",
              },
            },
          },
        },
        addChart: {
          chart: {
            border: {
              color: {
                alpha: 50.200001,
                blue: 42.200001,
                green: 60.099998,
                red: 34.099998,
              },
              colorStyle: {
                rgbColor: {
                  alpha: 74.199997,
                  blue: 80.199997,
                  green: 57.099998,
                  red: 98.199997,
                },
                themeColor: "BACKGROUND",
              },
            },
            chartId: 6165970817952435057,
            position: {
              newSheet: true,
              overlayPosition: {
                anchorCell: {
                  columnIndex: 7953274849279451463,
                  rowIndex: 2223751782546645906,
                  sheetId: 8958290475970215309,
                },
                heightPixels: 6870143829354119039,
                offsetXPixels: 4400124260933614083,
                offsetYPixels: 8532234679993278697,
                widthPixels: 2151743514245058837,
              },
              sheetId: 3383203076453688632,
            },
            spec: {
              altText: "soluta",
              backgroundColor: {
                alpha: 68.199997,
                blue: 54.099998,
                green: 70.199997,
                red: 51.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 86.099998,
                  blue: 68.199997,
                  green: 92.199997,
                  red: 78.099998,
                },
                themeColor: "BACKGROUND",
              },
              basicChart: {
                axis: [
                  {
                    format: {
                      bold: false,
                      fontFamily: "molestiae",
                      fontSize: 40355290058559125,
                      foregroundColor: {
                        alpha: 22.100000,
                        blue: 46.200001,
                        green: 2.100000,
                        red: 81.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 45.200001,
                          blue: 70.099998,
                          green: 28.200001,
                          red: 62.099998,
                        },
                        themeColor: "LINK",
                      },
                      italic: false,
                      link: {
                        uri: "quae",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    position: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                    title: "in",
                    titleTextPosition: {
                      horizontalAlignment: "CENTER",
                    },
                    viewWindowOptions: {
                      viewWindowMax: 62.200001,
                      viewWindowMin: 90.199997,
                      viewWindowMode: "PRETTY",
                    },
                  },
                  {
                    format: {
                      bold: true,
                      fontFamily: "et",
                      fontSize: 6499763367080957833,
                      foregroundColor: {
                        alpha: 80.099998,
                        blue: 47.099998,
                        green: 3.200000,
                        red: 58.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 69.199997,
                          blue: 66.199997,
                          green: 25.200001,
                          red: 16.200001,
                        },
                        themeColor: "ACCENT2",
                      },
                      italic: false,
                      link: {
                        uri: "ducimus",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    position: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                    title: "delectus",
                    titleTextPosition: {
                      horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    },
                    viewWindowOptions: {
                      viewWindowMax: 67.099998,
                      viewWindowMin: 26.200001,
                      viewWindowMode: "VIEW_WINDOW_MODE_UNSUPPORTED",
                    },
                  },
                  {
                    format: {
                      bold: false,
                      fontFamily: "voluptas",
                      fontSize: 4286316651252402687,
                      foregroundColor: {
                        alpha: 43.099998,
                        blue: 80.099998,
                        green: 55.200001,
                        red: 66.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 21.100000,
                          blue: 19.100000,
                          green: 43.099998,
                          red: 61.200001,
                        },
                        themeColor: "ACCENT2",
                      },
                      italic: true,
                      link: {
                        uri: "eos",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    position: "LEFT_AXIS",
                    title: "praesentium",
                    titleTextPosition: {
                      horizontalAlignment: "RIGHT",
                    },
                    viewWindowOptions: {
                      viewWindowMax: 26.100000,
                      viewWindowMin: 35.200001,
                      viewWindowMode: "DEFAULT_VIEW_WINDOW_MODE",
                    },
                  },
                ],
                chartType: "COLUMN",
                compareMode: "CATEGORY",
                domains: [
                  {
                    domain: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "est",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 40.200001,
                          maxValue: 81.099998,
                          minValue: 2.200000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5712992115651289762,
                            endRowIndex: 2640117218371292003,
                            sheetId: 6110482739283003758,
                            startColumnIndex: 5823456859078811291,
                            startRowIndex: 7167106058699817943,
                          },
                          {
                            endColumnIndex: 2337031194418648744,
                            endRowIndex: 4525004039791920848,
                            sheetId: 29148217334384872,
                            startColumnIndex: 8364267861508686372,
                            startRowIndex: 4761677689824345557,
                          },
                          {
                            endColumnIndex: 5168005730101237705,
                            endRowIndex: 2118949171484888039,
                            sheetId: 4628132784885150210,
                            startColumnIndex: 9207329833049742865,
                            startRowIndex: 4841391702283203193,
                          },
                        ],
                      },
                    },
                    reversed: true,
                  },
                  {
                    domain: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "saepe",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE_AMPM",
                        },
                        histogramRule: {
                          intervalSize: 9.100000,
                          maxValue: 67.199997,
                          minValue: 2.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5850174490929081658,
                            endRowIndex: 434570727381690637,
                            sheetId: 2506834319279501248,
                            startColumnIndex: 8019821597217977465,
                            startRowIndex: 8079844328673265272,
                          },
                          {
                            endColumnIndex: 6863303878752685811,
                            endRowIndex: 329480657186062760,
                            sheetId: 7054703545425477159,
                            startColumnIndex: 2160980356695726217,
                            startRowIndex: 1309085467853391005,
                          },
                          {
                            endColumnIndex: 5736490461555293534,
                            endRowIndex: 9182685730299275088,
                            sheetId: 5206561764403574099,
                            startColumnIndex: 8211619244064555483,
                            startRowIndex: 4642525602086184656,
                          },
                        ],
                      },
                    },
                    reversed: true,
                  },
                ],
                headerCount: 5185464786920936105,
                interpolateNulls: true,
                legendPosition: "BOTTOM_LEGEND",
                lineSmoothing: false,
                series: [
                  {
                    color: {
                      alpha: 25.200001,
                      blue: 41.099998,
                      green: 17.200001,
                      red: 93.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 11.200000,
                        blue: 14.200000,
                        green: 58.099998,
                        red: 26.200001,
                      },
                      themeColor: "LINK",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MEDIAN",
                        columnReference: {
                          name: "non",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE",
                          },
                          histogramRule: {
                            intervalSize: 86.199997,
                            maxValue: 16.100000,
                            minValue: 87.199997,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 5740420119606139691,
                              endRowIndex: 8652445593437943884,
                              sheetId: 262877386996496551,
                              startColumnIndex: 2701567618511573174,
                              startRowIndex: 9205971327918641007,
                            },
                            {
                              endColumnIndex: 2699214524563116001,
                              endRowIndex: 2132755572425097180,
                              sheetId: 4836497936272226711,
                              startColumnIndex: 5558066777859089497,
                              startRowIndex: 2734276392450386024,
                            },
                            {
                              endColumnIndex: 4629305236432754029,
                              endRowIndex: 5666133441297118052,
                              sheetId: 4373457179449113342,
                              startColumnIndex: 2422259341021744438,
                              startRowIndex: 4500698545012642604,
                            },
                          ],
                        },
                      },
                      placement: "ABOVE",
                      textFormat: {
                        bold: false,
                        fontFamily: "tempore",
                        fontSize: 7107949635499134066,
                        foregroundColor: {
                          alpha: 81.099998,
                          blue: 38.200001,
                          green: 19.100000,
                          red: 64.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 67.199997,
                            blue: 31.200001,
                            green: 9.100000,
                            red: 40.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        italic: true,
                        link: {
                          uri: "explicabo",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      type: "DATA",
                    },
                    lineStyle: {
                      type: "LONG_DASHED_DOTTED",
                      width: 2245863337273937304,
                    },
                    pointStyle: {
                      shape: "SQUARE",
                      size: 4.200000,
                    },
                    series: {
                      aggregateType: "SUM",
                      columnReference: {
                        name: "similique",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 12.100000,
                          maxValue: 89.099998,
                          minValue: 26.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7640526115896074433,
                            endRowIndex: 6810414345605660316,
                            sheetId: 6179772165467236447,
                            startColumnIndex: 7269375230821182608,
                            startRowIndex: 6687573126184722060,
                          },
                          {
                            endColumnIndex: 3921169290827299935,
                            endRowIndex: 6167316338759183977,
                            sheetId: 2826820190694642039,
                            startColumnIndex: 8856257683554197028,
                            startRowIndex: 6682081095300156255,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 86.199997,
                          blue: 27.200001,
                          green: 8.100000,
                          red: 28.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 90.199997,
                            blue: 9.100000,
                            green: 98.099998,
                            red: 28.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        index: 5749655769367477879,
                        pointStyle: {
                          shape: "PENTAGON",
                          size: 2.100000,
                        },
                      },
                      {
                        color: {
                          alpha: 23.200001,
                          blue: 65.099998,
                          green: 17.100000,
                          red: 1.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 13.100000,
                            blue: 61.099998,
                            green: 16.100000,
                            red: 68.199997,
                          },
                          themeColor: "ACCENT1",
                        },
                        index: 8530445146643592410,
                        pointStyle: {
                          shape: "HEXAGON",
                          size: 2.200000,
                        },
                      },
                    ],
                    targetAxis: "RIGHT_AXIS",
                    type: "STEPPED_AREA",
                  },
                  {
                    color: {
                      alpha: 28.200001,
                      blue: 63.099998,
                      green: 24.200001,
                      red: 3.200000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 83.099998,
                        blue: 55.200001,
                        green: 28.200001,
                        red: 28.200001,
                      },
                      themeColor: "LINK",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "cupiditate",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            intervalSize: 72.099998,
                            maxValue: 20.100000,
                            minValue: 41.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 8436827725763183950,
                              endRowIndex: 3709025217912012885,
                              sheetId: 5698838707729214139,
                              startColumnIndex: 3022685211573855326,
                              startRowIndex: 536448273514821351,
                            },
                            {
                              endColumnIndex: 2679765305844388554,
                              endRowIndex: 130050936231533110,
                              sheetId: 1278885165044554009,
                              startColumnIndex: 8617221661803175936,
                              startRowIndex: 1822686033537255733,
                            },
                            {
                              endColumnIndex: 7286587722358271091,
                              endRowIndex: 7096476308982272036,
                              sheetId: 8511128607726460490,
                              startColumnIndex: 2859592464525546678,
                              startRowIndex: 4159403294742962258,
                            },
                          ],
                        },
                      },
                      placement: "LEFT",
                      textFormat: {
                        bold: false,
                        fontFamily: "nesciunt",
                        fontSize: 4116847041228634424,
                        foregroundColor: {
                          alpha: 46.200001,
                          blue: 56.099998,
                          green: 16.200001,
                          red: 63.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 95.099998,
                            blue: 84.199997,
                            green: 78.199997,
                            red: 97.099998,
                          },
                          themeColor: "ACCENT1",
                        },
                        italic: true,
                        link: {
                          uri: "temporibus",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      type: "DATA_LABEL_TYPE_UNSPECIFIED",
                    },
                    lineStyle: {
                      type: "LINE_DASH_TYPE_UNSPECIFIED",
                      width: 8927346200986611569,
                    },
                    pointStyle: {
                      shape: "X_MARK",
                      size: 64.099998,
                    },
                    series: {
                      aggregateType: "AVERAGE",
                      columnReference: {
                        name: "facere",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE_AMPM",
                        },
                        histogramRule: {
                          intervalSize: 82.099998,
                          maxValue: 25.100000,
                          minValue: 42.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 3676231951168577912,
                            endRowIndex: 7336767762345247220,
                            sheetId: 6882592878163350015,
                            startColumnIndex: 6418822426210764905,
                            startRowIndex: 4790775879297943507,
                          },
                          {
                            endColumnIndex: 5350372161178717463,
                            endRowIndex: 567807051509369863,
                            sheetId: 1118925641558030772,
                            startColumnIndex: 7062297409829153142,
                            startRowIndex: 3329053220638440695,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 9.200000,
                          blue: 53.099998,
                          green: 2.100000,
                          red: 96.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 70.199997,
                            blue: 13.100000,
                            green: 84.099998,
                            red: 34.200001,
                          },
                          themeColor: "ACCENT2",
                        },
                        index: 4621739702096724847,
                        pointStyle: {
                          shape: "DIAMOND",
                          size: 13.200000,
                        },
                      },
                      {
                        color: {
                          alpha: 97.099998,
                          blue: 43.200001,
                          green: 0.100000,
                          red: 87.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 71.099998,
                            blue: 33.099998,
                            green: 57.099998,
                            red: 93.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        index: 2849534501507876885,
                        pointStyle: {
                          shape: "PENTAGON",
                          size: 61.200001,
                        },
                      },
                    ],
                    targetAxis: "BOTTOM_AXIS",
                    type: "BAR",
                  },
                  {
                    color: {
                      alpha: 83.099998,
                      blue: 65.199997,
                      green: 97.199997,
                      red: 13.200000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 91.099998,
                        blue: 57.099998,
                        green: 33.200001,
                        red: 4.100000,
                      },
                      themeColor: "ACCENT5",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "SUM",
                        columnReference: {
                          name: "quam",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_MONTH",
                          },
                          histogramRule: {
                            intervalSize: 41.200001,
                            maxValue: 28.100000,
                            minValue: 52.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 3004656673493800566,
                              endRowIndex: 7321327877298199195,
                              sheetId: 8091719383208301671,
                              startColumnIndex: 757339739357171062,
                              startRowIndex: 5243201087980725639,
                            },
                            {
                              endColumnIndex: 1090801099536801986,
                              endRowIndex: 8571763284599030303,
                              sheetId: 142150436911748130,
                              startColumnIndex: 7930433315298903244,
                              startRowIndex: 5434837994712789813,
                            },
                            {
                              endColumnIndex: 441635372438993368,
                              endRowIndex: 2997043705537562238,
                              sheetId: 3535519609923497066,
                              startColumnIndex: 583865345049614867,
                              startRowIndex: 5245262261256331691,
                            },
                          ],
                        },
                      },
                      placement: "BELOW",
                      textFormat: {
                        bold: false,
                        fontFamily: "similique",
                        fontSize: 1424611249613435660,
                        foregroundColor: {
                          alpha: 15.100000,
                          blue: 29.100000,
                          green: 30.100000,
                          red: 11.200000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 88.199997,
                            blue: 37.200001,
                            green: 26.100000,
                            red: 5.200000,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: false,
                        link: {
                          uri: "aut",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      type: "DATA_LABEL_TYPE_UNSPECIFIED",
                    },
                    lineStyle: {
                      type: "LONG_DASHED",
                      width: 883706182269288354,
                    },
                    pointStyle: {
                      shape: "POINT_SHAPE_UNSPECIFIED",
                      size: 1.100000,
                    },
                    series: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "ad",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 95.099998,
                          maxValue: 42.200001,
                          minValue: 72.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 3410956505538461485,
                            endRowIndex: 5409599500969548476,
                            sheetId: 5846570952474056546,
                            startColumnIndex: 6317657026515785697,
                            startRowIndex: 7816682714681067436,
                          },
                          {
                            endColumnIndex: 2436170685748333896,
                            endRowIndex: 7632481418740499373,
                            sheetId: 5932271589086096130,
                            startColumnIndex: 4670964478827353330,
                            startRowIndex: 3226748364772975271,
                          },
                          {
                            endColumnIndex: 8569288831021278758,
                            endRowIndex: 2092480835831674091,
                            sheetId: 5052800700789581944,
                            startColumnIndex: 384307777611981327,
                            startRowIndex: 4847131419117704030,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 25.200001,
                          blue: 29.100000,
                          green: 77.199997,
                          red: 68.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 79.199997,
                            blue: 89.099998,
                            green: 10.100000,
                            red: 28.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        index: 7771700788967088893,
                        pointStyle: {
                          shape: "PENTAGON",
                          size: 51.200001,
                        },
                      },
                      {
                        color: {
                          alpha: 7.200000,
                          blue: 88.099998,
                          green: 1.100000,
                          red: 39.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 41.099998,
                            blue: 96.199997,
                            green: 70.099998,
                            red: 87.199997,
                          },
                          themeColor: "LINK",
                        },
                        index: 6613185076334702367,
                        pointStyle: {
                          shape: "X_MARK",
                          size: 56.200001,
                        },
                      },
                      {
                        color: {
                          alpha: 12.200000,
                          blue: 82.099998,
                          green: 27.100000,
                          red: 77.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 39.099998,
                            blue: 39.200001,
                            green: 23.100000,
                            red: 74.199997,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        index: 8389708449972713240,
                        pointStyle: {
                          shape: "STAR",
                          size: 81.199997,
                        },
                      },
                    ],
                    targetAxis: "RIGHT_AXIS",
                    type: "COLUMN",
                  },
                ],
                stackedType: "BASIC_CHART_STACKED_TYPE_UNSPECIFIED",
                threeDimensional: true,
                totalDataLabel: {
                  customLabelData: {
                    aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                    columnReference: {
                      name: "aut",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "MONTH",
                      },
                      histogramRule: {
                        intervalSize: 48.200001,
                        maxValue: 41.200001,
                        minValue: 11.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 9161383625625055457,
                          endRowIndex: 7541252924241332912,
                          sheetId: 1541276666071085218,
                          startColumnIndex: 2653267917996046848,
                          startRowIndex: 3970053644452846618,
                        },
                        {
                          endColumnIndex: 6520533587378202877,
                          endRowIndex: 8994354134321950075,
                          sheetId: 3275748967946648889,
                          startColumnIndex: 4655744335366111445,
                          startRowIndex: 316247834821120826,
                        },
                      ],
                    },
                  },
                  placement: "CENTER",
                  textFormat: {
                    bold: true,
                    fontFamily: "non",
                    fontSize: 3868665265513893187,
                    foregroundColor: {
                      alpha: 58.200001,
                      blue: 29.100000,
                      green: 16.200001,
                      red: 80.099998,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 6.200000,
                        blue: 67.099998,
                        green: 83.199997,
                        red: 4.100000,
                      },
                      themeColor: "ACCENT2",
                    },
                    italic: false,
                    link: {
                      uri: "ipsa",
                    },
                    strikethrough: false,
                    underline: false,
                  },
                  type: "DATA_LABEL_TYPE_UNSPECIFIED",
                },
              },
              bubbleChart: {
                bubbleBorderColor: {
                  alpha: 45.200001,
                  blue: 70.099998,
                  green: 75.099998,
                  red: 72.199997,
                },
                bubbleBorderColorStyle: {
                  rgbColor: {
                    alpha: 48.099998,
                    blue: 9.200000,
                    green: 97.199997,
                    red: 17.100000,
                  },
                  themeColor: "ACCENT1",
                },
                bubbleLabels: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "repellendus",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "SECOND",
                    },
                    histogramRule: {
                      intervalSize: 75.199997,
                      maxValue: 64.199997,
                      minValue: 92.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 1609080482621670973,
                        endRowIndex: 7455429204826457632,
                        sheetId: 1940187917623811174,
                        startColumnIndex: 5802927950055087746,
                        startRowIndex: 78132838493666558,
                      },
                      {
                        endColumnIndex: 6321216001811895118,
                        endRowIndex: 1990483423942727863,
                        sheetId: 1713996192319931980,
                        startColumnIndex: 4490710882427176211,
                        startRowIndex: 5875807663581146597,
                      },
                      {
                        endColumnIndex: 8912864906962859578,
                        endRowIndex: 5584536891391647063,
                        sheetId: 1446068653600132704,
                        startColumnIndex: 2576024592457354915,
                        startRowIndex: 3654784452703969748,
                      },
                    ],
                  },
                },
                bubbleMaxRadiusSize: 3801960864973229618,
                bubbleMinRadiusSize: 5426459552499396681,
                bubbleOpacity: 48.099998,
                bubbleSizes: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "quasi",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 3.200000,
                      maxValue: 1.100000,
                      minValue: 5.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 3959252866103534258,
                        endRowIndex: 8941705303156473931,
                        sheetId: 4839335983314888046,
                        startColumnIndex: 3715846577905900540,
                        startRowIndex: 4339612991911811341,
                      },
                      {
                        endColumnIndex: 7444465196638686575,
                        endRowIndex: 935563908218008587,
                        sheetId: 2046508828180693601,
                        startColumnIndex: 7754674919171441303,
                        startRowIndex: 1742633543905152800,
                      },
                    ],
                  },
                },
                bubbleTextStyle: {
                  bold: true,
                  fontFamily: "illum",
                  fontSize: 4969333038957635892,
                  foregroundColor: {
                    alpha: 46.099998,
                    blue: 74.199997,
                    green: 24.100000,
                    red: 64.199997,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 44.099998,
                      blue: 38.099998,
                      green: 23.100000,
                      red: 28.100000,
                    },
                    themeColor: "ACCENT3",
                  },
                  italic: true,
                  link: {
                    uri: "ipsam",
                  },
                  strikethrough: true,
                  underline: false,
                },
                domain: {
                  aggregateType: "MAX",
                  columnReference: {
                    name: "sunt",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_QUARTER",
                    },
                    histogramRule: {
                      intervalSize: 89.099998,
                      maxValue: 80.199997,
                      minValue: 88.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6042353929202998314,
                        endRowIndex: 8603686942267592332,
                        sheetId: 4101734553074821155,
                        startColumnIndex: 4090224201929487580,
                        startRowIndex: 7022643379837339753,
                      },
                      {
                        endColumnIndex: 2935226858963760426,
                        endRowIndex: 3585591606309161877,
                        sheetId: 5455556052571990475,
                        startColumnIndex: 1367126387738330363,
                        startRowIndex: 5997071472542062978,
                      },
                    ],
                  },
                },
                groupIds: {
                  aggregateType: "MAX",
                  columnReference: {
                    name: "tenetur",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_WEEK",
                    },
                    histogramRule: {
                      intervalSize: 53.200001,
                      maxValue: 61.200001,
                      minValue: 28.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 8304743069144891558,
                        endRowIndex: 5055700485549117703,
                        sheetId: 1958515401632262794,
                        startColumnIndex: 1608782168285273117,
                        startRowIndex: 4716196713450287375,
                      },
                      {
                        endColumnIndex: 1065638939343935032,
                        endRowIndex: 2645314803147936425,
                        sheetId: 181343566447127605,
                        startColumnIndex: 2683203673119178326,
                        startRowIndex: 8047584628231195285,
                      },
                      {
                        endColumnIndex: 6285360697527937480,
                        endRowIndex: 1919178610335790356,
                        sheetId: 713787057695475599,
                        startColumnIndex: 4032821220863870596,
                        startRowIndex: 3729999635903286999,
                      },
                    ],
                  },
                },
                legendPosition: "INSIDE_LEGEND",
                series: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "quaerat",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE_AMPM",
                    },
                    histogramRule: {
                      intervalSize: 28.200001,
                      maxValue: 88.099998,
                      minValue: 52.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 2363619035225420429,
                        endRowIndex: 5746730583098953773,
                        sheetId: 8079560101677563987,
                        startColumnIndex: 5137738304259907070,
                        startRowIndex: 7615080709804364572,
                      },
                    ],
                  },
                },
              },
              candlestickChart: {
                data: [
                  {
                    closeSeries: {
                      data: {
                        aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                        columnReference: {
                          name: "voluptatem",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            intervalSize: 92.199997,
                            maxValue: 23.100000,
                            minValue: 45.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 6389786455545150621,
                              endRowIndex: 8794925141505629548,
                              sheetId: 1215022703069225826,
                              startColumnIndex: 6328721528522119779,
                              startRowIndex: 5846949180277289045,
                            },
                            {
                              endColumnIndex: 8811768971454994502,
                              endRowIndex: 7972519933864377458,
                              sheetId: 1891486577198993660,
                              startColumnIndex: 6532722679273988744,
                              startRowIndex: 3404441753871491638,
                            },
                            {
                              endColumnIndex: 3371532188461999177,
                              endRowIndex: 6090646486468956113,
                              sheetId: 2279634039149018,
                              startColumnIndex: 1770992439299128931,
                              startRowIndex: 692921154198776483,
                            },
                          ],
                        },
                      },
                    },
                    highSeries: {
                      data: {
                        aggregateType: "SUM",
                        columnReference: {
                          name: "minus",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "QUARTER",
                          },
                          histogramRule: {
                            intervalSize: 6.200000,
                            maxValue: 56.200001,
                            minValue: 33.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 5429723160526089905,
                              endRowIndex: 4872838711780053036,
                              sheetId: 419326049483177866,
                              startColumnIndex: 6070478397956027020,
                              startRowIndex: 834755006764273154,
                            },
                          ],
                        },
                      },
                    },
                    lowSeries: {
                      data: {
                        aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                        columnReference: {
                          name: "eaque",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH",
                          },
                          histogramRule: {
                            intervalSize: 52.200001,
                            maxValue: 8.100000,
                            minValue: 14.200000,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 2038449797144002420,
                              endRowIndex: 8408371280466812107,
                              sheetId: 496205153633190488,
                              startColumnIndex: 373482154931353961,
                              startRowIndex: 5051643618700365233,
                            },
                          ],
                        },
                      },
                    },
                    openSeries: {
                      data: {
                        aggregateType: "AVERAGE",
                        columnReference: {
                          name: "quia",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            intervalSize: 68.199997,
                            maxValue: 86.199997,
                            minValue: 69.199997,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 1924937025472416168,
                              endRowIndex: 7214208323590017733,
                              sheetId: 6715168048463867653,
                              startColumnIndex: 7250130363035207046,
                              startRowIndex: 1487222292651998961,
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
                domain: {
                  data: {
                    aggregateType: "SUM",
                    columnReference: {
                      name: "earum",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                      },
                      histogramRule: {
                        intervalSize: 7.100000,
                        maxValue: 6.100000,
                        minValue: 28.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 4410845926925955578,
                          endRowIndex: 6388696145512958340,
                          sheetId: 3486870209948638382,
                          startColumnIndex: 7138025106390763199,
                          startRowIndex: 7578087239393768517,
                        },
                        {
                          endColumnIndex: 2064823862527724577,
                          endRowIndex: 3370703828755977220,
                          sheetId: 5135237664538809095,
                          startColumnIndex: 8528479959314134002,
                          startRowIndex: 7546950961941713201,
                        },
                        {
                          endColumnIndex: 6907747711727238449,
                          endRowIndex: 6905122417775429793,
                          sheetId: 1571699275741121577,
                          startColumnIndex: 6504388772820151230,
                          startRowIndex: 3661972884553222348,
                        },
                      ],
                    },
                  },
                  reversed: true,
                },
              },
              dataSourceChartProperties: {
                dataExecutionStatus: {
                  errorCode: "OTHER",
                  errorMessage: "exercitationem",
                  lastRefreshTime: "est",
                  state: "FAILED",
                },
                dataSourceId: "modi",
              },
              filterSpecs: [
                {
                  columnIndex: 4418305708407305206,
                  dataSourceColumnReference: {
                    name: "explicabo",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_GREATER_THAN_EQ",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "temporibus",
                        },
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "qui",
                        },
                        {
                          relativeDate: "PAST_YEAR",
                          userEnteredValue: "voluptatem",
                        },
                      ],
                    },
                    hiddenValues: [
                      "omnis",
                    ],
                    visibleBackgroundColor: {
                      alpha: 82.199997,
                      blue: 7.100000,
                      green: 95.099998,
                      red: 65.199997,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 5.100000,
                        blue: 69.099998,
                        green: 11.200000,
                        red: 72.099998,
                      },
                      themeColor: "ACCENT2",
                    },
                    visibleForegroundColor: {
                      alpha: 67.199997,
                      blue: 26.200001,
                      green: 13.200000,
                      red: 74.099998,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 64.199997,
                        blue: 37.099998,
                        green: 62.200001,
                        red: 46.200001,
                      },
                      themeColor: "TEXT",
                    },
                  },
                },
                {
                  columnIndex: 163967936575787829,
                  dataSourceColumnReference: {
                    name: "ut",
                  },
                  filterCriteria: {
                    condition: {
                      type: "DATE_ON_OR_AFTER",
                      values: [
                        {
                          relativeDate: "TODAY",
                          userEnteredValue: "ut",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "atque",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "unde",
                        },
                      ],
                    },
                    hiddenValues: [
                      "impedit",
                    ],
                    visibleBackgroundColor: {
                      alpha: 25.100000,
                      blue: 83.199997,
                      green: 47.099998,
                      red: 56.099998,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 98.099998,
                        blue: 55.099998,
                        green: 21.100000,
                        red: 19.100000,
                      },
                      themeColor: "LINK",
                    },
                    visibleForegroundColor: {
                      alpha: 21.100000,
                      blue: 42.200001,
                      green: 20.200001,
                      red: 72.099998,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 47.099998,
                        blue: 62.099998,
                        green: 22.100000,
                        red: 51.099998,
                      },
                      themeColor: "ACCENT3",
                    },
                  },
                },
              ],
              fontName: "molestiae",
              hiddenDimensionStrategy: "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED",
              histogramChart: {
                bucketSize: 68.199997,
                legendPosition: "NO_LEGEND",
                outlierPercentile: 70.099998,
                series: [
                  {
                    barColor: {
                      alpha: 13.200000,
                      blue: 72.099998,
                      green: 48.200001,
                      red: 51.099998,
                    },
                    barColorStyle: {
                      rgbColor: {
                        alpha: 97.099998,
                        blue: 14.200000,
                        green: 99.099998,
                        red: 62.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    data: {
                      aggregateType: "AVERAGE",
                      columnReference: {
                        name: "in",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "QUARTER",
                        },
                        histogramRule: {
                          intervalSize: 12.200000,
                          maxValue: 85.099998,
                          minValue: 46.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 398657075785733387,
                            endRowIndex: 2350786340137774970,
                            sheetId: 3193324240591704453,
                            startColumnIndex: 1945290702721603696,
                            startRowIndex: 844324573089889621,
                          },
                          {
                            endColumnIndex: 8372569300182534645,
                            endRowIndex: 2965698043496389494,
                            sheetId: 357081009992119745,
                            startColumnIndex: 7672126355472583553,
                            startRowIndex: 4916755236184470118,
                          },
                          {
                            endColumnIndex: 3194112887368333661,
                            endRowIndex: 993703527617908561,
                            sheetId: 6404791073543070037,
                            startColumnIndex: 7950812293071170471,
                            startRowIndex: 2437785146620931646,
                          },
                        ],
                      },
                    },
                  },
                  {
                    barColor: {
                      alpha: 48.099998,
                      blue: 51.200001,
                      green: 96.199997,
                      red: 54.099998,
                    },
                    barColorStyle: {
                      rgbColor: {
                        alpha: 1.200000,
                        blue: 88.199997,
                        green: 65.099998,
                        red: 20.100000,
                      },
                      themeColor: "ACCENT4",
                    },
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "quaerat",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                        },
                        histogramRule: {
                          intervalSize: 14.200000,
                          maxValue: 33.200001,
                          minValue: 83.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5713036550247787959,
                            endRowIndex: 7499833460002737994,
                            sheetId: 7561059790609621572,
                            startColumnIndex: 4083075352171151813,
                            startRowIndex: 5994784671562394433,
                          },
                        ],
                      },
                    },
                  },
                  {
                    barColor: {
                      alpha: 7.200000,
                      blue: 68.099998,
                      green: 93.099998,
                      red: 52.200001,
                    },
                    barColorStyle: {
                      rgbColor: {
                        alpha: 22.200001,
                        blue: 43.099998,
                        green: 47.099998,
                        red: 35.099998,
                      },
                      themeColor: "TEXT",
                    },
                    data: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "id",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 87.099998,
                          maxValue: 39.200001,
                          minValue: 8.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5324849402215173012,
                            endRowIndex: 5046576721345858557,
                            sheetId: 6739391682417389115,
                            startColumnIndex: 4635303729872278718,
                            startRowIndex: 872541855703498398,
                          },
                        ],
                      },
                    },
                  },
                ],
                showItemDividers: false,
              },
              maximized: false,
              orgChart: {
                labels: {
                  aggregateType: "MIN",
                  columnReference: {
                    name: "non",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 38.200001,
                      maxValue: 7.200000,
                      minValue: 77.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 653138487929567463,
                        endRowIndex: 6288030244356933319,
                        sheetId: 9034021443970418834,
                        startColumnIndex: 6671235907892153445,
                        startRowIndex: 6236895867538307227,
                      },
                    ],
                  },
                },
                nodeColor: {
                  alpha: 30.200001,
                  blue: 20.100000,
                  green: 14.100000,
                  red: 57.099998,
                },
                nodeColorStyle: {
                  rgbColor: {
                    alpha: 51.200001,
                    blue: 68.199997,
                    green: 13.100000,
                    red: 94.199997,
                  },
                  themeColor: "ACCENT2",
                },
                nodeSize: "SMALL",
                parentLabels: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "enim",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH_DAY",
                    },
                    histogramRule: {
                      intervalSize: 84.099998,
                      maxValue: 74.199997,
                      minValue: 60.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 7417344509807136667,
                        endRowIndex: 5651785253559279573,
                        sheetId: 7829752908571261714,
                        startColumnIndex: 6792805430798386950,
                        startRowIndex: 2513950478940504141,
                      },
                      {
                        endColumnIndex: 9218245518787993783,
                        endRowIndex: 1919032580868290305,
                        sheetId: 1838875200542713495,
                        startColumnIndex: 5162191550340126255,
                        startRowIndex: 2090893793390810411,
                      },
                      {
                        endColumnIndex: 5550199858528646084,
                        endRowIndex: 9054540216860918806,
                        sheetId: 412631229574334884,
                        startColumnIndex: 3944522371666773695,
                        startRowIndex: 2759575575938188482,
                      },
                    ],
                  },
                },
                selectedNodeColor: {
                  alpha: 60.200001,
                  blue: 15.100000,
                  green: 33.099998,
                  red: 28.100000,
                },
                selectedNodeColorStyle: {
                  rgbColor: {
                    alpha: 65.099998,
                    blue: 76.199997,
                    green: 11.100000,
                    red: 99.099998,
                  },
                  themeColor: "TEXT",
                },
                tooltips: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "rem",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_YEAR",
                    },
                    histogramRule: {
                      intervalSize: 51.099998,
                      maxValue: 44.200001,
                      minValue: 97.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 5759232866025264652,
                        endRowIndex: 4795950656101688543,
                        sheetId: 6342472296581271663,
                        startColumnIndex: 8159565446206970692,
                        startRowIndex: 2974330261066416128,
                      },
                      {
                        endColumnIndex: 8871529546430492635,
                        endRowIndex: 917397039138294116,
                        sheetId: 4107995302247741561,
                        startColumnIndex: 2252418538206593024,
                        startRowIndex: 2354017445697835993,
                      },
                    ],
                  },
                },
              },
              pieChart: {
                domain: {
                  aggregateType: "MIN",
                  columnReference: {
                    name: "mollitia",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "MONTH",
                    },
                    histogramRule: {
                      intervalSize: 95.199997,
                      maxValue: 28.200001,
                      minValue: 64.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6008464634721177223,
                        endRowIndex: 1873501990299416256,
                        sheetId: 937520129219539601,
                        startColumnIndex: 8684099219694687561,
                        startRowIndex: 2902857852148037846,
                      },
                    ],
                  },
                },
                legendPosition: "LABELED_LEGEND",
                pieHole: 98.099998,
                series: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "explicabo",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 39.200001,
                      maxValue: 40.200001,
                      minValue: 45.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 227005928903190855,
                        endRowIndex: 5334284434118385932,
                        sheetId: 8817919243303264947,
                        startColumnIndex: 5613389011618390909,
                        startRowIndex: 3936058630028273644,
                      },
                    ],
                  },
                },
                threeDimensional: false,
              },
              scorecardChart: {
                aggregateType: "MEDIAN",
                baselineValueData: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "harum",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH_DAY",
                    },
                    histogramRule: {
                      intervalSize: 74.099998,
                      maxValue: 56.200001,
                      minValue: 24.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 9121827246953183506,
                        endRowIndex: 8376408892840619507,
                        sheetId: 1799492780562966373,
                        startColumnIndex: 4381844509993944595,
                        startRowIndex: 1084512385719096294,
                      },
                    ],
                  },
                },
                baselineValueFormat: {
                  comparisonType: "COMPARISON_TYPE_UNDEFINED",
                  description: "quibusdam",
                  negativeColor: {
                    alpha: 5.100000,
                    blue: 82.199997,
                    green: 71.099998,
                    red: 76.199997,
                  },
                  negativeColorStyle: {
                    rgbColor: {
                      alpha: 67.099998,
                      blue: 3.200000,
                      green: 86.099998,
                      red: 54.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  position: {
                    horizontalAlignment: "LEFT",
                  },
                  positiveColor: {
                    alpha: 88.099998,
                    blue: 88.199997,
                    green: 93.099998,
                    red: 96.199997,
                  },
                  positiveColorStyle: {
                    rgbColor: {
                      alpha: 77.099998,
                      blue: 64.099998,
                      green: 89.199997,
                      red: 98.099998,
                    },
                    themeColor: "ACCENT1",
                  },
                  textFormat: {
                    bold: false,
                    fontFamily: "vitae",
                    fontSize: 3441870597620982521,
                    foregroundColor: {
                      alpha: 28.100000,
                      blue: 81.099998,
                      green: 95.199997,
                      red: 10.200000,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 30.200001,
                        blue: 86.199997,
                        green: 13.100000,
                        red: 15.100000,
                      },
                      themeColor: "LINK",
                    },
                    italic: true,
                    link: {
                      uri: "rerum",
                    },
                    strikethrough: false,
                    underline: false,
                  },
                },
                customFormatOptions: {
                  prefix: "itaque",
                  suffix: "reiciendis",
                },
                keyValueData: {
                  aggregateType: "AVERAGE",
                  columnReference: {
                    name: "itaque",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR",
                    },
                    histogramRule: {
                      intervalSize: 50.200001,
                      maxValue: 64.099998,
                      minValue: 96.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 2182438783508385766,
                        endRowIndex: 134861696344271609,
                        sheetId: 4963203354862936086,
                        startColumnIndex: 7558373385664533672,
                        startRowIndex: 1975955921841551540,
                      },
                      {
                        endColumnIndex: 4049932744247958618,
                        endRowIndex: 513140162530070570,
                        sheetId: 6575764940899109829,
                        startColumnIndex: 6239618052035610640,
                        startRowIndex: 5611208887917687453,
                      },
                      {
                        endColumnIndex: 1827547272126134850,
                        endRowIndex: 2539351496871545778,
                        sheetId: 1281924389844676372,
                        startColumnIndex: 8141457049896373682,
                        startRowIndex: 5183997875397047593,
                      },
                    ],
                  },
                },
                keyValueFormat: {
                  position: {
                    horizontalAlignment: "LEFT",
                  },
                  textFormat: {
                    bold: true,
                    fontFamily: "inventore",
                    fontSize: 3273358549908518784,
                    foregroundColor: {
                      alpha: 53.099998,
                      blue: 51.200001,
                      green: 0.200000,
                      red: 85.199997,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 59.200001,
                        blue: 18.200001,
                        green: 74.199997,
                        red: 49.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    italic: true,
                    link: {
                      uri: "consectetur",
                    },
                    strikethrough: false,
                    underline: true,
                  },
                },
                numberFormatSource: "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED",
                scaleFactor: 20.100000,
              },
              sortSpecs: [
                {
                  backgroundColor: {
                    alpha: 30.100000,
                    blue: 37.099998,
                    green: 63.200001,
                    red: 90.199997,
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      alpha: 82.099998,
                      blue: 40.200001,
                      green: 99.199997,
                      red: 81.199997,
                    },
                    themeColor: "ACCENT6",
                  },
                  dataSourceColumnReference: {
                    name: "iusto",
                  },
                  dimensionIndex: 6653103856372533238,
                  foregroundColor: {
                    alpha: 69.099998,
                    blue: 79.199997,
                    green: 2.100000,
                    red: 49.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 39.200001,
                      blue: 15.100000,
                      green: 93.199997,
                      red: 61.099998,
                    },
                    themeColor: "BACKGROUND",
                  },
                  sortOrder: "DESCENDING",
                },
              ],
              subtitle: "ex",
              subtitleTextFormat: {
                bold: false,
                fontFamily: "vel",
                fontSize: 4425585283256322631,
                foregroundColor: {
                  alpha: 9.100000,
                  blue: 66.199997,
                  green: 95.099998,
                  red: 2.200000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 15.200000,
                    blue: 60.099998,
                    green: 92.199997,
                    red: 7.200000,
                  },
                  themeColor: "LINK",
                },
                italic: false,
                link: {
                  uri: "qui",
                },
                strikethrough: false,
                underline: false,
              },
              subtitleTextPosition: {
                horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
              },
              title: "rem",
              titleTextFormat: {
                bold: false,
                fontFamily: "ipsa",
                fontSize: 1352923553991792732,
                foregroundColor: {
                  alpha: 68.199997,
                  blue: 87.199997,
                  green: 41.099998,
                  red: 77.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 38.099998,
                    blue: 38.200001,
                    green: 75.199997,
                    red: 4.100000,
                  },
                  themeColor: "LINK",
                },
                italic: false,
                link: {
                  uri: "qui",
                },
                strikethrough: false,
                underline: true,
              },
              titleTextPosition: {
                horizontalAlignment: "LEFT",
              },
              treemapChart: {
                colorData: {
                  aggregateType: "AVERAGE",
                  columnReference: {
                    name: "nemo",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "MONTH",
                    },
                    histogramRule: {
                      intervalSize: 20.200001,
                      maxValue: 81.099998,
                      minValue: 70.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6018112387006709283,
                        endRowIndex: 4899267286538832296,
                        sheetId: 6862365833165734560,
                        startColumnIndex: 7632565087602161769,
                        startRowIndex: 2134753628428172799,
                      },
                      {
                        endColumnIndex: 3739640830858591985,
                        endRowIndex: 3762724418158293461,
                        sheetId: 2706791565684330222,
                        startColumnIndex: 5009868019111463134,
                        startRowIndex: 8792884688021245156,
                      },
                      {
                        endColumnIndex: 3655015297049830863,
                        endRowIndex: 5376784403282941260,
                        sheetId: 6292976775657909931,
                        startColumnIndex: 2492105853915103689,
                        startRowIndex: 3629201712398504509,
                      },
                    ],
                  },
                },
                colorScale: {
                  maxValueColor: {
                    alpha: 85.099998,
                    blue: 75.199997,
                    green: 95.099998,
                    red: 31.200001,
                  },
                  maxValueColorStyle: {
                    rgbColor: {
                      alpha: 89.099998,
                      blue: 95.099998,
                      green: 42.200001,
                      red: 80.099998,
                    },
                    themeColor: "TEXT",
                  },
                  midValueColor: {
                    alpha: 63.200001,
                    blue: 69.199997,
                    green: 10.200000,
                    red: 90.099998,
                  },
                  midValueColorStyle: {
                    rgbColor: {
                      alpha: 60.099998,
                      blue: 95.199997,
                      green: 56.099998,
                      red: 32.200001,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  minValueColor: {
                    alpha: 64.199997,
                    blue: 97.199997,
                    green: 92.199997,
                    red: 87.099998,
                  },
                  minValueColorStyle: {
                    rgbColor: {
                      alpha: 42.200001,
                      blue: 59.200001,
                      green: 82.099998,
                      red: 17.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                  noDataColor: {
                    alpha: 24.200001,
                    blue: 53.200001,
                    green: 86.199997,
                    red: 10.200000,
                  },
                  noDataColorStyle: {
                    rgbColor: {
                      alpha: 61.200001,
                      blue: 9.200000,
                      green: 49.200001,
                      red: 40.200001,
                    },
                    themeColor: "BACKGROUND",
                  },
                },
                headerColor: {
                  alpha: 17.200001,
                  blue: 18.100000,
                  green: 12.200000,
                  red: 88.099998,
                },
                headerColorStyle: {
                  rgbColor: {
                    alpha: 52.099998,
                    blue: 79.199997,
                    green: 32.099998,
                    red: 76.199997,
                  },
                  themeColor: "ACCENT5",
                },
                hideTooltips: false,
                hintedLevels: 8708313087136832285,
                labels: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "consequatur",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 50.200001,
                      maxValue: 84.199997,
                      minValue: 17.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 38898334125490906,
                        endRowIndex: 4855043284163724648,
                        sheetId: 3167416407760581016,
                        startColumnIndex: 5902572209331244900,
                        startRowIndex: 8800395198891268587,
                      },
                    ],
                  },
                },
                levels: 6209266870807518261,
                maxValue: 82.199997,
                minValue: 36.200001,
                parentLabels: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "sed",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "SECOND",
                    },
                    histogramRule: {
                      intervalSize: 38.099998,
                      maxValue: 0.100000,
                      minValue: 5.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6775348276387673340,
                        endRowIndex: 3689896237130650524,
                        sheetId: 2737230973607229150,
                        startColumnIndex: 1182438729863995758,
                        startRowIndex: 8836958152907716505,
                      },
                      {
                        endColumnIndex: 2536117404804311014,
                        endRowIndex: 5118360855497133131,
                        sheetId: 4988652592590412878,
                        startColumnIndex: 8794404586416487218,
                        startRowIndex: 3741474008618675548,
                      },
                    ],
                  },
                },
                sizeData: {
                  aggregateType: "MEDIAN",
                  columnReference: {
                    name: "impedit",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE_AMPM",
                    },
                    histogramRule: {
                      intervalSize: 12.200000,
                      maxValue: 56.099998,
                      minValue: 82.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6537984888763423894,
                        endRowIndex: 1093473475765671326,
                        sheetId: 8062498651678583044,
                        startColumnIndex: 7203633296547136081,
                        startRowIndex: 4741515372725239214,
                      },
                    ],
                  },
                },
                textFormat: {
                  bold: false,
                  fontFamily: "ut",
                  fontSize: 8697756961697963853,
                  foregroundColor: {
                    alpha: 11.100000,
                    blue: 37.099998,
                    green: 44.200001,
                    red: 67.199997,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 55.200001,
                      blue: 37.200001,
                      green: 29.100000,
                      red: 16.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                  italic: false,
                  link: {
                    uri: "a",
                  },
                  strikethrough: false,
                  underline: false,
                },
              },
              waterfallChart: {
                connectorLineStyle: {
                  type: "LONG_DASHED",
                  width: 1641451396657386536,
                },
                domain: {
                  data: {
                    aggregateType: "SUM",
                    columnReference: {
                      name: "debitis",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                      },
                      histogramRule: {
                        intervalSize: 54.200001,
                        maxValue: 83.099998,
                        minValue: 57.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 285635033745683865,
                          endRowIndex: 6403037881200224379,
                          sheetId: 6134675409536001115,
                          startColumnIndex: 30718450059346663,
                          startRowIndex: 1791228645048899386,
                        },
                        {
                          endColumnIndex: 1000668831263546934,
                          endRowIndex: 6083280498546775114,
                          sheetId: 5390935360352264871,
                          startColumnIndex: 8427973379413536139,
                          startRowIndex: 4170249231884621804,
                        },
                        {
                          endColumnIndex: 3682051672171741905,
                          endRowIndex: 127225875950264235,
                          sheetId: 6546808941321068856,
                          startColumnIndex: 7904470648680643678,
                          startRowIndex: 1325682419092169393,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
                firstValueIsTotal: false,
                hideConnectorLines: true,
                series: [
                  {
                    customSubtotals: [
                      {
                        dataIsSubtotal: false,
                        label: "et",
                        subtotalIndex: 7768198548863668816,
                      },
                    ],
                    data: {
                      aggregateType: "AVERAGE",
                      columnReference: {
                        name: "at",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MONTH",
                        },
                        histogramRule: {
                          intervalSize: 84.099998,
                          maxValue: 94.199997,
                          minValue: 99.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 4274869410588483877,
                            endRowIndex: 2502521760373555910,
                            sheetId: 4666865012529559949,
                            startColumnIndex: 9218721670846340698,
                            startRowIndex: 2185715640713388810,
                          },
                        ],
                      },
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "COUNT",
                        columnReference: {
                          name: "voluptas",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            intervalSize: 88.199997,
                            maxValue: 85.099998,
                            minValue: 59.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 8664461600586805801,
                              endRowIndex: 2521661407710088565,
                              sheetId: 4253005334584589789,
                              startColumnIndex: 5082987611169800554,
                              startRowIndex: 3490825045422051580,
                            },
                            {
                              endColumnIndex: 7532318092269251268,
                              endRowIndex: 5885981740186944817,
                              sheetId: 171304557718390772,
                              startColumnIndex: 651958977144410069,
                              startRowIndex: 4799025746754655914,
                            },
                          ],
                        },
                      },
                      placement: "OUTSIDE_END",
                      textFormat: {
                        bold: true,
                        fontFamily: "fuga",
                        fontSize: 4013404936997874821,
                        foregroundColor: {
                          alpha: 44.099998,
                          blue: 68.199997,
                          green: 31.100000,
                          red: 18.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 7.100000,
                            blue: 20.100000,
                            green: 74.099998,
                            red: 4.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: false,
                        link: {
                          uri: "et",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      type: "NONE",
                    },
                    hideTrailingSubtotal: true,
                    negativeColumnsStyle: {
                      color: {
                        alpha: 83.099998,
                        blue: 24.100000,
                        green: 38.099998,
                        red: 47.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 70.099998,
                          blue: 51.200001,
                          green: 74.099998,
                          red: 7.100000,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      label: "occaecati",
                    },
                    positiveColumnsStyle: {
                      color: {
                        alpha: 85.099998,
                        blue: 95.199997,
                        green: 20.100000,
                        red: 14.200000,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 34.099998,
                          blue: 7.200000,
                          green: 66.099998,
                          red: 77.199997,
                        },
                        themeColor: "ACCENT3",
                      },
                      label: "neque",
                    },
                    subtotalColumnsStyle: {
                      color: {
                        alpha: 26.100000,
                        blue: 43.099998,
                        green: 70.099998,
                        red: 98.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 39.200001,
                          blue: 48.200001,
                          green: 36.200001,
                          red: 85.199997,
                        },
                        themeColor: "ACCENT6",
                      },
                      label: "aperiam",
                    },
                  },
                ],
                stackedType: "SEQUENTIAL",
                totalDataLabel: {
                  customLabelData: {
                    aggregateType: "SUM",
                    columnReference: {
                      name: "in",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "YEAR_QUARTER",
                      },
                      histogramRule: {
                        intervalSize: 3.100000,
                        maxValue: 9.100000,
                        minValue: 32.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 5344263165525391107,
                          endRowIndex: 2733619326475828585,
                          sheetId: 2087769555868201792,
                          startColumnIndex: 8395307332568674012,
                          startRowIndex: 2772295487933675362,
                        },
                        {
                          endColumnIndex: 906524548063022021,
                          endRowIndex: 26915580055560406,
                          sheetId: 4192872523069364121,
                          startColumnIndex: 2274100956872767573,
                          startRowIndex: 3127728010769665424,
                        },
                      ],
                    },
                  },
                  placement: "ABOVE",
                  textFormat: {
                    bold: true,
                    fontFamily: "exercitationem",
                    fontSize: 489922896752151201,
                    foregroundColor: {
                      alpha: 10.200000,
                      blue: 65.199997,
                      green: 20.100000,
                      red: 96.099998,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 29.100000,
                        blue: 31.100000,
                        green: 9.200000,
                        red: 99.199997,
                      },
                      themeColor: "ACCENT4",
                    },
                    italic: true,
                    link: {
                      uri: "sed",
                    },
                    strikethrough: false,
                    underline: false,
                  },
                  type: "DATA",
                },
              },
            },
          },
        },
        addConditionalFormatRule: {
          index: 6854600612392153361,
          rule: {
            booleanRule: {
              condition: {
                type: "TEXT_NOT_EQ",
                values: [
                  {
                    relativeDate: "TODAY",
                    userEnteredValue: "voluptates",
                  },
                  {
                    relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                    userEnteredValue: "voluptatem",
                  },
                ],
              },
              format: {
                backgroundColor: {
                  alpha: 14.100000,
                  blue: 49.099998,
                  green: 18.200001,
                  red: 75.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 13.100000,
                    blue: 2.200000,
                    green: 37.200001,
                    red: 48.200001,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                borders: {
                  bottom: {
                    color: {
                      alpha: 88.099998,
                      blue: 38.099998,
                      green: 55.200001,
                      red: 67.199997,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 92.099998,
                        blue: 21.100000,
                        green: 74.199997,
                        red: 9.200000,
                      },
                      themeColor: "TEXT",
                    },
                    style: "STYLE_UNSPECIFIED",
                    width: 4793738450055870386,
                  },
                  left: {
                    color: {
                      alpha: 79.199997,
                      blue: 85.099998,
                      green: 71.199997,
                      red: 45.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 57.099998,
                        blue: 53.099998,
                        green: 49.099998,
                        red: 5.200000,
                      },
                      themeColor: "TEXT",
                    },
                    style: "SOLID_THICK",
                    width: 7535221350408926407,
                  },
                  right: {
                    color: {
                      alpha: 41.099998,
                      blue: 2.200000,
                      green: 97.199997,
                      red: 47.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 12.200000,
                        blue: 41.099998,
                        green: 87.199997,
                        red: 41.200001,
                      },
                      themeColor: "ACCENT5",
                    },
                    style: "SOLID",
                    width: 3450856630666814463,
                  },
                  top: {
                    color: {
                      alpha: 92.199997,
                      blue: 29.200001,
                      green: 45.200001,
                      red: 20.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 13.100000,
                        blue: 72.199997,
                        green: 53.099998,
                        red: 26.100000,
                      },
                      themeColor: "TEXT",
                    },
                    style: "DOUBLE",
                    width: 2507434779863340641,
                  },
                },
                horizontalAlignment: "CENTER",
                hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                numberFormat: {
                  pattern: "recusandae",
                  type: "TIME",
                },
                padding: {
                  bottom: 818419615676849931,
                  left: 333054078099439491,
                  right: 8974620710258886009,
                  top: 4684234707454482339,
                },
                textDirection: "LEFT_TO_RIGHT",
                textFormat: {
                  bold: true,
                  fontFamily: "deserunt",
                  fontSize: 7530827783885254488,
                  foregroundColor: {
                    alpha: 21.100000,
                    blue: 76.099998,
                    green: 71.199997,
                    red: 49.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 0.200000,
                      blue: 41.200001,
                      green: 62.200001,
                      red: 77.199997,
                    },
                    themeColor: "ACCENT6",
                  },
                  italic: true,
                  link: {
                    uri: "quas",
                  },
                  strikethrough: false,
                  underline: false,
                },
                textRotation: {
                  angle: 5770602373222572768,
                  vertical: true,
                },
                verticalAlignment: "MIDDLE",
                wrapStrategy: "LEGACY_WRAP",
              },
            },
            gradientRule: {
              maxpoint: {
                color: {
                  alpha: 51.200001,
                  blue: 82.099998,
                  green: 17.200001,
                  red: 9.100000,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 67.099998,
                    blue: 58.099998,
                    green: 54.099998,
                    red: 78.099998,
                  },
                  themeColor: "ACCENT2",
                },
                type: "MAX",
                value: "nihil",
              },
              midpoint: {
                color: {
                  alpha: 78.099998,
                  blue: 19.200001,
                  green: 27.100000,
                  red: 14.200000,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 77.099998,
                    blue: 34.099998,
                    green: 1.100000,
                    red: 82.099998,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                type: "INTERPOLATION_POINT_TYPE_UNSPECIFIED",
                value: "sed",
              },
              minpoint: {
                color: {
                  alpha: 31.100000,
                  blue: 64.099998,
                  green: 46.099998,
                  red: 3.200000,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 88.099998,
                    blue: 74.199997,
                    green: 70.099998,
                    red: 27.100000,
                  },
                  themeColor: "ACCENT4",
                },
                type: "NUMBER",
                value: "voluptatem",
              },
            },
            ranges: [
              {
                endColumnIndex: 6736233365594314229,
                endRowIndex: 5274325851476851721,
                sheetId: 1873734678568351664,
                startColumnIndex: 5864861689207667625,
                startRowIndex: 666996702952198293,
              },
              {
                endColumnIndex: 8572827515868520261,
                endRowIndex: 8975592661933164547,
                sheetId: 3547074524624156361,
                startColumnIndex: 4691245958912838229,
                startRowIndex: 7375496150639830294,
              },
              {
                endColumnIndex: 8308495872495319182,
                endRowIndex: 466667337634507745,
                sheetId: 1349979013076213649,
                startColumnIndex: 979078829483135103,
                startRowIndex: 1186815541377085343,
              },
            ],
          },
        },
        addDataSource: {
          dataSource: {
            calculatedColumns: [
              {
                formula: "ut",
                reference: {
                  name: "voluptatum",
                },
              },
              {
                formula: "dolor",
                reference: {
                  name: "sed",
                },
              },
              {
                formula: "odio",
                reference: {
                  name: "deserunt",
                },
              },
            ],
            dataSourceId: "harum",
            sheetId: 541831112782146550,
            spec: {
              bigQuery: {
                projectId: "sequi",
                querySpec: {
                  rawQuery: "iure",
                },
                tableSpec: {
                  datasetId: "provident",
                  tableId: "eum",
                  tableProjectId: "repellat",
                },
              },
              parameters: [
                {
                  name: "repellendus",
                  namedRangeId: "cupiditate",
                  range: {
                    endColumnIndex: 6260354254715692349,
                    endRowIndex: 3193125400835466264,
                    sheetId: 7355541826302290846,
                    startColumnIndex: 7846832054114073088,
                    startRowIndex: 5207979882583414250,
                  },
                },
                {
                  name: "sit",
                  namedRangeId: "sit",
                  range: {
                    endColumnIndex: 7854070459046303593,
                    endRowIndex: 2582362532578283982,
                    sheetId: 1292661837965902444,
                    startColumnIndex: 4913775816691860455,
                    startRowIndex: 6388634623525659448,
                  },
                },
                {
                  name: "distinctio",
                  namedRangeId: "est",
                  range: {
                    endColumnIndex: 5264401341848779051,
                    endRowIndex: 4535726260461526530,
                    sheetId: 2660571426562162190,
                    startColumnIndex: 1135168391343281926,
                    startRowIndex: 5447889700252127328,
                  },
                },
              ],
            },
          },
        },
        addDimensionGroup: {
          range: {
            dimension: "ROWS",
            endIndex: 3494013458171546323,
            sheetId: 3999593577787884376,
            startIndex: 5982889434909756702,
          },
        },
        addFilterView: {
          filter: {
            criteria: {
              "quisquam": {
                condition: {
                  type: "NUMBER_EQ",
                  values: [
                    {
                      relativeDate: "TOMORROW",
                      userEnteredValue: "eligendi",
                    },
                  ],
                },
                hiddenValues: [
                  "ducimus",
                  "vel",
                  "optio",
                ],
                visibleBackgroundColor: {
                  alpha: 39.099998,
                  blue: 91.099998,
                  green: 69.099998,
                  red: 26.200001,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 22.100000,
                    blue: 62.200001,
                    green: 26.100000,
                    red: 87.199997,
                  },
                  themeColor: "ACCENT4",
                },
                visibleForegroundColor: {
                  alpha: 2.100000,
                  blue: 47.200001,
                  green: 19.100000,
                  red: 96.199997,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 44.099998,
                    blue: 5.100000,
                    green: 59.200001,
                    red: 86.099998,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 4453087998381076999,
                dataSourceColumnReference: {
                  name: "quam",
                },
                filterCriteria: {
                  condition: {
                    type: "TEXT_IS_EMAIL",
                    values: [
                      {
                        relativeDate: "PAST_YEAR",
                        userEnteredValue: "recusandae",
                      },
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "quia",
                      },
                    ],
                  },
                  hiddenValues: [
                    "qui",
                  ],
                  visibleBackgroundColor: {
                    alpha: 70.199997,
                    blue: 72.199997,
                    green: 14.100000,
                    red: 27.200001,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 69.099998,
                      blue: 73.199997,
                      green: 44.099998,
                      red: 33.200001,
                    },
                    themeColor: "ACCENT5",
                  },
                  visibleForegroundColor: {
                    alpha: 85.199997,
                    blue: 81.199997,
                    green: 39.200001,
                    red: 72.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 69.099998,
                      blue: 77.099998,
                      green: 86.099998,
                      red: 61.099998,
                    },
                    themeColor: "LINK",
                  },
                },
              },
              {
                columnIndex: 3259882957086041627,
                dataSourceColumnReference: {
                  name: "voluptas",
                },
                filterCriteria: {
                  condition: {
                    type: "ONE_OF_RANGE",
                    values: [
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "neque",
                      },
                      {
                        relativeDate: "TODAY",
                        userEnteredValue: "ab",
                      },
                    ],
                  },
                  hiddenValues: [
                    "omnis",
                  ],
                  visibleBackgroundColor: {
                    alpha: 48.200001,
                    blue: 53.200001,
                    green: 9.100000,
                    red: 32.200001,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 63.099998,
                      blue: 37.099998,
                      green: 39.099998,
                      red: 14.200000,
                    },
                    themeColor: "TEXT",
                  },
                  visibleForegroundColor: {
                    alpha: 5.100000,
                    blue: 58.200001,
                    green: 23.100000,
                    red: 66.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 36.099998,
                      blue: 5.100000,
                      green: 9.100000,
                      red: 63.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                },
              },
              {
                columnIndex: 7407954097840616519,
                dataSourceColumnReference: {
                  name: "omnis",
                },
                filterCriteria: {
                  condition: {
                    type: "CUSTOM_FORMULA",
                    values: [
                      {
                        relativeDate: "PAST_WEEK",
                        userEnteredValue: "similique",
                      },
                      {
                        relativeDate: "PAST_YEAR",
                        userEnteredValue: "sint",
                      },
                    ],
                  },
                  hiddenValues: [
                    "quibusdam",
                    "voluptas",
                  ],
                  visibleBackgroundColor: {
                    alpha: 91.099998,
                    blue: 29.200001,
                    green: 88.199997,
                    red: 44.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 56.200001,
                      blue: 44.200001,
                      green: 24.100000,
                      red: 6.200000,
                    },
                    themeColor: "ACCENT4",
                  },
                  visibleForegroundColor: {
                    alpha: 31.200001,
                    blue: 39.200001,
                    green: 77.099998,
                    red: 85.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 25.100000,
                      blue: 65.199997,
                      green: 56.099998,
                      red: 84.099998,
                    },
                    themeColor: "ACCENT2",
                  },
                },
              },
            ],
            filterViewId: 5761616832841232565,
            namedRangeId: "voluptas",
            range: {
              endColumnIndex: 5558489343982008411,
              endRowIndex: 8137069720126143543,
              sheetId: 4374799356576413485,
              startColumnIndex: 5317053632415547638,
              startRowIndex: 1514691689346403775,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 1.200000,
                  blue: 27.100000,
                  green: 73.199997,
                  red: 13.100000,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 94.099998,
                    blue: 30.100000,
                    green: 38.200001,
                    red: 61.099998,
                  },
                  themeColor: "ACCENT4",
                },
                dataSourceColumnReference: {
                  name: "laborum",
                },
                dimensionIndex: 1071334286491349886,
                foregroundColor: {
                  alpha: 48.200001,
                  blue: 86.199997,
                  green: 50.200001,
                  red: 23.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 4.200000,
                    blue: 40.200001,
                    green: 9.100000,
                    red: 6.200000,
                  },
                  themeColor: "ACCENT1",
                },
                sortOrder: "SORT_ORDER_UNSPECIFIED",
              },
              {
                backgroundColor: {
                  alpha: 42.099998,
                  blue: 13.100000,
                  green: 44.200001,
                  red: 3.200000,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 7.200000,
                    blue: 44.200001,
                    green: 29.100000,
                    red: 63.200001,
                  },
                  themeColor: "ACCENT5",
                },
                dataSourceColumnReference: {
                  name: "veritatis",
                },
                dimensionIndex: 7264392983534980318,
                foregroundColor: {
                  alpha: 33.200001,
                  blue: 37.200001,
                  green: 97.099998,
                  red: 96.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 90.099998,
                    blue: 63.099998,
                    green: 81.099998,
                    red: 47.200001,
                  },
                  themeColor: "ACCENT3",
                },
                sortOrder: "ASCENDING",
              },
            ],
            title: "nam",
          },
        },
        addNamedRange: {
          namedRange: {
            name: "velit",
            namedRangeId: "sint",
            range: {
              endColumnIndex: 3445558228234624776,
              endRowIndex: 138424971529831171,
              sheetId: 3802816266012714959,
              startColumnIndex: 7140289969506330314,
              startRowIndex: 5494808769424336398,
            },
          },
        },
        addProtectedRange: {
          protectedRange: {
            description: "voluptatibus",
            editors: {
              domainUsersCanEdit: true,
              groups: [
                "sint",
                "et",
                "fuga",
              ],
              users: [
                "quidem",
              ],
            },
            namedRangeId: "reiciendis",
            protectedRangeId: 1165393244832972559,
            range: {
              endColumnIndex: 7008664144122189560,
              endRowIndex: 3992746400360606416,
              sheetId: 5564398751810638538,
              startColumnIndex: 2412317971863000599,
              startRowIndex: 2083822086764792280,
            },
            requestingUserCanEdit: true,
            unprotectedRanges: [
              {
                endColumnIndex: 8670942543419449648,
                endRowIndex: 5443541662519256512,
                sheetId: 8865988288514722865,
                startColumnIndex: 9088913266652189303,
                startRowIndex: 3105097294192765617,
              },
              {
                endColumnIndex: 4595361404942618375,
                endRowIndex: 4382912841328830023,
                sheetId: 6114226239435612574,
                startColumnIndex: 6858010906439498044,
                startRowIndex: 2801130552802558662,
              },
            ],
            warningOnly: true,
          },
        },
        addSheet: {
          properties: {
            dataSourceSheetProperties: {
              columns: [
                {
                  formula: "tempore",
                  reference: {
                    name: "molestiae",
                  },
                },
                {
                  formula: "explicabo",
                  reference: {
                    name: "aut",
                  },
                },
              ],
              dataExecutionStatus: {
                errorCode: "TOO_MANY_COLUMNS",
                errorMessage: "eum",
                lastRefreshTime: "iusto",
                state: "DATA_EXECUTION_STATE_UNSPECIFIED",
              },
              dataSourceId: "sunt",
            },
            gridProperties: {
              columnCount: 2602058405765199833,
              columnGroupControlAfter: false,
              frozenColumnCount: 3829739243650777554,
              frozenRowCount: 1148026295651379462,
              hideGridlines: false,
              rowCount: 4555737211558415302,
              rowGroupControlAfter: false,
            },
            hidden: false,
            index: 4043344878976719061,
            rightToLeft: true,
            sheetId: 3847772514595940289,
            sheetType: "DATA_SOURCE",
            tabColor: {
              alpha: 77.099998,
              blue: 62.200001,
              green: 37.200001,
              red: 98.199997,
            },
            tabColorStyle: {
              rgbColor: {
                alpha: 38.200001,
                blue: 30.200001,
                green: 98.099998,
                red: 69.199997,
              },
              themeColor: "BACKGROUND",
            },
            title: "exercitationem",
          },
        },
        addSlicer: {
          slicer: {
            position: {
              newSheet: false,
              overlayPosition: {
                anchorCell: {
                  columnIndex: 8047955103690178795,
                  rowIndex: 2557891904236039253,
                  sheetId: 7533459087129017429,
                },
                heightPixels: 2787390725273390111,
                offsetXPixels: 7965745375182332691,
                offsetYPixels: 5748165741887468100,
                widthPixels: 4425070692859695786,
              },
              sheetId: 5130383934817685480,
            },
            slicerId: 976022592451791343,
            spec: {
              applyToPivotTables: true,
              backgroundColor: {
                alpha: 42.099998,
                blue: 38.200001,
                green: 58.099998,
                red: 23.200001,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 32.200001,
                  blue: 11.100000,
                  green: 27.200001,
                  red: 47.200001,
                },
                themeColor: "ACCENT1",
              },
              columnIndex: 7904263106864667476,
              dataRange: {
                endColumnIndex: 4832108611505503213,
                endRowIndex: 3259816408161690578,
                sheetId: 4826954324203959027,
                startColumnIndex: 7231345445733472582,
                startRowIndex: 1692417640776580915,
              },
              filterCriteria: {
                condition: {
                  type: "TEXT_NOT_EQ",
                  values: [
                    {
                      relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                      userEnteredValue: "quia",
                    },
                    {
                      relativeDate: "TOMORROW",
                      userEnteredValue: "dolorem",
                    },
                    {
                      relativeDate: "YESTERDAY",
                      userEnteredValue: "ut",
                    },
                  ],
                },
                hiddenValues: [
                  "molestias",
                  "fuga",
                ],
                visibleBackgroundColor: {
                  alpha: 19.200001,
                  blue: 11.200000,
                  green: 70.199997,
                  red: 46.200001,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 50.200001,
                    blue: 79.099998,
                    green: 98.099998,
                    red: 28.200001,
                  },
                  themeColor: "ACCENT5",
                },
                visibleForegroundColor: {
                  alpha: 48.200001,
                  blue: 80.199997,
                  green: 4.100000,
                  red: 95.099998,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 66.099998,
                    blue: 41.099998,
                    green: 34.099998,
                    red: 99.099998,
                  },
                  themeColor: "ACCENT5",
                },
              },
              horizontalAlignment: "LEFT",
              textFormat: {
                bold: false,
                fontFamily: "cum",
                fontSize: 3603337656852858115,
                foregroundColor: {
                  alpha: 23.200001,
                  blue: 90.099998,
                  green: 94.099998,
                  red: 56.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 9.100000,
                    blue: 65.199997,
                    green: 45.200001,
                    red: 29.100000,
                  },
                  themeColor: "TEXT",
                },
                italic: false,
                link: {
                  uri: "consequatur",
                },
                strikethrough: false,
                underline: false,
              },
              title: "iusto",
            },
          },
        },
        appendCells: {
          fields: "distinctio",
          rows: [
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "OBJECT_IN_ERROR_STATE",
                      errorMessage: "repellendus",
                      lastRefreshTime: "commodi",
                      state: "DATA_EXECUTION_STATE_UNSPECIFIED",
                    },
                    dataSourceId: "nihil",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SELECTED",
                    columns: [
                      {
                        name: "autem",
                      },
                      {
                        name: "dolore",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "OBJECT_SPEC_INVALID",
                      errorMessage: "soluta",
                      lastRefreshTime: "accusantium",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "aut",
                    filterSpecs: [
                      {
                        columnIndex: 2195054765189156680,
                        dataSourceColumnReference: {
                          name: "quisquam",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_BETWEEN",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "minima",
                              },
                            ],
                          },
                          hiddenValues: [
                            "omnis",
                            "eum",
                          ],
                          visibleBackgroundColor: {
                            alpha: 33.200001,
                            blue: 3.200000,
                            green: 7.100000,
                            red: 58.099998,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 26.100000,
                              blue: 71.099998,
                              green: 60.099998,
                              red: 1.200000,
                            },
                            themeColor: "ACCENT6",
                          },
                          visibleForegroundColor: {
                            alpha: 66.099998,
                            blue: 83.099998,
                            green: 93.199997,
                            red: 98.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 67.199997,
                              blue: 56.200001,
                              green: 93.099998,
                              red: 70.199997,
                            },
                            themeColor: "ACCENT5",
                          },
                        },
                      },
                      {
                        columnIndex: 9016079401812146934,
                        dataSourceColumnReference: {
                          name: "expedita",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_CONTAINS",
                            values: [
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "sequi",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "illo",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "et",
                              },
                            ],
                          },
                          hiddenValues: [
                            "iste",
                          ],
                          visibleBackgroundColor: {
                            alpha: 32.099998,
                            blue: 83.199997,
                            green: 30.200001,
                            red: 45.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 75.099998,
                              blue: 96.099998,
                              green: 33.099998,
                              red: 87.199997,
                            },
                            themeColor: "LINK",
                          },
                          visibleForegroundColor: {
                            alpha: 79.099998,
                            blue: 17.100000,
                            green: 69.099998,
                            red: 5.100000,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 57.200001,
                              blue: 78.099998,
                              green: 51.200001,
                              red: 59.200001,
                            },
                            themeColor: "ACCENT1",
                          },
                        },
                      },
                      {
                        columnIndex: 2236877046626062636,
                        dataSourceColumnReference: {
                          name: "aut",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_LESS_THAN_EQ",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "aut",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "placeat",
                              },
                            ],
                          },
                          hiddenValues: [
                            "aut",
                          ],
                          visibleBackgroundColor: {
                            alpha: 2.200000,
                            blue: 27.100000,
                            green: 95.099998,
                            red: 0.100000,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 19.200001,
                              blue: 98.099998,
                              green: 89.099998,
                              red: 95.199997,
                            },
                            themeColor: "ACCENT4",
                          },
                          visibleForegroundColor: {
                            alpha: 34.200001,
                            blue: 50.200001,
                            green: 88.199997,
                            red: 66.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 85.199997,
                              blue: 63.200001,
                              green: 0.100000,
                              red: 73.099998,
                            },
                            themeColor: "LINK",
                          },
                        },
                      },
                    ],
                    rowLimit: 2597722343234801574,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 89.099998,
                          blue: 30.200001,
                          green: 49.200001,
                          red: 41.200001,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 54.099998,
                            blue: 74.099998,
                            green: 19.200001,
                            red: 36.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        dataSourceColumnReference: {
                          name: "tempore",
                        },
                        dimensionIndex: 3413247632241741800,
                        foregroundColor: {
                          alpha: 2.200000,
                          blue: 22.100000,
                          green: 33.200001,
                          red: 91.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 8.100000,
                            blue: 13.100000,
                            green: 63.200001,
                            red: 20.100000,
                          },
                          themeColor: "ACCENT3",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 20.100000,
                          blue: 75.099998,
                          green: 21.100000,
                          red: 1.200000,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 11.100000,
                            blue: 20.100000,
                            green: 23.200001,
                            red: 55.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        dataSourceColumnReference: {
                          name: "in",
                        },
                        dimensionIndex: 2424523462499946595,
                        foregroundColor: {
                          alpha: 52.200001,
                          blue: 78.099998,
                          green: 41.099998,
                          red: 53.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 59.200001,
                            blue: 43.099998,
                            green: 72.199997,
                            red: 52.200001,
                          },
                          themeColor: "ACCENT2",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 7.100000,
                          blue: 57.200001,
                          green: 87.199997,
                          red: 61.200001,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 29.200001,
                            blue: 25.200001,
                            green: 28.200001,
                            red: 51.099998,
                          },
                          themeColor: "LINK",
                        },
                        dataSourceColumnReference: {
                          name: "ab",
                        },
                        dimensionIndex: 3152036969321635858,
                        foregroundColor: {
                          alpha: 79.199997,
                          blue: 0.200000,
                          green: 12.200000,
                          red: 45.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 44.200001,
                            blue: 79.199997,
                            green: 70.199997,
                            red: 74.199997,
                          },
                          themeColor: "ACCENT4",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "ONE_OF_LIST",
                      values: [
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "et",
                        },
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "autem",
                        },
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "impedit",
                        },
                      ],
                    },
                    inputMessage: "nostrum",
                    showCustomUi: true,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 23.100000,
                      blue: 52.099998,
                      green: 85.099998,
                      red: 98.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 59.099998,
                        blue: 70.199997,
                        green: 98.099998,
                        red: 49.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 77.199997,
                          blue: 19.100000,
                          green: 61.099998,
                          red: 93.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 93.099998,
                            blue: 72.199997,
                            green: 91.099998,
                            red: 91.099998,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "SOLID_MEDIUM",
                        width: 4632535037816805704,
                      },
                      left: {
                        color: {
                          alpha: 55.200001,
                          blue: 99.099998,
                          green: 92.199997,
                          red: 91.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 44.200001,
                            blue: 51.099998,
                            green: 23.100000,
                            red: 41.200001,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID_THICK",
                        width: 5339550951146603056,
                      },
                      right: {
                        color: {
                          alpha: 6.100000,
                          blue: 98.199997,
                          green: 98.199997,
                          red: 97.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 88.199997,
                            blue: 33.099998,
                            green: 32.200001,
                            red: 59.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "DOTTED",
                        width: 8424258947539160596,
                      },
                      top: {
                        color: {
                          alpha: 37.099998,
                          blue: 68.099998,
                          green: 85.199997,
                          red: 39.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 80.099998,
                            blue: 18.100000,
                            green: 2.200000,
                            red: 35.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "DOUBLE",
                        width: 5871780084034176621,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "nemo",
                      type: "PERCENT",
                    },
                    padding: {
                      bottom: 3631038918054158669,
                      left: 3849736024828288662,
                      right: 4298013673431287118,
                      top: 2528731804504288385,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "quidem",
                      fontSize: 3825708786655582897,
                      foregroundColor: {
                        alpha: 14.100000,
                        blue: 97.199997,
                        green: 87.199997,
                        red: 97.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 84.199997,
                          blue: 92.199997,
                          green: 94.099998,
                          red: 42.200001,
                        },
                        themeColor: "BACKGROUND",
                      },
                      italic: true,
                      link: {
                        uri: "debitis",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 1376927017588058395,
                      vertical: false,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "aspernatur",
                      type: "N_A",
                    },
                    formulaValue: "vel",
                    numberValue: 66.199997,
                    stringValue: "tempora",
                  },
                  formattedValue: "ut",
                  hyperlink: "voluptas",
                  note: "sit",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "aliquid",
                        },
                        groupLimit: {
                          applyOrder: 5574603858462484864,
                          countLimit: 9190244281140204256,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            end: 67.099998,
                            interval: 24.100000,
                            start: 72.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "aut",
                                    type: "REF",
                                  },
                                  formulaValue: "nobis",
                                  numberValue: 14.100000,
                                  stringValue: "expedita",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "reiciendis",
                                      type: "N_A",
                                    },
                                    formulaValue: "assumenda",
                                    numberValue: 23.200001,
                                    stringValue: "vel",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "beatae",
                                      type: "N_A",
                                    },
                                    formulaValue: "et",
                                    numberValue: 46.099998,
                                    stringValue: "inventore",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "dolorum",
                                    type: "NUM",
                                  },
                                  formulaValue: "aut",
                                  numberValue: 20.100000,
                                  stringValue: "doloribus",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "praesentium",
                                      type: "REF",
                                    },
                                    formulaValue: "accusantium",
                                    numberValue: 61.200001,
                                    stringValue: "id",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "temporibus",
                                      type: "NAME",
                                    },
                                    formulaValue: "quo",
                                    numberValue: 10.200000,
                                    stringValue: "culpa",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "rem",
                                      type: "N_A",
                                    },
                                    formulaValue: "aperiam",
                                    numberValue: 77.199997,
                                    stringValue: "rerum",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quia",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "eum",
                                  numberValue: 55.099998,
                                  stringValue: "sit",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "iusto",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "numquam",
                                    numberValue: 58.099998,
                                    stringValue: "nobis",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "molestiae",
                                      type: "N_A",
                                    },
                                    formulaValue: "eaque",
                                    numberValue: 24.100000,
                                    stringValue: "perspiciatis",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "aut",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 408621718937186936,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "minima",
                                type: "LOADING",
                              },
                              formulaValue: "modi",
                              numberValue: 70.199997,
                              stringValue: "velit",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "cumque",
                                type: "REF",
                              },
                              formulaValue: "corrupti",
                              numberValue: 82.199997,
                              stringValue: "omnis",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quas",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "maxime",
                              numberValue: 34.099998,
                              stringValue: "provident",
                            },
                          ],
                          valuesIndex: 4730066998545643580,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "odio",
                                type: "REF",
                              },
                              formulaValue: "voluptatem",
                              numberValue: 28.100000,
                              stringValue: "at",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "voluptatem",
                                type: "VALUE",
                              },
                              formulaValue: "impedit",
                              numberValue: 53.200001,
                              stringValue: "tempora",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "repellendus": {
                        condition: {
                          type: "BLANK",
                          values: [
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "odit",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "maiores",
                            },
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "eaque",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "corporis",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "PARAMETER_INVALID",
                      errorMessage: "autem",
                      lastRefreshTime: "qui",
                      state: "RUNNING",
                    },
                    dataSourceId: "est",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 7275782107723109785,
                        dataSourceColumnReference: {
                          name: "ad",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_IS_EMAIL",
                            values: [
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "totam",
                              },
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "labore",
                              },
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "unde",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "rerum",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 6456206520171516090,
                        dataSourceColumnReference: {
                          name: "nostrum",
                        },
                        filterCriteria: {
                          condition: {
                            type: "ONE_OF_LIST",
                            values: [
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "impedit",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "facilis",
                            "ut",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 7980047437718262644,
                        dataSourceColumnReference: {
                          name: "voluptatibus",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_CONTAINS",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "in",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "est",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "distinctio",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "qui",
                            "rerum",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "totam",
                        },
                        groupLimit: {
                          applyOrder: 4836693461685196459,
                          countLimit: 4596948466447648609,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            end: 92.099998,
                            interval: 79.199997,
                            start: 13.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "qui",
                                    type: "LOADING",
                                  },
                                  formulaValue: "debitis",
                                  numberValue: 45.200001,
                                  stringValue: "officia",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "molestiae",
                                      type: "LOADING",
                                    },
                                    formulaValue: "nemo",
                                    numberValue: 12.100000,
                                    stringValue: "odit",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ut",
                                      type: "NUM",
                                    },
                                    formulaValue: "voluptate",
                                    numberValue: 89.099998,
                                    stringValue: "nulla",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "corrupti",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "consectetur",
                                    numberValue: 36.099998,
                                    stringValue: "modi",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "doloribus",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 8473478171314465106,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "consectetur",
                                type: "VALUE",
                              },
                              formulaValue: "in",
                              numberValue: 35.200001,
                              stringValue: "rerum",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "nesciunt",
                                type: "NUM",
                              },
                              formulaValue: "optio",
                              numberValue: 17.100000,
                              stringValue: "velit",
                            },
                          ],
                          valuesIndex: 5227150874341781537,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "voluptatem",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "soluta",
                              numberValue: 2.200000,
                              stringValue: "nostrum",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "at",
                                type: "NAME",
                              },
                              formulaValue: "fugit",
                              numberValue: 55.099998,
                              stringValue: "blanditiis",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 7957477522266763827,
                      endRowIndex: 3135301032806147823,
                      sheetId: 8282808564731621909,
                      startColumnIndex: 3479698549738874613,
                      startRowIndex: 3933300334237950700,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "corrupti",
                        },
                        formula: "expedita",
                        name: "nisi",
                        sourceColumnOffset: 1619407575399835155,
                        summarizeFunction: "AVERAGE",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "a",
                        fontSize: 1158583593340027376,
                        foregroundColor: {
                          alpha: 51.099998,
                          blue: 35.200001,
                          green: 6.200000,
                          red: 30.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 59.200001,
                            blue: 76.199997,
                            green: 88.199997,
                            red: 1.200000,
                          },
                          themeColor: "ACCENT6",
                        },
                        italic: false,
                        link: {
                          uri: "nulla",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      startIndex: 6895181443492226283,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "exercitationem",
                        fontSize: 4833628395180388209,
                        foregroundColor: {
                          alpha: 33.099998,
                          blue: 31.200001,
                          green: 48.099998,
                          red: 62.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 34.200001,
                            blue: 37.200001,
                            green: 59.200001,
                            red: 8.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        italic: true,
                        link: {
                          uri: "voluptatibus",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      startIndex: 3486805583869037942,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "est",
                        fontSize: 7778935050207722264,
                        foregroundColor: {
                          alpha: 52.200001,
                          blue: 32.099998,
                          green: 79.199997,
                          red: 81.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 29.200001,
                            blue: 68.199997,
                            green: 6.100000,
                            red: 95.199997,
                          },
                          themeColor: "ACCENT3",
                        },
                        italic: false,
                        link: {
                          uri: "impedit",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 2228020363751763798,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 89.199997,
                      blue: 54.200001,
                      green: 43.200001,
                      red: 61.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 99.199997,
                        blue: 41.200001,
                        green: 33.099998,
                        red: 56.200001,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 3.200000,
                          blue: 4.100000,
                          green: 81.199997,
                          red: 34.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 2.100000,
                            blue: 30.100000,
                            green: 13.100000,
                            red: 98.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "DOTTED",
                        width: 8018159161864332283,
                      },
                      left: {
                        color: {
                          alpha: 28.200001,
                          blue: 0.200000,
                          green: 62.200001,
                          red: 0.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 40.099998,
                            blue: 11.200000,
                            green: 49.099998,
                            red: 46.200001,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID",
                        width: 4762723194359862109,
                      },
                      right: {
                        color: {
                          alpha: 66.099998,
                          blue: 30.100000,
                          green: 68.099998,
                          red: 15.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 64.099998,
                            blue: 79.199997,
                            green: 53.200001,
                            red: 30.100000,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID_MEDIUM",
                        width: 9081834342194613062,
                      },
                      top: {
                        color: {
                          alpha: 51.099998,
                          blue: 32.200001,
                          green: 1.100000,
                          red: 8.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 9.100000,
                            blue: 36.200001,
                            green: 15.200000,
                            red: 46.200001,
                          },
                          themeColor: "ACCENT1",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 4339392817730446443,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "adipisci",
                      type: "NUMBER_FORMAT_TYPE_UNSPECIFIED",
                    },
                    padding: {
                      bottom: 8430270418952976634,
                      left: 4110250540435369108,
                      right: 6714559807984413624,
                      top: 8885842878995446292,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: true,
                      fontFamily: "voluptas",
                      fontSize: 9063539701146000479,
                      foregroundColor: {
                        alpha: 25.200001,
                        blue: 6.200000,
                        green: 35.099998,
                        red: 33.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 59.200001,
                          blue: 6.100000,
                          green: 41.099998,
                          red: 77.099998,
                        },
                        themeColor: "ACCENT5",
                      },
                      italic: true,
                      link: {
                        uri: "qui",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 3146244391670673482,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "dicta",
                      type: "ERROR",
                    },
                    formulaValue: "accusantium",
                    numberValue: 91.099998,
                    stringValue: "qui",
                  },
                },
              ],
            },
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "MISSING_COLUMN_ALIAS",
                      errorMessage: "nesciunt",
                      lastRefreshTime: "adipisci",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "praesentium",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SYNC_ALL",
                    columns: [
                      {
                        name: "error",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "TIMED_OUT",
                      errorMessage: "quia",
                      lastRefreshTime: "enim",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "impedit",
                    filterSpecs: [
                      {
                        columnIndex: 1326418606146133622,
                        dataSourceColumnReference: {
                          name: "eius",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NOT_BLANK",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "est",
                              },
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "voluptate",
                              },
                            ],
                          },
                          hiddenValues: [
                            "quo",
                            "quia",
                          ],
                          visibleBackgroundColor: {
                            alpha: 10.100000,
                            blue: 80.199997,
                            green: 74.099998,
                            red: 17.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 8.100000,
                              blue: 10.100000,
                              green: 38.099998,
                              red: 23.200001,
                            },
                            themeColor: "ACCENT3",
                          },
                          visibleForegroundColor: {
                            alpha: 28.100000,
                            blue: 33.200001,
                            green: 2.100000,
                            red: 34.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 19.100000,
                              blue: 32.099998,
                              green: 77.199997,
                              red: 23.100000,
                            },
                            themeColor: "BACKGROUND",
                          },
                        },
                      },
                    ],
                    rowLimit: 2660334108604812451,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 28.200001,
                          blue: 87.199997,
                          green: 92.099998,
                          red: 43.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 45.200001,
                            blue: 17.200001,
                            green: 93.199997,
                            red: 93.199997,
                          },
                          themeColor: "ACCENT5",
                        },
                        dataSourceColumnReference: {
                          name: "ut",
                        },
                        dimensionIndex: 7456969667962586618,
                        foregroundColor: {
                          alpha: 97.099998,
                          blue: 99.099998,
                          green: 72.199997,
                          red: 66.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 70.199997,
                            blue: 75.199997,
                            green: 94.199997,
                            red: 57.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        sortOrder: "DESCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "DATE_AFTER",
                      values: [
                        {
                          relativeDate: "TODAY",
                          userEnteredValue: "similique",
                        },
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "fugit",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "deleniti",
                        },
                      ],
                    },
                    inputMessage: "laudantium",
                    showCustomUi: false,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 54.200001,
                      blue: 70.199997,
                      green: 89.099998,
                      red: 79.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 83.099998,
                        blue: 43.099998,
                        green: 1.200000,
                        red: 21.100000,
                      },
                      themeColor: "BACKGROUND",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 4.100000,
                          blue: 22.200001,
                          green: 81.199997,
                          red: 96.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 13.100000,
                            blue: 88.099998,
                            green: 15.100000,
                            red: 46.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 7520333933910162124,
                      },
                      left: {
                        color: {
                          alpha: 9.200000,
                          blue: 1.100000,
                          green: 6.100000,
                          red: 97.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 71.099998,
                            blue: 51.200001,
                            green: 34.200001,
                            red: 7.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID_THICK",
                        width: 1771029669115395258,
                      },
                      right: {
                        color: {
                          alpha: 64.199997,
                          blue: 95.199997,
                          green: 19.200001,
                          red: 96.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 2.200000,
                            blue: 76.099998,
                            green: 63.200001,
                            red: 88.199997,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 2650040053743849689,
                      },
                      top: {
                        color: {
                          alpha: 66.099998,
                          blue: 43.200001,
                          green: 82.199997,
                          red: 61.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 9.100000,
                            blue: 16.200001,
                            green: 14.100000,
                            red: 81.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "SOLID_THICK",
                        width: 3814282771153445501,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "iste",
                      type: "DATE",
                    },
                    padding: {
                      bottom: 4417640741250569093,
                      left: 9021285490475380774,
                      right: 6629472917874635009,
                      top: 8893427221521046744,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: false,
                      fontFamily: "sed",
                      fontSize: 96433267406040264,
                      foregroundColor: {
                        alpha: 39.099998,
                        blue: 18.100000,
                        green: 43.200001,
                        red: 98.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 58.099998,
                          blue: 51.200001,
                          green: 57.099998,
                          red: 59.099998,
                        },
                        themeColor: "TEXT",
                      },
                      italic: true,
                      link: {
                        uri: "et",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 1690686705669619313,
                      vertical: true,
                    },
                    verticalAlignment: "BOTTOM",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "est",
                      type: "NULL_VALUE",
                    },
                    formulaValue: "aliquid",
                    numberValue: 2.100000,
                    stringValue: "tempore",
                  },
                  formattedValue: "assumenda",
                  hyperlink: "deleniti",
                  note: "ea",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "dignissimos",
                        },
                        groupLimit: {
                          applyOrder: 8354130542362335075,
                          countLimit: 8739348492881990697,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            end: 28.100000,
                            interval: 40.200001,
                            start: 75.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "maiores",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "ducimus",
                                  numberValue: 79.099998,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "animi",
                                      type: "REF",
                                    },
                                    formulaValue: "harum",
                                    numberValue: 76.199997,
                                    stringValue: "necessitatibus",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "amet",
                                      type: "LOADING",
                                    },
                                    formulaValue: "qui",
                                    numberValue: 95.199997,
                                    stringValue: "adipisci",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "placeat",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "voluptas",
                                  numberValue: 31.200001,
                                  stringValue: "saepe",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quo",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "perferendis",
                                    numberValue: 1.200000,
                                    stringValue: "fugiat",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "aut",
                                    type: "VALUE",
                                  },
                                  formulaValue: "praesentium",
                                  numberValue: 86.099998,
                                  stringValue: "aspernatur",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolor",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "rem",
                                    numberValue: 51.099998,
                                    stringValue: "non",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "quod",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 1040877729128214977,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "dolor",
                                type: "ERROR",
                              },
                              formulaValue: "est",
                              numberValue: 81.099998,
                              stringValue: "fuga",
                            },
                          ],
                          valuesIndex: 1573648986730413558,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "recusandae",
                                type: "VALUE",
                              },
                              formulaValue: "occaecati",
                              numberValue: 71.099998,
                              stringValue: "iure",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "sunt",
                                type: "ERROR",
                              },
                              formulaValue: "est",
                              numberValue: 50.200001,
                              stringValue: "beatae",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "illo": {
                        condition: {
                          type: "BOOLEAN",
                          values: [
                            {
                              relativeDate: "TODAY",
                              userEnteredValue: "voluptatibus",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "nam",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "itaque",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "molestiae",
                          "aut",
                          "illo",
                        ],
                      },
                      "sapiente": {
                        condition: {
                          type: "DATE_EQ",
                          values: [
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "dolor",
                            },
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "officiis",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "totam",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "quos",
                        ],
                      },
                      "beatae": {
                        condition: {
                          type: "NUMBER_GREATER_THAN_EQ",
                          values: [
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "dicta",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "mollitia",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "dolor",
                          "aut",
                          "veniam",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "OBJECT_SPEC_INVALID",
                      errorMessage: "assumenda",
                      lastRefreshTime: "blanditiis",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "et",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 5842638837747203769,
                        dataSourceColumnReference: {
                          name: "inventore",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_ON_OR_AFTER",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "fugiat",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "nihil",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "dignissimos",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 7014153113816809001,
                        dataSourceColumnReference: {
                          name: "expedita",
                        },
                        filterCriteria: {
                          condition: {
                            type: "ONE_OF_LIST",
                            values: [
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "optio",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "ut",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "id",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "dolorum",
                        },
                        groupLimit: {
                          applyOrder: 7148192476497697997,
                          countLimit: 2992598801987422884,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE_AMPM",
                          },
                          histogramRule: {
                            end: 54.200001,
                            interval: 43.200001,
                            start: 70.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "molestiae",
                                    type: "LOADING",
                                  },
                                  formulaValue: "quia",
                                  numberValue: 35.099998,
                                  stringValue: "non",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "architecto",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "non",
                                    numberValue: 94.099998,
                                    stringValue: "voluptas",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "amet",
                                      type: "NUM",
                                    },
                                    formulaValue: "reiciendis",
                                    numberValue: 28.100000,
                                    stringValue: "minus",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quaerat",
                                      type: "ERROR",
                                    },
                                    formulaValue: "nemo",
                                    numberValue: 95.199997,
                                    stringValue: "sint",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "maiores",
                                    type: "NAME",
                                  },
                                  formulaValue: "sunt",
                                  numberValue: 7.200000,
                                  stringValue: "quos",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quis",
                                      type: "NAME",
                                    },
                                    formulaValue: "est",
                                    numberValue: 18.100000,
                                    stringValue: "eveniet",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "vitae",
                                      type: "N_A",
                                    },
                                    formulaValue: "possimus",
                                    numberValue: 5.200000,
                                    stringValue: "alias",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "dolorem",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "eveniet",
                                  numberValue: 93.099998,
                                  stringValue: "repellat",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "magni",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "vel",
                                    numberValue: 23.100000,
                                    stringValue: "nihil",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "magni",
                                      type: "NAME",
                                    },
                                    formulaValue: "eaque",
                                    numberValue: 39.099998,
                                    stringValue: "magnam",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "accusamus",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 1023096072246663205,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "omnis",
                                type: "REF",
                              },
                              formulaValue: "labore",
                              numberValue: 27.100000,
                              stringValue: "velit",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "deserunt",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "molestias",
                              numberValue: 42.099998,
                              stringValue: "esse",
                            },
                          ],
                          valuesIndex: 8514051875821507688,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "nihil",
                                type: "VALUE",
                              },
                              formulaValue: "et",
                              numberValue: 45.200001,
                              stringValue: "alias",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "ea",
                                type: "VALUE",
                              },
                              formulaValue: "et",
                              numberValue: 32.099998,
                              stringValue: "molestiae",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "necessitatibus",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "in",
                              numberValue: 30.200001,
                              stringValue: "praesentium",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "dolorum",
                        },
                        groupLimit: {
                          applyOrder: 4251064183122456470,
                          countLimit: 8320547208458832662,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 52.200001,
                            interval: 55.099998,
                            start: 31.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "magni",
                                    type: "ERROR",
                                  },
                                  formulaValue: "occaecati",
                                  numberValue: 31.200001,
                                  stringValue: "qui",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "non",
                                      type: "LOADING",
                                    },
                                    formulaValue: "vel",
                                    numberValue: 84.099998,
                                    stringValue: "aut",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "molestiae",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "nemo",
                                    numberValue: 0.100000,
                                    stringValue: "fuga",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "voluptatem",
                                      type: "N_A",
                                    },
                                    formulaValue: "excepturi",
                                    numberValue: 87.099998,
                                    stringValue: "est",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "magni",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "et",
                                  numberValue: 95.099998,
                                  stringValue: "minus",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolor",
                                      type: "LOADING",
                                    },
                                    formulaValue: "rerum",
                                    numberValue: 46.099998,
                                    stringValue: "minima",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "eos",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 4689060277500521369,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "totam",
                                type: "LOADING",
                              },
                              formulaValue: "blanditiis",
                              numberValue: 50.099998,
                              stringValue: "soluta",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "sint",
                                type: "VALUE",
                              },
                              formulaValue: "beatae",
                              numberValue: 87.099998,
                              stringValue: "labore",
                            },
                          ],
                          valuesIndex: 5541982245608056673,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "expedita",
                                type: "NUM",
                              },
                              formulaValue: "aliquam",
                              numberValue: 54.099998,
                              stringValue: "quibusdam",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "ipsam",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "numquam",
                              numberValue: 46.099998,
                              stringValue: "aut",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "ERROR",
                              },
                              formulaValue: "sapiente",
                              numberValue: 0.100000,
                              stringValue: "voluptate",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 1954178420676524024,
                      endRowIndex: 6079154021078430416,
                      sheetId: 1568655386250090712,
                      startColumnIndex: 197027639709503198,
                      startRowIndex: 281946176081875744,
                    },
                    valueLayout: "VERTICAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "eos",
                        },
                        formula: "aut",
                        name: "autem",
                        sourceColumnOffset: 91512284821172400,
                        summarizeFunction: "MIN",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_ROW_TOTAL",
                        dataSourceColumnReference: {
                          name: "omnis",
                        },
                        formula: "velit",
                        name: "commodi",
                        sourceColumnOffset: 71664749229655362,
                        summarizeFunction: "STDEVP",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: false,
                        fontFamily: "sed",
                        fontSize: 3018511751917659766,
                        foregroundColor: {
                          alpha: 25.100000,
                          blue: 20.100000,
                          green: 25.100000,
                          red: 33.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 24.100000,
                            blue: 10.200000,
                            green: 25.100000,
                            red: 35.200001,
                          },
                          themeColor: "LINK",
                        },
                        italic: false,
                        link: {
                          uri: "nam",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      startIndex: 530105285533473013,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "qui",
                        fontSize: 3439656949199293457,
                        foregroundColor: {
                          alpha: 68.199997,
                          blue: 37.099998,
                          green: 62.200001,
                          red: 57.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 18.200001,
                            blue: 71.199997,
                            green: 79.199997,
                            red: 87.199997,
                          },
                          themeColor: "ACCENT1",
                        },
                        italic: true,
                        link: {
                          uri: "aut",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 6218535202720229303,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "non",
                        fontSize: 5630985114880562997,
                        foregroundColor: {
                          alpha: 91.199997,
                          blue: 25.200001,
                          green: 22.100000,
                          red: 75.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 4.200000,
                            blue: 60.200001,
                            green: 14.200000,
                            red: 4.200000,
                          },
                          themeColor: "ACCENT2",
                        },
                        italic: false,
                        link: {
                          uri: "officia",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      startIndex: 7931175086771856082,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 13.100000,
                      blue: 50.099998,
                      green: 95.099998,
                      red: 79.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 47.200001,
                        blue: 5.200000,
                        green: 93.099998,
                        red: 40.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 26.200001,
                          blue: 65.099998,
                          green: 73.199997,
                          red: 55.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 60.200001,
                            blue: 23.200001,
                            green: 8.200000,
                            red: 5.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 7112166964364161772,
                      },
                      left: {
                        color: {
                          alpha: 69.199997,
                          blue: 56.099998,
                          green: 68.099998,
                          red: 3.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 70.099998,
                            blue: 77.199997,
                            green: 40.200001,
                            red: 23.200001,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 5356146821184837687,
                      },
                      right: {
                        color: {
                          alpha: 4.100000,
                          blue: 50.200001,
                          green: 38.200001,
                          red: 89.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 27.200001,
                            blue: 59.200001,
                            green: 75.199997,
                            red: 43.200001,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "SOLID_THICK",
                        width: 8121472849323890721,
                      },
                      top: {
                        color: {
                          alpha: 13.100000,
                          blue: 50.099998,
                          green: 46.200001,
                          red: 11.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 76.099998,
                            blue: 44.200001,
                            green: 64.199997,
                            red: 28.100000,
                          },
                          themeColor: "ACCENT1",
                        },
                        style: "DASHED",
                        width: 4863940965232508824,
                      },
                    },
                    horizontalAlignment: "RIGHT",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "at",
                      type: "NUMBER_FORMAT_TYPE_UNSPECIFIED",
                    },
                    padding: {
                      bottom: 7162465819178648756,
                      left: 3255445940424855757,
                      right: 5935656948831849085,
                      top: 8239386746373407830,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "corrupti",
                      fontSize: 8238944951948022403,
                      foregroundColor: {
                        alpha: 10.200000,
                        blue: 94.199997,
                        green: 91.099998,
                        red: 82.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 39.200001,
                          blue: 26.200001,
                          green: 62.200001,
                          red: 11.100000,
                        },
                        themeColor: "BACKGROUND",
                      },
                      italic: false,
                      link: {
                        uri: "quidem",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 5871658442550577067,
                      vertical: false,
                    },
                    verticalAlignment: "MIDDLE",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "architecto",
                      type: "NUM",
                    },
                    formulaValue: "aliquam",
                    numberValue: 25.100000,
                    stringValue: "tempora",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
                      errorMessage: "exercitationem",
                      lastRefreshTime: "tempore",
                      state: "DATA_EXECUTION_STATE_UNSPECIFIED",
                    },
                    dataSourceId: "qui",
                  },
                  dataSourceTable: {
                    columnSelectionType: "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
                    columns: [
                      {
                        name: "sequi",
                      },
                      {
                        name: "doloremque",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "MISSING_COLUMN_ALIAS",
                      errorMessage: "ut",
                      lastRefreshTime: "omnis",
                      state: "DATA_EXECUTION_STATE_UNSPECIFIED",
                    },
                    dataSourceId: "voluptate",
                    filterSpecs: [
                      {
                        columnIndex: 3021313197373216489,
                        dataSourceColumnReference: {
                          name: "voluptates",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_EQ",
                            values: [
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "quas",
                              },
                            ],
                          },
                          hiddenValues: [
                            "qui",
                          ],
                          visibleBackgroundColor: {
                            alpha: 27.100000,
                            blue: 28.100000,
                            green: 42.099998,
                            red: 74.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 58.200001,
                              blue: 56.099998,
                              green: 94.199997,
                              red: 22.100000,
                            },
                            themeColor: "ACCENT3",
                          },
                          visibleForegroundColor: {
                            alpha: 64.099998,
                            blue: 46.200001,
                            green: 43.200001,
                            red: 40.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 89.099998,
                              blue: 52.200001,
                              green: 22.200001,
                              red: 90.099998,
                            },
                            themeColor: "ACCENT1",
                          },
                        },
                      },
                      {
                        columnIndex: 6761572398554397941,
                        dataSourceColumnReference: {
                          name: "placeat",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_GREATER",
                            values: [
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "placeat",
                              },
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "in",
                              },
                            ],
                          },
                          hiddenValues: [
                            "excepturi",
                            "rerum",
                            "natus",
                          ],
                          visibleBackgroundColor: {
                            alpha: 99.199997,
                            blue: 50.099998,
                            green: 80.199997,
                            red: 96.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 68.199997,
                              blue: 73.199997,
                              green: 53.200001,
                              red: 84.199997,
                            },
                            themeColor: "ACCENT1",
                          },
                          visibleForegroundColor: {
                            alpha: 88.099998,
                            blue: 48.099998,
                            green: 63.200001,
                            red: 41.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 27.100000,
                              blue: 94.099998,
                              green: 42.200001,
                              red: 45.200001,
                            },
                            themeColor: "ACCENT4",
                          },
                        },
                      },
                      {
                        columnIndex: 6097437481138088992,
                        dataSourceColumnReference: {
                          name: "voluptates",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_NOT_EQ",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "veritatis",
                              },
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "tempora",
                              },
                            ],
                          },
                          hiddenValues: [
                            "quo",
                          ],
                          visibleBackgroundColor: {
                            alpha: 58.200001,
                            blue: 12.200000,
                            green: 17.100000,
                            red: 97.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 25.200001,
                              blue: 99.199997,
                              green: 28.100000,
                              red: 12.200000,
                            },
                            themeColor: "ACCENT5",
                          },
                          visibleForegroundColor: {
                            alpha: 74.099998,
                            blue: 76.199997,
                            green: 96.199997,
                            red: 49.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 91.099998,
                              blue: 63.099998,
                              green: 44.200001,
                              red: 2.100000,
                            },
                            themeColor: "ACCENT1",
                          },
                        },
                      },
                    ],
                    rowLimit: 1744836268303534887,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 1.200000,
                          blue: 63.200001,
                          green: 34.200001,
                          red: 66.199997,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 74.199997,
                            blue: 91.099998,
                            green: 8.100000,
                            red: 19.100000,
                          },
                          themeColor: "TEXT",
                        },
                        dataSourceColumnReference: {
                          name: "quis",
                        },
                        dimensionIndex: 6918060593638897482,
                        foregroundColor: {
                          alpha: 26.200001,
                          blue: 2.200000,
                          green: 17.200001,
                          red: 37.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 4.200000,
                            blue: 51.200001,
                            green: 72.099998,
                            red: 37.200001,
                          },
                          themeColor: "BACKGROUND",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 90.099998,
                          blue: 53.200001,
                          green: 69.199997,
                          red: 49.200001,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 5.100000,
                            blue: 69.199997,
                            green: 75.099998,
                            red: 92.099998,
                          },
                          themeColor: "LINK",
                        },
                        dataSourceColumnReference: {
                          name: "laboriosam",
                        },
                        dimensionIndex: 1101389597654737272,
                        foregroundColor: {
                          alpha: 20.200001,
                          blue: 5.100000,
                          green: 43.200001,
                          red: 76.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 14.100000,
                            blue: 68.199997,
                            green: 81.099998,
                            red: 37.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "TEXT_CONTAINS",
                      values: [
                        {
                          relativeDate: "TODAY",
                          userEnteredValue: "qui",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "eos",
                        },
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "illo",
                        },
                      ],
                    },
                    inputMessage: "veniam",
                    showCustomUi: true,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 67.199997,
                      blue: 17.100000,
                      green: 96.099998,
                      red: 20.100000,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 40.099998,
                        blue: 8.100000,
                        green: 23.100000,
                        red: 3.200000,
                      },
                      themeColor: "ACCENT1",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 94.199997,
                          blue: 56.200001,
                          green: 57.099998,
                          red: 23.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 13.100000,
                            blue: 76.199997,
                            green: 29.200001,
                            red: 74.199997,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "DOTTED",
                        width: 8744945481863803027,
                      },
                      left: {
                        color: {
                          alpha: 87.199997,
                          blue: 89.199997,
                          green: 94.099998,
                          red: 77.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 31.200001,
                            blue: 56.099998,
                            green: 81.199997,
                            red: 86.199997,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "DOTTED",
                        width: 4517367561307619948,
                      },
                      right: {
                        color: {
                          alpha: 82.199997,
                          blue: 72.199997,
                          green: 81.099998,
                          red: 95.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 6.100000,
                            blue: 77.099998,
                            green: 22.200001,
                            red: 64.099998,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "SOLID_THICK",
                        width: 5279875378484632122,
                      },
                      top: {
                        color: {
                          alpha: 65.099998,
                          blue: 33.200001,
                          green: 34.200001,
                          red: 72.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 81.099998,
                            blue: 10.100000,
                            green: 66.199997,
                            red: 17.200001,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "DOTTED",
                        width: 7149119653631570528,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "eaque",
                      type: "DATE_TIME",
                    },
                    padding: {
                      bottom: 4591486470890551266,
                      left: 7444794662897536575,
                      right: 7730326235147545041,
                      top: 1392970032882530145,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "aperiam",
                      fontSize: 6771390010727447541,
                      foregroundColor: {
                        alpha: 39.099998,
                        blue: 48.200001,
                        green: 13.100000,
                        red: 98.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 66.199997,
                          blue: 69.099998,
                          green: 0.100000,
                          red: 70.199997,
                        },
                        themeColor: "ACCENT3",
                      },
                      italic: false,
                      link: {
                        uri: "veritatis",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 8837983961987368305,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "CLIP",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "commodi",
                      type: "ERROR_TYPE_UNSPECIFIED",
                    },
                    formulaValue: "rerum",
                    numberValue: 10.200000,
                    stringValue: "blanditiis",
                  },
                  formattedValue: "dolorum",
                  hyperlink: "saepe",
                  note: "voluptates",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "alias",
                        },
                        groupLimit: {
                          applyOrder: 2953219465361743600,
                          countLimit: 1190317801121273650,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            end: 62.099998,
                            interval: 24.100000,
                            start: 14.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "inventore",
                                    type: "NUM",
                                  },
                                  formulaValue: "nesciunt",
                                  numberValue: 64.199997,
                                  stringValue: "minima",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "eaque",
                                      type: "NAME",
                                    },
                                    formulaValue: "quis",
                                    numberValue: 53.099998,
                                    stringValue: "saepe",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "facere",
                                      type: "NAME",
                                    },
                                    formulaValue: "accusamus",
                                    numberValue: 25.100000,
                                    stringValue: "natus",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "iure",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "delectus",
                                  numberValue: 22.100000,
                                  stringValue: "laboriosam",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "placeat",
                                      type: "REF",
                                    },
                                    formulaValue: "amet",
                                    numberValue: 59.099998,
                                    stringValue: "incidunt",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "sequi",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "atque",
                                    numberValue: 65.199997,
                                    stringValue: "hic",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "id",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "doloribus",
                                    numberValue: 86.199997,
                                    stringValue: "iste",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "asperiores",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 7813841376088152101,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "NUM",
                              },
                              formulaValue: "adipisci",
                              numberValue: 26.200001,
                              stringValue: "dignissimos",
                            },
                          ],
                          valuesIndex: 3935710304177491303,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "corrupti",
                                type: "ERROR",
                              },
                              formulaValue: "itaque",
                              numberValue: 85.199997,
                              stringValue: "sint",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "ad",
                                type: "ERROR",
                              },
                              formulaValue: "expedita",
                              numberValue: 27.100000,
                              stringValue: "distinctio",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "architecto",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "voluptatum",
                              numberValue: 88.199997,
                              stringValue: "nihil",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "libero",
                        },
                        groupLimit: {
                          applyOrder: 8598532481109664405,
                          countLimit: 7518929810041509229,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE_AMPM",
                          },
                          histogramRule: {
                            end: 63.099998,
                            interval: 36.200001,
                            start: 16.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quae",
                                    type: "N_A",
                                  },
                                  formulaValue: "voluptas",
                                  numberValue: 25.100000,
                                  stringValue: "laboriosam",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "qui",
                                      type: "LOADING",
                                    },
                                    formulaValue: "cum",
                                    numberValue: 7.200000,
                                    stringValue: "cum",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "maxime",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "et",
                                  numberValue: 18.200001,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "laborum",
                                      type: "N_A",
                                    },
                                    formulaValue: "accusamus",
                                    numberValue: 11.200000,
                                    stringValue: "eos",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "animi",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "eum",
                                    numberValue: 65.099998,
                                    stringValue: "nesciunt",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "velit",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 2397508368553890867,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "et",
                                type: "N_A",
                              },
                              formulaValue: "consequatur",
                              numberValue: 38.200001,
                              stringValue: "quia",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "et",
                                type: "LOADING",
                              },
                              formulaValue: "incidunt",
                              numberValue: 51.099998,
                              stringValue: "unde",
                            },
                          ],
                          valuesIndex: 8907566701432532814,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "illum",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "cupiditate",
                              numberValue: 88.099998,
                              stringValue: "et",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "voluptate",
                                type: "NUM",
                              },
                              formulaValue: "iusto",
                              numberValue: 10.100000,
                              stringValue: "veniam",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "esse",
                                type: "VALUE",
                              },
                              formulaValue: "non",
                              numberValue: 15.100000,
                              stringValue: "enim",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "quo": {
                        condition: {
                          type: "DATE_ON_OR_BEFORE",
                          values: [
                            {
                              relativeDate: "TOMORROW",
                              userEnteredValue: "voluptate",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "vero",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "doloremque",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "ut",
                          "illum",
                        ],
                      },
                      "hic": {
                        condition: {
                          type: "CUSTOM_FORMULA",
                          values: [
                            {
                              relativeDate: "TODAY",
                              userEnteredValue: "sed",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "et",
                        ],
                      },
                      "et": {
                        condition: {
                          type: "DATE_IS_VALID",
                          values: [
                            {
                              relativeDate: "TODAY",
                              userEnteredValue: "iusto",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "ex",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "dicta",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
                      errorMessage: "accusantium",
                      lastRefreshTime: "omnis",
                      state: "DATA_EXECUTION_STATE_UNSPECIFIED",
                    },
                    dataSourceId: "et",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 4368752525937723844,
                        dataSourceColumnReference: {
                          name: "aut",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_ON_OR_AFTER",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "ut",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "repellendus",
                            "officia",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 4185144460247541412,
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_AFTER",
                            values: [
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "et",
                              },
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "ea",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "nulla",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 7037851714190682247,
                        dataSourceColumnReference: {
                          name: "et",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_EQ",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "et",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "facere",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "labore",
                            "consequuntur",
                            "magni",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "minima",
                        },
                        groupLimit: {
                          applyOrder: 5068946025575222205,
                          countLimit: 5765494381449086390,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            end: 78.099998,
                            interval: 35.200001,
                            start: 37.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "magnam",
                                    type: "REF",
                                  },
                                  formulaValue: "est",
                                  numberValue: 22.100000,
                                  stringValue: "dolores",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quia",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "necessitatibus",
                                    numberValue: 22.200001,
                                    stringValue: "voluptatum",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "accusamus",
                                      type: "NAME",
                                    },
                                    formulaValue: "hic",
                                    numberValue: 22.200001,
                                    stringValue: "qui",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "voluptatum",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 4124892222683752088,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "autem",
                                type: "NAME",
                              },
                              formulaValue: "expedita",
                              numberValue: 75.199997,
                              stringValue: "corrupti",
                            },
                          ],
                          valuesIndex: 2036247632517127222,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "unde",
                                type: "NUM",
                              },
                              formulaValue: "dolorem",
                              numberValue: 34.099998,
                              stringValue: "voluptatem",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 8295224243741764045,
                      endRowIndex: 5153945685827007711,
                      sheetId: 1646693402247038180,
                      startColumnIndex: 6937453378281318392,
                      startRowIndex: 8730819154048940708,
                    },
                    valueLayout: "VERTICAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "natus",
                        },
                        formula: "nesciunt",
                        name: "reiciendis",
                        sourceColumnOffset: 8935997412765440927,
                        summarizeFunction: "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_ROW_TOTAL",
                        dataSourceColumnReference: {
                          name: "est",
                        },
                        formula: "quisquam",
                        name: "sapiente",
                        sourceColumnOffset: 6062418935712502670,
                        summarizeFunction: "COUNTA",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_GRAND_TOTAL",
                        dataSourceColumnReference: {
                          name: "necessitatibus",
                        },
                        formula: "sit",
                        name: "minima",
                        sourceColumnOffset: 2719101028363560582,
                        summarizeFunction: "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: false,
                        fontFamily: "sint",
                        fontSize: 7968832288895881957,
                        foregroundColor: {
                          alpha: 79.099998,
                          blue: 85.199997,
                          green: 76.199997,
                          red: 91.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 38.099998,
                            blue: 45.099998,
                            green: 27.200001,
                            red: 39.200001,
                          },
                          themeColor: "LINK",
                        },
                        italic: true,
                        link: {
                          uri: "inventore",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 4604726166308333701,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "quae",
                        fontSize: 5679422250428121759,
                        foregroundColor: {
                          alpha: 26.200001,
                          blue: 36.099998,
                          green: 4.200000,
                          red: 55.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 83.199997,
                            blue: 63.099998,
                            green: 35.200001,
                            red: 82.199997,
                          },
                          themeColor: "ACCENT3",
                        },
                        italic: true,
                        link: {
                          uri: "nam",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 2295949590270851158,
                    },
                    {
                      format: {
                        bold: false,
                        fontFamily: "dolorem",
                        fontSize: 2214011053113931459,
                        foregroundColor: {
                          alpha: 80.199997,
                          blue: 63.200001,
                          green: 42.099998,
                          red: 64.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 81.199997,
                            blue: 89.099998,
                            green: 44.099998,
                            red: 74.099998,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        italic: true,
                        link: {
                          uri: "veniam",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 8735932067059293336,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 73.199997,
                      blue: 21.100000,
                      green: 50.200001,
                      red: 65.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 87.099998,
                        blue: 16.100000,
                        green: 69.199997,
                        red: 9.200000,
                      },
                      themeColor: "ACCENT1",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 99.099998,
                          blue: 15.100000,
                          green: 23.100000,
                          red: 29.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 74.099998,
                            blue: 66.199997,
                            green: 11.200000,
                            red: 54.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID",
                        width: 3890714246198524517,
                      },
                      left: {
                        color: {
                          alpha: 42.200001,
                          blue: 30.200001,
                          green: 64.099998,
                          red: 96.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 81.099998,
                            blue: 40.200001,
                            green: 73.099998,
                            red: 41.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 124759825235513475,
                      },
                      right: {
                        color: {
                          alpha: 21.200001,
                          blue: 57.099998,
                          green: 52.099998,
                          red: 4.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 12.100000,
                            blue: 44.099998,
                            green: 48.200001,
                            red: 67.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "DOTTED",
                        width: 5693746468254817719,
                      },
                      top: {
                        color: {
                          alpha: 93.099998,
                          blue: 8.200000,
                          green: 52.200001,
                          red: 53.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 41.200001,
                            blue: 10.200000,
                            green: 47.099998,
                            red: 75.199997,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID_MEDIUM",
                        width: 8350058416603499165,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "laudantium",
                      type: "NUMBER",
                    },
                    padding: {
                      bottom: 1406512471521507546,
                      left: 6942987647630446413,
                      right: 5908337222956027252,
                      top: 8913204167716900328,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "sed",
                      fontSize: 6001330658389876542,
                      foregroundColor: {
                        alpha: 13.100000,
                        blue: 62.200001,
                        green: 19.200001,
                        red: 16.100000,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 77.199997,
                          blue: 40.099998,
                          green: 50.200001,
                          red: 64.199997,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: false,
                      link: {
                        uri: "dolorem",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 2656054127728525617,
                      vertical: false,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "corporis",
                      type: "REF",
                    },
                    formulaValue: "quia",
                    numberValue: 94.099998,
                    stringValue: "beatae",
                  },
                },
              ],
            },
          ],
          sheetId: 5214741030275331448,
        },
        appendDimension: {
          dimension: "COLUMNS",
          length: 8700474832317492355,
          sheetId: 7714401566996893252,
        },
        autoFill: {
          range: {
            endColumnIndex: 9063224583443772924,
            endRowIndex: 8988587117643156451,
            sheetId: 7697402263463701205,
            startColumnIndex: 5959172312635858786,
            startRowIndex: 3253122572973980620,
          },
          sourceAndDestination: {
            dimension: "DIMENSION_UNSPECIFIED",
            fillLength: 3346820605348510913,
            source: {
              endColumnIndex: 8286931118020464737,
              endRowIndex: 2193826564475046135,
              sheetId: 5680690013461033483,
              startColumnIndex: 8374777583758086313,
              startRowIndex: 786616351086842468,
            },
          },
          useAlternateSeries: true,
        },
        autoResizeDimensions: {
          dataSourceSheetDimensions: {
            columnReferences: [
              {
                name: "quidem",
              },
              {
                name: "neque",
              },
              {
                name: "qui",
              },
            ],
            sheetId: 8182977132603541671,
          },
          dimensions: {
            dimension: "ROWS",
            endIndex: 5165160156878613065,
            sheetId: 1359069636741174088,
            startIndex: 2368640716446897233,
          },
        },
        clearBasicFilter: {
          sheetId: 1384780352918292486,
        },
        copyPaste: {
          destination: {
            endColumnIndex: 5257708925314417139,
            endRowIndex: 4353049301357989704,
            sheetId: 3914356547158244216,
            startColumnIndex: 5352339082516965104,
            startRowIndex: 9219662838636684259,
          },
          pasteOrientation: "NORMAL",
          pasteType: "PASTE_CONDITIONAL_FORMATTING",
          source: {
            endColumnIndex: 1449083678183296406,
            endRowIndex: 2217069416886225372,
            sheetId: 817109643311751088,
            startColumnIndex: 7471345388899752210,
            startRowIndex: 3845698244465354362,
          },
        },
        createDeveloperMetadata: {
          developerMetadata: {
            location: {
              dimensionRange: {
                dimension: "DIMENSION_UNSPECIFIED",
                endIndex: 1155790306709263138,
                sheetId: 1290762731677787192,
                startIndex: 5043108603079181342,
              },
              locationType: "COLUMN",
              sheetId: 3553449099489309796,
              spreadsheet: false,
            },
            metadataId: 2665844841272408719,
            metadataKey: "ex",
            metadataValue: "reiciendis",
            visibility: "DOCUMENT",
          },
        },
        cutPaste: {
          destination: {
            columnIndex: 3986039078823277720,
            rowIndex: 6374235193036887286,
            sheetId: 7929970316359671389,
          },
          pasteType: "PASTE_CONDITIONAL_FORMATTING",
          source: {
            endColumnIndex: 8529298842072083246,
            endRowIndex: 5508957555759651347,
            sheetId: 26670281468749313,
            startColumnIndex: 2309747595901914187,
            startRowIndex: 6733439016359139463,
          },
        },
        deleteBanding: {
          bandedRangeId: 2025342305491962991,
        },
        deleteConditionalFormatRule: {
          index: 4522946116077982336,
          sheetId: 8093973887695790151,
        },
        deleteDataSource: {
          dataSourceId: "maxime",
        },
        deleteDeveloperMetadata: {
          dataFilter: {
            a1Range: "officiis",
            developerMetadataLookup: {
              locationMatchingStrategy: "INTERSECTING_LOCATION",
              locationType: "COLUMN",
              metadataId: 542560086280721840,
              metadataKey: "nulla",
              metadataLocation: {
                dimensionRange: {
                  dimension: "ROWS",
                  endIndex: 6752280048279589453,
                  sheetId: 7731191636657916187,
                  startIndex: 6468400270323663053,
                },
                locationType: "ROW",
                sheetId: 2119192816424072799,
                spreadsheet: false,
              },
              metadataValue: "voluptatem",
              visibility: "PROJECT",
            },
            gridRange: {
              endColumnIndex: 6724147866005901214,
              endRowIndex: 1631523516888540578,
              sheetId: 4089323600895979067,
              startColumnIndex: 9059464668591891847,
              startRowIndex: 7353598695793809203,
            },
          },
        },
        deleteDimension: {
          range: {
            dimension: "DIMENSION_UNSPECIFIED",
            endIndex: 3926766767977956848,
            sheetId: 1722398022248478753,
            startIndex: 4906512043911696728,
          },
        },
        deleteDimensionGroup: {
          range: {
            dimension: "COLUMNS",
            endIndex: 8148302844981270498,
            sheetId: 3707361162421208230,
            startIndex: 8335896058156057471,
          },
        },
        deleteDuplicates: {
          comparisonColumns: [
            {
              dimension: "ROWS",
              endIndex: 9124619331069701981,
              sheetId: 6736003834916118446,
              startIndex: 8638442923286442776,
            },
            {
              dimension: "ROWS",
              endIndex: 3572868619784992941,
              sheetId: 8095275691201054826,
              startIndex: 3699419281515524350,
            },
            {
              dimension: "ROWS",
              endIndex: 677452701472373389,
              sheetId: 5833099620155982566,
              startIndex: 1346059111277719372,
            },
          ],
          range: {
            endColumnIndex: 3200509029640629853,
            endRowIndex: 3383721476289125458,
            sheetId: 7726018966101336873,
            startColumnIndex: 4244233684330027261,
            startRowIndex: 4351694784131093114,
          },
        },
        deleteEmbeddedObject: {
          objectId: 8904836991509114472,
        },
        deleteFilterView: {
          filterId: 5387118939457911986,
        },
        deleteNamedRange: {
          namedRangeId: "laboriosam",
        },
        deleteProtectedRange: {
          protectedRangeId: 5715711112548524826,
        },
        deleteRange: {
          range: {
            endColumnIndex: 7115206260931020669,
            endRowIndex: 269738456476465405,
            sheetId: 4443151466180160316,
            startColumnIndex: 259079023935328110,
            startRowIndex: 3076918376191779431,
          },
          shiftDimension: "COLUMNS",
        },
        deleteSheet: {
          sheetId: 8950696452382021368,
        },
        duplicateFilterView: {
          filterId: 4604418387048071497,
        },
        duplicateSheet: {
          insertSheetIndex: 9175994594749083671,
          newSheetId: 2891167517250963771,
          newSheetName: "et",
          sourceSheetId: 6201779034112268058,
        },
        findReplace: {
          allSheets: true,
          find: "numquam",
          includeFormulas: true,
          matchCase: false,
          matchEntireCell: true,
          range: {
            endColumnIndex: 1859198245871584525,
            endRowIndex: 5576063394388699331,
            sheetId: 3082052186510561508,
            startColumnIndex: 7615721021585998498,
            startRowIndex: 8274114860989525826,
          },
          replacement: "et",
          searchByRegex: false,
          sheetId: 3537417674123988924,
        },
        insertDimension: {
          inheritFromBefore: true,
          range: {
            dimension: "COLUMNS",
            endIndex: 3517461471411092302,
            sheetId: 5327684503544071434,
            startIndex: 402809262316508577,
          },
        },
        insertRange: {
          range: {
            endColumnIndex: 6469808993174712878,
            endRowIndex: 8913143418439467679,
            sheetId: 7219505888825369219,
            startColumnIndex: 864282357668987080,
            startRowIndex: 7478980865905211729,
          },
          shiftDimension: "COLUMNS",
        },
        mergeCells: {
          mergeType: "MERGE_ROWS",
          range: {
            endColumnIndex: 1936432533009990744,
            endRowIndex: 2043823860374056462,
            sheetId: 133157271086544966,
            startColumnIndex: 359996096195846066,
            startRowIndex: 4901431483932579562,
          },
        },
        moveDimension: {
          destinationIndex: 1756913638459133820,
          source: {
            dimension: "COLUMNS",
            endIndex: 7976216388315960619,
            sheetId: 7782340632832167257,
            startIndex: 7727793097804693297,
          },
        },
        pasteData: {
          coordinate: {
            columnIndex: 7354725956886814588,
            rowIndex: 8931774806599788442,
            sheetId: 2088293413783572767,
          },
          data: "quo",
          delimiter: "error",
          html: false,
          type: "PASTE_DATA_VALIDATION",
        },
        randomizeRange: {
          range: {
            endColumnIndex: 88906127468293795,
            endRowIndex: 824818557473970967,
            sheetId: 2537660340158744879,
            startColumnIndex: 7515335467021667958,
            startRowIndex: 257416497730283408,
          },
        },
        refreshDataSource: {
          dataSourceId: "dolor",
          force: false,
          isAll: false,
          references: {
            references: [
              {
                chartId: 8156917464137458806,
                dataSourceFormulaCell: {
                  columnIndex: 4844157820106864634,
                  rowIndex: 3109604296608114443,
                  sheetId: 3860863872852855800,
                },
                dataSourcePivotTableAnchorCell: {
                  columnIndex: 5110724861671168246,
                  rowIndex: 3615188629769580640,
                  sheetId: 2380683085597594969,
                },
                dataSourceTableAnchorCell: {
                  columnIndex: 7513006371661104448,
                  rowIndex: 2278594238211850191,
                  sheetId: 7971836334344524755,
                },
                sheetId: "temporibus",
              },
              {
                chartId: 1912067722374913570,
                dataSourceFormulaCell: {
                  columnIndex: 5489851371512461611,
                  rowIndex: 419804526315136012,
                  sheetId: 3849927903457585533,
                },
                dataSourcePivotTableAnchorCell: {
                  columnIndex: 8803614335158626023,
                  rowIndex: 741769367000926467,
                  sheetId: 1449205959781050878,
                },
                dataSourceTableAnchorCell: {
                  columnIndex: 8376329121340950014,
                  rowIndex: 8138318202517564615,
                  sheetId: 86974505241189709,
                },
                sheetId: "itaque",
              },
              {
                chartId: 2750040754916684030,
                dataSourceFormulaCell: {
                  columnIndex: 8037905966251217191,
                  rowIndex: 1732075542729911624,
                  sheetId: 4664256724045849075,
                },
                dataSourcePivotTableAnchorCell: {
                  columnIndex: 1785210882773969056,
                  rowIndex: 1447397445473663540,
                  sheetId: 5434703826655439229,
                },
                dataSourceTableAnchorCell: {
                  columnIndex: 2943156259075776780,
                  rowIndex: 8362589665573382942,
                  sheetId: 5291227005314717206,
                },
                sheetId: "voluptas",
              },
            ],
          },
        },
        repeatCell: {
          cell: {
            dataSourceFormula: {
              dataExecutionStatus: {
                errorCode: "PARAMETER_INVALID",
                errorMessage: "ipsam",
                lastRefreshTime: "blanditiis",
                state: "DATA_EXECUTION_STATE_UNSPECIFIED",
              },
              dataSourceId: "iure",
            },
            dataSourceTable: {
              columnSelectionType: "SELECTED",
              columns: [
                {
                  name: "quaerat",
                },
                {
                  name: "et",
                },
              ],
              dataExecutionStatus: {
                errorCode: "DUPLICATE_COLUMN_NAMES",
                errorMessage: "delectus",
                lastRefreshTime: "qui",
                state: "FAILED",
              },
              dataSourceId: "in",
              filterSpecs: [
                {
                  columnIndex: 5809984632676428705,
                  dataSourceColumnReference: {
                    name: "placeat",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_GREATER",
                      values: [
                        {
                          relativeDate: "TODAY",
                          userEnteredValue: "quia",
                        },
                      ],
                    },
                    hiddenValues: [
                      "non",
                    ],
                    visibleBackgroundColor: {
                      alpha: 22.100000,
                      blue: 32.099998,
                      green: 5.200000,
                      red: 68.099998,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 29.100000,
                        blue: 52.099998,
                        green: 90.099998,
                        red: 0.200000,
                      },
                      themeColor: "TEXT",
                    },
                    visibleForegroundColor: {
                      alpha: 72.099998,
                      blue: 44.099998,
                      green: 94.199997,
                      red: 4.100000,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 54.200001,
                        blue: 13.100000,
                        green: 92.199997,
                        red: 71.199997,
                      },
                      themeColor: "ACCENT4",
                    },
                  },
                },
                {
                  columnIndex: 4352497372475532715,
                  dataSourceColumnReference: {
                    name: "eum",
                  },
                  filterCriteria: {
                    condition: {
                      type: "TEXT_ENDS_WITH",
                      values: [
                        {
                          relativeDate: "YESTERDAY",
                          userEnteredValue: "vero",
                        },
                      ],
                    },
                    hiddenValues: [
                      "maxime",
                    ],
                    visibleBackgroundColor: {
                      alpha: 34.200001,
                      blue: 32.099998,
                      green: 25.100000,
                      red: 68.199997,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 97.099998,
                        blue: 50.200001,
                        green: 36.200001,
                        red: 67.199997,
                      },
                      themeColor: "ACCENT5",
                    },
                    visibleForegroundColor: {
                      alpha: 77.099998,
                      blue: 3.100000,
                      green: 11.100000,
                      red: 16.100000,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 7.200000,
                        blue: 96.099998,
                        green: 36.099998,
                        red: 68.099998,
                      },
                      themeColor: "ACCENT6",
                    },
                  },
                },
              ],
              rowLimit: 6904880127112553315,
              sortSpecs: [
                {
                  backgroundColor: {
                    alpha: 46.200001,
                    blue: 34.200001,
                    green: 85.199997,
                    red: 41.200001,
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      alpha: 71.199997,
                      blue: 57.099998,
                      green: 46.099998,
                      red: 97.099998,
                    },
                    themeColor: "ACCENT3",
                  },
                  dataSourceColumnReference: {
                    name: "debitis",
                  },
                  dimensionIndex: 2269805948242945329,
                  foregroundColor: {
                    alpha: 56.200001,
                    blue: 49.099998,
                    green: 16.100000,
                    red: 62.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 85.199997,
                      blue: 13.200000,
                      green: 98.099998,
                      red: 37.200001,
                    },
                    themeColor: "ACCENT4",
                  },
                  sortOrder: "SORT_ORDER_UNSPECIFIED",
                },
              ],
            },
            dataValidation: {
              condition: {
                type: "NUMBER_GREATER",
                values: [
                  {
                    relativeDate: "PAST_YEAR",
                    userEnteredValue: "dolore",
                  },
                ],
              },
              inputMessage: "corporis",
              showCustomUi: true,
              strict: false,
            },
            effectiveFormat: {
              backgroundColor: {
                alpha: 58.200001,
                blue: 81.099998,
                green: 33.099998,
                red: 1.100000,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 22.100000,
                  blue: 33.099998,
                  green: 87.199997,
                  red: 52.099998,
                },
                themeColor: "BACKGROUND",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 93.199997,
                    blue: 63.200001,
                    green: 76.199997,
                    red: 36.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 95.099998,
                      blue: 78.099998,
                      green: 84.099998,
                      red: 81.199997,
                    },
                    themeColor: "TEXT",
                  },
                  style: "DOUBLE",
                  width: 5687985355731498002,
                },
                left: {
                  color: {
                    alpha: 92.199997,
                    blue: 41.200001,
                    green: 40.200001,
                    red: 71.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 14.200000,
                      blue: 2.100000,
                      green: 14.100000,
                      red: 98.199997,
                    },
                    themeColor: "TEXT",
                  },
                  style: "DOUBLE",
                  width: 3994777511219264198,
                },
                right: {
                  color: {
                    alpha: 10.100000,
                    blue: 79.199997,
                    green: 9.200000,
                    red: 88.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 46.099998,
                      blue: 35.099998,
                      green: 64.099998,
                      red: 71.199997,
                    },
                    themeColor: "ACCENT2",
                  },
                  style: "DOUBLE",
                  width: 7816207384337928056,
                },
                top: {
                  color: {
                    alpha: 37.099998,
                    blue: 2.100000,
                    green: 76.199997,
                    red: 92.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 26.200001,
                      blue: 87.099998,
                      green: 56.099998,
                      red: 52.200001,
                    },
                    themeColor: "ACCENT5",
                  },
                  style: "SOLID",
                  width: 6412473895064264019,
                },
              },
              horizontalAlignment: "LEFT",
              hyperlinkDisplayType: "LINKED",
              numberFormat: {
                pattern: "perspiciatis",
                type: "TEXT",
              },
              padding: {
                bottom: 4297120505213347199,
                left: 2062440643660660936,
                right: 2348090202889440123,
                top: 5367813680244948468,
              },
              textDirection: "TEXT_DIRECTION_UNSPECIFIED",
              textFormat: {
                bold: true,
                fontFamily: "saepe",
                fontSize: 336761824517969319,
                foregroundColor: {
                  alpha: 91.199997,
                  blue: 72.199997,
                  green: 66.099998,
                  red: 79.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 59.200001,
                    blue: 93.199997,
                    green: 32.200001,
                    red: 36.200001,
                  },
                  themeColor: "LINK",
                },
                italic: true,
                link: {
                  uri: "sit",
                },
                strikethrough: false,
                underline: false,
              },
              textRotation: {
                angle: 837956011097427003,
                vertical: true,
              },
              verticalAlignment: "TOP",
              wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
            },
            effectiveValue: {
              boolValue: false,
              errorValue: {
                message: "illo",
                type: "VALUE",
              },
              formulaValue: "culpa",
              numberValue: 92.099998,
              stringValue: "id",
            },
            formattedValue: "est",
            hyperlink: "architecto",
            note: "officiis",
            pivotTable: {
              columns: [
                {
                  dataSourceColumnReference: {
                    name: "officiis",
                  },
                  groupLimit: {
                    applyOrder: 6142996996016488958,
                    countLimit: 7938884131674045195,
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "SECOND",
                    },
                    histogramRule: {
                      end: 76.099998,
                      interval: 93.199997,
                      start: 9.100000,
                    },
                    manualRule: {
                      groups: [
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "autem",
                              type: "DIVIDE_BY_ZERO",
                            },
                            formulaValue: "illo",
                            numberValue: 10.100000,
                            stringValue: "aut",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "minus",
                                type: "NAME",
                              },
                              formulaValue: "rerum",
                              numberValue: 99.199997,
                              stringValue: "incidunt",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "et",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "distinctio",
                              numberValue: 3.200000,
                              stringValue: "omnis",
                            },
                          ],
                        },
                        {
                          groupName: {
                            boolValue: false,
                            errorValue: {
                              message: "ea",
                              type: "NAME",
                            },
                            formulaValue: "soluta",
                            numberValue: 18.200001,
                            stringValue: "veritatis",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "rerum",
                                type: "VALUE",
                              },
                              formulaValue: "qui",
                              numberValue: 13.200000,
                              stringValue: "quia",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  label: "dolorem",
                  repeatHeadings: false,
                  showTotals: true,
                  sortOrder: "DESCENDING",
                  sourceColumnOffset: 5881477720409806705,
                  valueBucket: {
                    buckets: [
                      {
                        boolValue: true,
                        errorValue: {
                          message: "doloribus",
                          type: "ERROR_TYPE_UNSPECIFIED",
                        },
                        formulaValue: "molestias",
                        numberValue: 10.100000,
                        stringValue: "officia",
                      },
                      {
                        boolValue: true,
                        errorValue: {
                          message: "fugiat",
                          type: "NUM",
                        },
                        formulaValue: "odio",
                        numberValue: 77.199997,
                        stringValue: "et",
                      },
                    ],
                    valuesIndex: 7546275643410254773,
                  },
                  valueMetadata: [
                    {
                      collapsed: false,
                      value: {
                        boolValue: false,
                        errorValue: {
                          message: "repudiandae",
                          type: "REF",
                        },
                        formulaValue: "nesciunt",
                        numberValue: 75.199997,
                        stringValue: "ullam",
                      },
                    },
                    {
                      collapsed: false,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "et",
                          type: "ERROR",
                        },
                        formulaValue: "nam",
                        numberValue: 31.100000,
                        stringValue: "nesciunt",
                      },
                    },
                  ],
                },
              ],
              criteria: {
                "in": {
                  condition: {
                    type: "BLANK",
                    values: [
                      {
                        relativeDate: "YESTERDAY",
                        userEnteredValue: "debitis",
                      },
                    ],
                  },
                  visibleByDefault: true,
                  visibleValues: [
                    "sint",
                    "optio",
                  ],
                },
                "aut": {
                  condition: {
                    type: "ONE_OF_RANGE",
                    values: [
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "eaque",
                      },
                    ],
                  },
                  visibleByDefault: true,
                  visibleValues: [
                    "tempore",
                    "dignissimos",
                    "nihil",
                  ],
                },
              },
              dataExecutionStatus: {
                errorCode: "TOO_MANY_COLUMNS",
                errorMessage: "excepturi",
                lastRefreshTime: "ut",
                state: "FAILED",
              },
              dataSourceId: "dolorum",
              filterSpecs: [
                {
                  columnOffsetIndex: 8197449622567197998,
                  dataSourceColumnReference: {
                    name: "qui",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_LESS_THAN_EQ",
                      values: [
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "incidunt",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "ratione",
                        },
                        {
                          relativeDate: "YESTERDAY",
                          userEnteredValue: "repudiandae",
                        },
                      ],
                    },
                    visibleByDefault: true,
                    visibleValues: [
                      "rem",
                    ],
                  },
                },
                {
                  columnOffsetIndex: 6320730352734787749,
                  dataSourceColumnReference: {
                    name: "aliquam",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_GREATER_THAN_EQ",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "eius",
                        },
                      ],
                    },
                    visibleByDefault: true,
                    visibleValues: [
                      "et",
                    ],
                  },
                },
              ],
              rows: [
                {
                  dataSourceColumnReference: {
                    name: "quia",
                  },
                  groupLimit: {
                    applyOrder: 6797195475354688537,
                    countLimit: 2720164798316729323,
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR",
                    },
                    histogramRule: {
                      end: 59.099998,
                      interval: 39.200001,
                      start: 55.099998,
                    },
                    manualRule: {
                      groups: [
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "et",
                              type: "ERROR",
                            },
                            formulaValue: "voluptatem",
                            numberValue: 65.199997,
                            stringValue: "incidunt",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "quam",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "debitis",
                              numberValue: 43.200001,
                              stringValue: "ut",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "omnis",
                                type: "REF",
                              },
                              formulaValue: "tempora",
                              numberValue: 26.100000,
                              stringValue: "magnam",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "blanditiis",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "consectetur",
                              numberValue: 44.099998,
                              stringValue: "saepe",
                            },
                          ],
                        },
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "sunt",
                              type: "NAME",
                            },
                            formulaValue: "nulla",
                            numberValue: 90.199997,
                            stringValue: "qui",
                          },
                          items: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "sed",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "quis",
                              numberValue: 60.200001,
                              stringValue: "accusantium",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "eum",
                                type: "ERROR",
                              },
                              formulaValue: "voluptatem",
                              numberValue: 31.100000,
                              stringValue: "et",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  label: "est",
                  repeatHeadings: false,
                  showTotals: false,
                  sortOrder: "SORT_ORDER_UNSPECIFIED",
                  sourceColumnOffset: 2099843909004544925,
                  valueBucket: {
                    buckets: [
                      {
                        boolValue: false,
                        errorValue: {
                          message: "ipsum",
                          type: "ERROR_TYPE_UNSPECIFIED",
                        },
                        formulaValue: "cum",
                        numberValue: 64.099998,
                        stringValue: "voluptatem",
                      },
                      {
                        boolValue: false,
                        errorValue: {
                          message: "ea",
                          type: "ERROR_TYPE_UNSPECIFIED",
                        },
                        formulaValue: "sapiente",
                        numberValue: 18.100000,
                        stringValue: "suscipit",
                      },
                      {
                        boolValue: true,
                        errorValue: {
                          message: "doloremque",
                          type: "NUM",
                        },
                        formulaValue: "ad",
                        numberValue: 25.200001,
                        stringValue: "et",
                      },
                    ],
                    valuesIndex: 2904812970758013037,
                  },
                  valueMetadata: [
                    {
                      collapsed: true,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "odio",
                          type: "LOADING",
                        },
                        formulaValue: "quo",
                        numberValue: 21.100000,
                        stringValue: "rerum",
                      },
                    },
                    {
                      collapsed: false,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "ipsam",
                          type: "REF",
                        },
                        formulaValue: "sunt",
                        numberValue: 24.200001,
                        stringValue: "quo",
                      },
                    },
                  ],
                },
              ],
              source: {
                endColumnIndex: 8849183510342938086,
                endRowIndex: 2361137056052147998,
                sheetId: 4446458173921767115,
                startColumnIndex: 4233244489888320999,
                startRowIndex: 3698700790902195148,
              },
              valueLayout: "HORIZONTAL",
              values: [
                {
                  calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                  dataSourceColumnReference: {
                    name: "quas",
                  },
                  formula: "odio",
                  name: "perferendis",
                  sourceColumnOffset: 3158635401585806345,
                  summarizeFunction: "COUNTUNIQUE",
                },
                {
                  calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                  dataSourceColumnReference: {
                    name: "quos",
                  },
                  formula: "sunt",
                  name: "occaecati",
                  sourceColumnOffset: 8304572275262526400,
                  summarizeFunction: "COUNTA",
                },
                {
                  calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                  dataSourceColumnReference: {
                    name: "voluptates",
                  },
                  formula: "necessitatibus",
                  name: "totam",
                  sourceColumnOffset: 1329783785750491306,
                  summarizeFunction: "MIN",
                },
              ],
            },
            textFormatRuns: [
              {
                format: {
                  bold: true,
                  fontFamily: "aut",
                  fontSize: 7649719169732311041,
                  foregroundColor: {
                    alpha: 39.200001,
                    blue: 40.099998,
                    green: 45.099998,
                    red: 29.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 64.199997,
                      blue: 0.100000,
                      green: 6.100000,
                      red: 71.099998,
                    },
                    themeColor: "BACKGROUND",
                  },
                  italic: true,
                  link: {
                    uri: "non",
                  },
                  strikethrough: false,
                  underline: false,
                },
                startIndex: 2015950139856032311,
              },
              {
                format: {
                  bold: false,
                  fontFamily: "aut",
                  fontSize: 1814978640069239714,
                  foregroundColor: {
                    alpha: 62.099998,
                    blue: 96.199997,
                    green: 40.099998,
                    red: 37.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 54.200001,
                      blue: 14.100000,
                      green: 36.200001,
                      red: 77.199997,
                    },
                    themeColor: "ACCENT6",
                  },
                  italic: false,
                  link: {
                    uri: "et",
                  },
                  strikethrough: true,
                  underline: true,
                },
                startIndex: 6328015658306728769,
              },
            ],
            userEnteredFormat: {
              backgroundColor: {
                alpha: 99.099998,
                blue: 0.200000,
                green: 6.200000,
                red: 75.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 7.100000,
                  blue: 59.099998,
                  green: 38.099998,
                  red: 72.199997,
                },
                themeColor: "BACKGROUND",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 20.200001,
                    blue: 75.099998,
                    green: 76.099998,
                    red: 42.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 15.200000,
                      blue: 64.099998,
                      green: 38.099998,
                      red: 75.199997,
                    },
                    themeColor: "ACCENT5",
                  },
                  style: "NONE",
                  width: 2926311912336699736,
                },
                left: {
                  color: {
                    alpha: 54.099998,
                    blue: 74.099998,
                    green: 70.199997,
                    red: 95.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 86.099998,
                      blue: 84.099998,
                      green: 61.200001,
                      red: 62.200001,
                    },
                    themeColor: "TEXT",
                  },
                  style: "SOLID_MEDIUM",
                  width: 7195745595083493299,
                },
                right: {
                  color: {
                    alpha: 30.100000,
                    blue: 12.100000,
                    green: 63.099998,
                    red: 59.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 50.200001,
                      blue: 69.099998,
                      green: 90.199997,
                      red: 66.199997,
                    },
                    themeColor: "TEXT",
                  },
                  style: "DOUBLE",
                  width: 3778572643604528969,
                },
                top: {
                  color: {
                    alpha: 42.200001,
                    blue: 10.100000,
                    green: 73.099998,
                    red: 52.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 70.099998,
                      blue: 10.100000,
                      green: 16.200001,
                      red: 72.199997,
                    },
                    themeColor: "ACCENT1",
                  },
                  style: "DASHED",
                  width: 8716268311825613191,
                },
              },
              horizontalAlignment: "RIGHT",
              hyperlinkDisplayType: "PLAIN_TEXT",
              numberFormat: {
                pattern: "impedit",
                type: "NUMBER",
              },
              padding: {
                bottom: 6907963448640257873,
                left: 166226419661205770,
                right: 3576248506052239736,
                top: 6492411819884644269,
              },
              textDirection: "RIGHT_TO_LEFT",
              textFormat: {
                bold: true,
                fontFamily: "ipsum",
                fontSize: 1577330414938520799,
                foregroundColor: {
                  alpha: 52.200001,
                  blue: 19.200001,
                  green: 36.099998,
                  red: 42.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 5.200000,
                    blue: 58.099998,
                    green: 75.199997,
                    red: 88.099998,
                  },
                  themeColor: "BACKGROUND",
                },
                italic: false,
                link: {
                  uri: "vel",
                },
                strikethrough: false,
                underline: false,
              },
              textRotation: {
                angle: 9048345091140611402,
                vertical: true,
              },
              verticalAlignment: "TOP",
              wrapStrategy: "OVERFLOW_CELL",
            },
            userEnteredValue: {
              boolValue: false,
              errorValue: {
                message: "numquam",
                type: "DIVIDE_BY_ZERO",
              },
              formulaValue: "molestias",
              numberValue: 76.099998,
              stringValue: "officiis",
            },
          },
          fields: "quis",
          range: {
            endColumnIndex: 6127012923469462999,
            endRowIndex: 7933638110392895026,
            sheetId: 4817093685673733413,
            startColumnIndex: 1017502079048302803,
            startRowIndex: 7894807693400963234,
          },
        },
        setBasicFilter: {
          filter: {
            criteria: {
              "earum": {
                condition: {
                  type: "TEXT_NOT_CONTAINS",
                  values: [
                    {
                      relativeDate: "PAST_YEAR",
                      userEnteredValue: "impedit",
                    },
                    {
                      relativeDate: "TODAY",
                      userEnteredValue: "dolorem",
                    },
                  ],
                },
                hiddenValues: [
                  "dolores",
                  "minus",
                ],
                visibleBackgroundColor: {
                  alpha: 20.200001,
                  blue: 83.099998,
                  green: 32.200001,
                  red: 79.199997,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 16.200001,
                    blue: 24.200001,
                    green: 27.100000,
                    red: 92.099998,
                  },
                  themeColor: "BACKGROUND",
                },
                visibleForegroundColor: {
                  alpha: 0.100000,
                  blue: 72.199997,
                  green: 80.199997,
                  red: 33.200001,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 54.099998,
                    blue: 24.200001,
                    green: 98.199997,
                    red: 48.200001,
                  },
                  themeColor: "BACKGROUND",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 2281690264087391808,
                dataSourceColumnReference: {
                  name: "qui",
                },
                filterCriteria: {
                  condition: {
                    type: "TEXT_IS_URL",
                    values: [
                      {
                        relativeDate: "YESTERDAY",
                        userEnteredValue: "aliquid",
                      },
                    ],
                  },
                  hiddenValues: [
                    "et",
                  ],
                  visibleBackgroundColor: {
                    alpha: 97.099998,
                    blue: 4.100000,
                    green: 65.199997,
                    red: 45.200001,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 24.200001,
                      blue: 71.099998,
                      green: 13.200000,
                      red: 66.099998,
                    },
                    themeColor: "BACKGROUND",
                  },
                  visibleForegroundColor: {
                    alpha: 98.199997,
                    blue: 29.100000,
                    green: 17.100000,
                    red: 74.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 35.200001,
                      blue: 37.099998,
                      green: 68.099998,
                      red: 33.099998,
                    },
                    themeColor: "BACKGROUND",
                  },
                },
              },
              {
                columnIndex: 2862405057467772927,
                dataSourceColumnReference: {
                  name: "id",
                },
                filterCriteria: {
                  condition: {
                    type: "CONDITION_TYPE_UNSPECIFIED",
                    values: [
                      {
                        relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                        userEnteredValue: "ratione",
                      },
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "dolorem",
                      },
                    ],
                  },
                  hiddenValues: [
                    "quam",
                    "similique",
                  ],
                  visibleBackgroundColor: {
                    alpha: 46.099998,
                    blue: 39.200001,
                    green: 81.199997,
                    red: 95.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 26.100000,
                      blue: 82.099998,
                      green: 86.199997,
                      red: 19.200001,
                    },
                    themeColor: "ACCENT3",
                  },
                  visibleForegroundColor: {
                    alpha: 86.199997,
                    blue: 74.199997,
                    green: 82.199997,
                    red: 62.200001,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 5.100000,
                      blue: 67.199997,
                      green: 84.199997,
                      red: 73.199997,
                    },
                    themeColor: "LINK",
                  },
                },
              },
              {
                columnIndex: 9099882476838414617,
                dataSourceColumnReference: {
                  name: "iste",
                },
                filterCriteria: {
                  condition: {
                    type: "TEXT_NOT_EQ",
                    values: [
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "recusandae",
                      },
                    ],
                  },
                  hiddenValues: [
                    "dolor",
                    "et",
                  ],
                  visibleBackgroundColor: {
                    alpha: 73.199997,
                    blue: 19.200001,
                    green: 83.099998,
                    red: 33.200001,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 39.099998,
                      blue: 88.099998,
                      green: 42.099998,
                      red: 49.099998,
                    },
                    themeColor: "ACCENT3",
                  },
                  visibleForegroundColor: {
                    alpha: 11.100000,
                    blue: 86.099998,
                    green: 46.099998,
                    red: 43.200001,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 53.200001,
                      blue: 51.099998,
                      green: 28.100000,
                      red: 27.200001,
                    },
                    themeColor: "ACCENT5",
                  },
                },
              },
            ],
            range: {
              endColumnIndex: 7439858692442666557,
              endRowIndex: 824524748166080670,
              sheetId: 8580682502761093841,
              startColumnIndex: 701898894508640850,
              startRowIndex: 2751744736535476423,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 49.200001,
                  blue: 82.099998,
                  green: 74.099998,
                  red: 88.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 88.099998,
                    blue: 42.099998,
                    green: 97.099998,
                    red: 9.200000,
                  },
                  themeColor: "ACCENT3",
                },
                dataSourceColumnReference: {
                  name: "qui",
                },
                dimensionIndex: 8183168389589906422,
                foregroundColor: {
                  alpha: 13.100000,
                  blue: 48.099998,
                  green: 64.099998,
                  red: 77.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 86.099998,
                    blue: 18.100000,
                    green: 46.200001,
                    red: 24.200001,
                  },
                  themeColor: "ACCENT6",
                },
                sortOrder: "ASCENDING",
              },
              {
                backgroundColor: {
                  alpha: 45.200001,
                  blue: 41.200001,
                  green: 64.199997,
                  red: 21.200001,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 77.199997,
                    blue: 24.200001,
                    green: 23.100000,
                    red: 82.099998,
                  },
                  themeColor: "ACCENT6",
                },
                dataSourceColumnReference: {
                  name: "voluptatem",
                },
                dimensionIndex: 5190066019950648571,
                foregroundColor: {
                  alpha: 29.200001,
                  blue: 5.100000,
                  green: 3.200000,
                  red: 29.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 77.099998,
                    blue: 64.099998,
                    green: 31.200001,
                    red: 28.100000,
                  },
                  themeColor: "ACCENT6",
                },
                sortOrder: "DESCENDING",
              },
            ],
          },
        },
        setDataValidation: {
          range: {
            endColumnIndex: 5900972983291225245,
            endRowIndex: 514787543966566003,
            sheetId: 8185603662923635466,
            startColumnIndex: 2259136108202423282,
            startRowIndex: 3806889358964678924,
          },
          rule: {
            condition: {
              type: "NUMBER_EQ",
              values: [
                {
                  relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                  userEnteredValue: "eligendi",
                },
                {
                  relativeDate: "TOMORROW",
                  userEnteredValue: "facere",
                },
              ],
            },
            inputMessage: "cupiditate",
            showCustomUi: false,
            strict: false,
          },
        },
        sortRange: {
          range: {
            endColumnIndex: 6955065737663598861,
            endRowIndex: 7338232431783090552,
            sheetId: 562327481138915006,
            startColumnIndex: 298484914573966696,
            startRowIndex: 5638864791664948655,
          },
          sortSpecs: [
            {
              backgroundColor: {
                alpha: 74.099998,
                blue: 37.099998,
                green: 92.099998,
                red: 10.100000,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 64.099998,
                  blue: 11.200000,
                  green: 72.199997,
                  red: 52.200001,
                },
                themeColor: "TEXT",
              },
              dataSourceColumnReference: {
                name: "voluptatem",
              },
              dimensionIndex: 2948596533255556025,
              foregroundColor: {
                alpha: 80.099998,
                blue: 49.099998,
                green: 72.099998,
                red: 11.200000,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 61.200001,
                  blue: 81.199997,
                  green: 26.100000,
                  red: 80.099998,
                },
                themeColor: "BACKGROUND",
              },
              sortOrder: "DESCENDING",
            },
            {
              backgroundColor: {
                alpha: 33.099998,
                blue: 32.200001,
                green: 85.099998,
                red: 53.200001,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 97.099998,
                  blue: 15.200000,
                  green: 20.200001,
                  red: 32.200001,
                },
                themeColor: "LINK",
              },
              dataSourceColumnReference: {
                name: "sunt",
              },
              dimensionIndex: 8823581833809063800,
              foregroundColor: {
                alpha: 42.099998,
                blue: 26.100000,
                green: 30.200001,
                red: 62.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 97.099998,
                  blue: 82.099998,
                  green: 45.099998,
                  red: 40.200001,
                },
                themeColor: "ACCENT6",
              },
              sortOrder: "SORT_ORDER_UNSPECIFIED",
            },
          ],
        },
        textToColumns: {
          delimiter: "consequatur",
          delimiterType: "PERIOD",
          source: {
            endColumnIndex: 1090686902839130873,
            endRowIndex: 69612768724626637,
            sheetId: 8638341828438028731,
            startColumnIndex: 4184393512852830502,
            startRowIndex: 4319459977651967885,
          },
        },
        trimWhitespace: {
          range: {
            endColumnIndex: 7968992841230384185,
            endRowIndex: 8821777587975388668,
            sheetId: 5129353790616386598,
            startColumnIndex: 2907491178284787503,
            startRowIndex: 1618668165602884571,
          },
        },
        unmergeCells: {
          range: {
            endColumnIndex: 2410535938557772213,
            endRowIndex: 1319044905680275521,
            sheetId: 3588408024965308396,
            startColumnIndex: 7760505761205459335,
            startRowIndex: 7958873129989168315,
          },
        },
        updateBanding: {
          bandedRange: {
            bandedRangeId: 996574005856641142,
            columnProperties: {
              firstBandColor: {
                alpha: 83.099998,
                blue: 21.200001,
                green: 89.099998,
                red: 46.099998,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 4.200000,
                  blue: 10.100000,
                  green: 54.200001,
                  red: 11.200000,
                },
                themeColor: "ACCENT5",
              },
              footerColor: {
                alpha: 90.199997,
                blue: 44.099998,
                green: 46.099998,
                red: 65.199997,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 6.100000,
                  blue: 29.100000,
                  green: 17.100000,
                  red: 81.099998,
                },
                themeColor: "ACCENT2",
              },
              headerColor: {
                alpha: 79.099998,
                blue: 77.199997,
                green: 44.200001,
                red: 23.100000,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 68.099998,
                  blue: 15.200000,
                  green: 80.199997,
                  red: 95.099998,
                },
                themeColor: "ACCENT6",
              },
              secondBandColor: {
                alpha: 75.099998,
                blue: 30.200001,
                green: 21.100000,
                red: 53.099998,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 94.099998,
                  blue: 56.200001,
                  green: 98.099998,
                  red: 50.099998,
                },
                themeColor: "BACKGROUND",
              },
            },
            range: {
              endColumnIndex: 6622856171419823428,
              endRowIndex: 5427732927359614305,
              sheetId: 1847487330377596112,
              startColumnIndex: 5548941069184210843,
              startRowIndex: 3845995882015670678,
            },
            rowProperties: {
              firstBandColor: {
                alpha: 54.099998,
                blue: 58.200001,
                green: 35.099998,
                red: 45.200001,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 35.099998,
                  blue: 7.200000,
                  green: 51.099998,
                  red: 16.200001,
                },
                themeColor: "ACCENT5",
              },
              footerColor: {
                alpha: 56.200001,
                blue: 98.199997,
                green: 26.200001,
                red: 24.200001,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 40.099998,
                  blue: 27.100000,
                  green: 60.200001,
                  red: 22.200001,
                },
                themeColor: "ACCENT2",
              },
              headerColor: {
                alpha: 66.099998,
                blue: 50.099998,
                green: 87.199997,
                red: 92.199997,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 44.099998,
                  blue: 36.200001,
                  green: 72.199997,
                  red: 39.099998,
                },
                themeColor: "BACKGROUND",
              },
              secondBandColor: {
                alpha: 45.200001,
                blue: 73.099998,
                green: 97.199997,
                red: 47.200001,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 84.099998,
                  blue: 99.199997,
                  green: 45.200001,
                  red: 30.200001,
                },
                themeColor: "ACCENT2",
              },
            },
          },
          fields: "ipsa",
        },
        updateBorders: {
          bottom: {
            color: {
              alpha: 48.200001,
              blue: 36.099998,
              green: 90.199997,
              red: 83.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 18.200001,
                blue: 78.199997,
                green: 35.099998,
                red: 79.099998,
              },
              themeColor: "BACKGROUND",
            },
            style: "DASHED",
            width: 6998726129365965886,
          },
          innerHorizontal: {
            color: {
              alpha: 7.100000,
              blue: 11.200000,
              green: 65.199997,
              red: 29.100000,
            },
            colorStyle: {
              rgbColor: {
                alpha: 90.199997,
                blue: 63.099998,
                green: 23.200001,
                red: 0.200000,
              },
              themeColor: "LINK",
            },
            style: "SOLID_THICK",
            width: 3785795397291873526,
          },
          innerVertical: {
            color: {
              alpha: 70.199997,
              blue: 52.099998,
              green: 28.200001,
              red: 54.200001,
            },
            colorStyle: {
              rgbColor: {
                alpha: 43.200001,
                blue: 85.099998,
                green: 43.099998,
                red: 17.200001,
              },
              themeColor: "ACCENT4",
            },
            style: "DASHED",
            width: 9194777248992681084,
          },
          left: {
            color: {
              alpha: 37.099998,
              blue: 96.199997,
              green: 80.199997,
              red: 13.200000,
            },
            colorStyle: {
              rgbColor: {
                alpha: 29.200001,
                blue: 19.100000,
                green: 93.199997,
                red: 37.200001,
              },
              themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
            },
            style: "SOLID_MEDIUM",
            width: 7130569794521877026,
          },
          range: {
            endColumnIndex: 1244967344084895833,
            endRowIndex: 2453076062051200745,
            sheetId: 927425479261173009,
            startColumnIndex: 6954033476776082444,
            startRowIndex: 3507566858196931756,
          },
          right: {
            color: {
              alpha: 69.199997,
              blue: 7.100000,
              green: 68.099998,
              red: 69.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 45.099998,
                blue: 69.199997,
                green: 44.200001,
                red: 6.200000,
              },
              themeColor: "LINK",
            },
            style: "DASHED",
            width: 8682063431114727012,
          },
          top: {
            color: {
              alpha: 31.200001,
              blue: 85.199997,
              green: 88.199997,
              red: 31.200001,
            },
            colorStyle: {
              rgbColor: {
                alpha: 52.200001,
                blue: 49.200001,
                green: 74.099998,
                red: 60.200001,
              },
              themeColor: "BACKGROUND",
            },
            style: "SOLID_THICK",
            width: 2271199802550179977,
          },
        },
        updateCells: {
          fields: "quia",
          range: {
            endColumnIndex: 6889774414717355903,
            endRowIndex: 501002963790601971,
            sheetId: 8713697668854661922,
            startColumnIndex: 7339207632803404192,
            startRowIndex: 4888532522399921604,
          },
          rows: [
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "ENGINE",
                      errorMessage: "dignissimos",
                      lastRefreshTime: "dolor",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "illo",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SYNC_ALL",
                    columns: [
                      {
                        name: "facilis",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_CHARS_PER_CELL",
                      errorMessage: "iure",
                      lastRefreshTime: "est",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "facilis",
                    filterSpecs: [
                      {
                        columnIndex: 8185699624809460784,
                        dataSourceColumnReference: {
                          name: "sunt",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_IS_EMAIL",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "voluptatem",
                              },
                            ],
                          },
                          hiddenValues: [
                            "voluptas",
                            "veniam",
                            "dolorum",
                          ],
                          visibleBackgroundColor: {
                            alpha: 57.200001,
                            blue: 24.100000,
                            green: 0.100000,
                            red: 17.100000,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 90.099998,
                              blue: 78.099998,
                              green: 63.099998,
                              red: 45.099998,
                            },
                            themeColor: "LINK",
                          },
                          visibleForegroundColor: {
                            alpha: 38.200001,
                            blue: 81.099998,
                            green: 0.200000,
                            red: 88.199997,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 4.100000,
                              blue: 44.200001,
                              green: 78.199997,
                              red: 61.200001,
                            },
                            themeColor: "ACCENT3",
                          },
                        },
                      },
                      {
                        columnIndex: 4981683189579867669,
                        dataSourceColumnReference: {
                          name: "quaerat",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_NOT_CONTAINS",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "quam",
                              },
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "doloremque",
                              },
                            ],
                          },
                          hiddenValues: [
                            "laudantium",
                            "maxime",
                            "omnis",
                          ],
                          visibleBackgroundColor: {
                            alpha: 78.199997,
                            blue: 69.099998,
                            green: 86.099998,
                            red: 79.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 76.199997,
                              blue: 65.199997,
                              green: 33.200001,
                              red: 44.099998,
                            },
                            themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                          },
                          visibleForegroundColor: {
                            alpha: 56.099998,
                            blue: 49.200001,
                            green: 5.100000,
                            red: 78.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 19.100000,
                              blue: 3.100000,
                              green: 6.200000,
                              red: 1.100000,
                            },
                            themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                          },
                        },
                      },
                      {
                        columnIndex: 2399261556055002976,
                        dataSourceColumnReference: {
                          name: "et",
                        },
                        filterCriteria: {
                          condition: {
                            type: "CUSTOM_FORMULA",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "et",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "enim",
                              },
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "illo",
                              },
                            ],
                          },
                          hiddenValues: [
                            "voluptatibus",
                            "cumque",
                          ],
                          visibleBackgroundColor: {
                            alpha: 8.100000,
                            blue: 1.100000,
                            green: 67.199997,
                            red: 96.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 54.099998,
                              blue: 70.099998,
                              green: 5.100000,
                              red: 34.200001,
                            },
                            themeColor: "TEXT",
                          },
                          visibleForegroundColor: {
                            alpha: 0.200000,
                            blue: 23.200001,
                            green: 9.200000,
                            red: 41.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 92.099998,
                              blue: 92.099998,
                              green: 89.199997,
                              red: 18.100000,
                            },
                            themeColor: "ACCENT6",
                          },
                        },
                      },
                    ],
                    rowLimit: 4556031978488940954,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 69.099998,
                          blue: 95.099998,
                          green: 62.200001,
                          red: 95.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 64.199997,
                            blue: 70.099998,
                            green: 80.199997,
                            red: 96.099998,
                          },
                          themeColor: "ACCENT1",
                        },
                        dataSourceColumnReference: {
                          name: "non",
                        },
                        dimensionIndex: 5070449816827268531,
                        foregroundColor: {
                          alpha: 50.200001,
                          blue: 67.199997,
                          green: 42.099998,
                          red: 89.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 1.100000,
                            blue: 65.199997,
                            green: 48.200001,
                            red: 76.199997,
                          },
                          themeColor: "LINK",
                        },
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                      },
                      {
                        backgroundColor: {
                          alpha: 9.100000,
                          blue: 13.100000,
                          green: 30.200001,
                          red: 54.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 38.099998,
                            blue: 83.199997,
                            green: 45.099998,
                            red: 35.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        dataSourceColumnReference: {
                          name: "ab",
                        },
                        dimensionIndex: 6652472133678047414,
                        foregroundColor: {
                          alpha: 36.099998,
                          blue: 57.200001,
                          green: 41.099998,
                          red: 33.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 47.099998,
                            blue: 37.099998,
                            green: 90.099998,
                            red: 11.200000,
                          },
                          themeColor: "ACCENT2",
                        },
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "NUMBER_GREATER",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "odit",
                        },
                      ],
                    },
                    inputMessage: "sit",
                    showCustomUi: false,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 87.099998,
                      blue: 16.200001,
                      green: 10.200000,
                      red: 97.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 84.099998,
                        blue: 9.200000,
                        green: 58.099998,
                        red: 23.100000,
                      },
                      themeColor: "BACKGROUND",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 6.100000,
                          blue: 86.199997,
                          green: 38.200001,
                          red: 99.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 47.099998,
                            blue: 60.200001,
                            green: 26.100000,
                            red: 51.200001,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "DOTTED",
                        width: 4782768469875935138,
                      },
                      left: {
                        color: {
                          alpha: 50.099998,
                          blue: 24.100000,
                          green: 34.200001,
                          red: 6.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 28.100000,
                            blue: 50.099998,
                            green: 92.099998,
                            red: 78.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "NONE",
                        width: 8215904674897580083,
                      },
                      right: {
                        color: {
                          alpha: 24.100000,
                          blue: 12.200000,
                          green: 80.199997,
                          red: 20.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 42.099998,
                            blue: 43.099998,
                            green: 90.099998,
                            red: 76.199997,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "DOUBLE",
                        width: 6113034811473754337,
                      },
                      top: {
                        color: {
                          alpha: 36.200001,
                          blue: 47.200001,
                          green: 99.199997,
                          red: 83.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 73.099998,
                            blue: 70.199997,
                            green: 69.099998,
                            red: 90.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 8156228904820113242,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "error",
                      type: "DATE",
                    },
                    padding: {
                      bottom: 6600351355182752240,
                      left: 3251781692873409223,
                      right: 2012884617988413531,
                      top: 8859208754749628947,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "corrupti",
                      fontSize: 5920251545739966825,
                      foregroundColor: {
                        alpha: 79.199997,
                        blue: 57.099998,
                        green: 5.100000,
                        red: 92.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 81.099998,
                          blue: 33.200001,
                          green: 12.100000,
                          red: 60.200001,
                        },
                        themeColor: "ACCENT3",
                      },
                      italic: false,
                      link: {
                        uri: "dolores",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 4827371341706392270,
                      vertical: true,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  effectiveValue: {
                    boolValue: false,
                    errorValue: {
                      message: "qui",
                      type: "REF",
                    },
                    formulaValue: "quia",
                    numberValue: 26.200001,
                    stringValue: "dolorum",
                  },
                  formattedValue: "blanditiis",
                  hyperlink: "voluptatem",
                  note: "consequuntur",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "voluptatem",
                        },
                        groupLimit: {
                          applyOrder: 69419026970205724,
                          countLimit: 6118617986052237062,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_MONTH",
                          },
                          histogramRule: {
                            end: 59.200001,
                            interval: 88.099998,
                            start: 17.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "est",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "iure",
                                  numberValue: 21.200001,
                                  stringValue: "quibusdam",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quia",
                                      type: "ERROR",
                                    },
                                    formulaValue: "et",
                                    numberValue: 64.099998,
                                    stringValue: "nisi",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "vitae",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "dolorum",
                                    numberValue: 46.099998,
                                    stringValue: "magni",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "repellat",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 8633718560330652365,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "nesciunt",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "dolor",
                              numberValue: 95.099998,
                              stringValue: "praesentium",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "sed",
                                type: "ERROR",
                              },
                              formulaValue: "in",
                              numberValue: 0.200000,
                              stringValue: "molestiae",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "recusandae",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "accusantium",
                              numberValue: 73.199997,
                              stringValue: "labore",
                            },
                          ],
                          valuesIndex: 4426713932867656306,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "nesciunt",
                                type: "NUM",
                              },
                              formulaValue: "quasi",
                              numberValue: 56.099998,
                              stringValue: "eum",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "cupiditate",
                                type: "NAME",
                              },
                              formulaValue: "minus",
                              numberValue: 54.200001,
                              stringValue: "magni",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "dolores",
                        },
                        groupLimit: {
                          applyOrder: 3080390115099765078,
                          countLimit: 2330102882474692657,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 20.100000,
                            interval: 16.100000,
                            start: 1.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "doloribus",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "architecto",
                                  numberValue: 8.200000,
                                  stringValue: "sit",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "reprehenderit",
                                      type: "REF",
                                    },
                                    formulaValue: "voluptatibus",
                                    numberValue: 55.099998,
                                    stringValue: "aut",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "laudantium",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "quo",
                                  numberValue: 35.200001,
                                  stringValue: "unde",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "esse",
                                      type: "NAME",
                                    },
                                    formulaValue: "at",
                                    numberValue: 54.200001,
                                    stringValue: "nihil",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quia",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "voluptatibus",
                                  numberValue: 76.099998,
                                  stringValue: "at",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "cum",
                                      type: "NAME",
                                    },
                                    formulaValue: "consectetur",
                                    numberValue: 41.099998,
                                    stringValue: "ut",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quia",
                                      type: "VALUE",
                                    },
                                    formulaValue: "suscipit",
                                    numberValue: 50.200001,
                                    stringValue: "velit",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "nihil",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 164020537520928256,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "autem",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "suscipit",
                              numberValue: 30.200001,
                              stringValue: "est",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "corrupti",
                                type: "NAME",
                              },
                              formulaValue: "ex",
                              numberValue: 10.200000,
                              stringValue: "optio",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "veniam",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "sunt",
                              numberValue: 41.200001,
                              stringValue: "iure",
                            },
                          ],
                          valuesIndex: 7530945823701815386,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "enim",
                                type: "N_A",
                              },
                              formulaValue: "et",
                              numberValue: 16.200001,
                              stringValue: "est",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "velit",
                        },
                        groupLimit: {
                          applyOrder: 5062951160799025552,
                          countLimit: 3720498668018546621,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 9.200000,
                            interval: 80.199997,
                            start: 95.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "laudantium",
                                    type: "ERROR",
                                  },
                                  formulaValue: "enim",
                                  numberValue: 69.099998,
                                  stringValue: "aspernatur",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "unde",
                                      type: "REF",
                                    },
                                    formulaValue: "facere",
                                    numberValue: 91.199997,
                                    stringValue: "quia",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "veritatis",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "voluptates",
                                    numberValue: 65.099998,
                                    stringValue: "fuga",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "debitis",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "ipsam",
                                    numberValue: 95.199997,
                                    stringValue: "deleniti",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "ea",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 343826278248000302,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "dolorem",
                                type: "LOADING",
                              },
                              formulaValue: "praesentium",
                              numberValue: 86.099998,
                              stringValue: "nam",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "natus",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "laboriosam",
                              numberValue: 38.200001,
                              stringValue: "dicta",
                            },
                          ],
                          valuesIndex: 335970154711059135,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "corporis",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "consequuntur",
                              numberValue: 91.099998,
                              stringValue: "at",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "a",
                                type: "LOADING",
                              },
                              formulaValue: "excepturi",
                              numberValue: 45.099998,
                              stringValue: "quam",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "nesciunt",
                                type: "N_A",
                              },
                              formulaValue: "est",
                              numberValue: 35.200001,
                              stringValue: "dignissimos",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "nostrum": {
                        condition: {
                          type: "CUSTOM_FORMULA",
                          values: [
                            {
                              relativeDate: "TOMORROW",
                              userEnteredValue: "qui",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "pariatur",
                          "illum",
                          "fugiat",
                        ],
                      },
                      "earum": {
                        condition: {
                          type: "NUMBER_LESS_THAN_EQ",
                          values: [
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "non",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "maiores",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
                      errorMessage: "voluptas",
                      lastRefreshTime: "mollitia",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "non",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 2178510445203848750,
                        dataSourceColumnReference: {
                          name: "quo",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NOT_BLANK",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "sequi",
                              },
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "molestiae",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "aut",
                            "ex",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 309870905088988184,
                        dataSourceColumnReference: {
                          name: "nihil",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_NOT_EQ",
                            values: [
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "esse",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "ut",
                              },
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "id",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "minima",
                            "doloremque",
                            "iure",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 8420364302542192386,
                        dataSourceColumnReference: {
                          name: "dolor",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_LESS_THAN_EQ",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "esse",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "itaque",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "adipisci",
                        },
                        groupLimit: {
                          applyOrder: 5512616942455367752,
                          countLimit: 8686817144789366776,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH",
                          },
                          histogramRule: {
                            end: 84.099998,
                            interval: 91.199997,
                            start: 36.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "tenetur",
                                    type: "NUM",
                                  },
                                  formulaValue: "enim",
                                  numberValue: 65.199997,
                                  stringValue: "exercitationem",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "fuga",
                                      type: "ERROR",
                                    },
                                    formulaValue: "ex",
                                    numberValue: 42.099998,
                                    stringValue: "consequuntur",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "sit",
                                      type: "N_A",
                                    },
                                    formulaValue: "natus",
                                    numberValue: 36.099998,
                                    stringValue: "molestiae",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "et",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "qui",
                                    numberValue: 43.099998,
                                    stringValue: "itaque",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "nihil",
                                    type: "NUM",
                                  },
                                  formulaValue: "est",
                                  numberValue: 78.099998,
                                  stringValue: "nisi",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "qui",
                                      type: "REF",
                                    },
                                    formulaValue: "nemo",
                                    numberValue: 82.199997,
                                    stringValue: "nulla",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "culpa",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 5592896134027902090,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "molestiae",
                                type: "NAME",
                              },
                              formulaValue: "sit",
                              numberValue: 34.200001,
                              stringValue: "nemo",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "voluptatibus",
                                type: "NUM",
                              },
                              formulaValue: "accusantium",
                              numberValue: 46.200001,
                              stringValue: "sed",
                            },
                          ],
                          valuesIndex: 4776393254674639778,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "eveniet",
                                type: "ERROR",
                              },
                              formulaValue: "nulla",
                              numberValue: 46.200001,
                              stringValue: "eius",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "totam",
                                type: "N_A",
                              },
                              formulaValue: "id",
                              numberValue: 49.200001,
                              stringValue: "ea",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "omnis",
                        },
                        groupLimit: {
                          applyOrder: 4655524701577144768,
                          countLimit: 1595642941235747907,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 37.200001,
                            interval: 73.099998,
                            start: 14.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "in",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "et",
                                  numberValue: 80.099998,
                                  stringValue: "eveniet",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "laudantium",
                                      type: "ERROR",
                                    },
                                    formulaValue: "quam",
                                    numberValue: 33.099998,
                                    stringValue: "quisquam",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "a",
                                    type: "REF",
                                  },
                                  formulaValue: "ipsum",
                                  numberValue: 16.100000,
                                  stringValue: "iure",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "est",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "repudiandae",
                                    numberValue: 95.099998,
                                    stringValue: "quis",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "voluptatem",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 8033527325022524152,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "possimus",
                                type: "ERROR",
                              },
                              formulaValue: "accusamus",
                              numberValue: 40.099998,
                              stringValue: "nisi",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quae",
                                type: "NUM",
                              },
                              formulaValue: "laudantium",
                              numberValue: 77.199997,
                              stringValue: "molestias",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "voluptas",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "accusantium",
                              numberValue: 67.099998,
                              stringValue: "qui",
                            },
                          ],
                          valuesIndex: 3388611607210552648,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "quis",
                                type: "VALUE",
                              },
                              formulaValue: "non",
                              numberValue: 18.200001,
                              stringValue: "vel",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "voluptatem",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "esse",
                              numberValue: 30.200001,
                              stringValue: "ut",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "neque",
                                type: "VALUE",
                              },
                              formulaValue: "molestiae",
                              numberValue: 78.199997,
                              stringValue: "libero",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "eveniet",
                        },
                        groupLimit: {
                          applyOrder: 79035526541092669,
                          countLimit: 5051207957579032025,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "SECOND",
                          },
                          histogramRule: {
                            end: 77.099998,
                            interval: 92.099998,
                            start: 83.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "magni",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "atque",
                                  numberValue: 36.099998,
                                  stringValue: "maiores",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "laboriosam",
                                      type: "ERROR",
                                    },
                                    formulaValue: "aliquam",
                                    numberValue: 50.099998,
                                    stringValue: "eveniet",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "odio",
                                    type: "N_A",
                                  },
                                  formulaValue: "officia",
                                  numberValue: 91.099998,
                                  stringValue: "beatae",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "est",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "cumque",
                                    numberValue: 96.099998,
                                    stringValue: "delectus",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "eos",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 8782922397731193789,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quae",
                                type: "NUM",
                              },
                              formulaValue: "aut",
                              numberValue: 12.200000,
                              stringValue: "sint",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "mollitia",
                                type: "NAME",
                              },
                              formulaValue: "pariatur",
                              numberValue: 8.100000,
                              stringValue: "blanditiis",
                            },
                          ],
                          valuesIndex: 6440710542374328456,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "perferendis",
                                type: "NUM",
                              },
                              formulaValue: "aperiam",
                              numberValue: 29.200001,
                              stringValue: "qui",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "explicabo",
                                type: "VALUE",
                              },
                              formulaValue: "accusantium",
                              numberValue: 82.199997,
                              stringValue: "enim",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 5590760266090182256,
                      endRowIndex: 5306919633987428661,
                      sheetId: 5769909221142263890,
                      startColumnIndex: 251768456635793528,
                      startRowIndex: 575110673048866461,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_GRAND_TOTAL",
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        formula: "ea",
                        name: "mollitia",
                        sourceColumnOffset: 2311243807342649439,
                        summarizeFunction: "STDEV",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_GRAND_TOTAL",
                        dataSourceColumnReference: {
                          name: "quis",
                        },
                        formula: "minima",
                        name: "voluptatem",
                        sourceColumnOffset: 2909526106925254438,
                        summarizeFunction: "VARP",
                      },
                      {
                        calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                        dataSourceColumnReference: {
                          name: "doloremque",
                        },
                        formula: "dolores",
                        name: "sit",
                        sourceColumnOffset: 5528046981953317981,
                        summarizeFunction: "COUNT",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "et",
                        fontSize: 6007902396316757915,
                        foregroundColor: {
                          alpha: 8.200000,
                          blue: 92.199997,
                          green: 34.200001,
                          red: 83.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 33.200001,
                            blue: 50.099998,
                            green: 57.099998,
                            red: 27.100000,
                          },
                          themeColor: "ACCENT1",
                        },
                        italic: true,
                        link: {
                          uri: "in",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      startIndex: 1385322290189025151,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 94.199997,
                      blue: 41.099998,
                      green: 80.099998,
                      red: 57.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 58.200001,
                        blue: 69.199997,
                        green: 32.099998,
                        red: 13.100000,
                      },
                      themeColor: "TEXT",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 58.200001,
                          blue: 77.099998,
                          green: 8.200000,
                          red: 23.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 64.099998,
                            blue: 87.099998,
                            green: 90.199997,
                            red: 24.200001,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "DOTTED",
                        width: 5399439611395128033,
                      },
                      left: {
                        color: {
                          alpha: 72.199997,
                          blue: 76.199997,
                          green: 27.200001,
                          red: 75.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 22.200001,
                            blue: 21.100000,
                            green: 52.200001,
                            red: 66.199997,
                          },
                          themeColor: "LINK",
                        },
                        style: "DOTTED",
                        width: 2051865463786737183,
                      },
                      right: {
                        color: {
                          alpha: 6.100000,
                          blue: 75.099998,
                          green: 90.099998,
                          red: 50.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 47.099998,
                            blue: 9.100000,
                            green: 43.200001,
                            red: 70.199997,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 2259968901493884117,
                      },
                      top: {
                        color: {
                          alpha: 71.199997,
                          blue: 15.200000,
                          green: 21.100000,
                          red: 94.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 3.100000,
                            blue: 23.100000,
                            green: 89.199997,
                            red: 37.200001,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID_THICK",
                        width: 5200700425263903809,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "et",
                      type: "NUMBER",
                    },
                    padding: {
                      bottom: 4330135539294687505,
                      left: 1847235685905904780,
                      right: 5932417275024666635,
                      top: 1172555392115429923,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "doloremque",
                      fontSize: 7700158338367900489,
                      foregroundColor: {
                        alpha: 58.200001,
                        blue: 78.099998,
                        green: 11.100000,
                        red: 43.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 87.199997,
                          blue: 6.100000,
                          green: 45.099998,
                          red: 3.100000,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      italic: false,
                      link: {
                        uri: "aut",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 7867742831544626200,
                      vertical: false,
                    },
                    verticalAlignment: "BOTTOM",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  userEnteredValue: {
                    boolValue: false,
                    errorValue: {
                      message: "saepe",
                      type: "REF",
                    },
                    formulaValue: "quia",
                    numberValue: 87.199997,
                    stringValue: "sit",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_ROWS",
                      errorMessage: "aut",
                      lastRefreshTime: "autem",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "est",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SELECTED",
                    columns: [
                      {
                        name: "sit",
                      },
                      {
                        name: "nobis",
                      },
                      {
                        name: "sequi",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
                      errorMessage: "laboriosam",
                      lastRefreshTime: "provident",
                      state: "FAILED",
                    },
                    dataSourceId: "culpa",
                    filterSpecs: [
                      {
                        columnIndex: 1692017248451765936,
                        dataSourceColumnReference: {
                          name: "dolores",
                        },
                        filterCriteria: {
                          condition: {
                            type: "BOOLEAN",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "ullam",
                              },
                            ],
                          },
                          hiddenValues: [
                            "qui",
                            "quidem",
                          ],
                          visibleBackgroundColor: {
                            alpha: 73.099998,
                            blue: 86.199997,
                            green: 11.100000,
                            red: 16.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 60.099998,
                              blue: 13.200000,
                              green: 89.199997,
                              red: 28.100000,
                            },
                            themeColor: "ACCENT2",
                          },
                          visibleForegroundColor: {
                            alpha: 39.099998,
                            blue: 31.200001,
                            green: 29.200001,
                            red: 29.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 63.200001,
                              blue: 39.099998,
                              green: 26.100000,
                              red: 35.200001,
                            },
                            themeColor: "ACCENT4",
                          },
                        },
                      },
                    ],
                    rowLimit: 6951151997887392354,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 89.099998,
                          blue: 41.099998,
                          green: 83.199997,
                          red: 90.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 61.099998,
                            blue: 68.199997,
                            green: 37.099998,
                            red: 95.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        dataSourceColumnReference: {
                          name: "dolor",
                        },
                        dimensionIndex: 2870673825715224857,
                        foregroundColor: {
                          alpha: 72.199997,
                          blue: 19.100000,
                          green: 24.100000,
                          red: 42.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 47.200001,
                            blue: 85.199997,
                            green: 88.199997,
                            red: 0.200000,
                          },
                          themeColor: "BACKGROUND",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "DATE_ON_OR_AFTER",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "rem",
                        },
                      ],
                    },
                    inputMessage: "vel",
                    showCustomUi: false,
                    strict: true,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 12.100000,
                      blue: 94.099998,
                      green: 78.199997,
                      red: 97.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 25.200001,
                        blue: 46.200001,
                        green: 46.099998,
                        red: 8.200000,
                      },
                      themeColor: "BACKGROUND",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 29.100000,
                          blue: 14.200000,
                          green: 26.100000,
                          red: 69.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 14.100000,
                            blue: 51.200001,
                            green: 98.099998,
                            red: 92.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "DASHED",
                        width: 461084865245924192,
                      },
                      left: {
                        color: {
                          alpha: 61.200001,
                          blue: 14.200000,
                          green: 12.100000,
                          red: 81.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 70.099998,
                            blue: 69.199997,
                            green: 78.099998,
                            red: 56.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "NONE",
                        width: 5386666440000821665,
                      },
                      right: {
                        color: {
                          alpha: 32.200001,
                          blue: 62.200001,
                          green: 10.200000,
                          red: 21.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 32.099998,
                            blue: 95.099998,
                            green: 3.200000,
                            red: 49.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "DOUBLE",
                        width: 6292725066800418380,
                      },
                      top: {
                        color: {
                          alpha: 77.199997,
                          blue: 85.199997,
                          green: 58.200001,
                          red: 71.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 23.100000,
                            blue: 16.100000,
                            green: 3.100000,
                            red: 36.200001,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID_MEDIUM",
                        width: 4744941922112430907,
                      },
                    },
                    horizontalAlignment: "LEFT",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "sed",
                      type: "NUMBER_FORMAT_TYPE_UNSPECIFIED",
                    },
                    padding: {
                      bottom: 7887271609061460485,
                      left: 5475542186649695380,
                      right: 5685480953988383982,
                      top: 5544575166878453129,
                    },
                    textDirection: "RIGHT_TO_LEFT",
                    textFormat: {
                      bold: false,
                      fontFamily: "et",
                      fontSize: 3741204082456971071,
                      foregroundColor: {
                        alpha: 60.099998,
                        blue: 22.200001,
                        green: 75.099998,
                        red: 11.200000,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 38.099998,
                          blue: 57.099998,
                          green: 42.099998,
                          red: 16.100000,
                        },
                        themeColor: "LINK",
                      },
                      italic: true,
                      link: {
                        uri: "id",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    textRotation: {
                      angle: 4846137225206067884,
                      vertical: true,
                    },
                    verticalAlignment: "MIDDLE",
                    wrapStrategy: "LEGACY_WRAP",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "suscipit",
                      type: "N_A",
                    },
                    formulaValue: "et",
                    numberValue: 97.099998,
                    stringValue: "ratione",
                  },
                  formattedValue: "consequatur",
                  hyperlink: "laboriosam",
                  note: "natus",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "qui",
                        },
                        groupLimit: {
                          applyOrder: 475642752907307236,
                          countLimit: 9019307450441058450,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_MONTH",
                          },
                          histogramRule: {
                            end: 29.100000,
                            interval: 75.199997,
                            start: 77.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "deleniti",
                                    type: "LOADING",
                                  },
                                  formulaValue: "odit",
                                  numberValue: 35.099998,
                                  stringValue: "enim",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quo",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "ipsum",
                                    numberValue: 7.200000,
                                    stringValue: "aut",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "optio",
                                    type: "VALUE",
                                  },
                                  formulaValue: "libero",
                                  numberValue: 13.100000,
                                  stringValue: "illum",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolorem",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "sed",
                                    numberValue: 58.099998,
                                    stringValue: "est",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "aliquam",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "nihil",
                                    numberValue: 43.200001,
                                    stringValue: "aut",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quia",
                                      type: "N_A",
                                    },
                                    formulaValue: "saepe",
                                    numberValue: 32.200001,
                                    stringValue: "soluta",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "occaecati",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 5023428859452629177,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "qui",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "sed",
                              numberValue: 37.200001,
                              stringValue: "non",
                            },
                          ],
                          valuesIndex: 694748015451004292,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "a",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "porro",
                              numberValue: 48.200001,
                              stringValue: "reprehenderit",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "ipsum",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "a",
                              numberValue: 17.200001,
                              stringValue: "odit",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "sit": {
                        condition: {
                          type: "TEXT_STARTS_WITH",
                          values: [
                            {
                              relativeDate: "TOMORROW",
                              userEnteredValue: "sed",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "facilis",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "quis",
                          "quibusdam",
                        ],
                      },
                      "quis": {
                        condition: {
                          type: "NUMBER_BETWEEN",
                          values: [
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "officia",
                            },
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "sed",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "ullam",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "omnis",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "OBJECT_NOT_FOUND",
                      errorMessage: "et",
                      lastRefreshTime: "vel",
                      state: "RUNNING",
                    },
                    dataSourceId: "omnis",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 2717276822112529390,
                        dataSourceColumnReference: {
                          name: "sint",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_ENDS_WITH",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "eligendi",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "similique",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 3900174077540120886,
                        dataSourceColumnReference: {
                          name: "ipsa",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_GREATER",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "porro",
                              },
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "ut",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "libero",
                            "odio",
                            "expedita",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "officiis",
                        },
                        groupLimit: {
                          applyOrder: 9129055576896762849,
                          countLimit: 2867676335299060471,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            end: 20.200001,
                            interval: 34.099998,
                            start: 87.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "non",
                                    type: "N_A",
                                  },
                                  formulaValue: "molestiae",
                                  numberValue: 72.199997,
                                  stringValue: "similique",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quia",
                                      type: "VALUE",
                                    },
                                    formulaValue: "tenetur",
                                    numberValue: 53.200001,
                                    stringValue: "qui",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "et",
                                      type: "ERROR",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 12.100000,
                                    stringValue: "molestias",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quo",
                                    type: "N_A",
                                  },
                                  formulaValue: "consequatur",
                                  numberValue: 82.099998,
                                  stringValue: "soluta",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "consequatur",
                                      type: "REF",
                                    },
                                    formulaValue: "adipisci",
                                    numberValue: 28.200001,
                                    stringValue: "omnis",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 7796913255962186712,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "odit",
                                type: "NAME",
                              },
                              formulaValue: "perferendis",
                              numberValue: 26.100000,
                              stringValue: "qui",
                            },
                          ],
                          valuesIndex: 3544168759473650673,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "recusandae",
                                type: "VALUE",
                              },
                              formulaValue: "cupiditate",
                              numberValue: 39.200001,
                              stringValue: "ut",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 5550641751026377772,
                      endRowIndex: 3691415155762471304,
                      sheetId: 4681820472754573959,
                      startColumnIndex: 1426873836054825450,
                      startRowIndex: 2912545023514671692,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "ad",
                        },
                        formula: "quibusdam",
                        name: "saepe",
                        sourceColumnOffset: 5700538945795256900,
                        summarizeFunction: "MIN",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "sit",
                        fontSize: 6284115593310025635,
                        foregroundColor: {
                          alpha: 69.199997,
                          blue: 87.199997,
                          green: 12.200000,
                          red: 51.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 39.200001,
                            blue: 53.099998,
                            green: 88.199997,
                            red: 34.200001,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        italic: false,
                        link: {
                          uri: "aperiam",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 2599584633806340814,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 7.200000,
                      blue: 3.100000,
                      green: 12.200000,
                      red: 19.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 41.200001,
                        blue: 59.099998,
                        green: 7.200000,
                        red: 11.100000,
                      },
                      themeColor: "LINK",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 25.100000,
                          blue: 1.100000,
                          green: 1.200000,
                          red: 0.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 74.099998,
                            blue: 43.099998,
                            green: 10.100000,
                            red: 32.200001,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "DOUBLE",
                        width: 1149282295228408288,
                      },
                      left: {
                        color: {
                          alpha: 59.200001,
                          blue: 19.100000,
                          green: 44.200001,
                          red: 12.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 25.100000,
                            blue: 26.100000,
                            green: 15.200000,
                            red: 84.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 3337954779352521579,
                      },
                      right: {
                        color: {
                          alpha: 63.099998,
                          blue: 80.199997,
                          green: 13.200000,
                          red: 33.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 71.099998,
                            blue: 51.099998,
                            green: 37.099998,
                            red: 30.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID_THICK",
                        width: 1100296590061044255,
                      },
                      top: {
                        color: {
                          alpha: 73.199997,
                          blue: 96.099998,
                          green: 99.099998,
                          red: 30.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 24.200001,
                            blue: 76.199997,
                            green: 97.199997,
                            red: 4.100000,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "DOUBLE",
                        width: 7938885722485968599,
                      },
                    },
                    horizontalAlignment: "RIGHT",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "asperiores",
                      type: "NUMBER",
                    },
                    padding: {
                      bottom: 2054825402886615996,
                      left: 6525617875970252218,
                      right: 3186700242799990125,
                      top: 4002190220808075852,
                    },
                    textDirection: "RIGHT_TO_LEFT",
                    textFormat: {
                      bold: false,
                      fontFamily: "quos",
                      fontSize: 1605525568585661454,
                      foregroundColor: {
                        alpha: 47.200001,
                        blue: 63.099998,
                        green: 70.199997,
                        red: 84.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 20.100000,
                          blue: 33.200001,
                          green: 5.100000,
                          red: 47.099998,
                        },
                        themeColor: "ACCENT5",
                      },
                      italic: false,
                      link: {
                        uri: "ad",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 2199950286769295195,
                      vertical: false,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "CLIP",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "facere",
                      type: "ERROR_TYPE_UNSPECIFIED",
                    },
                    formulaValue: "consectetur",
                    numberValue: 36.200001,
                    stringValue: "inventore",
                  },
                },
              ],
            },
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "OTHER",
                      errorMessage: "recusandae",
                      lastRefreshTime: "reprehenderit",
                      state: "FAILED",
                    },
                    dataSourceId: "enim",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SYNC_ALL",
                    columns: [
                      {
                        name: "aut",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_COLUMNS",
                      errorMessage: "laborum",
                      lastRefreshTime: "magnam",
                      state: "RUNNING",
                    },
                    dataSourceId: "non",
                    filterSpecs: [
                      {
                        columnIndex: 7304428457160862857,
                        dataSourceColumnReference: {
                          name: "iste",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_EQ",
                            values: [
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "quam",
                              },
                            ],
                          },
                          hiddenValues: [
                            "rem",
                            "architecto",
                          ],
                          visibleBackgroundColor: {
                            alpha: 83.199997,
                            blue: 45.200001,
                            green: 29.200001,
                            red: 46.099998,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 58.099998,
                              blue: 33.200001,
                              green: 22.200001,
                              red: 98.199997,
                            },
                            themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                          },
                          visibleForegroundColor: {
                            alpha: 61.200001,
                            blue: 62.099998,
                            green: 29.200001,
                            red: 95.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 38.200001,
                              blue: 66.199997,
                              green: 86.099998,
                              red: 59.099998,
                            },
                            themeColor: "ACCENT6",
                          },
                        },
                      },
                    ],
                    rowLimit: 6273564917955955655,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 84.099998,
                          blue: 70.199997,
                          green: 48.200001,
                          red: 31.100000,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 31.200001,
                            blue: 6.100000,
                            green: 8.200000,
                            red: 9.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        dataSourceColumnReference: {
                          name: "aut",
                        },
                        dimensionIndex: 2426870419319267256,
                        foregroundColor: {
                          alpha: 77.199997,
                          blue: 74.099998,
                          green: 82.099998,
                          red: 94.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 37.200001,
                            blue: 30.100000,
                            green: 34.099998,
                            red: 34.200001,
                          },
                          themeColor: "LINK",
                        },
                        sortOrder: "DESCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 72.099998,
                          blue: 88.199997,
                          green: 58.099998,
                          red: 65.199997,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 65.099998,
                            blue: 56.200001,
                            green: 12.200000,
                            red: 20.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        dataSourceColumnReference: {
                          name: "soluta",
                        },
                        dimensionIndex: 7116163069596155940,
                        foregroundColor: {
                          alpha: 48.200001,
                          blue: 26.200001,
                          green: 63.200001,
                          red: 21.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 23.100000,
                            blue: 57.099998,
                            green: 12.200000,
                            red: 48.099998,
                          },
                          themeColor: "ACCENT1",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 47.200001,
                          blue: 12.200000,
                          green: 63.200001,
                          red: 87.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 74.099998,
                            blue: 24.200001,
                            green: 54.200001,
                            red: 7.200000,
                          },
                          themeColor: "TEXT",
                        },
                        dataSourceColumnReference: {
                          name: "minima",
                        },
                        dimensionIndex: 37417745061150091,
                        foregroundColor: {
                          alpha: 4.200000,
                          blue: 49.099998,
                          green: 44.200001,
                          red: 76.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 17.100000,
                            blue: 86.199997,
                            green: 63.099998,
                            red: 80.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        sortOrder: "DESCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "NUMBER_EQ",
                      values: [
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "totam",
                        },
                      ],
                    },
                    inputMessage: "libero",
                    showCustomUi: false,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 23.200001,
                      blue: 82.199997,
                      green: 52.200001,
                      red: 22.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 20.200001,
                        blue: 79.199997,
                        green: 40.099998,
                        red: 22.100000,
                      },
                      themeColor: "LINK",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 71.199997,
                          blue: 76.199997,
                          green: 88.199997,
                          red: 20.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 32.099998,
                            blue: 9.200000,
                            green: 86.199997,
                            red: 96.199997,
                          },
                          themeColor: "TEXT",
                        },
                        style: "DASHED",
                        width: 5028292319988917644,
                      },
                      left: {
                        color: {
                          alpha: 96.199997,
                          blue: 61.099998,
                          green: 4.200000,
                          red: 24.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 57.099998,
                            blue: 18.200001,
                            green: 18.200001,
                            red: 76.199997,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "SOLID",
                        width: 5838806863019778570,
                      },
                      right: {
                        color: {
                          alpha: 29.200001,
                          blue: 41.200001,
                          green: 74.099998,
                          red: 38.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 1.200000,
                            blue: 64.199997,
                            green: 72.199997,
                            red: 93.199997,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "DOUBLE",
                        width: 4012352001582872146,
                      },
                      top: {
                        color: {
                          alpha: 36.200001,
                          blue: 3.200000,
                          green: 33.099998,
                          red: 27.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 60.099998,
                            blue: 3.200000,
                            green: 90.199997,
                            red: 14.200000,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "DASHED",
                        width: 3356076389523804600,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "velit",
                      type: "TEXT",
                    },
                    padding: {
                      bottom: 5917869859887988848,
                      left: 5066983051491167429,
                      right: 753091689681079561,
                      top: 5722409494336178129,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: true,
                      fontFamily: "voluptates",
                      fontSize: 5013297286137977665,
                      foregroundColor: {
                        alpha: 48.099998,
                        blue: 99.199997,
                        green: 31.100000,
                        red: 89.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 89.099998,
                          blue: 13.200000,
                          green: 27.200001,
                          red: 1.200000,
                        },
                        themeColor: "BACKGROUND",
                      },
                      italic: false,
                      link: {
                        uri: "est",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 867905541562023329,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "et",
                      type: "REF",
                    },
                    formulaValue: "vero",
                    numberValue: 44.099998,
                    stringValue: "eaque",
                  },
                  formattedValue: "ut",
                  hyperlink: "vitae",
                  note: "reiciendis",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "in",
                        },
                        groupLimit: {
                          applyOrder: 4531644248948507085,
                          countLimit: 7147558578953950926,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "QUARTER",
                          },
                          histogramRule: {
                            end: 55.099998,
                            interval: 36.099998,
                            start: 22.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "et",
                                    type: "REF",
                                  },
                                  formulaValue: "consequatur",
                                  numberValue: 40.099998,
                                  stringValue: "voluptates",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "omnis",
                                      type: "NAME",
                                    },
                                    formulaValue: "consequatur",
                                    numberValue: 47.200001,
                                    stringValue: "voluptatem",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "nobis",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "sit",
                                  numberValue: 72.099998,
                                  stringValue: "sapiente",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "omnis",
                                      type: "REF",
                                    },
                                    formulaValue: "voluptatem",
                                    numberValue: 22.100000,
                                    stringValue: "consequuntur",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "qui",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 4983403768026305685,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "sit",
                                type: "NUM",
                              },
                              formulaValue: "et",
                              numberValue: 53.200001,
                              stringValue: "natus",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "error",
                                type: "LOADING",
                              },
                              formulaValue: "voluptates",
                              numberValue: 58.099998,
                              stringValue: "sit",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quo",
                                type: "NUM",
                              },
                              formulaValue: "sunt",
                              numberValue: 50.200001,
                              stringValue: "quam",
                            },
                          ],
                          valuesIndex: 1313277147915212900,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "ut",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "qui",
                              numberValue: 19.200001,
                              stringValue: "sed",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "excepturi",
                        },
                        groupLimit: {
                          applyOrder: 2673352962799828358,
                          countLimit: 1519531993524129683,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "SECOND",
                          },
                          histogramRule: {
                            end: 46.099998,
                            interval: 84.199997,
                            start: 71.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "accusantium",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "aliquid",
                                  numberValue: 21.100000,
                                  stringValue: "officia",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "non",
                                      type: "NUM",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 12.100000,
                                    stringValue: "doloribus",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "similique",
                                    type: "N_A",
                                  },
                                  formulaValue: "cumque",
                                  numberValue: 29.100000,
                                  stringValue: "fugiat",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "corrupti",
                                      type: "REF",
                                    },
                                    formulaValue: "harum",
                                    numberValue: 4.200000,
                                    stringValue: "nisi",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "omnis",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 7700403307772903149,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "dolor",
                                type: "VALUE",
                              },
                              formulaValue: "quam",
                              numberValue: 26.100000,
                              stringValue: "iusto",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "quos",
                                type: "NUM",
                              },
                              formulaValue: "similique",
                              numberValue: 47.200001,
                              stringValue: "et",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "asperiores",
                                type: "NUM",
                              },
                              formulaValue: "similique",
                              numberValue: 61.200001,
                              stringValue: "velit",
                            },
                          ],
                          valuesIndex: 501002903384902666,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "rem",
                                type: "NAME",
                              },
                              formulaValue: "corrupti",
                              numberValue: 44.099998,
                              stringValue: "dolorem",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "et": {
                        condition: {
                          type: "TEXT_NOT_CONTAINS",
                          values: [
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "quasi",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "maiores",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "OBJECT_IN_ERROR_STATE",
                      errorMessage: "non",
                      lastRefreshTime: "quo",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "dolores",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 4252231474875498267,
                        dataSourceColumnReference: {
                          name: "quae",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_LESS_THAN_EQ",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "inventore",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "quasi",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "excepturi",
                        },
                        groupLimit: {
                          applyOrder: 3503906081170532065,
                          countLimit: 6410189274557663118,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE_AMPM",
                          },
                          histogramRule: {
                            end: 98.099998,
                            interval: 88.099998,
                            start: 13.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "non",
                                    type: "NUM",
                                  },
                                  formulaValue: "aut",
                                  numberValue: 4.200000,
                                  stringValue: "mollitia",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "est",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "atque",
                                    numberValue: 87.099998,
                                    stringValue: "molestias",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "alias",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 6920260436052042418,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "porro",
                                type: "VALUE",
                              },
                              formulaValue: "eos",
                              numberValue: 92.199997,
                              stringValue: "aut",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "ducimus",
                                type: "N_A",
                              },
                              formulaValue: "cupiditate",
                              numberValue: 89.199997,
                              stringValue: "quia",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "maiores",
                                type: "NUM",
                              },
                              formulaValue: "autem",
                              numberValue: 5.100000,
                              stringValue: "saepe",
                            },
                          ],
                          valuesIndex: 8139974102771600680,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "eligendi",
                                type: "REF",
                              },
                              formulaValue: "ut",
                              numberValue: 96.099998,
                              stringValue: "enim",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "autem",
                                type: "NAME",
                              },
                              formulaValue: "maiores",
                              numberValue: 37.099998,
                              stringValue: "dolorem",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "asperiores",
                                type: "NUM",
                              },
                              formulaValue: "blanditiis",
                              numberValue: 48.099998,
                              stringValue: "facere",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 5852034654832556724,
                      endRowIndex: 209405488468447956,
                      sheetId: 7567746428576195883,
                      startColumnIndex: 6756695190783840003,
                      startRowIndex: 8031450611305866957,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "voluptate",
                        },
                        formula: "est",
                        name: "ullam",
                        sourceColumnOffset: 6451047454414195206,
                        summarizeFunction: "COUNTA",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "aperiam",
                        fontSize: 7741773402233652134,
                        foregroundColor: {
                          alpha: 49.200001,
                          blue: 16.100000,
                          green: 93.199997,
                          red: 30.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 86.199997,
                            blue: 93.199997,
                            green: 55.200001,
                            red: 90.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        italic: true,
                        link: {
                          uri: "in",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 7960899851456312868,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "nihil",
                        fontSize: 978122525640061901,
                        foregroundColor: {
                          alpha: 79.099998,
                          blue: 98.199997,
                          green: 52.099998,
                          red: 26.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 25.200001,
                            blue: 15.100000,
                            green: 53.200001,
                            red: 39.200001,
                          },
                          themeColor: "ACCENT1",
                        },
                        italic: false,
                        link: {
                          uri: "eius",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 927014449268746202,
                    },
                    {
                      format: {
                        bold: true,
                        fontFamily: "dolore",
                        fontSize: 539485896204197979,
                        foregroundColor: {
                          alpha: 48.099998,
                          blue: 63.200001,
                          green: 20.200001,
                          red: 34.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 24.100000,
                            blue: 25.200001,
                            green: 91.099998,
                            red: 50.200001,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        italic: false,
                        link: {
                          uri: "voluptatibus",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 57816512661677579,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 11.100000,
                      blue: 88.199997,
                      green: 51.200001,
                      red: 68.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 72.099998,
                        blue: 83.099998,
                        green: 38.200001,
                        red: 26.100000,
                      },
                      themeColor: "LINK",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 23.100000,
                          blue: 13.100000,
                          green: 80.099998,
                          red: 41.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 99.199997,
                            blue: 2.200000,
                            green: 82.099998,
                            red: 0.100000,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "DOUBLE",
                        width: 1778766773122600397,
                      },
                      left: {
                        color: {
                          alpha: 18.200001,
                          blue: 36.099998,
                          green: 15.100000,
                          red: 40.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 7.100000,
                            blue: 3.100000,
                            green: 54.200001,
                            red: 90.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "NONE",
                        width: 8450635608278765101,
                      },
                      right: {
                        color: {
                          alpha: 65.099998,
                          blue: 94.099998,
                          green: 36.200001,
                          red: 82.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 59.200001,
                            blue: 85.199997,
                            green: 26.100000,
                            red: 68.199997,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "SOLID",
                        width: 3877911812055588682,
                      },
                      top: {
                        color: {
                          alpha: 9.200000,
                          blue: 5.200000,
                          green: 63.099998,
                          red: 3.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 50.200001,
                            blue: 90.099998,
                            green: 83.199997,
                            red: 19.100000,
                          },
                          themeColor: "ACCENT1",
                        },
                        style: "SOLID_MEDIUM",
                        width: 1254803380413150060,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "fugiat",
                      type: "DATE_TIME",
                    },
                    padding: {
                      bottom: 1204118041888629489,
                      left: 5110008006535246093,
                      right: 8280915374337269852,
                      top: 6122867366519147491,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "odit",
                      fontSize: 4134834785905532531,
                      foregroundColor: {
                        alpha: 88.099998,
                        blue: 89.099998,
                        green: 26.200001,
                        red: 81.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 21.100000,
                          blue: 77.099998,
                          green: 26.100000,
                          red: 13.100000,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: false,
                      link: {
                        uri: "et",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 8064918295075231657,
                      vertical: true,
                    },
                    verticalAlignment: "BOTTOM",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "exercitationem",
                      type: "DIVIDE_BY_ZERO",
                    },
                    formulaValue: "ipsa",
                    numberValue: 70.199997,
                    stringValue: "et",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "OTHER",
                      errorMessage: "corporis",
                      lastRefreshTime: "et",
                      state: "RUNNING",
                    },
                    dataSourceId: "est",
                  },
                  dataSourceTable: {
                    columnSelectionType: "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
                    columns: [
                      {
                        name: "voluptatem",
                      },
                      {
                        name: "corporis",
                      },
                      {
                        name: "et",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "OBJECT_IN_ERROR_STATE",
                      errorMessage: "repellat",
                      lastRefreshTime: "ullam",
                      state: "FAILED",
                    },
                    dataSourceId: "sint",
                    filterSpecs: [
                      {
                        columnIndex: 5222008482570610929,
                        dataSourceColumnReference: {
                          name: "magni",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_IS_VALID",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "eum",
                              },
                            ],
                          },
                          hiddenValues: [
                            "sed",
                            "autem",
                            "perferendis",
                          ],
                          visibleBackgroundColor: {
                            alpha: 26.200001,
                            blue: 67.099998,
                            green: 90.099998,
                            red: 15.200000,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 56.099998,
                              blue: 51.200001,
                              green: 91.199997,
                              red: 30.100000,
                            },
                            themeColor: "ACCENT3",
                          },
                          visibleForegroundColor: {
                            alpha: 32.099998,
                            blue: 33.099998,
                            green: 19.200001,
                            red: 17.100000,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 21.100000,
                              blue: 81.199997,
                              green: 54.200001,
                              red: 50.200001,
                            },
                            themeColor: "ACCENT2",
                          },
                        },
                      },
                    ],
                    rowLimit: 1501579444130182109,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 55.099998,
                          blue: 52.200001,
                          green: 6.100000,
                          red: 8.200000,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 2.200000,
                            blue: 12.200000,
                            green: 55.200001,
                            red: 28.200001,
                          },
                          themeColor: "ACCENT5",
                        },
                        dataSourceColumnReference: {
                          name: "quam",
                        },
                        dimensionIndex: 6948477282899244145,
                        foregroundColor: {
                          alpha: 64.199997,
                          blue: 6.100000,
                          green: 36.099998,
                          red: 4.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 11.100000,
                            blue: 88.199997,
                            green: 93.099998,
                            red: 91.199997,
                          },
                          themeColor: "ACCENT2",
                        },
                        sortOrder: "DESCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "DATE_BEFORE",
                      values: [
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "sapiente",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "placeat",
                        },
                      ],
                    },
                    inputMessage: "est",
                    showCustomUi: true,
                    strict: true,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 64.199997,
                      blue: 57.099998,
                      green: 90.099998,
                      red: 45.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 83.099998,
                        blue: 89.099998,
                        green: 30.200001,
                        red: 23.100000,
                      },
                      themeColor: "ACCENT2",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 35.099998,
                          blue: 22.100000,
                          green: 31.200001,
                          red: 4.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 53.099998,
                            blue: 5.200000,
                            green: 61.200001,
                            red: 2.100000,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "DASHED",
                        width: 775697503609797401,
                      },
                      left: {
                        color: {
                          alpha: 71.099998,
                          blue: 77.199997,
                          green: 8.100000,
                          red: 80.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 28.100000,
                            blue: 54.200001,
                            green: 51.200001,
                            red: 91.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "DASHED",
                        width: 7936482366512344006,
                      },
                      right: {
                        color: {
                          alpha: 2.100000,
                          blue: 0.200000,
                          green: 24.200001,
                          red: 33.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 20.200001,
                            blue: 93.099998,
                            green: 6.200000,
                            red: 39.200001,
                          },
                          themeColor: "TEXT",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 8191775831018068405,
                      },
                      top: {
                        color: {
                          alpha: 38.099998,
                          blue: 64.099998,
                          green: 92.099998,
                          red: 69.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 81.099998,
                            blue: 36.200001,
                            green: 47.099998,
                            red: 18.200001,
                          },
                          themeColor: "ACCENT1",
                        },
                        style: "DOTTED",
                        width: 8417111741731805301,
                      },
                    },
                    horizontalAlignment: "LEFT",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "est",
                      type: "CURRENCY",
                    },
                    padding: {
                      bottom: 812070531814022802,
                      left: 9132459161085909471,
                      right: 425668127910046653,
                      top: 8272805941637293784,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "magnam",
                      fontSize: 4154483364581839748,
                      foregroundColor: {
                        alpha: 18.200001,
                        blue: 33.200001,
                        green: 83.199997,
                        red: 71.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 19.200001,
                          blue: 63.099998,
                          green: 26.200001,
                          red: 74.099998,
                        },
                        themeColor: "ACCENT2",
                      },
                      italic: true,
                      link: {
                        uri: "sit",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 8366210381291800927,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "CLIP",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "aliquid",
                      type: "NAME",
                    },
                    formulaValue: "dignissimos",
                    numberValue: 44.099998,
                    stringValue: "molestiae",
                  },
                  formattedValue: "possimus",
                  hyperlink: "quos",
                  note: "dolor",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "voluptas",
                        },
                        groupLimit: {
                          applyOrder: 1498685609503649375,
                          countLimit: 5527112571102189911,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH_DAY",
                          },
                          histogramRule: {
                            end: 72.099998,
                            interval: 63.200001,
                            start: 43.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "commodi",
                                    type: "REF",
                                  },
                                  formulaValue: "laborum",
                                  numberValue: 28.100000,
                                  stringValue: "aut",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "et",
                                      type: "NAME",
                                    },
                                    formulaValue: "ea",
                                    numberValue: 78.099998,
                                    stringValue: "mollitia",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "nostrum",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "delectus",
                                    numberValue: 65.099998,
                                    stringValue: "laborum",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "repudiandae",
                                    type: "ERROR",
                                  },
                                  formulaValue: "quibusdam",
                                  numberValue: 45.200001,
                                  stringValue: "omnis",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "non",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "nihil",
                                    numberValue: 71.099998,
                                    stringValue: "iure",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "modi",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "inventore",
                                    numberValue: 48.099998,
                                    stringValue: "officiis",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "necessitatibus",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "voluptatem",
                                  numberValue: 88.099998,
                                  stringValue: "aut",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "itaque",
                                      type: "REF",
                                    },
                                    formulaValue: "placeat",
                                    numberValue: 64.099998,
                                    stringValue: "distinctio",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "voluptatem",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 369661988613189845,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "tenetur",
                                type: "ERROR",
                              },
                              formulaValue: "ut",
                              numberValue: 31.100000,
                              stringValue: "aut",
                            },
                          ],
                          valuesIndex: 1886926271465543252,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "temporibus",
                                type: "LOADING",
                              },
                              formulaValue: "ullam",
                              numberValue: 86.099998,
                              stringValue: "quas",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "eos",
                                type: "VALUE",
                              },
                              formulaValue: "nulla",
                              numberValue: 63.200001,
                              stringValue: "dolores",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "natus",
                        },
                        groupLimit: {
                          applyOrder: 5645171069413512649,
                          countLimit: 2228012595021532132,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 59.200001,
                            interval: 71.099998,
                            start: 86.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quia",
                                    type: "NUM",
                                  },
                                  formulaValue: "et",
                                  numberValue: 94.199997,
                                  stringValue: "modi",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ut",
                                      type: "N_A",
                                    },
                                    formulaValue: "distinctio",
                                    numberValue: 18.100000,
                                    stringValue: "quos",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "facilis",
                                      type: "REF",
                                    },
                                    formulaValue: "est",
                                    numberValue: 84.099998,
                                    stringValue: "et",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "repudiandae",
                                    type: "NUM",
                                  },
                                  formulaValue: "aut",
                                  numberValue: 27.100000,
                                  stringValue: "amet",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "nostrum",
                                      type: "REF",
                                    },
                                    formulaValue: "quae",
                                    numberValue: 85.199997,
                                    stringValue: "aut",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "aut",
                                      type: "LOADING",
                                    },
                                    formulaValue: "ipsam",
                                    numberValue: 77.099998,
                                    stringValue: "accusantium",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "est",
                                      type: "ERROR",
                                    },
                                    formulaValue: "non",
                                    numberValue: 66.099998,
                                    stringValue: "saepe",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "et",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "minus",
                                  numberValue: 28.200001,
                                  stringValue: "laboriosam",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quibusdam",
                                      type: "LOADING",
                                    },
                                    formulaValue: "explicabo",
                                    numberValue: 65.199997,
                                    stringValue: "id",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quos",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "quaerat",
                                    numberValue: 68.199997,
                                    stringValue: "iusto",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quaerat",
                                      type: "ERROR",
                                    },
                                    formulaValue: "iste",
                                    numberValue: 76.099998,
                                    stringValue: "et",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 9176579446507748346,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "quidem",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "fugiat",
                              numberValue: 27.200001,
                              stringValue: "asperiores",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "commodi",
                                type: "NAME",
                              },
                              formulaValue: "tempore",
                              numberValue: 11.100000,
                              stringValue: "culpa",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "sit",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "eos",
                              numberValue: 90.199997,
                              stringValue: "sint",
                            },
                          ],
                          valuesIndex: 7116063587642680961,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "officia",
                                type: "NUM",
                              },
                              formulaValue: "quisquam",
                              numberValue: 25.200001,
                              stringValue: "molestiae",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "non",
                        },
                        groupLimit: {
                          applyOrder: 2732891990192878064,
                          countLimit: 3940567502943996961,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DATE_TIME_RULE_TYPE_UNSPECIFIED",
                          },
                          histogramRule: {
                            end: 2.100000,
                            interval: 94.099998,
                            start: 9.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "eveniet",
                                    type: "LOADING",
                                  },
                                  formulaValue: "numquam",
                                  numberValue: 21.200001,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ut",
                                      type: "NUM",
                                    },
                                    formulaValue: "repellat",
                                    numberValue: 61.099998,
                                    stringValue: "alias",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 1494197822019165896,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quasi",
                                type: "REF",
                              },
                              formulaValue: "qui",
                              numberValue: 37.200001,
                              stringValue: "quo",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "consequuntur",
                                type: "NUM",
                              },
                              formulaValue: "aperiam",
                              numberValue: 79.199997,
                              stringValue: "perspiciatis",
                            },
                          ],
                          valuesIndex: 4754376142526179204,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "laborum",
                                type: "NUM",
                              },
                              formulaValue: "enim",
                              numberValue: 9.200000,
                              stringValue: "saepe",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "ab",
                                type: "VALUE",
                              },
                              formulaValue: "nihil",
                              numberValue: 14.200000,
                              stringValue: "ut",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "rem",
                                type: "LOADING",
                              },
                              formulaValue: "qui",
                              numberValue: 29.200001,
                              stringValue: "quod",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "eum": {
                        condition: {
                          type: "DATE_ON_OR_BEFORE",
                          values: [
                            {
                              relativeDate: "YESTERDAY",
                              userEnteredValue: "eligendi",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "similique",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "voluptatem",
                          "fuga",
                        ],
                      },
                      "reiciendis": {
                        condition: {
                          type: "TEXT_NOT_CONTAINS",
                          values: [
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "eveniet",
                            },
                            {
                              relativeDate: "TOMORROW",
                              userEnteredValue: "iusto",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "sed",
                          "autem",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "ENGINE",
                      errorMessage: "quia",
                      lastRefreshTime: "et",
                      state: "FAILED",
                    },
                    dataSourceId: "fugiat",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 5214039741130657197,
                        dataSourceColumnReference: {
                          name: "et",
                        },
                        filterCriteria: {
                          condition: {
                            type: "BLANK",
                            values: [
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "nihil",
                              },
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "impedit",
                              },
                              {
                                relativeDate: "TODAY",
                                userEnteredValue: "cum",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "ab",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 4027827813367978224,
                        dataSourceColumnReference: {
                          name: "culpa",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_AFTER",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "harum",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "nesciunt",
                              },
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "ut",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "id",
                            "officiis",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 4648683895683420699,
                        dataSourceColumnReference: {
                          name: "aut",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_BETWEEN",
                            values: [
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "dolorem",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "non",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "ut",
                        },
                        groupLimit: {
                          applyOrder: 8473808178859876231,
                          countLimit: 638961818148615672,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            end: 34.200001,
                            interval: 7.200000,
                            start: 29.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "rem",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "modi",
                                  numberValue: 41.200001,
                                  stringValue: "maiores",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "amet",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 11.200000,
                                    stringValue: "sunt",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "aspernatur",
                                    type: "NAME",
                                  },
                                  formulaValue: "veniam",
                                  numberValue: 69.099998,
                                  stringValue: "sunt",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quia",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "et",
                                    numberValue: 31.100000,
                                    stringValue: "laborum",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "rerum",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "sint",
                                    numberValue: 85.099998,
                                    stringValue: "impedit",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "ea",
                                      type: "LOADING",
                                    },
                                    formulaValue: "ipsam",
                                    numberValue: 20.100000,
                                    stringValue: "eaque",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ut",
                                    type: "NUM",
                                  },
                                  formulaValue: "natus",
                                  numberValue: 38.099998,
                                  stringValue: "esse",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "omnis",
                                      type: "REF",
                                    },
                                    formulaValue: "eligendi",
                                    numberValue: 97.099998,
                                    stringValue: "est",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "blanditiis",
                                      type: "NAME",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 48.200001,
                                    stringValue: "porro",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ea",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "libero",
                                    numberValue: 82.199997,
                                    stringValue: "ex",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "modi",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 2387767198761766576,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "praesentium",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "ut",
                              numberValue: 60.200001,
                              stringValue: "voluptate",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quod",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "sapiente",
                              numberValue: 48.200001,
                              stringValue: "rerum",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quis",
                                type: "ERROR",
                              },
                              formulaValue: "magni",
                              numberValue: 5.200000,
                              stringValue: "inventore",
                            },
                          ],
                          valuesIndex: 5429371275551621070,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "quia",
                                type: "LOADING",
                              },
                              formulaValue: "aut",
                              numberValue: 30.100000,
                              stringValue: "dicta",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 1450710047350778073,
                      endRowIndex: 6254473515370009444,
                      sheetId: 7154668763997599595,
                      startColumnIndex: 8694882130994621151,
                      startRowIndex: 3141407755742200079,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_ROW_TOTAL",
                        dataSourceColumnReference: {
                          name: "sint",
                        },
                        formula: "pariatur",
                        name: "aut",
                        sourceColumnOffset: 4866574642081695297,
                        summarizeFunction: "VAR",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "facilis",
                        fontSize: 4025641259490956154,
                        foregroundColor: {
                          alpha: 78.099998,
                          blue: 82.199997,
                          green: 89.099998,
                          red: 51.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 63.099998,
                            blue: 65.099998,
                            green: 37.099998,
                            red: 42.200001,
                          },
                          themeColor: "TEXT",
                        },
                        italic: true,
                        link: {
                          uri: "consequuntur",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      startIndex: 3645075868763264471,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 32.200001,
                      blue: 91.099998,
                      green: 63.099998,
                      red: 96.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 42.200001,
                        blue: 51.200001,
                        green: 70.099998,
                        red: 43.099998,
                      },
                      themeColor: "ACCENT2",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 38.200001,
                          blue: 39.200001,
                          green: 38.200001,
                          red: 45.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 17.100000,
                            blue: 13.100000,
                            green: 95.199997,
                            red: 27.100000,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "SOLID",
                        width: 5393476464276171398,
                      },
                      left: {
                        color: {
                          alpha: 19.100000,
                          blue: 17.200001,
                          green: 93.099998,
                          red: 46.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 99.199997,
                            blue: 22.100000,
                            green: 84.199997,
                            red: 5.200000,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 6687532808865657061,
                      },
                      right: {
                        color: {
                          alpha: 6.100000,
                          blue: 63.099998,
                          green: 9.100000,
                          red: 7.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 22.100000,
                            blue: 71.199997,
                            green: 62.200001,
                            red: 53.099998,
                          },
                          themeColor: "TEXT",
                        },
                        style: "DOTTED",
                        width: 3649348173484868031,
                      },
                      top: {
                        color: {
                          alpha: 30.100000,
                          blue: 97.199997,
                          green: 77.199997,
                          red: 52.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 76.099998,
                            blue: 76.099998,
                            green: 92.199997,
                            red: 69.199997,
                          },
                          themeColor: "TEXT",
                        },
                        style: "SOLID_THICK",
                        width: 5488167306689871101,
                      },
                    },
                    horizontalAlignment: "LEFT",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "perspiciatis",
                      type: "NUMBER_FORMAT_TYPE_UNSPECIFIED",
                    },
                    padding: {
                      bottom: 4194850424128076680,
                      left: 2445060182407158026,
                      right: 1651113675587565919,
                      top: 3639210451818188947,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "occaecati",
                      fontSize: 1439185556853835442,
                      foregroundColor: {
                        alpha: 86.199997,
                        blue: 4.100000,
                        green: 20.200001,
                        red: 18.100000,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 25.200001,
                          blue: 32.099998,
                          green: 80.099998,
                          red: 46.200001,
                        },
                        themeColor: "ACCENT1",
                      },
                      italic: false,
                      link: {
                        uri: "magnam",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 1096538784439960647,
                      vertical: true,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  userEnteredValue: {
                    boolValue: false,
                    errorValue: {
                      message: "aperiam",
                      type: "REF",
                    },
                    formulaValue: "impedit",
                    numberValue: 43.200001,
                    stringValue: "qui",
                  },
                },
              ],
            },
          ],
          start: {
            columnIndex: 8113560356109833465,
            rowIndex: 6889694493217461142,
            sheetId: 6826306643766641779,
          },
        },
        updateChartSpec: {
          chartId: 4803924266802479623,
          spec: {
            altText: "magni",
            backgroundColor: {
              alpha: 34.200001,
              blue: 20.200001,
              green: 95.099998,
              red: 75.099998,
            },
            backgroundColorStyle: {
              rgbColor: {
                alpha: 37.200001,
                blue: 88.099998,
                green: 37.200001,
                red: 97.199997,
              },
              themeColor: "ACCENT4",
            },
            basicChart: {
              axis: [
                {
                  format: {
                    bold: false,
                    fontFamily: "numquam",
                    fontSize: 7904580429400938516,
                    foregroundColor: {
                      alpha: 90.099998,
                      blue: 62.099998,
                      green: 98.099998,
                      red: 0.100000,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 76.099998,
                        blue: 26.100000,
                        green: 41.200001,
                        red: 68.199997,
                      },
                      themeColor: "TEXT",
                    },
                    italic: true,
                    link: {
                      uri: "sit",
                    },
                    strikethrough: true,
                    underline: true,
                  },
                  position: "LEFT_AXIS",
                  title: "hic",
                  titleTextPosition: {
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                  },
                  viewWindowOptions: {
                    viewWindowMax: 19.200001,
                    viewWindowMin: 89.099998,
                    viewWindowMode: "EXPLICIT",
                  },
                },
                {
                  format: {
                    bold: false,
                    fontFamily: "voluptatem",
                    fontSize: 801935641605201774,
                    foregroundColor: {
                      alpha: 70.099998,
                      blue: 96.099998,
                      green: 63.200001,
                      red: 68.099998,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 34.099998,
                        blue: 53.200001,
                        green: 74.199997,
                        red: 2.200000,
                      },
                      themeColor: "ACCENT3",
                    },
                    italic: true,
                    link: {
                      uri: "accusamus",
                    },
                    strikethrough: true,
                    underline: false,
                  },
                  position: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                  title: "et",
                  titleTextPosition: {
                    horizontalAlignment: "CENTER",
                  },
                  viewWindowOptions: {
                    viewWindowMax: 27.100000,
                    viewWindowMin: 28.200001,
                    viewWindowMode: "EXPLICIT",
                  },
                },
              ],
              chartType: "SCATTER",
              compareMode: "DATUM",
              domains: [
                {
                  domain: {
                    aggregateType: "MEDIAN",
                    columnReference: {
                      name: "beatae",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_YEAR",
                      },
                      histogramRule: {
                        intervalSize: 37.200001,
                        maxValue: 70.099998,
                        minValue: 28.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 4851349794076304586,
                          endRowIndex: 8509313208784081280,
                          sheetId: 3349477414739995191,
                          startColumnIndex: 849036596710292591,
                          startRowIndex: 1220346728902134996,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
                {
                  domain: {
                    aggregateType: "MIN",
                    columnReference: {
                      name: "hic",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_YEAR",
                      },
                      histogramRule: {
                        intervalSize: 80.099998,
                        maxValue: 41.099998,
                        minValue: 11.200000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2174699156418811023,
                          endRowIndex: 3109288054643828978,
                          sheetId: 1813487265034744653,
                          startColumnIndex: 560046201456696005,
                          startRowIndex: 2500857726277101342,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
              ],
              headerCount: 5932766816245407468,
              interpolateNulls: true,
              legendPosition: "BOTTOM_LEGEND",
              lineSmoothing: false,
              series: [
                {
                  color: {
                    alpha: 43.200001,
                    blue: 58.200001,
                    green: 38.099998,
                    red: 51.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 30.200001,
                      blue: 31.200001,
                      green: 65.199997,
                      red: 57.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "SUM",
                      columnReference: {
                        name: "ab",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 7.100000,
                          maxValue: 4.100000,
                          minValue: 49.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 3762091061409122105,
                            endRowIndex: 4451109748108239976,
                            sheetId: 3107445720124732533,
                            startColumnIndex: 5675028891667254599,
                            startRowIndex: 5590828328739095899,
                          },
                        ],
                      },
                    },
                    placement: "LEFT",
                    textFormat: {
                      bold: false,
                      fontFamily: "voluptatem",
                      fontSize: 2024103263861223824,
                      foregroundColor: {
                        alpha: 40.200001,
                        blue: 79.199997,
                        green: 15.200000,
                        red: 41.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 99.099998,
                          blue: 99.099998,
                          green: 8.100000,
                          red: 52.200001,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      italic: true,
                      link: {
                        uri: "et",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    type: "DATA",
                  },
                  lineStyle: {
                    type: "MEDIUM_DASHED",
                    width: 8239794490828368091,
                  },
                  pointStyle: {
                    shape: "CIRCLE",
                    size: 40.099998,
                  },
                  series: {
                    aggregateType: "MEDIAN",
                    columnReference: {
                      name: "dolorem",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "HOUR_MINUTE",
                      },
                      histogramRule: {
                        intervalSize: 0.200000,
                        maxValue: 70.199997,
                        minValue: 53.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 8288401537735459062,
                          endRowIndex: 7695836825038931295,
                          sheetId: 1539881925040347655,
                          startColumnIndex: 2332523520286397549,
                          startRowIndex: 8958889377381109030,
                        },
                        {
                          endColumnIndex: 632113342507277067,
                          endRowIndex: 228904311251874525,
                          sheetId: 1264816207080619033,
                          startColumnIndex: 6878965475561474661,
                          startRowIndex: 1641403421775753887,
                        },
                      ],
                    },
                  },
                  styleOverrides: [
                    {
                      color: {
                        alpha: 11.200000,
                        blue: 70.199997,
                        green: 58.099998,
                        red: 12.100000,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 59.099998,
                          blue: 3.100000,
                          green: 67.199997,
                          red: 30.200001,
                        },
                        themeColor: "ACCENT1",
                      },
                      index: 5664400048405896491,
                      pointStyle: {
                        shape: "STAR",
                        size: 17.200001,
                      },
                    },
                    {
                      color: {
                        alpha: 18.100000,
                        blue: 37.200001,
                        green: 82.199997,
                        red: 21.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 5.100000,
                          blue: 39.200001,
                          green: 2.200000,
                          red: 29.100000,
                        },
                        themeColor: "ACCENT2",
                      },
                      index: 847027306771042448,
                      pointStyle: {
                        shape: "STAR",
                        size: 37.099998,
                      },
                    },
                    {
                      color: {
                        alpha: 4.100000,
                        blue: 9.100000,
                        green: 54.200001,
                        red: 48.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 7.100000,
                          blue: 66.199997,
                          green: 11.200000,
                          red: 83.099998,
                        },
                        themeColor: "ACCENT3",
                      },
                      index: 622824300901094915,
                      pointStyle: {
                        shape: "SQUARE",
                        size: 21.200001,
                      },
                    },
                  ],
                  targetAxis: "LEFT_AXIS",
                  type: "COLUMN",
                },
              ],
              stackedType: "NOT_STACKED",
              threeDimensional: false,
              totalDataLabel: {
                customLabelData: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "perspiciatis",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_YEAR",
                    },
                    histogramRule: {
                      intervalSize: 21.200001,
                      maxValue: 68.199997,
                      minValue: 28.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 4262325451887767171,
                        endRowIndex: 4096829062972009590,
                        sheetId: 7267601547870096478,
                        startColumnIndex: 4936221003648413179,
                        startRowIndex: 8005959437213008726,
                      },
                      {
                        endColumnIndex: 5979208641061415134,
                        endRowIndex: 9191622207357825138,
                        sheetId: 5951605787798531956,
                        startColumnIndex: 549081453131826452,
                        startRowIndex: 2083709215893123628,
                      },
                    ],
                  },
                },
                placement: "INSIDE_END",
                textFormat: {
                  bold: false,
                  fontFamily: "et",
                  fontSize: 633679103687526099,
                  foregroundColor: {
                    alpha: 63.200001,
                    blue: 40.200001,
                    green: 88.099998,
                    red: 57.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 32.200001,
                      blue: 50.200001,
                      green: 55.200001,
                      red: 56.099998,
                    },
                    themeColor: "ACCENT5",
                  },
                  italic: true,
                  link: {
                    uri: "officiis",
                  },
                  strikethrough: true,
                  underline: true,
                },
                type: "DATA_LABEL_TYPE_UNSPECIFIED",
              },
            },
            bubbleChart: {
              bubbleBorderColor: {
                alpha: 38.200001,
                blue: 78.199997,
                green: 56.200001,
                red: 5.200000,
              },
              bubbleBorderColorStyle: {
                rgbColor: {
                  alpha: 86.199997,
                  blue: 81.199997,
                  green: 66.199997,
                  red: 64.199997,
                },
                themeColor: "BACKGROUND",
              },
              bubbleLabels: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "minus",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH_DAY",
                  },
                  histogramRule: {
                    intervalSize: 48.099998,
                    maxValue: 20.100000,
                    minValue: 86.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 7766915322051633286,
                      endRowIndex: 5793330925184919921,
                      sheetId: 3820535261830725967,
                      startColumnIndex: 8859841897986312804,
                      startRowIndex: 5984101970517340897,
                    },
                    {
                      endColumnIndex: 9027938211934002868,
                      endRowIndex: 3802271400927201357,
                      sheetId: 8490979167950514602,
                      startColumnIndex: 3384630195832584735,
                      startRowIndex: 230536053268600314,
                    },
                  ],
                },
              },
              bubbleMaxRadiusSize: 5974282707100491270,
              bubbleMinRadiusSize: 2339931246899802995,
              bubbleOpacity: 75.099998,
              bubbleSizes: {
                aggregateType: "MEDIAN",
                columnReference: {
                  name: "est",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "QUARTER",
                  },
                  histogramRule: {
                    intervalSize: 24.100000,
                    maxValue: 25.100000,
                    minValue: 24.100000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 7736192968301380757,
                      endRowIndex: 6189802600311723125,
                      sheetId: 3437533390422081092,
                      startColumnIndex: 5589309015720870981,
                      startRowIndex: 1283907889913579670,
                    },
                    {
                      endColumnIndex: 3289120517649230566,
                      endRowIndex: 4236945358751591438,
                      sheetId: 2988483295034496698,
                      startColumnIndex: 6189964169761512011,
                      startRowIndex: 2059647227627535016,
                    },
                    {
                      endColumnIndex: 4331932857051142986,
                      endRowIndex: 6527205743299488215,
                      sheetId: 9094880649385521965,
                      startColumnIndex: 7071235852304663857,
                      startRowIndex: 3975821008664801276,
                    },
                  ],
                },
              },
              bubbleTextStyle: {
                bold: true,
                fontFamily: "qui",
                fontSize: 907769620900652743,
                foregroundColor: {
                  alpha: 1.200000,
                  blue: 42.200001,
                  green: 18.200001,
                  red: 21.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 3.200000,
                    blue: 23.100000,
                    green: 1.100000,
                    red: 83.199997,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                italic: true,
                link: {
                  uri: "voluptas",
                },
                strikethrough: false,
                underline: false,
              },
              domain: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "sunt",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_YEAR",
                  },
                  histogramRule: {
                    intervalSize: 88.099998,
                    maxValue: 11.100000,
                    minValue: 8.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 6574076295203887748,
                      endRowIndex: 4971554409990044631,
                      sheetId: 3131963261037629669,
                      startColumnIndex: 7320346362663885968,
                      startRowIndex: 1371081251618962303,
                    },
                    {
                      endColumnIndex: 1959844129451975535,
                      endRowIndex: 4403271786590927255,
                      sheetId: 7041538376089873972,
                      startColumnIndex: 810586091842037977,
                      startRowIndex: 2092632794924482414,
                    },
                    {
                      endColumnIndex: 2024129928143531676,
                      endRowIndex: 5165511019603423903,
                      sheetId: 3566198845058831783,
                      startColumnIndex: 8134934559182222841,
                      startRowIndex: 5007631981227778759,
                    },
                  ],
                },
              },
              groupIds: {
                aggregateType: "SUM",
                columnReference: {
                  name: "possimus",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "SECOND",
                  },
                  histogramRule: {
                    intervalSize: 99.099998,
                    maxValue: 52.099998,
                    minValue: 24.200001,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 6041380708886646747,
                      endRowIndex: 1393442386635563726,
                      sheetId: 8230499604339428912,
                      startColumnIndex: 2701912215371503429,
                      startRowIndex: 4756254085379175036,
                    },
                    {
                      endColumnIndex: 7399821969343246083,
                      endRowIndex: 682818505277060084,
                      sheetId: 4623256134232214013,
                      startColumnIndex: 7590999558282893702,
                      startRowIndex: 6827237120349294601,
                    },
                  ],
                },
              },
              legendPosition: "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED",
              series: {
                aggregateType: "MAX",
                columnReference: {
                  name: "explicabo",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "MINUTE",
                  },
                  histogramRule: {
                    intervalSize: 29.100000,
                    maxValue: 67.099998,
                    minValue: 3.100000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3900171265638121852,
                      endRowIndex: 3440482211212192234,
                      sheetId: 6354774712356498957,
                      startColumnIndex: 6266978040428152218,
                      startRowIndex: 7196243287888629260,
                    },
                  ],
                },
              },
            },
            candlestickChart: {
              data: [
                {
                  closeSeries: {
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "distinctio",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_YEAR",
                        },
                        histogramRule: {
                          intervalSize: 67.099998,
                          maxValue: 84.199997,
                          minValue: 51.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 9171761290992990936,
                            endRowIndex: 5342786475110490064,
                            sheetId: 777440493382771805,
                            startColumnIndex: 8621290474535580241,
                            startRowIndex: 1953521188229072982,
                          },
                          {
                            endColumnIndex: 6637846723811925139,
                            endRowIndex: 5294572671870094595,
                            sheetId: 4947871601635331015,
                            startColumnIndex: 5875170998821981947,
                            startRowIndex: 4582410470001921774,
                          },
                          {
                            endColumnIndex: 757484774443026476,
                            endRowIndex: 2958277169828148866,
                            sheetId: 8631722025279572229,
                            startColumnIndex: 7124947010949594043,
                            startRowIndex: 7854332879356319545,
                          },
                        ],
                      },
                    },
                  },
                  highSeries: {
                    data: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "id",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 7.200000,
                          maxValue: 58.099998,
                          minValue: 63.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7958944695709345380,
                            endRowIndex: 71631997747501121,
                            sheetId: 2278120660741257848,
                            startColumnIndex: 5472587920773032124,
                            startRowIndex: 7486886862016919883,
                          },
                          {
                            endColumnIndex: 8119211604197309433,
                            endRowIndex: 7432588057836467670,
                            sheetId: 8544698732325777844,
                            startColumnIndex: 5206732791236058587,
                            startRowIndex: 8050378937662417059,
                          },
                          {
                            endColumnIndex: 793892690422201489,
                            endRowIndex: 878883542149870116,
                            sheetId: 7898481706253199401,
                            startColumnIndex: 8170827842447777774,
                            startRowIndex: 8702899643524896265,
                          },
                        ],
                      },
                    },
                  },
                  lowSeries: {
                    data: {
                      aggregateType: "SUM",
                      columnReference: {
                        name: "placeat",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 59.200001,
                          maxValue: 64.099998,
                          minValue: 57.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 4043645675209301909,
                            endRowIndex: 4551425963206898156,
                            sheetId: 502048508629615348,
                            startColumnIndex: 1056961699305667101,
                            startRowIndex: 7384900574206999199,
                          },
                          {
                            endColumnIndex: 5534192716385542712,
                            endRowIndex: 7766255117569119462,
                            sheetId: 4272172474385962946,
                            startColumnIndex: 2417643266795297980,
                            startRowIndex: 7424544533425613880,
                          },
                          {
                            endColumnIndex: 3104234473811014069,
                            endRowIndex: 1720134685797899644,
                            sheetId: 5499258179582524892,
                            startColumnIndex: 8053930442823182610,
                            startRowIndex: 1990345199944793354,
                          },
                        ],
                      },
                    },
                  },
                  openSeries: {
                    data: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "officia",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 49.099998,
                          maxValue: 12.200000,
                          minValue: 49.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 8562848534935483964,
                            endRowIndex: 361624332807104883,
                            sheetId: 5572296376314637604,
                            startColumnIndex: 2344369294143236785,
                            startRowIndex: 3241351952199236231,
                          },
                          {
                            endColumnIndex: 7425604297166433803,
                            endRowIndex: 4163100594631126010,
                            sheetId: 8396665970205689982,
                            startColumnIndex: 2200195128719392371,
                            startRowIndex: 5722919667711312575,
                          },
                        ],
                      },
                    },
                  },
                },
              ],
              domain: {
                data: {
                  aggregateType: "MIN",
                  columnReference: {
                    name: "nobis",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 13.100000,
                      maxValue: 7.100000,
                      minValue: 20.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 3276416351004451594,
                        endRowIndex: 8350655293440247125,
                        sheetId: 6207443467076797378,
                        startColumnIndex: 8419873006552606755,
                        startRowIndex: 196396550416631637,
                      },
                      {
                        endColumnIndex: 1639458388632031335,
                        endRowIndex: 4824440712017953810,
                        sheetId: 803434345228807540,
                        startColumnIndex: 5822375358087136597,
                        startRowIndex: 3482951245789394253,
                      },
                      {
                        endColumnIndex: 4706892299017663384,
                        endRowIndex: 2332334313847780687,
                        sheetId: 5885924389560690025,
                        startColumnIndex: 4925089015365576484,
                        startRowIndex: 6170802198150395765,
                      },
                    ],
                  },
                },
                reversed: false,
              },
            },
            dataSourceChartProperties: {
              dataExecutionStatus: {
                errorCode: "OBJECT_IN_ERROR_STATE",
                errorMessage: "aperiam",
                lastRefreshTime: "maiores",
                state: "RUNNING",
              },
              dataSourceId: "est",
            },
            filterSpecs: [
              {
                columnIndex: 4930363133131416635,
                dataSourceColumnReference: {
                  name: "velit",
                },
                filterCriteria: {
                  condition: {
                    type: "CUSTOM_FORMULA",
                    values: [
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "nemo",
                      },
                    ],
                  },
                  hiddenValues: [
                    "et",
                    "voluptas",
                    "sint",
                  ],
                  visibleBackgroundColor: {
                    alpha: 84.099998,
                    blue: 1.200000,
                    green: 39.200001,
                    red: 23.100000,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 33.099998,
                      blue: 32.200001,
                      green: 7.200000,
                      red: 96.099998,
                    },
                    themeColor: "LINK",
                  },
                  visibleForegroundColor: {
                    alpha: 98.099998,
                    blue: 28.200001,
                    green: 32.200001,
                    red: 74.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 85.099998,
                      blue: 8.100000,
                      green: 87.199997,
                      red: 12.200000,
                    },
                    themeColor: "TEXT",
                  },
                },
              },
            ],
            fontName: "culpa",
            hiddenDimensionStrategy: "SHOW_ALL",
            histogramChart: {
              bucketSize: 84.099998,
              legendPosition: "RIGHT_LEGEND",
              outlierPercentile: 78.099998,
              series: [
                {
                  barColor: {
                    alpha: 57.099998,
                    blue: 9.100000,
                    green: 55.200001,
                    red: 25.200001,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 44.099998,
                      blue: 55.099998,
                      green: 34.099998,
                      red: 39.200001,
                    },
                    themeColor: "ACCENT2",
                  },
                  data: {
                    aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                    columnReference: {
                      name: "non",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "MONTH",
                      },
                      histogramRule: {
                        intervalSize: 46.099998,
                        maxValue: 25.200001,
                        minValue: 81.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2303353399358251046,
                          endRowIndex: 665155348456445346,
                          sheetId: 2457702550966200980,
                          startColumnIndex: 8485374091504954194,
                          startRowIndex: 7414068409150291056,
                        },
                        {
                          endColumnIndex: 283470174873009247,
                          endRowIndex: 5362140778889578478,
                          sheetId: 3088882925991459057,
                          startColumnIndex: 8353117563300605760,
                          startRowIndex: 3704367176605450666,
                        },
                        {
                          endColumnIndex: 8771652061264107173,
                          endRowIndex: 1725816525986108692,
                          sheetId: 1962349661628545624,
                          startColumnIndex: 1498812506030936336,
                          startRowIndex: 6418810496222707066,
                        },
                      ],
                    },
                  },
                },
                {
                  barColor: {
                    alpha: 84.199997,
                    blue: 17.200001,
                    green: 52.099998,
                    red: 56.200001,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 62.200001,
                      blue: 69.099998,
                      green: 54.099998,
                      red: 91.199997,
                    },
                    themeColor: "ACCENT1",
                  },
                  data: {
                    aggregateType: "MEDIAN",
                    columnReference: {
                      name: "enim",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "YEAR",
                      },
                      histogramRule: {
                        intervalSize: 84.199997,
                        maxValue: 24.200001,
                        minValue: 32.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2116415622128482082,
                          endRowIndex: 4515399480406248082,
                          sheetId: 5316300286835871041,
                          startColumnIndex: 677307658765571617,
                          startRowIndex: 1390151021618233542,
                        },
                        {
                          endColumnIndex: 1332650913622845673,
                          endRowIndex: 7743682849347203109,
                          sheetId: 6040533171840686377,
                          startColumnIndex: 6330576106239719766,
                          startRowIndex: 3463239855806918452,
                        },
                        {
                          endColumnIndex: 6157593743459274930,
                          endRowIndex: 2113715352113494624,
                          sheetId: 2584184927986693965,
                          startColumnIndex: 4799829129009703753,
                          startRowIndex: 5417741349638026244,
                        },
                      ],
                    },
                  },
                },
                {
                  barColor: {
                    alpha: 57.200001,
                    blue: 87.199997,
                    green: 43.099998,
                    red: 21.100000,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 60.200001,
                      blue: 51.099998,
                      green: 49.200001,
                      red: 9.100000,
                    },
                    themeColor: "ACCENT3",
                  },
                  data: {
                    aggregateType: "MEDIAN",
                    columnReference: {
                      name: "doloremque",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "YEAR_QUARTER",
                      },
                      histogramRule: {
                        intervalSize: 62.099998,
                        maxValue: 53.200001,
                        minValue: 82.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 8727356214962135356,
                          endRowIndex: 813135029748864766,
                          sheetId: 7135030304005608107,
                          startColumnIndex: 2781588038304250300,
                          startRowIndex: 3631013103544494408,
                        },
                        {
                          endColumnIndex: 7705353118515142715,
                          endRowIndex: 4801464758482472795,
                          sheetId: 1466872570891762956,
                          startColumnIndex: 4744968437437996207,
                          startRowIndex: 2928602490937354342,
                        },
                      ],
                    },
                  },
                },
              ],
              showItemDividers: false,
            },
            maximized: true,
            orgChart: {
              labels: {
                aggregateType: "MIN",
                columnReference: {
                  name: "error",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR",
                  },
                  histogramRule: {
                    intervalSize: 1.100000,
                    maxValue: 85.199997,
                    minValue: 17.100000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 8115727027297452429,
                      endRowIndex: 3609853911835461761,
                      sheetId: 3569019038622845205,
                      startColumnIndex: 4432124519039398811,
                      startRowIndex: 7438073302145154797,
                    },
                    {
                      endColumnIndex: 7066801391636009342,
                      endRowIndex: 1085831511807287253,
                      sheetId: 2490686589393857192,
                      startColumnIndex: 7965793567885554109,
                      startRowIndex: 6490059503768811660,
                    },
                    {
                      endColumnIndex: 7015736323773734919,
                      endRowIndex: 5087339025491940736,
                      sheetId: 1925352084401154406,
                      startColumnIndex: 5336937313095979614,
                      startRowIndex: 5303273926481648606,
                    },
                  ],
                },
              },
              nodeColor: {
                alpha: 87.099998,
                blue: 2.100000,
                green: 98.199997,
                red: 25.200001,
              },
              nodeColorStyle: {
                rgbColor: {
                  alpha: 9.200000,
                  blue: 92.199997,
                  green: 89.099998,
                  red: 59.099998,
                },
                themeColor: "ACCENT3",
              },
              nodeSize: "ORG_CHART_LABEL_SIZE_UNSPECIFIED",
              parentLabels: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "maxime",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 38.099998,
                    maxValue: 29.100000,
                    minValue: 38.200001,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 909187510093192748,
                      endRowIndex: 3179073957928220890,
                      sheetId: 1379337464305259067,
                      startColumnIndex: 7890442783068765201,
                      startRowIndex: 6026024381213001374,
                    },
                    {
                      endColumnIndex: 6079125231640809802,
                      endRowIndex: 751799155554866957,
                      sheetId: 3658141280081547982,
                      startColumnIndex: 2035759947091198378,
                      startRowIndex: 679821090127489592,
                    },
                  ],
                },
              },
              selectedNodeColor: {
                alpha: 32.200001,
                blue: 52.099998,
                green: 69.199997,
                red: 18.200001,
              },
              selectedNodeColorStyle: {
                rgbColor: {
                  alpha: 46.200001,
                  blue: 23.100000,
                  green: 20.100000,
                  red: 63.099998,
                },
                themeColor: "ACCENT6",
              },
              tooltips: {
                aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                columnReference: {
                  name: "tempora",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "HOUR_MINUTE",
                  },
                  histogramRule: {
                    intervalSize: 84.199997,
                    maxValue: 30.100000,
                    minValue: 56.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 5179780411647694846,
                      endRowIndex: 5758263159046280352,
                      sheetId: 4029374111861003677,
                      startColumnIndex: 6750786297966603,
                      startRowIndex: 7551467930430372207,
                    },
                  ],
                },
              },
            },
            pieChart: {
              domain: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "enim",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                  },
                  histogramRule: {
                    intervalSize: 29.200001,
                    maxValue: 52.200001,
                    minValue: 74.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 2187810074585096974,
                      endRowIndex: 6519714290036950042,
                      sheetId: 8071035332507950049,
                      startColumnIndex: 4181837753549074096,
                      startRowIndex: 5911398554948214000,
                    },
                  ],
                },
              },
              legendPosition: "LEFT_LEGEND",
              pieHole: 23.200001,
              series: {
                aggregateType: "SUM",
                columnReference: {
                  name: "sed",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_QUARTER",
                  },
                  histogramRule: {
                    intervalSize: 54.099998,
                    maxValue: 80.199997,
                    minValue: 73.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 2377433486783115150,
                      endRowIndex: 2638255594853088782,
                      sheetId: 3932660549355589591,
                      startColumnIndex: 5208993666373066067,
                      startRowIndex: 5451247501904893617,
                    },
                    {
                      endColumnIndex: 8982783386065785194,
                      endRowIndex: 8384809910953804387,
                      sheetId: 2651534252231925915,
                      startColumnIndex: 3609640369103632839,
                      startRowIndex: 6622172005387833094,
                    },
                    {
                      endColumnIndex: 8109901239241100236,
                      endRowIndex: 7855244954587623638,
                      sheetId: 5512550995837990606,
                      startColumnIndex: 2446343920521465149,
                      startRowIndex: 2433634541100086189,
                    },
                  ],
                },
              },
              threeDimensional: false,
            },
            scorecardChart: {
              aggregateType: "MIN",
              baselineValueData: {
                aggregateType: "MEDIAN",
                columnReference: {
                  name: "blanditiis",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 65.199997,
                    maxValue: 16.100000,
                    minValue: 38.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 8734343346324477050,
                      endRowIndex: 8570709823299790137,
                      sheetId: 2061407973322736048,
                      startColumnIndex: 6971633552496817570,
                      startRowIndex: 6146322995185800612,
                    },
                    {
                      endColumnIndex: 3314679013084160299,
                      endRowIndex: 7782720381154309275,
                      sheetId: 6703620352446038061,
                      startColumnIndex: 3702276438753230152,
                      startRowIndex: 7630937484930410815,
                    },
                  ],
                },
              },
              baselineValueFormat: {
                comparisonType: "COMPARISON_TYPE_UNDEFINED",
                description: "dolorem",
                negativeColor: {
                  alpha: 46.099998,
                  blue: 52.099998,
                  green: 19.200001,
                  red: 41.099998,
                },
                negativeColorStyle: {
                  rgbColor: {
                    alpha: 52.099998,
                    blue: 53.200001,
                    green: 57.200001,
                    red: 17.100000,
                  },
                  themeColor: "TEXT",
                },
                position: {
                  horizontalAlignment: "LEFT",
                },
                positiveColor: {
                  alpha: 57.099998,
                  blue: 27.100000,
                  green: 13.200000,
                  red: 91.099998,
                },
                positiveColorStyle: {
                  rgbColor: {
                    alpha: 99.099998,
                    blue: 68.199997,
                    green: 12.200000,
                    red: 1.200000,
                  },
                  themeColor: "ACCENT1",
                },
                textFormat: {
                  bold: false,
                  fontFamily: "numquam",
                  fontSize: 3545418495872376123,
                  foregroundColor: {
                    alpha: 84.199997,
                    blue: 21.200001,
                    green: 95.099998,
                    red: 55.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 93.199997,
                      blue: 6.200000,
                      green: 78.199997,
                      red: 92.199997,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  italic: true,
                  link: {
                    uri: "repellendus",
                  },
                  strikethrough: true,
                  underline: false,
                },
              },
              customFormatOptions: {
                prefix: "illum",
                suffix: "et",
              },
              keyValueData: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "qui",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 44.200001,
                    maxValue: 86.099998,
                    minValue: 9.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 7531863404764186404,
                      endRowIndex: 2146903221829059721,
                      sheetId: 8762591134901018497,
                      startColumnIndex: 2566792385676290767,
                      startRowIndex: 4206091764012850402,
                    },
                    {
                      endColumnIndex: 8412979551423430638,
                      endRowIndex: 4877228475040994903,
                      sheetId: 4657572510679428972,
                      startColumnIndex: 3380579997795623951,
                      startRowIndex: 140636107483292568,
                    },
                    {
                      endColumnIndex: 3417443698451628382,
                      endRowIndex: 5518155982048166940,
                      sheetId: 2319552038199364213,
                      startColumnIndex: 4150183044880378725,
                      startRowIndex: 7402315959375624724,
                    },
                  ],
                },
              },
              keyValueFormat: {
                position: {
                  horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                },
                textFormat: {
                  bold: false,
                  fontFamily: "mollitia",
                  fontSize: 3627991168017286302,
                  foregroundColor: {
                    alpha: 21.100000,
                    blue: 27.100000,
                    green: 61.099998,
                    red: 52.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 85.099998,
                      blue: 92.099998,
                      green: 88.099998,
                      red: 27.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                  italic: false,
                  link: {
                    uri: "sapiente",
                  },
                  strikethrough: true,
                  underline: true,
                },
              },
              numberFormatSource: "FROM_DATA",
              scaleFactor: 6.100000,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 32.099998,
                  blue: 9.100000,
                  green: 30.200001,
                  red: 11.200000,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 1.200000,
                    blue: 59.099998,
                    green: 91.199997,
                    red: 49.099998,
                  },
                  themeColor: "ACCENT4",
                },
                dataSourceColumnReference: {
                  name: "aut",
                },
                dimensionIndex: 4107202732947985782,
                foregroundColor: {
                  alpha: 53.099998,
                  blue: 27.100000,
                  green: 89.099998,
                  red: 81.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 51.200001,
                    blue: 1.100000,
                    green: 11.100000,
                    red: 74.199997,
                  },
                  themeColor: "TEXT",
                },
                sortOrder: "ASCENDING",
              },
            ],
            subtitle: "enim",
            subtitleTextFormat: {
              bold: true,
              fontFamily: "non",
              fontSize: 9178616717713833363,
              foregroundColor: {
                alpha: 87.099998,
                blue: 31.100000,
                green: 15.200000,
                red: 54.200001,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 90.099998,
                  blue: 28.200001,
                  green: 75.199997,
                  red: 66.199997,
                },
                themeColor: "ACCENT4",
              },
              italic: false,
              link: {
                uri: "accusantium",
              },
              strikethrough: true,
              underline: false,
            },
            subtitleTextPosition: {
              horizontalAlignment: "RIGHT",
            },
            title: "voluptatum",
            titleTextFormat: {
              bold: true,
              fontFamily: "voluptas",
              fontSize: 6338869815340926361,
              foregroundColor: {
                alpha: 85.199997,
                blue: 84.099998,
                green: 67.099998,
                red: 9.200000,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 49.099998,
                  blue: 48.200001,
                  green: 96.099998,
                  red: 41.200001,
                },
                themeColor: "ACCENT1",
              },
              italic: false,
              link: {
                uri: "assumenda",
              },
              strikethrough: false,
              underline: false,
            },
            titleTextPosition: {
              horizontalAlignment: "LEFT",
            },
            treemapChart: {
              colorData: {
                aggregateType: "MAX",
                columnReference: {
                  name: "explicabo",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "SECOND",
                  },
                  histogramRule: {
                    intervalSize: 81.199997,
                    maxValue: 59.099998,
                    minValue: 42.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3952350477465608078,
                      endRowIndex: 8746208065791974190,
                      sheetId: 1018368480553503776,
                      startColumnIndex: 8510059489981743396,
                      startRowIndex: 5914732940790697991,
                    },
                    {
                      endColumnIndex: 7521817217470645488,
                      endRowIndex: 2176408965498264218,
                      sheetId: 6956020902767859994,
                      startColumnIndex: 2182627895827880593,
                      startRowIndex: 7781412893310479408,
                    },
                  ],
                },
              },
              colorScale: {
                maxValueColor: {
                  alpha: 90.099998,
                  blue: 75.099998,
                  green: 58.099998,
                  red: 85.099998,
                },
                maxValueColorStyle: {
                  rgbColor: {
                    alpha: 35.200001,
                    blue: 60.099998,
                    green: 34.200001,
                    red: 14.200000,
                  },
                  themeColor: "BACKGROUND",
                },
                midValueColor: {
                  alpha: 39.200001,
                  blue: 29.200001,
                  green: 58.200001,
                  red: 68.099998,
                },
                midValueColorStyle: {
                  rgbColor: {
                    alpha: 34.200001,
                    blue: 75.099998,
                    green: 44.200001,
                    red: 67.199997,
                  },
                  themeColor: "ACCENT6",
                },
                minValueColor: {
                  alpha: 1.100000,
                  blue: 9.100000,
                  green: 84.099998,
                  red: 29.100000,
                },
                minValueColorStyle: {
                  rgbColor: {
                    alpha: 75.099998,
                    blue: 85.099998,
                    green: 60.200001,
                    red: 67.099998,
                  },
                  themeColor: "BACKGROUND",
                },
                noDataColor: {
                  alpha: 69.199997,
                  blue: 65.099998,
                  green: 5.200000,
                  red: 79.199997,
                },
                noDataColorStyle: {
                  rgbColor: {
                    alpha: 76.099998,
                    blue: 61.099998,
                    green: 8.100000,
                    red: 44.200001,
                  },
                  themeColor: "BACKGROUND",
                },
              },
              headerColor: {
                alpha: 99.099998,
                blue: 29.200001,
                green: 97.099998,
                red: 34.200001,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 40.200001,
                  blue: 42.200001,
                  green: 44.099998,
                  red: 94.099998,
                },
                themeColor: "LINK",
              },
              hideTooltips: true,
              hintedLevels: 3809222703050322015,
              labels: {
                aggregateType: "MIN",
                columnReference: {
                  name: "corrupti",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR",
                  },
                  histogramRule: {
                    intervalSize: 93.099998,
                    maxValue: 99.099998,
                    minValue: 46.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 5575634645376587539,
                      endRowIndex: 6114740381359620064,
                      sheetId: 4681476234540635678,
                      startColumnIndex: 6971093731419222431,
                      startRowIndex: 3311064939586121091,
                    },
                  ],
                },
              },
              levels: 5838862085572465926,
              maxValue: 69.099998,
              minValue: 41.099998,
              parentLabels: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "consequatur",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR",
                  },
                  histogramRule: {
                    intervalSize: 29.200001,
                    maxValue: 76.099998,
                    minValue: 1.100000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 594541962247087253,
                      endRowIndex: 6850399738405605986,
                      sheetId: 9143696079387912368,
                      startColumnIndex: 9059970787703605453,
                      startRowIndex: 3003290611676134007,
                    },
                    {
                      endColumnIndex: 2848187236987517367,
                      endRowIndex: 4537168464234683939,
                      sheetId: 7773122735114206622,
                      startColumnIndex: 1492960913926905876,
                      startRowIndex: 5542383823497440249,
                    },
                  ],
                },
              },
              sizeData: {
                aggregateType: "MAX",
                columnReference: {
                  name: "aut",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "QUARTER",
                  },
                  histogramRule: {
                    intervalSize: 59.200001,
                    maxValue: 93.099998,
                    minValue: 35.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 6813042753866779208,
                      endRowIndex: 5126803674048222638,
                      sheetId: 729215667861008567,
                      startColumnIndex: 7515433274145687469,
                      startRowIndex: 753771230884002128,
                    },
                  ],
                },
              },
              textFormat: {
                bold: true,
                fontFamily: "cum",
                fontSize: 2413834947175189160,
                foregroundColor: {
                  alpha: 45.200001,
                  blue: 31.100000,
                  green: 9.200000,
                  red: 19.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 66.199997,
                    blue: 11.100000,
                    green: 67.199997,
                    red: 84.099998,
                  },
                  themeColor: "ACCENT5",
                },
                italic: true,
                link: {
                  uri: "et",
                },
                strikethrough: true,
                underline: true,
              },
            },
            waterfallChart: {
              connectorLineStyle: {
                type: "SOLID",
                width: 5754785455026068978,
              },
              domain: {
                data: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "soluta",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE_AMPM",
                    },
                    histogramRule: {
                      intervalSize: 39.200001,
                      maxValue: 83.099998,
                      minValue: 77.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 1418053923960168881,
                        endRowIndex: 6961657312044260342,
                        sheetId: 8278317799370114557,
                        startColumnIndex: 6429088633503426853,
                        startRowIndex: 5542404525868418774,
                      },
                    ],
                  },
                },
                reversed: false,
              },
              firstValueIsTotal: true,
              hideConnectorLines: true,
              series: [
                {
                  customSubtotals: [
                    {
                      dataIsSubtotal: false,
                      label: "ea",
                      subtotalIndex: 5291368942891380554,
                    },
                  ],
                  data: {
                    aggregateType: "COUNT",
                    columnReference: {
                      name: "repellendus",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_YEAR",
                      },
                      histogramRule: {
                        intervalSize: 29.100000,
                        maxValue: 59.099998,
                        minValue: 5.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 5961414675173821173,
                          endRowIndex: 5122860845906514195,
                          sheetId: 6238796219642497845,
                          startColumnIndex: 4494776235650951465,
                          startRowIndex: 1403129089252298036,
                        },
                        {
                          endColumnIndex: 2583393060882452130,
                          endRowIndex: 4822261026821374322,
                          sheetId: 2765204389371197240,
                          startColumnIndex: 2248351096311108013,
                          startRowIndex: 7331474967445919112,
                        },
                        {
                          endColumnIndex: 6433384287349416520,
                          endRowIndex: 6986757747204666960,
                          sheetId: 7498477783465836022,
                          startColumnIndex: 1069405028013384218,
                          startRowIndex: 4082377196882550097,
                        },
                      ],
                    },
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "MEDIAN",
                      columnReference: {
                        name: "sit",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 45.200001,
                          maxValue: 33.099998,
                          minValue: 60.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 8375693332495693837,
                            endRowIndex: 7568906015139679031,
                            sheetId: 7567576333916807437,
                            startColumnIndex: 2162641192334686429,
                            startRowIndex: 2184572927840921425,
                          },
                          {
                            endColumnIndex: 6371888434141157807,
                            endRowIndex: 2198495675539745479,
                            sheetId: 3294875298859266443,
                            startColumnIndex: 2096937881460548645,
                            startRowIndex: 5925563716458568211,
                          },
                          {
                            endColumnIndex: 3024933709658290191,
                            endRowIndex: 8093797832898378960,
                            sheetId: 1200668868536791326,
                            startColumnIndex: 8933422426538276194,
                            startRowIndex: 7117206893360565976,
                          },
                        ],
                      },
                    },
                    placement: "INSIDE_BASE",
                    textFormat: {
                      bold: false,
                      fontFamily: "ipsa",
                      fontSize: 3681843594035583162,
                      foregroundColor: {
                        alpha: 75.099998,
                        blue: 43.200001,
                        green: 42.099998,
                        red: 59.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 67.199997,
                          blue: 18.200001,
                          green: 37.099998,
                          red: 42.200001,
                        },
                        themeColor: "ACCENT6",
                      },
                      italic: false,
                      link: {
                        uri: "consequatur",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    type: "NONE",
                  },
                  hideTrailingSubtotal: false,
                  negativeColumnsStyle: {
                    color: {
                      alpha: 50.200001,
                      blue: 10.200000,
                      green: 99.099998,
                      red: 65.199997,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 10.100000,
                        blue: 93.099998,
                        green: 66.099998,
                        red: 72.199997,
                      },
                      themeColor: "ACCENT2",
                    },
                    label: "corrupti",
                  },
                  positiveColumnsStyle: {
                    color: {
                      alpha: 22.100000,
                      blue: 7.200000,
                      green: 10.100000,
                      red: 28.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 34.099998,
                        blue: 41.099998,
                        green: 98.099998,
                        red: 93.199997,
                      },
                      themeColor: "ACCENT3",
                    },
                    label: "rerum",
                  },
                  subtotalColumnsStyle: {
                    color: {
                      alpha: 52.099998,
                      blue: 61.099998,
                      green: 63.200001,
                      red: 61.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 29.200001,
                        blue: 44.200001,
                        green: 13.200000,
                        red: 51.200001,
                      },
                      themeColor: "BACKGROUND",
                    },
                    label: "labore",
                  },
                },
                {
                  customSubtotals: [
                    {
                      dataIsSubtotal: true,
                      label: "voluptatem",
                      subtotalIndex: 1427082520774322604,
                    },
                  ],
                  data: {
                    aggregateType: "MEDIAN",
                    columnReference: {
                      name: "mollitia",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                      },
                      histogramRule: {
                        intervalSize: 82.099998,
                        maxValue: 73.199997,
                        minValue: 78.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 1320215524400465926,
                          endRowIndex: 1662046826337850265,
                          sheetId: 7532765823727053180,
                          startColumnIndex: 5052119838959804952,
                          startRowIndex: 9049648023328973058,
                        },
                      ],
                    },
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "quia",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "QUARTER",
                        },
                        histogramRule: {
                          intervalSize: 36.200001,
                          maxValue: 29.100000,
                          minValue: 44.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 4204759107044059984,
                            endRowIndex: 7073350843443928884,
                            sheetId: 5608266792336403819,
                            startColumnIndex: 2788795348502355501,
                            startRowIndex: 592206778713097012,
                          },
                        ],
                      },
                    },
                    placement: "INSIDE_END",
                    textFormat: {
                      bold: false,
                      fontFamily: "vero",
                      fontSize: 7616582516806317285,
                      foregroundColor: {
                        alpha: 47.200001,
                        blue: 50.099998,
                        green: 74.199997,
                        red: 85.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 62.099998,
                          blue: 48.200001,
                          green: 61.200001,
                          red: 60.099998,
                        },
                        themeColor: "ACCENT6",
                      },
                      italic: true,
                      link: {
                        uri: "earum",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    type: "DATA_LABEL_TYPE_UNSPECIFIED",
                  },
                  hideTrailingSubtotal: false,
                  negativeColumnsStyle: {
                    color: {
                      alpha: 75.099998,
                      blue: 29.100000,
                      green: 20.200001,
                      red: 52.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 85.199997,
                        blue: 35.200001,
                        green: 77.099998,
                        red: 39.200001,
                      },
                      themeColor: "ACCENT2",
                    },
                    label: "quam",
                  },
                  positiveColumnsStyle: {
                    color: {
                      alpha: 89.199997,
                      blue: 86.099998,
                      green: 59.200001,
                      red: 79.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 98.099998,
                        blue: 19.100000,
                        green: 31.100000,
                        red: 21.100000,
                      },
                      themeColor: "ACCENT6",
                    },
                    label: "atque",
                  },
                  subtotalColumnsStyle: {
                    color: {
                      alpha: 71.199997,
                      blue: 97.199997,
                      green: 66.199997,
                      red: 44.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 6.100000,
                        blue: 4.100000,
                        green: 27.100000,
                        red: 87.199997,
                      },
                      themeColor: "BACKGROUND",
                    },
                    label: "perspiciatis",
                  },
                },
              ],
              stackedType: "WATERFALL_STACKED_TYPE_UNSPECIFIED",
              totalDataLabel: {
                customLabelData: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "voluptas",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_YEAR",
                    },
                    histogramRule: {
                      intervalSize: 6.100000,
                      maxValue: 69.199997,
                      minValue: 88.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 776180798552607792,
                        endRowIndex: 8018197539919560807,
                        sheetId: 7055074100617464696,
                        startColumnIndex: 4348010216598204186,
                        startRowIndex: 9051949319940533543,
                      },
                    ],
                  },
                },
                placement: "LEFT",
                textFormat: {
                  bold: true,
                  fontFamily: "inventore",
                  fontSize: 6614803028872981226,
                  foregroundColor: {
                    alpha: 5.200000,
                    blue: 48.200001,
                    green: 69.099998,
                    red: 32.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 1.200000,
                      blue: 19.200001,
                      green: 80.199997,
                      red: 52.200001,
                    },
                    themeColor: "ACCENT4",
                  },
                  italic: true,
                  link: {
                    uri: "eum",
                  },
                  strikethrough: true,
                  underline: true,
                },
                type: "NONE",
              },
            },
          },
        },
        updateConditionalFormatRule: {
          index: 380832061833457372,
          newIndex: 3091664355181929699,
          rule: {
            booleanRule: {
              condition: {
                type: "DATE_NOT_EQ",
                values: [
                  {
                    relativeDate: "TOMORROW",
                    userEnteredValue: "omnis",
                  },
                ],
              },
              format: {
                backgroundColor: {
                  alpha: 44.200001,
                  blue: 88.199997,
                  green: 89.099998,
                  red: 81.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 19.200001,
                    blue: 56.200001,
                    green: 43.099998,
                    red: 18.100000,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                borders: {
                  bottom: {
                    color: {
                      alpha: 71.099998,
                      blue: 48.200001,
                      green: 90.099998,
                      red: 25.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 2.100000,
                        blue: 95.099998,
                        green: 60.099998,
                        red: 69.199997,
                      },
                      themeColor: "ACCENT5",
                    },
                    style: "SOLID_MEDIUM",
                    width: 4857862497359076576,
                  },
                  left: {
                    color: {
                      alpha: 74.099998,
                      blue: 74.199997,
                      green: 21.200001,
                      red: 27.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 37.200001,
                        blue: 74.099998,
                        green: 65.199997,
                        red: 74.099998,
                      },
                      themeColor: "ACCENT3",
                    },
                    style: "NONE",
                    width: 4220342859227446217,
                  },
                  right: {
                    color: {
                      alpha: 2.100000,
                      blue: 74.099998,
                      green: 31.200001,
                      red: 14.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 46.099998,
                        blue: 38.200001,
                        green: 39.099998,
                        red: 72.099998,
                      },
                      themeColor: "ACCENT2",
                    },
                    style: "DOUBLE",
                    width: 4290391376321887318,
                  },
                  top: {
                    color: {
                      alpha: 65.099998,
                      blue: 45.099998,
                      green: 81.199997,
                      red: 66.199997,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 18.100000,
                        blue: 60.099998,
                        green: 59.099998,
                        red: 43.200001,
                      },
                      themeColor: "ACCENT3",
                    },
                    style: "SOLID_THICK",
                    width: 5346398917591116982,
                  },
                },
                horizontalAlignment: "RIGHT",
                hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                numberFormat: {
                  pattern: "assumenda",
                  type: "DATE_TIME",
                },
                padding: {
                  bottom: 6915407608227333371,
                  left: 5553487852193930913,
                  right: 5600512735016871670,
                  top: 954355364851360951,
                },
                textDirection: "LEFT_TO_RIGHT",
                textFormat: {
                  bold: true,
                  fontFamily: "aspernatur",
                  fontSize: 810797288355434177,
                  foregroundColor: {
                    alpha: 46.099998,
                    blue: 1.200000,
                    green: 66.099998,
                    red: 53.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 47.099998,
                      blue: 49.099998,
                      green: 79.099998,
                      red: 49.200001,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  italic: true,
                  link: {
                    uri: "autem",
                  },
                  strikethrough: false,
                  underline: true,
                },
                textRotation: {
                  angle: 3199815171580986674,
                  vertical: true,
                },
                verticalAlignment: "BOTTOM",
                wrapStrategy: "WRAP",
              },
            },
            gradientRule: {
              maxpoint: {
                color: {
                  alpha: 70.099998,
                  blue: 48.099998,
                  green: 16.100000,
                  red: 11.200000,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 83.199997,
                    blue: 74.099998,
                    green: 37.099998,
                    red: 90.099998,
                  },
                  themeColor: "BACKGROUND",
                },
                type: "MAX",
                value: "autem",
              },
              midpoint: {
                color: {
                  alpha: 6.100000,
                  blue: 82.199997,
                  green: 50.099998,
                  red: 75.099998,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 74.199997,
                    blue: 6.100000,
                    green: 98.199997,
                    red: 15.200000,
                  },
                  themeColor: "BACKGROUND",
                },
                type: "INTERPOLATION_POINT_TYPE_UNSPECIFIED",
                value: "corrupti",
              },
              minpoint: {
                color: {
                  alpha: 88.199997,
                  blue: 55.099998,
                  green: 82.099998,
                  red: 32.200001,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 2.100000,
                    blue: 17.100000,
                    green: 93.199997,
                    red: 80.099998,
                  },
                  themeColor: "TEXT",
                },
                type: "MIN",
                value: "fugit",
              },
            },
            ranges: [
              {
                endColumnIndex: 8263760632678663550,
                endRowIndex: 4853609318373182327,
                sheetId: 5029652405670555867,
                startColumnIndex: 3764999252481012776,
                startRowIndex: 4532477116388371152,
              },
            ],
          },
          sheetId: 7516843999778937382,
        },
        updateDataSource: {
          dataSource: {
            calculatedColumns: [
              {
                formula: "accusantium",
                reference: {
                  name: "impedit",
                },
              },
              {
                formula: "nihil",
                reference: {
                  name: "quis",
                },
              },
            ],
            dataSourceId: "voluptatum",
            sheetId: 1817810228940876889,
            spec: {
              bigQuery: {
                projectId: "autem",
                querySpec: {
                  rawQuery: "omnis",
                },
                tableSpec: {
                  datasetId: "placeat",
                  tableId: "expedita",
                  tableProjectId: "quis",
                },
              },
              parameters: [
                {
                  name: "rem",
                  namedRangeId: "enim",
                  range: {
                    endColumnIndex: 1148669018782949731,
                    endRowIndex: 798641485852853478,
                    sheetId: 8174328864871482696,
                    startColumnIndex: 7341828009458714368,
                    startRowIndex: 4722024489057634824,
                  },
                },
              ],
            },
          },
          fields: "voluptatum",
        },
        updateDeveloperMetadata: {
          dataFilters: [
            {
              a1Range: "fugit",
              developerMetadataLookup: {
                locationMatchingStrategy: "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED",
                locationType: "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
                metadataId: 9056425293593458943,
                metadataKey: "perferendis",
                metadataLocation: {
                  dimensionRange: {
                    dimension: "ROWS",
                    endIndex: 6449833217664972355,
                    sheetId: 6435479624371564428,
                    startIndex: 9189975932603639231,
                  },
                  locationType: "SPREADSHEET",
                  sheetId: 3346577010386275589,
                  spreadsheet: true,
                },
                metadataValue: "ea",
                visibility: "PROJECT",
              },
              gridRange: {
                endColumnIndex: 6001564237362870992,
                endRowIndex: 3974574701733610451,
                sheetId: 441030930261447617,
                startColumnIndex: 1604476945382087345,
                startRowIndex: 3532820616455095975,
              },
            },
            {
              a1Range: "unde",
              developerMetadataLookup: {
                locationMatchingStrategy: "INTERSECTING_LOCATION",
                locationType: "SPREADSHEET",
                metadataId: 1339428310207373202,
                metadataKey: "similique",
                metadataLocation: {
                  dimensionRange: {
                    dimension: "ROWS",
                    endIndex: 799026223541858035,
                    sheetId: 4574178752261667094,
                    startIndex: 1469226322518836694,
                  },
                  locationType: "ROW",
                  sheetId: 1386103677345324820,
                  spreadsheet: true,
                },
                metadataValue: "dolor",
                visibility: "DOCUMENT",
              },
              gridRange: {
                endColumnIndex: 1270172987452639866,
                endRowIndex: 5276743471450151556,
                sheetId: 3763337530153480938,
                startColumnIndex: 3132738247991568980,
                startRowIndex: 7164880986810723358,
              },
            },
          ],
          developerMetadata: {
            location: {
              dimensionRange: {
                dimension: "ROWS",
                endIndex: 2697563094304643582,
                sheetId: 2634232563861194665,
                startIndex: 6111440824070268332,
              },
              locationType: "COLUMN",
              sheetId: 1355708291672770680,
              spreadsheet: false,
            },
            metadataId: 4427070827321014595,
            metadataKey: "rem",
            metadataValue: "eveniet",
            visibility: "DOCUMENT",
          },
          fields: "consectetur",
        },
        updateDimensionGroup: {
          dimensionGroup: {
            collapsed: true,
            depth: 4867429398373655775,
            range: {
              dimension: "COLUMNS",
              endIndex: 6349531417113292869,
              sheetId: 8848796532287857064,
              startIndex: 2139217083532865569,
            },
          },
          fields: "dicta",
        },
        updateDimensionProperties: {
          dataSourceSheetRange: {
            columnReferences: [
              {
                name: "quia",
              },
              {
                name: "quia",
              },
              {
                name: "a",
              },
            ],
            sheetId: 4004796527103083157,
          },
          fields: "mollitia",
          properties: {
            dataSourceColumnReference: {
              name: "consequatur",
            },
            developerMetadata: [
              {
                location: {
                  dimensionRange: {
                    dimension: "ROWS",
                    endIndex: 7023190076907968992,
                    sheetId: 6240940976405287754,
                    startIndex: 304540307133973153,
                  },
                  locationType: "ROW",
                  sheetId: 6772419278549633343,
                  spreadsheet: false,
                },
                metadataId: 413221490185929822,
                metadataKey: "odit",
                metadataValue: "vitae",
                visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
              },
              {
                location: {
                  dimensionRange: {
                    dimension: "ROWS",
                    endIndex: 2950619494528246903,
                    sheetId: 2565332484482678936,
                    startIndex: 6216752774888009356,
                  },
                  locationType: "SHEET",
                  sheetId: 8024452999847390275,
                  spreadsheet: false,
                },
                metadataId: 4431338684893243288,
                metadataKey: "odio",
                metadataValue: "minima",
                visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
              },
            ],
            hiddenByFilter: true,
            hiddenByUser: false,
            pixelSize: 615062219092590648,
          },
          range: {
            dimension: "COLUMNS",
            endIndex: 4434053574525803116,
            sheetId: 8056659445377325293,
            startIndex: 6509756035365369621,
          },
        },
        updateEmbeddedObjectBorder: {
          border: {
            color: {
              alpha: 49.200001,
              blue: 24.200001,
              green: 50.200001,
              red: 80.199997,
            },
            colorStyle: {
              rgbColor: {
                alpha: 95.199997,
                blue: 20.200001,
                green: 0.200000,
                red: 60.099998,
              },
              themeColor: "BACKGROUND",
            },
          },
          fields: "cumque",
          objectId: 1589457118501370369,
        },
        updateEmbeddedObjectPosition: {
          fields: "qui",
          newPosition: {
            newSheet: false,
            overlayPosition: {
              anchorCell: {
                columnIndex: 521862196996358114,
                rowIndex: 7452239702991150642,
                sheetId: 8229094677345590980,
              },
              heightPixels: 3472220655847855185,
              offsetXPixels: 7633145660682776125,
              offsetYPixels: 1951171461379481344,
              widthPixels: 8914708426547912111,
            },
            sheetId: 8843799916100303719,
          },
          objectId: 710783813082433360,
        },
        updateFilterView: {
          fields: "minus",
          filter: {
            criteria: {
              "eum": {
                condition: {
                  type: "ONE_OF_RANGE",
                  values: [
                    {
                      relativeDate: "PAST_MONTH",
                      userEnteredValue: "officiis",
                    },
                    {
                      relativeDate: "PAST_MONTH",
                      userEnteredValue: "omnis",
                    },
                  ],
                },
                hiddenValues: [
                  "soluta",
                  "et",
                ],
                visibleBackgroundColor: {
                  alpha: 76.199997,
                  blue: 76.199997,
                  green: 80.099998,
                  red: 17.100000,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 27.200001,
                    blue: 65.199997,
                    green: 65.199997,
                    red: 12.100000,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                visibleForegroundColor: {
                  alpha: 84.199997,
                  blue: 45.200001,
                  green: 85.099998,
                  red: 90.199997,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 24.100000,
                    blue: 1.200000,
                    green: 26.100000,
                    red: 39.099998,
                  },
                  themeColor: "BACKGROUND",
                },
              },
              "esse": {
                condition: {
                  type: "NUMBER_NOT_EQ",
                  values: [
                    {
                      relativeDate: "TOMORROW",
                      userEnteredValue: "nulla",
                    },
                  ],
                },
                hiddenValues: [
                  "perferendis",
                ],
                visibleBackgroundColor: {
                  alpha: 5.100000,
                  blue: 55.200001,
                  green: 69.199997,
                  red: 8.100000,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 37.099998,
                    blue: 46.099998,
                    green: 90.199997,
                    red: 44.200001,
                  },
                  themeColor: "BACKGROUND",
                },
                visibleForegroundColor: {
                  alpha: 74.199997,
                  blue: 71.199997,
                  green: 77.199997,
                  red: 78.099998,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 13.100000,
                    blue: 46.099998,
                    green: 52.099998,
                    red: 50.099998,
                  },
                  themeColor: "ACCENT3",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 8410283137203890310,
                dataSourceColumnReference: {
                  name: "et",
                },
                filterCriteria: {
                  condition: {
                    type: "BOOLEAN",
                    values: [
                      {
                        relativeDate: "YESTERDAY",
                        userEnteredValue: "quibusdam",
                      },
                    ],
                  },
                  hiddenValues: [
                    "hic",
                    "est",
                  ],
                  visibleBackgroundColor: {
                    alpha: 63.099998,
                    blue: 38.200001,
                    green: 29.100000,
                    red: 79.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 50.099998,
                      blue: 74.099998,
                      green: 71.199997,
                      red: 0.200000,
                    },
                    themeColor: "LINK",
                  },
                  visibleForegroundColor: {
                    alpha: 63.099998,
                    blue: 6.100000,
                    green: 77.199997,
                    red: 56.200001,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 7.200000,
                      blue: 34.200001,
                      green: 15.200000,
                      red: 51.200001,
                    },
                    themeColor: "ACCENT1",
                  },
                },
              },
            ],
            filterViewId: 7153866510367993618,
            namedRangeId: "ut",
            range: {
              endColumnIndex: 6022569335984936873,
              endRowIndex: 5307874996731261750,
              sheetId: 981400286539479205,
              startColumnIndex: 9034171115998046254,
              startRowIndex: 1999514105346832355,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 36.200001,
                  blue: 89.099998,
                  green: 42.200001,
                  red: 79.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 63.099998,
                    blue: 37.099998,
                    green: 98.099998,
                    red: 31.200001,
                  },
                  themeColor: "ACCENT5",
                },
                dataSourceColumnReference: {
                  name: "omnis",
                },
                dimensionIndex: 2728416939652354153,
                foregroundColor: {
                  alpha: 9.200000,
                  blue: 90.199997,
                  green: 76.099998,
                  red: 73.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 40.200001,
                    blue: 57.099998,
                    green: 43.099998,
                    red: 15.100000,
                  },
                  themeColor: "TEXT",
                },
                sortOrder: "ASCENDING",
              },
            ],
            title: "enim",
          },
        },
        updateNamedRange: {
          fields: "et",
          namedRange: {
            name: "quibusdam",
            namedRangeId: "explicabo",
            range: {
              endColumnIndex: 6720869802917514973,
              endRowIndex: 4874718078516912090,
              sheetId: 8832674837791027096,
              startColumnIndex: 5724870863742989757,
              startRowIndex: 6078697307412723923,
            },
          },
        },
        updateProtectedRange: {
          fields: "dolorum",
          protectedRange: {
            description: "vel",
            editors: {
              domainUsersCanEdit: false,
              groups: [
                "ullam",
              ],
              users: [
                "hic",
                "at",
                "fuga",
              ],
            },
            namedRangeId: "modi",
            protectedRangeId: 7739848669825870390,
            range: {
              endColumnIndex: 2778549005363027810,
              endRowIndex: 5362130223324410849,
              sheetId: 8127702427435706133,
              startColumnIndex: 8580258262792359624,
              startRowIndex: 2283352940192958745,
            },
            requestingUserCanEdit: false,
            unprotectedRanges: [
              {
                endColumnIndex: 8872610397131286905,
                endRowIndex: 5179784426809915820,
                sheetId: 8068097528466831514,
                startColumnIndex: 7746676095813521,
                startRowIndex: 2233103155845021426,
              },
              {
                endColumnIndex: 7945007834256543843,
                endRowIndex: 290904715696472268,
                sheetId: 6239765836588722578,
                startColumnIndex: 3452029762683836559,
                startRowIndex: 3673176793045158225,
              },
              {
                endColumnIndex: 8056320859134417271,
                endRowIndex: 6798654360679600128,
                sheetId: 6154576917757040273,
                startColumnIndex: 5719680462651037678,
                startRowIndex: 3428954991919416490,
              },
            ],
            warningOnly: false,
          },
        },
        updateSheetProperties: {
          fields: "id",
          properties: {
            dataSourceSheetProperties: {
              columns: [
                {
                  formula: "voluptas",
                  reference: {
                    name: "iusto",
                  },
                },
              ],
              dataExecutionStatus: {
                errorCode: "OBJECT_SPEC_INVALID",
                errorMessage: "laborum",
                lastRefreshTime: "voluptatem",
                state: "DATA_EXECUTION_STATE_UNSPECIFIED",
              },
              dataSourceId: "voluptatem",
            },
            gridProperties: {
              columnCount: 8387424184017318003,
              columnGroupControlAfter: false,
              frozenColumnCount: 8800633798399998067,
              frozenRowCount: 2044609975475396177,
              hideGridlines: true,
              rowCount: 4780453102088547710,
              rowGroupControlAfter: true,
            },
            hidden: false,
            index: 6171824007909325782,
            rightToLeft: true,
            sheetId: 7229865247965571874,
            sheetType: "GRID",
            tabColor: {
              alpha: 51.099998,
              blue: 45.200001,
              green: 54.099998,
              red: 12.200000,
            },
            tabColorStyle: {
              rgbColor: {
                alpha: 21.200001,
                blue: 3.200000,
                green: 38.099998,
                red: 25.200001,
              },
              themeColor: "LINK",
            },
            title: "aut",
          },
        },
        updateSlicerSpec: {
          fields: "temporibus",
          slicerId: 2554103663936978273,
          spec: {
            applyToPivotTables: true,
            backgroundColor: {
              alpha: 98.199997,
              blue: 99.099998,
              green: 47.200001,
              red: 14.100000,
            },
            backgroundColorStyle: {
              rgbColor: {
                alpha: 47.099998,
                blue: 67.099998,
                green: 37.099998,
                red: 19.200001,
              },
              themeColor: "ACCENT1",
            },
            columnIndex: 8421933435429370482,
            dataRange: {
              endColumnIndex: 6603418966727277992,
              endRowIndex: 5529399417018292483,
              sheetId: 4417196416860291411,
              startColumnIndex: 5956482166293831472,
              startRowIndex: 7724007131211897535,
            },
            filterCriteria: {
              condition: {
                type: "NUMBER_EQ",
                values: [
                  {
                    relativeDate: "PAST_YEAR",
                    userEnteredValue: "aut",
                  },
                  {
                    relativeDate: "PAST_YEAR",
                    userEnteredValue: "assumenda",
                  },
                  {
                    relativeDate: "TODAY",
                    userEnteredValue: "earum",
                  },
                ],
              },
              hiddenValues: [
                "aliquam",
              ],
              visibleBackgroundColor: {
                alpha: 36.099998,
                blue: 32.099998,
                green: 85.099998,
                red: 48.200001,
              },
              visibleBackgroundColorStyle: {
                rgbColor: {
                  alpha: 88.099998,
                  blue: 30.200001,
                  green: 21.100000,
                  red: 0.200000,
                },
                themeColor: "ACCENT1",
              },
              visibleForegroundColor: {
                alpha: 13.200000,
                blue: 76.099998,
                green: 85.199997,
                red: 0.100000,
              },
              visibleForegroundColorStyle: {
                rgbColor: {
                  alpha: 14.200000,
                  blue: 51.200001,
                  green: 65.099998,
                  red: 90.099998,
                },
                themeColor: "ACCENT6",
              },
            },
            horizontalAlignment: "CENTER",
            textFormat: {
              bold: true,
              fontFamily: "in",
              fontSize: 6994506137373746828,
              foregroundColor: {
                alpha: 46.200001,
                blue: 29.100000,
                green: 70.199997,
                red: 76.199997,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 82.099998,
                  blue: 16.200001,
                  green: 77.099998,
                  red: 94.199997,
                },
                themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
              },
              italic: false,
              link: {
                uri: "accusantium",
              },
              strikethrough: false,
              underline: false,
            },
            title: "minus",
          },
        },
        updateSpreadsheetProperties: {
          fields: "recusandae",
          properties: {
            autoRecalc: "HOUR",
            defaultFormat: {
              backgroundColor: {
                alpha: 76.199997,
                blue: 72.099998,
                green: 90.199997,
                red: 42.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 88.099998,
                  blue: 26.200001,
                  green: 85.199997,
                  red: 97.099998,
                },
                themeColor: "ACCENT5",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 40.099998,
                    blue: 19.100000,
                    green: 59.099998,
                    red: 29.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 65.199997,
                      blue: 10.200000,
                      green: 41.200001,
                      red: 24.100000,
                    },
                    themeColor: "LINK",
                  },
                  style: "DASHED",
                  width: 8760223531984753687,
                },
                left: {
                  color: {
                    alpha: 66.099998,
                    blue: 45.200001,
                    green: 41.099998,
                    red: 91.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 23.200001,
                      blue: 86.099998,
                      green: 63.099998,
                      red: 55.099998,
                    },
                    themeColor: "LINK",
                  },
                  style: "SOLID_THICK",
                  width: 1264377179845149854,
                },
                right: {
                  color: {
                    alpha: 76.099998,
                    blue: 62.200001,
                    green: 48.200001,
                    red: 52.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 55.099998,
                      blue: 16.100000,
                      green: 60.200001,
                      red: 88.199997,
                    },
                    themeColor: "ACCENT1",
                  },
                  style: "DOUBLE",
                  width: 6333806590142815423,
                },
                top: {
                  color: {
                    alpha: 87.099998,
                    blue: 92.199997,
                    green: 50.099998,
                    red: 10.100000,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 81.099998,
                      blue: 77.099998,
                      green: 86.199997,
                      red: 18.200001,
                    },
                    themeColor: "BACKGROUND",
                  },
                  style: "SOLID_THICK",
                  width: 3002621439065850700,
                },
              },
              horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
              hyperlinkDisplayType: "PLAIN_TEXT",
              numberFormat: {
                pattern: "quia",
                type: "TIME",
              },
              padding: {
                bottom: 2746501720819308595,
                left: 3868752304617446624,
                right: 7873063433614914838,
                top: 1355108145261396276,
              },
              textDirection: "RIGHT_TO_LEFT",
              textFormat: {
                bold: true,
                fontFamily: "ut",
                fontSize: 2027161005381656344,
                foregroundColor: {
                  alpha: 76.099998,
                  blue: 64.099998,
                  green: 22.200001,
                  red: 58.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 94.199997,
                    blue: 10.100000,
                    green: 19.200001,
                    red: 67.099998,
                  },
                  themeColor: "ACCENT1",
                },
                italic: false,
                link: {
                  uri: "et",
                },
                strikethrough: false,
                underline: false,
              },
              textRotation: {
                angle: 535777874992793477,
                vertical: true,
              },
              verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
              wrapStrategy: "LEGACY_WRAP",
            },
            iterativeCalculationSettings: {
              convergenceThreshold: 53.200001,
              maxIterations: 744067956291971424,
            },
            locale: "vitae",
            spreadsheetTheme: {
              primaryFontFamily: "deserunt",
              themeColors: [
                {
                  color: {
                    rgbColor: {
                      alpha: 0.200000,
                      blue: 42.200001,
                      green: 27.100000,
                      red: 98.199997,
                    },
                    themeColor: "TEXT",
                  },
                  colorType: "TEXT",
                },
                {
                  color: {
                    rgbColor: {
                      alpha: 85.199997,
                      blue: 41.200001,
                      green: 29.100000,
                      red: 58.200001,
                    },
                    themeColor: "ACCENT5",
                  },
                  colorType: "ACCENT3",
                },
                {
                  color: {
                    rgbColor: {
                      alpha: 20.100000,
                      blue: 3.100000,
                      green: 13.200000,
                      red: 8.200000,
                    },
                    themeColor: "ACCENT3",
                  },
                  colorType: "BACKGROUND",
                },
              ],
            },
            timeZone: "magnam",
            title: "id",
          },
        },
      },
    ],
    responseIncludeGridData: true,
    responseRanges: [
      "praesentium",
      "in",
    ],
  },
};

sdk.spreadsheets.sheetsSpreadsheetsBatchUpdate(req).then((res: SheetsSpreadsheetsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### spreadsheets

* `sheetsSpreadsheetsBatchUpdate` - Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
* `sheetsSpreadsheetsCreate` - Creates a spreadsheet, returning the newly created spreadsheet.
* `sheetsSpreadsheetsDeveloperMetadataGet` - Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
* `sheetsSpreadsheetsDeveloperMetadataSearch` - Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
* `sheetsSpreadsheetsGet` - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
* `sheetsSpreadsheetsGetByDataFilter` - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
* `sheetsSpreadsheetsSheetsCopyTo` - Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
* `sheetsSpreadsheetsValuesAppend` - Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
* `sheetsSpreadsheetsValuesBatchClear` - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
* `sheetsSpreadsheetsValuesBatchClearByDataFilter` - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* `sheetsSpreadsheetsValuesBatchGet` - Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
* `sheetsSpreadsheetsValuesBatchGetByDataFilter` - Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
* `sheetsSpreadsheetsValuesBatchUpdate` - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
* `sheetsSpreadsheetsValuesBatchUpdateByDataFilter` - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
* `sheetsSpreadsheetsValuesClear` - Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* `sheetsSpreadsheetsValuesGet` - Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
* `sheetsSpreadsheetsValuesUpdate` - Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
