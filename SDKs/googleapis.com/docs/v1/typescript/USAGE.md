<!-- Start SDK Example Usage -->
```typescript
import {
  DocsDocumentsBatchUpdateRequest,
  DocsDocumentsBatchUpdateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  TextStyleBaselineOffsetEnum,
  DimensionUnitEnum,
  TableColumnPropertiesWidthTypeEnum,
  TableCellStyleContentAlignmentEnum,
  TableCellBorderDashStyleEnum,
  SectionStyleColumnSeparatorStyleEnum,
  SectionStyleContentDirectionEnum,
  SectionStyleSectionTypeEnum,
  ParagraphStyleAlignmentEnum,
  ParagraphStyleDirectionEnum,
  ParagraphStyleNamedStyleTypeEnum,
  ParagraphStyleSpacingModeEnum,
  TabStopAlignmentEnum,
  ParagraphBorderDashStyleEnum,
  ReplaceImageRequestImageReplaceMethodEnum,
  InsertSectionBreakRequestSectionTypeEnum,
  CreateParagraphBulletsRequestBulletPresetEnum,
  CreateHeaderRequestTypeEnum,
  CreateFooterRequestTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DocsDocumentsBatchUpdateRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchUpdateDocumentRequest: {
    requests: [
      {
        createFooter: {
          sectionBreakLocation: {
            index: 715190,
            segmentId: "quibusdam",
          },
          type: CreateFooterRequestTypeEnum.Default,
        },
        createFootnote: {
          endOfSegmentLocation: {
            segmentId: "nulla",
          },
          location: {
            index: 544883,
            segmentId: "illum",
          },
        },
        createHeader: {
          sectionBreakLocation: {
            index: 423655,
            segmentId: "error",
          },
          type: CreateHeaderRequestTypeEnum.Default,
        },
        createNamedRange: {
          name: "suscipit",
          range: {
            endIndex: 437587,
            segmentId: "magnam",
            startIndex: 891773,
          },
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.BulletGlyphPresetUnspecified,
          range: {
            endIndex: 963663,
            segmentId: "tempora",
            startIndex: 383441,
          },
        },
        deleteContentRange: {
          range: {
            endIndex: 477665,
            segmentId: "minus",
            startIndex: 812169,
          },
        },
        deleteFooter: {
          footerId: "voluptatum",
        },
        deleteHeader: {
          headerId: "iusto",
        },
        deleteNamedRange: {
          name: "excepturi",
          namedRangeId: "nisi",
        },
        deleteParagraphBullets: {
          range: {
            endIndex: 925597,
            segmentId: "temporibus",
            startIndex: 71036,
          },
        },
        deletePositionedObject: {
          objectId: "quis",
        },
        deleteTableColumn: {
          tableCellLocation: {
            columnIndex: 87129,
            rowIndex: 648172,
            tableStartLocation: {
              index: 20218,
              segmentId: "ipsam",
            },
          },
        },
        deleteTableRow: {
          tableCellLocation: {
            columnIndex: 832620,
            rowIndex: 957156,
            tableStartLocation: {
              index: 778157,
              segmentId: "odit",
            },
          },
        },
        insertInlineImage: {
          endOfSegmentLocation: {
            segmentId: "at",
          },
          location: {
            index: 870088,
            segmentId: "maiores",
          },
          objectSize: {
            height: {
              magnitude: 4736.08,
              unit: DimensionUnitEnum.Pt,
            },
            width: {
              magnitude: 8009.11,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
          uri: "https://soulful-poppy.com",
        },
        insertPageBreak: {
          endOfSegmentLocation: {
            segmentId: "nam",
          },
          location: {
            index: 639921,
            segmentId: "occaecati",
          },
        },
        insertSectionBreak: {
          endOfSegmentLocation: {
            segmentId: "fugit",
          },
          location: {
            index: 537373,
            segmentId: "hic",
          },
          sectionType: InsertSectionBreakRequestSectionTypeEnum.NextPage,
        },
        insertTable: {
          columns: 521848,
          endOfSegmentLocation: {
            segmentId: "beatae",
          },
          location: {
            index: 414662,
            segmentId: "molestiae",
          },
          rows: 264555,
        },
        insertTableColumn: {
          insertRight: false,
          tableCellLocation: {
            columnIndex: 186332,
            rowIndex: 774234,
            tableStartLocation: {
              index: 736918,
              segmentId: "esse",
            },
          },
        },
        insertTableRow: {
          insertBelow: false,
          tableCellLocation: {
            columnIndex: 216550,
            rowIndex: 568434,
            tableStartLocation: {
              index: 135218,
              segmentId: "perferendis",
            },
          },
        },
        insertText: {
          endOfSegmentLocation: {
            segmentId: "ad",
          },
          location: {
            index: 617636,
            segmentId: "sed",
          },
          text: "iste",
        },
        mergeTableCells: {
          tableRange: {
            columnSpan: 222321,
            rowSpan: 616934,
            tableCellLocation: {
              columnIndex: 386489,
              rowIndex: 943749,
              tableStartLocation: {
                index: 902599,
                segmentId: "fuga",
              },
            },
          },
        },
        pinTableHeaderRows: {
          pinnedHeaderRowsCount: 449950,
          tableStartLocation: {
            index: 359508,
            segmentId: "iste",
          },
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "iure",
          },
          replaceText: "saepe",
        },
        replaceImage: {
          imageObjectId: "quidem",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.ImageReplaceMethodUnspecified,
          uri: "http://wiggly-plane.name",
        },
        replaceNamedRangeContent: {
          namedRangeId: "laborum",
          namedRangeName: "dolores",
          text: "dolorem",
        },
        unmergeTableCells: {
          tableRange: {
            columnSpan: 358152,
            rowSpan: 128926,
            tableCellLocation: {
              columnIndex: 750686,
              rowIndex: 315428,
              tableStartLocation: {
                index: 607831,
                segmentId: "nemo",
              },
            },
          },
        },
        updateDocumentStyle: {
          documentStyle: {
            background: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3250.47,
                    green: 5701.97,
                    red: 384.25,
                  },
                },
              },
            },
            defaultFooterId: "iure",
            defaultHeaderId: "culpa",
            evenPageFooterId: "doloribus",
            evenPageHeaderId: "sapiente",
            firstPageFooterId: "architecto",
            firstPageHeaderId: "mollitia",
            marginBottom: {
              magnitude: 2088.76,
              unit: DimensionUnitEnum.Pt,
            },
            marginFooter: {
              magnitude: 1613.09,
              unit: DimensionUnitEnum.Pt,
            },
            marginHeader: {
              magnitude: 6531.08,
              unit: DimensionUnitEnum.Pt,
            },
            marginLeft: {
              magnitude: 2532.91,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginRight: {
              magnitude: 4663.11,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginTop: {
              magnitude: 2444.25,
              unit: DimensionUnitEnum.Pt,
            },
            pageNumberStart: 158969,
            pageSize: {
              height: {
                magnitude: 3380.07,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 6747.52,
                unit: DimensionUnitEnum.Pt,
              },
            },
            useCustomHeaderFooterMargins: false,
            useEvenPageHeaderFooter: false,
            useFirstPageHeaderFooter: false,
          },
          fields: "enim",
        },
        updateParagraphStyle: {
          fields: "odit",
          paragraphStyle: {
            alignment: ParagraphStyleAlignmentEnum.End,
            avoidWidowAndOrphan: false,
            borderBetween: {
              color: {
                color: {
                  rgbColor: {
                    blue: 1965.82,
                    green: 9495.72,
                    red: 3687.25,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 8209.94,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 971.01,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 8379.45,
                    green: 6736.6,
                    red: 960.98,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dash,
              padding: {
                magnitude: 9764.6,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 4686.51,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 9767.62,
                    green: 557.14,
                    red: 6048.46,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Solid,
              padding: {
                magnitude: 7392.64,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 391.87,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 2828.07,
                    green: 9795.87,
                    red: 1201.96,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Solid,
              padding: {
                magnitude: 2961.4,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 1187.27,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3179.83,
                    green: 8804.76,
                    red: 4142.63,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dash,
              padding: {
                magnitude: 641.47,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 6924.72,
                unit: DimensionUnitEnum.Pt,
              },
            },
            direction: ParagraphStyleDirectionEnum.LeftToRight,
            headingId: "pariatur",
            indentEnd: {
              magnitude: 2653.89,
              unit: DimensionUnitEnum.Pt,
            },
            indentFirstLine: {
              magnitude: 5232.48,
              unit: DimensionUnitEnum.Pt,
            },
            indentStart: {
              magnitude: 939.4,
              unit: DimensionUnitEnum.Pt,
            },
            keepLinesTogether: false,
            keepWithNext: false,
            lineSpacing: 5759.47,
            namedStyleType: ParagraphStyleNamedStyleTypeEnum.NamedStyleTypeUnspecified,
            pageBreakBefore: false,
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    blue: 9292.97,
                    green: 2777.18,
                    red: 3185.69,
                  },
                },
              },
            },
            spaceAbove: {
              magnitude: 93.56,
              unit: DimensionUnitEnum.Pt,
            },
            spaceBelow: {
              magnitude: 8423.42,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.NeverCollapse,
            tabStops: [
              {
                alignment: TabStopAlignmentEnum.End,
                offset: {
                  magnitude: 2894.06,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
              {
                alignment: TabStopAlignmentEnum.TabStopAlignmentUnspecified,
                offset: {
                  magnitude: 3978.21,
                  unit: DimensionUnitEnum.Pt,
                },
              },
              {
                alignment: TabStopAlignmentEnum.Center,
                offset: {
                  magnitude: 201.07,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
            ],
          },
          range: {
            endIndex: 828940,
            segmentId: "ipsam",
            startIndex: 4695,
          },
        },
        updateSectionStyle: {
          fields: "fugit",
          range: {
            endIndex: 677817,
            segmentId: "excepturi",
            startIndex: 270008,
          },
          sectionStyle: {
            columnProperties: [
              {
                paddingEnd: {
                  magnitude: 7351.94,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
                width: {
                  magnitude: 9621.89,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
              {
                paddingEnd: {
                  magnitude: 2487.53,
                  unit: DimensionUnitEnum.Pt,
                },
                width: {
                  magnitude: 5761.57,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
              {
                paddingEnd: {
                  magnitude: 5920.42,
                  unit: DimensionUnitEnum.Pt,
                },
                width: {
                  magnitude: 5722.52,
                  unit: DimensionUnitEnum.Pt,
                },
              },
            ],
            columnSeparatorStyle: SectionStyleColumnSeparatorStyleEnum.ColumnSeparatorStyleUnspecified,
            contentDirection: SectionStyleContentDirectionEnum.RightToLeft,
            defaultFooterId: "a",
            defaultHeaderId: "dolorum",
            evenPageFooterId: "in",
            evenPageHeaderId: "in",
            firstPageFooterId: "illum",
            firstPageHeaderId: "maiores",
            marginBottom: {
              magnitude: 6994.79,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginFooter: {
              magnitude: 2974.37,
              unit: DimensionUnitEnum.Pt,
            },
            marginHeader: {
              magnitude: 8137.98,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginLeft: {
              magnitude: 3965.06,
              unit: DimensionUnitEnum.Pt,
            },
            marginRight: {
              magnitude: 8811.04,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginTop: {
              magnitude: 5812.73,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            pageNumberStart: 881736,
            sectionType: SectionStyleSectionTypeEnum.NextPage,
            useFirstPageHeaderFooter: false,
          },
        },
        updateTableCellStyle: {
          fields: "quidem",
          tableCellStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 5884.65,
                  green: 7252.55,
                  red: 6596.69,
                },
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5013.24,
                    green: 5332.06,
                    red: 9560.84,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.DashStyleUnspecified,
              width: {
                magnitude: 6439.9,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 4238.55,
                    green: 6188.09,
                    red: 6063.93,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Solid,
              width: {
                magnitude: 191.93,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3015.75,
                    green: 7160.75,
                    red: 6601.74,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Solid,
              width: {
                magnitude: 2900.77,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 6180.16,
                    green: 7491.7,
                    red: 4287.69,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Dash,
              width: {
                magnitude: 1354.74,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            columnSpan: 298282,
            contentAlignment: TableCellStyleContentAlignmentEnum.ContentAlignmentUnspecified,
            paddingBottom: {
              magnitude: 5699.65,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingLeft: {
              magnitude: 5908.73,
              unit: DimensionUnitEnum.Pt,
            },
            paddingRight: {
              magnitude: 5743.25,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingTop: {
              magnitude: 6532.01,
              unit: DimensionUnitEnum.Pt,
            },
            rowSpan: 652103,
          },
          tableRange: {
            columnSpan: 320997,
            rowSpan: 431418,
            tableCellLocation: {
              columnIndex: 221262,
              rowIndex: 896547,
              tableStartLocation: {
                index: 141264,
                segmentId: "nemo",
              },
            },
          },
          tableStartLocation: {
            index: 97260,
            segmentId: "iure",
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            891924,
            260341,
            806194,
            537023,
          ],
          fields: "facilis",
          tableColumnProperties: {
            width: {
              magnitude: 4479.26,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            widthType: TableColumnPropertiesWidthTypeEnum.WidthTypeUnspecified,
          },
          tableStartLocation: {
            index: 919483,
            segmentId: "ullam",
          },
        },
        updateTableRowStyle: {
          fields: "expedita",
          rowIndices: [
            998848,
            841140,
          ],
          tableRowStyle: {
            minRowHeight: {
              magnitude: 1494.48,
              unit: DimensionUnitEnum.Pt,
            },
            preventOverflow: false,
            tableHeader: false,
          },
          tableStartLocation: {
            index: 868126,
            segmentId: "accusantium",
          },
        },
        updateTextStyle: {
          fields: "consequuntur",
          range: {
            endIndex: 508315,
            segmentId: "natus",
            startIndex: 166847,
          },
          textStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 1238.2,
                  green: 7790.51,
                  red: 8480.09,
                },
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.Subscript,
            bold: false,
            fontSize: {
              magnitude: 8073.19,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            foregroundColor: {
              color: {
                rgbColor: {
                  blue: 5691.01,
                  green: 1399.72,
                  red: 4071.83,
                },
              },
            },
            italic: false,
            link: {
              bookmarkId: "accusantium",
              headingId: "ab",
              url: "maiores",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "quidem",
              weight: 373291,
            },
          },
        },
      },
      {
        createFooter: {
          sectionBreakLocation: {
            index: 453543,
            segmentId: "autem",
          },
          type: CreateFooterRequestTypeEnum.Default,
        },
        createFootnote: {
          endOfSegmentLocation: {
            segmentId: "eaque",
          },
          location: {
            index: 866383,
            segmentId: "nemo",
          },
        },
        createHeader: {
          sectionBreakLocation: {
            index: 975522,
            segmentId: "perferendis",
          },
          type: CreateHeaderRequestTypeEnum.Default,
        },
        createNamedRange: {
          name: "amet",
          range: {
            endIndex: 11714,
            segmentId: "cumque",
            startIndex: 359978,
          },
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.NumberedZerodecimalAlphaRoman,
          range: {
            endIndex: 729991,
            segmentId: "nobis",
            startIndex: 171629,
          },
        },
        deleteContentRange: {
          range: {
            endIndex: 339404,
            segmentId: "totam",
            startIndex: 489549,
          },
        },
        deleteFooter: {
          footerId: "eaque",
        },
        deleteHeader: {
          headerId: "quis",
        },
        deleteNamedRange: {
          name: "nesciunt",
          namedRangeId: "eos",
        },
        deleteParagraphBullets: {
          range: {
            endIndex: 18521,
            segmentId: "dolores",
            startIndex: 793698,
          },
        },
        deletePositionedObject: {
          objectId: "quam",
        },
        deleteTableColumn: {
          tableCellLocation: {
            columnIndex: 223924,
            rowIndex: 874573,
            tableStartLocation: {
              index: 345352,
              segmentId: "hic",
            },
          },
        },
        deleteTableRow: {
          tableCellLocation: {
            columnIndex: 928082,
            rowIndex: 608253,
            tableStartLocation: {
              index: 704415,
              segmentId: "perspiciatis",
            },
          },
        },
        insertInlineImage: {
          endOfSegmentLocation: {
            segmentId: "voluptatem",
          },
          location: {
            index: 783645,
            segmentId: "consequuntur",
          },
          objectSize: {
            height: {
              magnitude: 5000.26,
              unit: DimensionUnitEnum.Pt,
            },
            width: {
              magnitude: 503.7,
              unit: DimensionUnitEnum.Pt,
            },
          },
          uri: "https://enraged-wrench.org",
        },
        insertPageBreak: {
          endOfSegmentLocation: {
            segmentId: "modi",
          },
          location: {
            index: 613966,
            segmentId: "dolorum",
          },
        },
        insertSectionBreak: {
          endOfSegmentLocation: {
            segmentId: "deleniti",
          },
          location: {
            index: 864282,
            segmentId: "provident",
          },
          sectionType: InsertSectionBreakRequestSectionTypeEnum.NextPage,
        },
        insertTable: {
          columns: 730122,
          endOfSegmentLocation: {
            segmentId: "delectus",
          },
          location: {
            index: 311945,
            segmentId: "quos",
          },
          rows: 398221,
        },
        insertTableColumn: {
          insertRight: false,
          tableCellLocation: {
            columnIndex: 212390,
            rowIndex: 209843,
            tableStartLocation: {
              index: 222443,
              segmentId: "qui",
            },
          },
        },
        insertTableRow: {
          insertBelow: false,
          tableCellLocation: {
            columnIndex: 218749,
            rowIndex: 944373,
            tableStartLocation: {
              index: 569574,
              segmentId: "cum",
            },
          },
        },
        insertText: {
          endOfSegmentLocation: {
            segmentId: "voluptate",
          },
          location: {
            index: 490459,
            segmentId: "reiciendis",
          },
          text: "amet",
        },
        mergeTableCells: {
          tableRange: {
            columnSpan: 680545,
            rowSpan: 254356,
            tableCellLocation: {
              columnIndex: 85295,
              rowIndex: 58029,
              tableStartLocation: {
                index: 56418,
                segmentId: "iure",
              },
            },
          },
        },
        pinTableHeaderRows: {
          pinnedHeaderRowsCount: 487838,
          tableStartLocation: {
            index: 311796,
            segmentId: "accusamus",
          },
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "quidem",
          },
          replaceText: "voluptatibus",
        },
        replaceImage: {
          imageObjectId: "voluptas",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.CenterCrop,
          uri: "http://monstrous-ambassador.org",
        },
        replaceNamedRangeContent: {
          namedRangeId: "ab",
          namedRangeName: "soluta",
          text: "dolorum",
        },
        unmergeTableCells: {
          tableRange: {
            columnSpan: 478596,
            rowSpan: 453697,
            tableCellLocation: {
              columnIndex: 677082,
              rowIndex: 536579,
              tableStartLocation: {
                index: 607045,
                segmentId: "necessitatibus",
              },
            },
          },
        },
        updateDocumentStyle: {
          documentStyle: {
            background: {
              color: {
                color: {
                  rgbColor: {
                    blue: 7146.97,
                    green: 9903.39,
                    red: 4694.97,
                  },
                },
              },
            },
            defaultFooterId: "ipsum",
            defaultHeaderId: "voluptate",
            evenPageFooterId: "id",
            evenPageHeaderId: "saepe",
            firstPageFooterId: "eius",
            firstPageHeaderId: "aspernatur",
            marginBottom: {
              magnitude: 206.51,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginFooter: {
              magnitude: 7583.79,
              unit: DimensionUnitEnum.Pt,
            },
            marginHeader: {
              magnitude: 3200.17,
              unit: DimensionUnitEnum.Pt,
            },
            marginLeft: {
              magnitude: 3834.64,
              unit: DimensionUnitEnum.Pt,
            },
            marginRight: {
              magnitude: 5883.17,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginTop: {
              magnitude: 8310.49,
              unit: DimensionUnitEnum.Pt,
            },
            pageNumberStart: 628982,
            pageSize: {
              height: {
                magnitude: 0.55,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 3118.6,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            useCustomHeaderFooterMargins: false,
            useEvenPageHeaderFooter: false,
            useFirstPageHeaderFooter: false,
          },
          fields: "vel",
        },
        updateParagraphStyle: {
          fields: "quod",
          paragraphStyle: {
            alignment: ParagraphStyleAlignmentEnum.Justified,
            avoidWidowAndOrphan: false,
            borderBetween: {
              color: {
                color: {
                  rgbColor: {
                    blue: 1856.36,
                    green: 6798.8,
                    red: 9527.92,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Solid,
              padding: {
                magnitude: 6874.88,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 2155.07,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 9473.71,
                    green: 2294.42,
                    red: 7308.56,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dash,
              padding: {
                magnitude: 2539.41,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 2133.12,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5182.01,
                    green: 4717.52,
                    red: 256.62,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 2074.7,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 4246.85,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3741.7,
                    green: 6462.65,
                    red: 4635.75,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.DashStyleUnspecified,
              padding: {
                magnitude: 2776.28,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 5867.84,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 8638.56,
                    green: 7470.8,
                    red: 1175.31,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 5173.79,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 1320.68,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            direction: ParagraphStyleDirectionEnum.RightToLeft,
            headingId: "facilis",
            indentEnd: {
              magnitude: 3960.6,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            indentFirstLine: {
              magnitude: 5654.21,
              unit: DimensionUnitEnum.Pt,
            },
            indentStart: {
              magnitude: 1832.8,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            keepLinesTogether: false,
            keepWithNext: false,
            lineSpacing: 1448.47,
            namedStyleType: ParagraphStyleNamedStyleTypeEnum.NormalText,
            pageBreakBefore: false,
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    blue: 4880.56,
                    green: 1248.33,
                    red: 3556.13,
                  },
                },
              },
            },
            spaceAbove: {
              magnitude: 7220.81,
              unit: DimensionUnitEnum.Pt,
            },
            spaceBelow: {
              magnitude: 304.52,
              unit: DimensionUnitEnum.Pt,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.CollapseLists,
            tabStops: [
              {
                alignment: TabStopAlignmentEnum.TabStopAlignmentUnspecified,
                offset: {
                  magnitude: 9037.2,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
              {
                alignment: TabStopAlignmentEnum.TabStopAlignmentUnspecified,
                offset: {
                  magnitude: 7492.55,
                  unit: DimensionUnitEnum.Pt,
                },
              },
              {
                alignment: TabStopAlignmentEnum.Center,
                offset: {
                  magnitude: 5844.76,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
            ],
          },
          range: {
            endIndex: 961937,
            segmentId: "dolorem",
            startIndex: 292147,
          },
        },
        updateSectionStyle: {
          fields: "labore",
          range: {
            endIndex: 240829,
            segmentId: "dolorum",
            startIndex: 100294,
          },
          sectionStyle: {
            columnProperties: [
              {
                paddingEnd: {
                  magnitude: 164.29,
                  unit: DimensionUnitEnum.Pt,
                },
                width: {
                  magnitude: 9295.3,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
            ],
            columnSeparatorStyle: SectionStyleColumnSeparatorStyleEnum.BetweenEachColumn,
            contentDirection: SectionStyleContentDirectionEnum.RightToLeft,
            defaultFooterId: "porro",
            defaultHeaderId: "doloribus",
            evenPageFooterId: "ut",
            evenPageHeaderId: "facilis",
            firstPageFooterId: "cupiditate",
            firstPageHeaderId: "qui",
            marginBottom: {
              magnitude: 639.55,
              unit: DimensionUnitEnum.Pt,
            },
            marginFooter: {
              magnitude: 4856.28,
              unit: DimensionUnitEnum.Pt,
            },
            marginHeader: {
              magnitude: 9774.96,
              unit: DimensionUnitEnum.Pt,
            },
            marginLeft: {
              magnitude: 8765.06,
              unit: DimensionUnitEnum.Pt,
            },
            marginRight: {
              magnitude: 3381.59,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginTop: {
              magnitude: 9615.71,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            pageNumberStart: 231701,
            sectionType: SectionStyleSectionTypeEnum.NextPage,
            useFirstPageHeaderFooter: false,
          },
        },
        updateTableCellStyle: {
          fields: "tenetur",
          tableCellStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 4922.68,
                  green: 9413.78,
                  red: 7155.61,
                },
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 7992.03,
                    green: 4861.6,
                    red: 6304.48,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Dot,
              width: {
                magnitude: 8742.88,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 2930.2,
                    green: 8445.5,
                    red: 8489.44,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.DashStyleUnspecified,
              width: {
                magnitude: 6178.77,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 132.36,
                    green: 9742.59,
                    red: 3472.33,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Dash,
              width: {
                magnitude: 1481.41,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 9818.3,
                    green: 9850.33,
                    red: 4783.7,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Dash,
              width: {
                magnitude: 4973.91,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            columnSpan: 639473,
            contentAlignment: TableCellStyleContentAlignmentEnum.ContentAlignmentUnsupported,
            paddingBottom: {
              magnitude: 3685.84,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingLeft: {
              magnitude: 1369,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingRight: {
              magnitude: 8221.18,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingTop: {
              magnitude: 1898.48,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            rowSpan: 511319,
          },
          tableRange: {
            columnSpan: 120657,
            rowSpan: 224317,
            tableCellLocation: {
              columnIndex: 980700,
              rowIndex: 97844,
              tableStartLocation: {
                index: 406120,
                segmentId: "nulla",
              },
            },
          },
          tableStartLocation: {
            index: 569211,
            segmentId: "voluptatibus",
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            960835,
            788873,
          ],
          fields: "saepe",
          tableColumnProperties: {
            width: {
              magnitude: 4113.72,
              unit: DimensionUnitEnum.Pt,
            },
            widthType: TableColumnPropertiesWidthTypeEnum.EvenlyDistributed,
          },
          tableStartLocation: {
            index: 333145,
            segmentId: "aliquid",
          },
        },
        updateTableRowStyle: {
          fields: "inventore",
          rowIndices: [
            407241,
            775220,
          ],
          tableRowStyle: {
            minRowHeight: {
              magnitude: 2322.34,
              unit: DimensionUnitEnum.Pt,
            },
            preventOverflow: false,
            tableHeader: false,
          },
          tableStartLocation: {
            index: 132487,
            segmentId: "minima",
          },
        },
        updateTextStyle: {
          fields: "eaque",
          range: {
            endIndex: 952871,
            segmentId: "libero",
            startIndex: 13948,
          },
          textStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 114.27,
                  green: 5334.66,
                  red: 7705.81,
                },
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.None,
            bold: false,
            fontSize: {
              magnitude: 1469.46,
              unit: DimensionUnitEnum.Pt,
            },
            foregroundColor: {
              color: {
                rgbColor: {
                  blue: 795.22,
                  green: 2506.22,
                  red: 896.03,
                },
              },
            },
            italic: false,
            link: {
              bookmarkId: "dolorum",
              headingId: "laborum",
              url: "placeat",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "velit",
              weight: 432148,
            },
          },
        },
      },
      {
        createFooter: {
          sectionBreakLocation: {
            index: 420539,
            segmentId: "nobis",
          },
          type: CreateFooterRequestTypeEnum.Default,
        },
        createFootnote: {
          endOfSegmentLocation: {
            segmentId: "assumenda",
          },
          location: {
            index: 860552,
            segmentId: "voluptas",
          },
        },
        createHeader: {
          sectionBreakLocation: {
            index: 727044,
            segmentId: "quasi",
          },
          type: CreateHeaderRequestTypeEnum.HeaderFooterTypeUnspecified,
        },
        createNamedRange: {
          name: "numquam",
          range: {
            endIndex: 131482,
            segmentId: "provident",
            startIndex: 55374,
          },
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.BulletLefttriangleDiamondDisc,
          range: {
            endIndex: 301598,
            segmentId: "odio",
            startIndex: 262118,
          },
        },
        deleteContentRange: {
          range: {
            endIndex: 458515,
            segmentId: "esse",
            startIndex: 524593,
          },
        },
        deleteFooter: {
          footerId: "fuga",
        },
        deleteHeader: {
          headerId: "reprehenderit",
        },
        deleteNamedRange: {
          name: "quidem",
          namedRangeId: "fugiat",
        },
        deleteParagraphBullets: {
          range: {
            endIndex: 283519,
            segmentId: "eum",
            startIndex: 379927,
          },
        },
        deletePositionedObject: {
          objectId: "assumenda",
        },
        deleteTableColumn: {
          tableCellLocation: {
            columnIndex: 181151,
            rowIndex: 509342,
            tableStartLocation: {
              index: 788546,
              segmentId: "veritatis",
            },
          },
        },
        deleteTableRow: {
          tableCellLocation: {
            columnIndex: 56848,
            rowIndex: 660040,
            tableStartLocation: {
              index: 696997,
              segmentId: "neque",
            },
          },
        },
        insertInlineImage: {
          endOfSegmentLocation: {
            segmentId: "quo",
          },
          location: {
            index: 847276,
            segmentId: "quo",
          },
          objectSize: {
            height: {
              magnitude: 6813.59,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            width: {
              magnitude: 1783.67,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
          uri: "http://official-admin.biz",
        },
        insertPageBreak: {
          endOfSegmentLocation: {
            segmentId: "debitis",
          },
          location: {
            index: 370853,
            segmentId: "aspernatur",
          },
        },
        insertSectionBreak: {
          endOfSegmentLocation: {
            segmentId: "sequi",
          },
          location: {
            index: 779192,
            segmentId: "esse",
          },
          sectionType: InsertSectionBreakRequestSectionTypeEnum.NextPage,
        },
        insertTable: {
          columns: 44612,
          endOfSegmentLocation: {
            segmentId: "distinctio",
          },
          location: {
            index: 799796,
            segmentId: "dignissimos",
          },
          rows: 76956,
        },
        insertTableColumn: {
          insertRight: false,
          tableCellLocation: {
            columnIndex: 469498,
            rowIndex: 518835,
            tableStartLocation: {
              index: 882710,
              segmentId: "aliquam",
            },
          },
        },
        insertTableRow: {
          insertBelow: false,
          tableCellLocation: {
            columnIndex: 488410,
            rowIndex: 577543,
            tableStartLocation: {
              index: 414567,
              segmentId: "sapiente",
            },
          },
        },
        insertText: {
          endOfSegmentLocation: {
            segmentId: "dolores",
          },
          location: {
            index: 645570,
            segmentId: "molestiae",
          },
          text: "accusantium",
        },
        mergeTableCells: {
          tableRange: {
            columnSpan: 783648,
            rowSpan: 430402,
            tableCellLocation: {
              columnIndex: 556429,
              rowIndex: 510017,
              tableStartLocation: {
                index: 159867,
                segmentId: "deleniti",
              },
            },
          },
        },
        pinTableHeaderRows: {
          pinnedHeaderRowsCount: 143829,
          tableStartLocation: {
            index: 681393,
            segmentId: "mollitia",
          },
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "incidunt",
          },
          replaceText: "atque",
        },
        replaceImage: {
          imageObjectId: "explicabo",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.ImageReplaceMethodUnspecified,
          uri: "http://costly-vicinity.com",
        },
        replaceNamedRangeContent: {
          namedRangeId: "ratione",
          namedRangeName: "explicabo",
          text: "saepe",
        },
        unmergeTableCells: {
          tableRange: {
            columnSpan: 578922,
            rowSpan: 543806,
            tableCellLocation: {
              columnIndex: 92260,
              rowIndex: 456911,
              tableStartLocation: {
                index: 910545,
                segmentId: "accusamus",
              },
            },
          },
        },
        updateDocumentStyle: {
          documentStyle: {
            background: {
              color: {
                color: {
                  rgbColor: {
                    blue: 829.71,
                    green: 4586.04,
                    red: 8003.79,
                  },
                },
              },
            },
            defaultFooterId: "nam",
            defaultHeaderId: "vero",
            evenPageFooterId: "aliquid",
            evenPageHeaderId: "quasi",
            firstPageFooterId: "saepe",
            firstPageHeaderId: "vel",
            marginBottom: {
              magnitude: 6900.25,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginFooter: {
              magnitude: 6996.22,
              unit: DimensionUnitEnum.Pt,
            },
            marginHeader: {
              magnitude: 3277.2,
              unit: DimensionUnitEnum.Pt,
            },
            marginLeft: {
              magnitude: 7567.79,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginRight: {
              magnitude: 6360.61,
              unit: DimensionUnitEnum.Pt,
            },
            marginTop: {
              magnitude: 2400.2,
              unit: DimensionUnitEnum.Pt,
            },
            pageNumberStart: 160538,
            pageSize: {
              height: {
                magnitude: 97.66,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 3082.86,
                unit: DimensionUnitEnum.Pt,
              },
            },
            useCustomHeaderFooterMargins: false,
            useEvenPageHeaderFooter: false,
            useFirstPageHeaderFooter: false,
          },
          fields: "consectetur",
        },
        updateParagraphStyle: {
          fields: "esse",
          paragraphStyle: {
            alignment: ParagraphStyleAlignmentEnum.Center,
            avoidWidowAndOrphan: false,
            borderBetween: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5909.84,
                    green: 9537.22,
                    red: 8577.23,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 4572.23,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 9518.75,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5757.51,
                    green: 8630.23,
                    red: 8207.67,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.DashStyleUnspecified,
              padding: {
                magnitude: 9088.44,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 8155.24,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 1594.14,
                    green: 944.58,
                    red: 6288.99,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 3984.34,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 627.13,
                unit: DimensionUnitEnum.Pt,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 4240.32,
                    green: 4473.78,
                    red: 2586.84,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Dot,
              padding: {
                magnitude: 8490.39,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 333.04,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 9589.83,
                    green: 1197.71,
                    red: 3553.69,
                  },
                },
              },
              dashStyle: ParagraphBorderDashStyleEnum.Solid,
              padding: {
                magnitude: 3567.07,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 163.28,
                unit: DimensionUnitEnum.Pt,
              },
            },
            direction: ParagraphStyleDirectionEnum.ContentDirectionUnspecified,
            headingId: "quibusdam",
            indentEnd: {
              magnitude: 4012.59,
              unit: DimensionUnitEnum.Pt,
            },
            indentFirstLine: {
              magnitude: 9292.92,
              unit: DimensionUnitEnum.Pt,
            },
            indentStart: {
              magnitude: 996.15,
              unit: DimensionUnitEnum.Pt,
            },
            keepLinesTogether: false,
            keepWithNext: false,
            lineSpacing: 9453.02,
            namedStyleType: ParagraphStyleNamedStyleTypeEnum.NamedStyleTypeUnspecified,
            pageBreakBefore: false,
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    blue: 8694.89,
                    green: 920.27,
                    red: 4541.62,
                  },
                },
              },
            },
            spaceAbove: {
              magnitude: 559.65,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            spaceBelow: {
              magnitude: 865.32,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.SpacingModeUnspecified,
            tabStops: [
              {
                alignment: TabStopAlignmentEnum.End,
                offset: {
                  magnitude: 330.74,
                  unit: DimensionUnitEnum.Pt,
                },
              },
              {
                alignment: TabStopAlignmentEnum.TabStopAlignmentUnspecified,
                offset: {
                  magnitude: 5130.75,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
              {
                alignment: TabStopAlignmentEnum.Center,
                offset: {
                  magnitude: 680.74,
                  unit: DimensionUnitEnum.Pt,
                },
              },
            ],
          },
          range: {
            endIndex: 251941,
            segmentId: "voluptatem",
            startIndex: 221161,
          },
        },
        updateSectionStyle: {
          fields: "occaecati",
          range: {
            endIndex: 253191,
            segmentId: "impedit",
            startIndex: 131055,
          },
          sectionStyle: {
            columnProperties: [
              {
                paddingEnd: {
                  magnitude: 120.36,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
                width: {
                  magnitude: 1154.84,
                  unit: DimensionUnitEnum.Pt,
                },
              },
              {
                paddingEnd: {
                  magnitude: 6184.8,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
                width: {
                  magnitude: 9742.57,
                  unit: DimensionUnitEnum.UnitUnspecified,
                },
              },
            ],
            columnSeparatorStyle: SectionStyleColumnSeparatorStyleEnum.BetweenEachColumn,
            contentDirection: SectionStyleContentDirectionEnum.ContentDirectionUnspecified,
            defaultFooterId: "ea",
            defaultHeaderId: "quaerat",
            evenPageFooterId: "consequuntur",
            evenPageHeaderId: "repellendus",
            firstPageFooterId: "officia",
            firstPageHeaderId: "maxime",
            marginBottom: {
              magnitude: 4903.05,
              unit: DimensionUnitEnum.Pt,
            },
            marginFooter: {
              magnitude: 9894.1,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginHeader: {
              magnitude: 653.04,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginLeft: {
              magnitude: 7832.35,
              unit: DimensionUnitEnum.Pt,
            },
            marginRight: {
              magnitude: 2883.98,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            marginTop: {
              magnitude: 2414.18,
              unit: DimensionUnitEnum.Pt,
            },
            pageNumberStart: 662505,
            sectionType: SectionStyleSectionTypeEnum.Continuous,
            useFirstPageHeaderFooter: false,
          },
        },
        updateTableCellStyle: {
          fields: "velit",
          tableCellStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 6339.31,
                  green: 6658.59,
                  red: 9268.8,
                },
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5173.09,
                    green: 8539.4,
                    red: 4240.89,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Solid,
              width: {
                magnitude: 5546.88,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 2870.51,
                    green: 8225.6,
                    red: 7065.75,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Dot,
              width: {
                magnitude: 4148.57,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3605.45,
                    green: 9689.04,
                    red: 8286.57,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Solid,
              width: {
                magnitude: 9249.67,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 460.07,
                    green: 7386.83,
                    red: 2326.27,
                  },
                },
              },
              dashStyle: TableCellBorderDashStyleEnum.Solid,
              width: {
                magnitude: 3485.19,
                unit: DimensionUnitEnum.Pt,
              },
            },
            columnSpan: 814967,
            contentAlignment: TableCellStyleContentAlignmentEnum.ContentAlignmentUnsupported,
            paddingBottom: {
              magnitude: 9854.92,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            paddingLeft: {
              magnitude: 9689.72,
              unit: DimensionUnitEnum.Pt,
            },
            paddingRight: {
              magnitude: 9049.49,
              unit: DimensionUnitEnum.Pt,
            },
            paddingTop: {
              magnitude: 2965.56,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            rowSpan: 992012,
          },
          tableRange: {
            columnSpan: 241545,
            rowSpan: 249420,
            tableCellLocation: {
              columnIndex: 228263,
              rowIndex: 105906,
              tableStartLocation: {
                index: 489509,
                segmentId: "a",
              },
            },
          },
          tableStartLocation: {
            index: 891523,
            segmentId: "consectetur",
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            689768,
            385237,
          ],
          fields: "ipsa",
          tableColumnProperties: {
            width: {
              magnitude: 9167.27,
              unit: DimensionUnitEnum.Pt,
            },
            widthType: TableColumnPropertiesWidthTypeEnum.WidthTypeUnspecified,
          },
          tableStartLocation: {
            index: 881721,
            segmentId: "similique",
          },
        },
        updateTableRowStyle: {
          fields: "tempora",
          rowIndices: [
            379057,
          ],
          tableRowStyle: {
            minRowHeight: {
              magnitude: 3742.44,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            preventOverflow: false,
            tableHeader: false,
          },
          tableStartLocation: {
            index: 324405,
            segmentId: "nobis",
          },
        },
        updateTextStyle: {
          fields: "dolorum",
          range: {
            endIndex: 237807,
            segmentId: "minus",
            startIndex: 171853,
          },
          textStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 5039.34,
                  green: 4492.92,
                  red: 2962.42,
                },
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.None,
            bold: false,
            fontSize: {
              magnitude: 8859.63,
              unit: DimensionUnitEnum.Pt,
            },
            foregroundColor: {
              color: {
                rgbColor: {
                  blue: 3518.7,
                  green: 2377.42,
                  red: 7383.91,
                },
              },
            },
            italic: false,
            link: {
              bookmarkId: "blanditiis",
              headingId: "quas",
              url: "hic",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "nesciunt",
              weight: 633998,
            },
          },
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "corrupti",
      targetRevisionId: "pariatur",
    },
  },
  accessToken: "totam",
  alt: AltEnum.Proto,
  callback: "exercitationem",
  documentId: "nobis",
  fields: "sit",
  key: "rerum",
  oauthToken: "sed",
  prettyPrint: false,
  quotaUser: "reiciendis",
  uploadType: "explicabo",
  uploadProtocol: "asperiores",
};

sdk.documents.docsDocumentsBatchUpdate(req).then((res: DocsDocumentsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->