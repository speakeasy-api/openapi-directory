<!-- Start SDK Example Usage -->
```typescript
import {
  SlidesPresentationsBatchUpdateRequest,
  SlidesPresentationsBatchUpdateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  OutlineDashStyleEnum,
  OutlinePropertyStateEnum,
  DimensionUnitEnum,
  OpaqueColorThemeColorEnum,
  RangeTypeEnum,
  TextStyleBaselineOffsetEnum,
  LinkRelativeLinkEnum,
  TableCellPropertiesContentAlignmentEnum,
  TableCellBackgroundFillPropertyStateEnum,
  UpdateTableBorderPropertiesRequestBorderPositionEnum,
  TableBorderPropertiesDashStyleEnum,
  ShapePropertiesContentAlignmentEnum,
  ShapeBackgroundFillPropertyStateEnum,
  ShadowAlignmentEnum,
  ShadowPropertyStateEnum,
  ShadowTypeEnum,
  AffineTransformUnitEnum,
  AutofitAutofitTypeEnum,
  ParagraphStyleAlignmentEnum,
  ParagraphStyleDirectionEnum,
  ParagraphStyleSpacingModeEnum,
  PageBackgroundFillPropertyStateEnum,
  ThemeColorPairTypeEnum,
  UpdatePageElementsZOrderRequestOperationEnum,
  UpdatePageElementTransformRequestApplyModeEnum,
  LinePropertiesDashStyleEnum,
  LinePropertiesEndArrowEnum,
  LinePropertiesStartArrowEnum,
  UpdateLineCategoryRequestLineCategoryEnum,
  RecolorNameEnum,
  ReplaceImageRequestImageReplaceMethodEnum,
  ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum,
  ReplaceAllShapesWithImageRequestImageReplaceMethodEnum,
  ReplaceAllShapesWithImageRequestReplaceMethodEnum,
  CreateVideoRequestSourceEnum,
  LayoutReferencePredefinedLayoutEnum,
  PlaceholderTypeEnum,
  CreateSheetsChartRequestLinkingModeEnum,
  CreateShapeRequestShapeTypeEnum,
  CreateParagraphBulletsRequestBulletPresetEnum,
  CreateLineRequestCategoryEnum,
  CreateLineRequestLineCategoryEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SlidesPresentationsBatchUpdateRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchUpdatePresentationRequest: {
    requests: [
      {
        createImage: {
          elementProperties: {
            pageObjectId: "distinctio",
            size: {
              height: {
                magnitude: 8442.66,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 8579.46,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 8472.52,
              scaleY: 4236.55,
              shearX: 6235.64,
              shearY: 6458.94,
              translateX: 3843.82,
              translateY: 4375.87,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          objectId: "debitis",
          url: "ipsa",
        },
        createLine: {
          category: CreateLineRequestCategoryEnum.Curved,
          elementProperties: {
            pageObjectId: "tempora",
            size: {
              height: {
                magnitude: 3834.41,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 7917.25,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 5288.95,
              scaleY: 4799.77,
              shearX: 5680.45,
              shearY: 3927.85,
              translateX: 9255.97,
              translateY: 8360.79,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          lineCategory: CreateLineRequestLineCategoryEnum.Bent,
          objectId: "veritatis",
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.NumberedDigitAlphaRoman,
          cellLocation: {
            columnIndex: 20218,
            rowIndex: 368241,
          },
          objectId: "repellendus",
          textRange: {
            endIndex: 957156,
            startIndex: 778157,
            type: RangeTypeEnum.RangeTypeUnspecified,
          },
        },
        createShape: {
          elementProperties: {
            pageObjectId: "at",
            size: {
              height: {
                magnitude: 8700.88,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 4736.08,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 8009.11,
              scaleY: 4614.79,
              shearX: 5204.78,
              shearY: 7805.29,
              translateX: 6788.8,
              translateY: 1182.74,
              unit: AffineTransformUnitEnum.Pt,
            },
          },
          objectId: "officia",
          shapeType: CreateShapeRequestShapeTypeEnum.Star16,
        },
        createSheetsChart: {
          chartId: 143353,
          elementProperties: {
            pageObjectId: "deleniti",
            size: {
              height: {
                magnitude: 9446.69,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 5218.48,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            transform: {
              scaleX: 4146.62,
              scaleY: 4736,
              shearX: 2645.55,
              shearY: 1863.32,
              translateX: 7742.34,
              translateY: 7369.18,
              unit: AffineTransformUnitEnum.Emu,
            },
          },
          linkingMode: CreateSheetsChartRequestLinkingModeEnum.NotLinkedImage,
          objectId: "excepturi",
          spreadsheetId: "aspernatur",
        },
        createSlide: {
          insertionIndex: 18789,
          objectId: "ad",
          placeholderIdMappings: [
            {
              layoutPlaceholder: {
                index: 149675,
                parentObjectId: "iste",
                type: PlaceholderTypeEnum.ClipArt,
              },
              layoutPlaceholderObjectId: "natus",
              objectId: "laboriosam",
            },
            {
              layoutPlaceholder: {
                index: 943749,
                parentObjectId: "saepe",
                type: PlaceholderTypeEnum.Picture,
              },
              layoutPlaceholderObjectId: "in",
              objectId: "corporis",
            },
            {
              layoutPlaceholder: {
                index: 613064,
                parentObjectId: "iure",
                type: PlaceholderTypeEnum.Title,
              },
              layoutPlaceholderObjectId: "quidem",
              objectId: "architecto",
            },
          ],
          slideLayoutReference: {
            layoutId: "ipsa",
            predefinedLayout: LayoutReferencePredefinedLayoutEnum.BigNumber,
          },
        },
        createTable: {
          columns: 666767,
          elementProperties: {
            pageObjectId: "mollitia",
            size: {
              height: {
                magnitude: 6706.38,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 2103.82,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 1289.26,
              scaleY: 7506.86,
              shearX: 3154.28,
              shearY: 6078.31,
              translateX: 3637.11,
              translateY: 3250.47,
              unit: AffineTransformUnitEnum.Emu,
            },
          },
          objectId: "accusantium",
          rows: 438601,
        },
        createVideo: {
          elementProperties: {
            pageObjectId: "culpa",
            size: {
              height: {
                magnitude: 9883.74,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 1020.44,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 2088.76,
              scaleY: 6350.59,
              shearX: 1613.09,
              shearY: 9953,
              translateX: 6531.08,
              translateY: 5818.5,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          id: "commodi",
          objectId: "quam",
          source: CreateVideoRequestSourceEnum.Youtube,
        },
        deleteObject: {
          objectId: "velit",
        },
        deleteParagraphBullets: {
          cellLocation: {
            columnIndex: 623510,
            rowIndex: 158969,
          },
          objectId: "quis",
          textRange: {
            endIndex: 110375,
            startIndex: 674752,
            type: RangeTypeEnum.FromStartIndex,
          },
        },
        deleteTableColumn: {
          cellLocation: {
            columnIndex: 317202,
            rowIndex: 138183,
          },
          tableObjectId: "quo",
        },
        deleteTableRow: {
          cellLocation: {
            columnIndex: 196582,
            rowIndex: 949572,
          },
          tableObjectId: "ipsam",
        },
        deleteText: {
          cellLocation: {
            columnIndex: 662527,
            rowIndex: 820994,
          },
          objectId: "aut",
          textRange: {
            endIndex: 97101,
            startIndex: 622846,
            type: RangeTypeEnum.All,
          },
        },
        duplicateObject: {
          objectId: "laborum",
          objectIds: {
            "reiciendis": "voluptatibus",
          },
        },
        groupObjects: {
          childrenObjectIds: [
            "nihil",
            "praesentium",
            "voluptatibus",
            "ipsa",
          ],
          groupObjectId: "omnis",
        },
        insertTableColumns: {
          cellLocation: {
            columnIndex: 451159,
            rowIndex: 739264,
          },
          insertRight: false,
          number: 19987,
          tableObjectId: "doloremque",
        },
        insertTableRows: {
          cellLocation: {
            columnIndex: 441711,
            rowIndex: 282807,
          },
          insertBelow: false,
          number: 979587,
          tableObjectId: "dicta",
        },
        insertText: {
          cellLocation: {
            columnIndex: 359444,
            rowIndex: 296140,
          },
          insertionIndex: 480894,
          objectId: "dicta",
          text: "harum",
        },
        mergeTableCells: {
          objectId: "enim",
          tableRange: {
            columnSpan: 880476,
            location: {
              columnIndex: 414263,
              rowIndex: 918236,
            },
            rowSpan: 64147,
          },
        },
        refreshSheetsChart: {
          objectId: "ipsum",
        },
        replaceAllShapesWithImage: {
          containsText: {
            matchCase: false,
            text: "quidem",
          },
          imageReplaceMethod: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum.CenterInside,
          imageUrl: "excepturi",
          pageObjectIds: [
            "modi",
            "praesentium",
            "rem",
            "voluptates",
          ],
          replaceMethod: ReplaceAllShapesWithImageRequestReplaceMethodEnum.CenterInside,
        },
        replaceAllShapesWithSheetsChart: {
          chartId: 921158,
          containsText: {
            matchCase: false,
            text: "sint",
          },
          linkingMode: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum.NotLinkedImage,
          pageObjectIds: [
            "incidunt",
            "enim",
            "consequatur",
            "est",
          ],
          spreadsheetId: "quibusdam",
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "explicabo",
          },
          pageObjectIds: [
            "distinctio",
            "quibusdam",
            "labore",
          ],
          replaceText: "modi",
        },
        replaceImage: {
          imageObjectId: "qui",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.CenterInside,
          url: "cupiditate",
        },
        rerouteLine: {
          objectId: "quos",
        },
        ungroupObjects: {
          objectIds: [
            "magni",
          ],
        },
        unmergeTableCells: {
          objectId: "assumenda",
          tableRange: {
            columnSpan: 369808,
            location: {
              columnIndex: 4695,
              rowIndex: 146441,
            },
            rowSpan: 677817,
          },
        },
        updateImageProperties: {
          fields: "excepturi",
          imageProperties: {
            brightness: 2700.08,
            contrast: 7037.37,
            cropProperties: {
              angle: 7351.94,
              bottomOffset: 2884.76,
              leftOffset: 9621.89,
              rightOffset: 4332.88,
              topOffset: 2487.53,
            },
            link: {
              pageObjectId: "eligendi",
              relativeLink: LinkRelativeLinkEnum.PreviousSlide,
              slideIndex: 396098,
              url: "provident",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.LongDashDot,
              outlineFill: {
                solidFill: {
                  alpha: 5722.52,
                  color: {
                    rgbColor: {
                      blue: 6389.21,
                      green: 2230.81,
                      red: 8915.55,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Background2,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Inherit,
              weight: {
                magnitude: 4471.25,
                unit: DimensionUnitEnum.Emu,
              },
            },
            recolor: {
              name: RecolorNameEnum.Grayscale,
              recolorStops: [
                {
                  alpha: 6994.79,
                  color: {
                    rgbColor: {
                      blue: 1162.02,
                      green: 2974.37,
                      red: 7670.24,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Text1,
                  },
                  position: 4118.2,
                },
                {
                  alpha: 3965.06,
                  color: {
                    rgbColor: {
                      blue: 6754.39,
                      green: 8811.04,
                      red: 2497.96,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Accent5,
                  },
                  position: 3132.18,
                },
                {
                  alpha: 8817.36,
                  color: {
                    rgbColor: {
                      blue: 9654.17,
                      green: 6925.32,
                      red: 5884.65,
                    },
                    themeColor: OpaqueColorThemeColorEnum.FollowedHyperlink,
                  },
                  position: 6596.69,
                },
                {
                  alpha: 5013.24,
                  color: {
                    rgbColor: {
                      blue: 5332.06,
                      green: 9560.84,
                      red: 2305.33,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Accent6,
                  },
                  position: 3948.69,
                },
              ],
            },
            shadow: {
              alignment: ShadowAlignmentEnum.LeftCenter,
              alpha: 6188.09,
              blurRadius: {
                magnitude: 6063.93,
                unit: DimensionUnitEnum.Emu,
              },
              color: {
                rgbColor: {
                  blue: 191.93,
                  green: 4701.32,
                  red: 3015.75,
                },
                themeColor: OpaqueColorThemeColorEnum.FollowedHyperlink,
              },
              propertyState: ShadowPropertyStateEnum.NotRendered,
              rotateWithShape: false,
              transform: {
                scaleX: 2879.91,
                scaleY: 2900.77,
                shearX: 3834.62,
                shearY: 6180.16,
                translateX: 7491.7,
                translateY: 4287.69,
                unit: AffineTransformUnitEnum.Pt,
              },
              type: ShadowTypeEnum.ShadowTypeUnspecified,
            },
            transparency: 1028.63,
          },
          objectId: "magnam",
        },
        updateLineCategory: {
          lineCategory: UpdateLineCategoryRequestLineCategoryEnum.LineCategoryUnspecified,
          objectId: "excepturi",
        },
        updateLineProperties: {
          fields: "ullam",
          lineProperties: {
            dashStyle: LinePropertiesDashStyleEnum.DashDot,
            endArrow: LinePropertiesEndArrowEnum.FillDiamond,
            endConnection: {
              connectedObjectId: "sint",
              connectionSiteIndex: 33625,
            },
            lineFill: {
              solidFill: {
                alpha: 6532.01,
                color: {
                  rgbColor: {
                    blue: 9689.62,
                    green: 6521.03,
                    red: 3209.97,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent3,
                },
              },
            },
            link: {
              pageObjectId: "dolor",
              relativeLink: LinkRelativeLinkEnum.LastSlide,
              slideIndex: 141264,
              url: "nemo",
            },
            startArrow: LinePropertiesStartArrowEnum.None,
            startConnection: {
              connectedObjectId: "iure",
              connectionSiteIndex: 984043,
            },
            weight: {
              magnitude: 8919.24,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
          objectId: "maxime",
        },
        updatePageElementAltText: {
          description: "deleniti",
          objectId: "facilis",
          title: "Ms.",
        },
        updatePageElementTransform: {
          applyMode: UpdatePageElementTransformRequestApplyModeEnum.ApplyModeUnspecified,
          objectId: "architecto",
          transform: {
            scaleX: 9194.83,
            scaleY: 3523.12,
            shearX: 7142.42,
            shearY: 4692.49,
            translateX: 9988.48,
            translateY: 8411.4,
            unit: AffineTransformUnitEnum.UnitUnspecified,
          },
        },
        updatePageElementsZOrder: {
          operation: UpdatePageElementsZOrderRequestOperationEnum.SendToBack,
          pageElementObjectIds: [
            "accusantium",
            "consequuntur",
            "praesentium",
            "natus",
          ],
        },
        updatePageProperties: {
          fields: "magni",
          objectId: "sunt",
          pageProperties: {
            colorScheme: {
              colors: [
                {
                  color: {
                    blue: 8480.09,
                    green: 8649.34,
                    red: 8073.19,
                  },
                  type: ThemeColorPairTypeEnum.Accent2,
                },
                {
                  color: {
                    blue: 5691.01,
                    green: 1399.72,
                    red: 4071.83,
                  },
                  type: ThemeColorPairTypeEnum.ThemeColorTypeUnspecified,
                },
                {
                  color: {
                    blue: 691.67,
                    green: 9825.75,
                    red: 6974.29,
                  },
                  type: ThemeColorPairTypeEnum.Accent2,
                },
                {
                  color: {
                    blue: 4535.43,
                    green: 4200.75,
                    red: 7220.56,
                  },
                  type: ThemeColorPairTypeEnum.ThemeColorTypeUnspecified,
                },
              ],
            },
            pageBackgroundFill: {
              propertyState: PageBackgroundFillPropertyStateEnum.Inherit,
              solidFill: {
                alpha: 3654.96,
                color: {
                  rgbColor: {
                    blue: 9755.22,
                    green: 166.27,
                    red: 8558.04,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Dark2,
                },
              },
              stretchedPictureFill: {
                contentUrl: "aut",
                size: {
                  height: {
                    magnitude: 7649.12,
                    unit: DimensionUnitEnum.Emu,
                  },
                  width: {
                    magnitude: 9441.24,
                    unit: DimensionUnitEnum.Pt,
                  },
                },
              },
            },
          },
        },
        updateParagraphStyle: {
          cellLocation: {
            columnIndex: 749999,
            rowIndex: 171629,
          },
          fields: "quis",
          objectId: "totam",
          style: {
            alignment: ParagraphStyleAlignmentEnum.Center,
            direction: ParagraphStyleDirectionEnum.TextDirectionUnspecified,
            indentEnd: {
              magnitude: 3389.85,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            indentFirstLine: {
              magnitude: 1794.9,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            indentStart: {
              magnitude: 1709.86,
              unit: DimensionUnitEnum.Pt,
            },
            lineSpacing: 4634.51,
            spaceAbove: {
              magnitude: 2239.24,
              unit: DimensionUnitEnum.Pt,
            },
            spaceBelow: {
              magnitude: 3453.52,
              unit: DimensionUnitEnum.Pt,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.CollapseLists,
          },
          textRange: {
            endIndex: 608253,
            startIndex: 704415,
            type: RangeTypeEnum.FromStartIndex,
          },
        },
        updateShapeProperties: {
          fields: "voluptatem",
          objectId: "porro",
          shapeProperties: {
            autofit: {
              autofitType: AutofitAutofitTypeEnum.AutofitTypeUnspecified,
              fontScale: 5000.26,
              lineSpacingReduction: 6214.79,
            },
            contentAlignment: ShapePropertiesContentAlignmentEnum.ContentAlignmentUnspecified,
            link: {
              pageObjectId: "occaecati",
              relativeLink: LinkRelativeLinkEnum.FirstSlide,
              slideIndex: 237893,
              url: "asperiores",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.LongDashDot,
              outlineFill: {
                solidFill: {
                  alpha: 2672.62,
                  color: {
                    rgbColor: {
                      blue: 6139.66,
                      green: 6790.91,
                      red: 5356.33,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Background1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.NotRendered,
              weight: {
                magnitude: 7508.44,
                unit: DimensionUnitEnum.Pt,
              },
            },
            shadow: {
              alignment: ShadowAlignmentEnum.BottomRight,
              alpha: 3119.45,
              blurRadius: {
                magnitude: 5542.42,
                unit: DimensionUnitEnum.Emu,
              },
              color: {
                rgbColor: {
                  blue: 2123.9,
                  green: 2098.43,
                  red: 2224.43,
                },
                themeColor: OpaqueColorThemeColorEnum.Dark2,
              },
              propertyState: ShadowPropertyStateEnum.Rendered,
              rotateWithShape: false,
              transform: {
                scaleX: 9443.73,
                scaleY: 5695.74,
                shearX: 7395.51,
                shearY: 4521.09,
                translateX: 4904.59,
                translateY: 9702.37,
                unit: AffineTransformUnitEnum.UnitUnspecified,
              },
              type: ShadowTypeEnum.Outer,
            },
            shapeBackgroundFill: {
              propertyState: ShapeBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 852.95,
                color: {
                  rgbColor: {
                    blue: 580.29,
                    green: 564.18,
                    red: 4344.17,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent4,
                },
              },
            },
          },
        },
        updateSlideProperties: {
          fields: "quaerat",
          objectId: "accusamus",
          slideProperties: {
            isSkipped: false,
            layoutObjectId: "quidem",
            masterObjectId: "voluptatibus",
            notesPage: {},
          },
        },
        updateSlidesPosition: {
          insertionIndex: 377752,
          slideObjectIds: [
            "eos",
            "atque",
            "sit",
          ],
        },
        updateTableBorderProperties: {
          borderPosition: UpdateTableBorderPropertiesRequestBorderPositionEnum.Right,
          fields: "ab",
          objectId: "soluta",
          tableBorderProperties: {
            dashStyle: TableBorderPropertiesDashStyleEnum.DashDot,
            tableBorderFill: {
              solidFill: {
                alpha: 4785.96,
                color: {
                  rgbColor: {
                    blue: 4536.97,
                    green: 6770.82,
                    red: 5365.79,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent6,
                },
              },
            },
            weight: {
              magnitude: 8966.72,
              unit: DimensionUnitEnum.Pt,
            },
          },
          tableRange: {
            columnSpan: 990339,
            location: {
              columnIndex: 469497,
              rowIndex: 216897,
            },
            rowSpan: 456015,
          },
        },
        updateTableCellProperties: {
          fields: "id",
          objectId: "saepe",
          tableCellProperties: {
            contentAlignment: TableCellPropertiesContentAlignmentEnum.ContentAlignmentUnsupported,
            tableCellBackgroundFill: {
              propertyState: TableCellBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 206.51,
                color: {
                  rgbColor: {
                    blue: 2292.19,
                    green: 7583.79,
                    red: 8815.86,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent1,
                },
              },
            },
          },
          tableRange: {
            columnSpan: 904425,
            location: {
              columnIndex: 383464,
              rowIndex: 645785,
            },
            rowSpan: 588317,
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            831049,
            519711,
          ],
          fields: "similique",
          objectId: "alias",
          tableColumnProperties: {
            columnWidth: {
              magnitude: 8726.51,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
        },
        updateTableRowProperties: {
          fields: "tempora",
          objectId: "vel",
          rowIndices: [
            885338,
            185636,
            679880,
            952792,
          ],
          tableRowProperties: {
            minRowHeight: {
              magnitude: 4561.3,
              unit: DimensionUnitEnum.Pt,
            },
          },
        },
        updateTextStyle: {
          cellLocation: {
            columnIndex: 483409,
            rowIndex: 215507,
          },
          fields: "quisquam",
          objectId: "tenetur",
          style: {
            backgroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 2294.42,
                  green: 7308.56,
                  red: 8802.98,
                },
                themeColor: OpaqueColorThemeColorEnum.Light2,
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.None,
            bold: false,
            fontFamily: "dolorem",
            fontSize: {
              magnitude: 9574.51,
              unit: DimensionUnitEnum.Emu,
            },
            foregroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 4717.52,
                  green: 256.62,
                  red: 7115.84,
                },
                themeColor: OpaqueColorThemeColorEnum.Dark2,
              },
            },
            italic: false,
            link: {
              pageObjectId: "sed",
              relativeLink: LinkRelativeLinkEnum.PreviousSlide,
              slideIndex: 730442,
              url: "voluptas",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "deserunt",
              weight: 463575,
            },
          },
          textRange: {
            endIndex: 214880,
            startIndex: 277628,
            type: RangeTypeEnum.RangeTypeUnspecified,
          },
        },
        updateVideoProperties: {
          fields: "cupiditate",
          objectId: "maxime",
          videoProperties: {
            autoPlay: false,
            end: 863856,
            mute: false,
            outline: {
              dashStyle: OutlineDashStyleEnum.LongDash,
              outlineFill: {
                solidFill: {
                  alpha: 1175.31,
                  color: {
                    rgbColor: {
                      blue: 6748.48,
                      green: 5173.79,
                      red: 2768.94,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Light1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Rendered,
              weight: {
                magnitude: 7168.6,
                unit: DimensionUnitEnum.Pt,
              },
            },
            start: 396060,
          },
        },
      },
      {
        createImage: {
          elementProperties: {
            pageObjectId: "quam",
            size: {
              height: {
                magnitude: 5654.21,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 1832.8,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            transform: {
              scaleX: 1448.47,
              scaleY: 1649.59,
              shearX: 4880.56,
              shearY: 1248.33,
              translateX: 3556.13,
              translateY: 7220.81,
              unit: AffineTransformUnitEnum.Pt,
            },
          },
          objectId: "voluptatem",
          url: "cumque",
        },
        createLine: {
          category: CreateLineRequestCategoryEnum.Bent,
          elementProperties: {
            pageObjectId: "nobis",
            size: {
              height: {
                magnitude: 925.96,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 2174.5,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            transform: {
              scaleX: 7492.55,
              scaleY: 5521.93,
              shearX: 7316.94,
              shearY: 5844.76,
              translateX: 456.14,
              translateY: 9619.37,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          lineCategory: CreateLineRequestLineCategoryEnum.Straight,
          objectId: "labore",
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.BulletArrowDiamondDisc,
          cellLocation: {
            columnIndex: 677263,
            rowIndex: 100294,
          },
          objectId: "quae",
          textRange: {
            endIndex: 16429,
            startIndex: 555649,
            type: RangeTypeEnum.All,
          },
        },
        createShape: {
          elementProperties: {
            pageObjectId: "consequatur",
            size: {
              height: {
                magnitude: 6699.17,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 7851.53,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 2817.3,
              scaleY: 7034.95,
              shearX: 5864.1,
              shearY: 1816.31,
              translateX: 639.55,
              translateY: 5123.93,
              unit: AffineTransformUnitEnum.Emu,
            },
          },
          objectId: "occaecati",
          shapeType: CreateShapeRequestShapeTypeEnum.EllipseRibbon,
        },
        createSheetsChart: {
          chartId: 787542,
          elementProperties: {
            pageObjectId: "vero",
            size: {
              height: {
                magnitude: 6064.76,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 2184.03,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 4551.69,
              scaleY: 2317.01,
              shearX: 8788.7,
              shearY: 9493.19,
              translateX: 4922.68,
              translateY: 9413.78,
              unit: AffineTransformUnitEnum.Pt,
            },
          },
          linkingMode: CreateSheetsChartRequestLinkingModeEnum.Linked,
          objectId: "odio",
          spreadsheetId: "similique",
        },
        createSlide: {
          insertionIndex: 708548,
          objectId: "vero",
          placeholderIdMappings: [
            {
              layoutPlaceholder: {
                index: 293020,
                parentObjectId: "quibusdam",
                type: PlaceholderTypeEnum.Table,
              },
              layoutPlaceholderObjectId: "sequi",
              objectId: "natus",
            },
            {
              layoutPlaceholder: {
                index: 773326,
                parentObjectId: "aut",
                type: PlaceholderTypeEnum.SlideImage,
              },
              layoutPlaceholderObjectId: "exercitationem",
              objectId: "nulla",
            },
          ],
          slideLayoutReference: {
            layoutId: "fugit",
            predefinedLayout: LayoutReferencePredefinedLayoutEnum.OneColumnText,
          },
        },
        createTable: {
          columns: 981830,
          elementProperties: {
            pageObjectId: "doloribus",
            size: {
              height: {
                magnitude: 4783.7,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 4973.91,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            transform: {
              scaleX: 6394.73,
              scaleY: 2694.79,
              shearX: 3685.84,
              shearY: 4104.92,
              translateX: 1369,
              translateY: 4282.24,
              unit: AffineTransformUnitEnum.Pt,
            },
          },
          objectId: "magnam",
          rows: 189848,
        },
        createVideo: {
          elementProperties: {
            pageObjectId: "ex",
            size: {
              height: {
                magnitude: 5113.19,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 2243.17,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 978.44,
              scaleY: 4061.2,
              shearX: 8621.92,
              shearY: 5692.11,
              translateX: 9729.2,
              translateY: 3436.05,
              unit: AffineTransformUnitEnum.Pt,
            },
          },
          id: "quisquam",
          objectId: "saepe",
          source: CreateVideoRequestSourceEnum.Youtube,
        },
        deleteObject: {
          objectId: "impedit",
        },
        deleteParagraphBullets: {
          cellLocation: {
            columnIndex: 359271,
            rowIndex: 333145,
          },
          objectId: "aliquid",
          textRange: {
            endIndex: 81101,
            startIndex: 301831,
            type: RangeTypeEnum.FixedRange,
          },
        },
        deleteTableColumn: {
          cellLocation: {
            columnIndex: 775220,
            rowIndex: 232234,
          },
          tableObjectId: "recusandae",
        },
        deleteTableRow: {
          cellLocation: {
            columnIndex: 132487,
            rowIndex: 325310,
          },
          tableObjectId: "eaque",
        },
        deleteText: {
          cellLocation: {
            columnIndex: 952871,
            rowIndex: 725595,
          },
          objectId: "aut",
          textRange: {
            endIndex: 11427,
            startIndex: 533466,
            type: RangeTypeEnum.All,
          },
        },
        duplicateObject: {
          objectId: "aliquam",
          objectIds: {
            "accusamus": "inventore",
          },
        },
        groupObjects: {
          childrenObjectIds: [
            "et",
            "dolorum",
          ],
          groupObjectId: "laborum",
        },
        insertTableColumns: {
          cellLocation: {
            columnIndex: 810424,
            rowIndex: 245367,
          },
          insertRight: false,
          number: 432148,
          tableObjectId: "autem",
        },
        insertTableRows: {
          cellLocation: {
            columnIndex: 752135,
            rowIndex: 557369,
          },
          insertBelow: false,
          number: 829603,
          tableObjectId: "nulla",
        },
        insertText: {
          cellLocation: {
            columnIndex: 379034,
            rowIndex: 727044,
          },
          insertionIndex: 96549,
          objectId: "tempora",
          text: "numquam",
        },
        mergeTableCells: {
          objectId: "explicabo",
          tableRange: {
            columnSpan: 591935,
            location: {
              columnIndex: 55374,
              rowIndex: 476477,
            },
            rowSpan: 301598,
          },
        },
        refreshSheetsChart: {
          objectId: "odio",
        },
        replaceAllShapesWithImage: {
          containsText: {
            matchCase: false,
            text: "eius",
          },
          imageReplaceMethod: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum.CenterInside,
          imageUrl: "esse",
          pageObjectIds: [
            "fuga",
            "reprehenderit",
            "quidem",
          ],
          replaceMethod: ReplaceAllShapesWithImageRequestReplaceMethodEnum.CenterCrop,
        },
        replaceAllShapesWithSheetsChart: {
          chartId: 283519,
          containsText: {
            matchCase: false,
            text: "eum",
          },
          linkingMode: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum.NotLinkedImage,
          pageObjectIds: [
            "eos",
            "praesentium",
            "quisquam",
            "veritatis",
          ],
          spreadsheetId: "ipsa",
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "id",
          },
          pageObjectIds: [
            "neque",
            "quo",
            "illum",
          ],
          replaceText: "quo",
        },
        replaceImage: {
          imageObjectId: "fuga",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.ImageReplaceMethodUnspecified,
          url: "eos",
        },
        rerouteLine: {
          objectId: "voluptas",
        },
        ungroupObjects: {
          objectIds: [
            "cupiditate",
          ],
        },
        unmergeTableCells: {
          objectId: "consequatur",
          tableRange: {
            columnSpan: 272822,
            location: {
              columnIndex: 892050,
              rowIndex: 370853,
            },
            rowSpan: 133465,
          },
        },
        updateImageProperties: {
          fields: "sequi",
          imageProperties: {
            brightness: 7791.92,
            contrast: 4598.56,
            cropProperties: {
              angle: 9251.64,
              bottomOffset: 446.12,
              leftOffset: 7151.79,
              rightOffset: 7997.96,
              topOffset: 4908.19,
            },
            link: {
              pageObjectId: "inventore",
              relativeLink: LinkRelativeLinkEnum.PreviousSlide,
              slideIndex: 518835,
              url: "accusamus",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.Dot,
              outlineFill: {
                solidFill: {
                  alpha: 4884.1,
                  color: {
                    rgbColor: {
                      blue: 5775.43,
                      green: 4145.67,
                      red: 9594.34,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Light1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.NotRendered,
              weight: {
                magnitude: 4752.89,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            recolor: {
              name: RecolorNameEnum.Dark9,
              recolorStops: [
                {
                  alpha: 5564.29,
                  color: {
                    rgbColor: {
                      blue: 5100.17,
                      green: 1598.67,
                      red: 5361.78,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Light1,
                  },
                  position: 6813.93,
                },
                {
                  alpha: 6494.63,
                  color: {
                    rgbColor: {
                      blue: 2775.96,
                      green: 5392.24,
                      red: 1288.6,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Accent1,
                  },
                  position: 3926.76,
                },
              ],
            },
            shadow: {
              alignment: ShadowAlignmentEnum.TopLeft,
              alpha: 9564.06,
              blurRadius: {
                magnitude: 1598.7,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              color: {
                rgbColor: {
                  blue: 1294.12,
                  green: 9039.84,
                  red: 5789.22,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent5,
              },
              propertyState: ShadowPropertyStateEnum.Rendered,
              rotateWithShape: false,
              transform: {
                scaleX: 4569.11,
                scaleY: 9105.45,
                shearX: 8820.42,
                shearY: 829.71,
                translateX: 4586.04,
                translateY: 8003.79,
                unit: AffineTransformUnitEnum.Pt,
              },
              type: ShadowTypeEnum.Outer,
            },
            transparency: 3990.25,
          },
          objectId: "quasi",
        },
        updateLineCategory: {
          lineCategory: UpdateLineCategoryRequestLineCategoryEnum.Curved,
          objectId: "vel",
        },
        updateLineProperties: {
          fields: "harum",
          lineProperties: {
            dashStyle: LinePropertiesDashStyleEnum.Dash,
            endArrow: LinePropertiesEndArrowEnum.OpenArrow,
            endConnection: {
              connectedObjectId: "occaecati",
              connectionSiteIndex: 327720,
            },
            lineFill: {
              solidFill: {
                alpha: 7162.44,
                color: {
                  rgbColor: {
                    blue: 7567.79,
                    green: 270.69,
                    red: 6360.61,
                  },
                  themeColor: OpaqueColorThemeColorEnum.FollowedHyperlink,
                },
              },
            },
            link: {
              pageObjectId: "adipisci",
              relativeLink: LinkRelativeLinkEnum.FirstSlide,
              slideIndex: 160538,
              url: "consequatur",
            },
            startArrow: LinePropertiesStartArrowEnum.OpenCircle,
            startConnection: {
              connectedObjectId: "quaerat",
              connectionSiteIndex: 959167,
            },
            weight: {
              magnitude: 2328.65,
              unit: DimensionUnitEnum.Emu,
            },
          },
          objectId: "blanditiis",
        },
        updatePageElementAltText: {
          description: "provident",
          objectId: "a",
          title: "Dr.",
        },
        updatePageElementTransform: {
          applyMode: UpdatePageElementTransformRequestApplyModeEnum.Relative,
          objectId: "esse",
          transform: {
            scaleX: 974.68,
            scaleY: 9518.75,
            shearX: 6216.79,
            shearY: 5757.51,
            translateX: 8630.23,
            translateY: 8207.67,
            unit: AffineTransformUnitEnum.UnitUnspecified,
          },
        },
        updatePageElementsZOrder: {
          operation: UpdatePageElementsZOrderRequestOperationEnum.SendToBack,
          pageElementObjectIds: [
            "facere",
            "veritatis",
            "consequuntur",
            "quasi",
          ],
        },
        updatePageProperties: {
          fields: "similique",
          objectId: "culpa",
          pageProperties: {
            colorScheme: {
              colors: [
                {
                  color: {
                    blue: 9492.98,
                    green: 627.13,
                    red: 9367.47,
                  },
                  type: ThemeColorPairTypeEnum.Accent3,
                },
                {
                  color: {
                    blue: 4473.78,
                    green: 2586.84,
                    red: 7276.97,
                  },
                  type: ThemeColorPairTypeEnum.Background1,
                },
              ],
            },
            pageBackgroundFill: {
              propertyState: PageBackgroundFillPropertyStateEnum.Inherit,
              solidFill: {
                alpha: 333.04,
                color: {
                  rgbColor: {
                    blue: 3069.86,
                    green: 9589.83,
                    red: 1197.71,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent2,
                },
              },
              stretchedPictureFill: {
                contentUrl: "reprehenderit",
                size: {
                  height: {
                    magnitude: 3567.07,
                    unit: DimensionUnitEnum.Emu,
                  },
                  width: {
                    magnitude: 163.28,
                    unit: DimensionUnitEnum.Emu,
                  },
                },
              },
            },
          },
        },
        updateParagraphStyle: {
          cellLocation: {
            columnIndex: 185232,
            rowIndex: 845358,
          },
          fields: "ex",
          objectId: "deleniti",
          style: {
            alignment: ParagraphStyleAlignmentEnum.Justified,
            direction: ParagraphStyleDirectionEnum.RightToLeft,
            indentEnd: {
              magnitude: 996.15,
              unit: DimensionUnitEnum.Emu,
            },
            indentFirstLine: {
              magnitude: 9453.02,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            indentStart: {
              magnitude: 8694.89,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            lineSpacing: 4541.62,
            spaceAbove: {
              magnitude: 559.65,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            spaceBelow: {
              magnitude: 865.32,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.SpacingModeUnspecified,
          },
          textRange: {
            endIndex: 614465,
            startIndex: 839513,
            type: RangeTypeEnum.RangeTypeUnspecified,
          },
        },
        updateShapeProperties: {
          fields: "rem",
          objectId: "aut",
          shapeProperties: {
            autofit: {
              autofitType: AutofitAutofitTypeEnum.TextAutofit,
              fontScale: 4287.96,
              lineSpacingReduction: 6498.32,
            },
            contentAlignment: ShapePropertiesContentAlignmentEnum.ContentAlignmentUnspecified,
            link: {
              pageObjectId: "corrupti",
              relativeLink: LinkRelativeLinkEnum.NextSlide,
              slideIndex: 32465,
              url: "dolor",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.DashDot,
              outlineFill: {
                solidFill: {
                  alpha: 2531.91,
                  color: {
                    rgbColor: {
                      blue: 7710.89,
                      green: 1310.55,
                      red: 3762.26,
                    },
                    themeColor: OpaqueColorThemeColorEnum.ThemeColorTypeUnspecified,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.NotRendered,
              weight: {
                magnitude: 1154.84,
                unit: DimensionUnitEnum.Pt,
              },
            },
            shadow: {
              alignment: ShadowAlignmentEnum.RightCenter,
              alpha: 2446.51,
              blurRadius: {
                magnitude: 9742.57,
                unit: DimensionUnitEnum.Emu,
              },
              color: {
                rgbColor: {
                  blue: 9903.45,
                  green: 456.59,
                  red: 4090.54,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent1,
              },
              propertyState: ShadowPropertyStateEnum.Rendered,
              rotateWithShape: false,
              transform: {
                scaleX: 8315.2,
                scaleY: 6387.62,
                shearX: 8070.23,
                shearY: 4903.05,
                translateX: 6400.24,
                translateY: 9894.1,
                unit: AffineTransformUnitEnum.Emu,
              },
              type: ShadowTypeEnum.ShadowTypeUnspecified,
            },
            shapeBackgroundFill: {
              propertyState: ShapeBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 7832.35,
                color: {
                  rgbColor: {
                    blue: 8018.36,
                    green: 2883.98,
                    red: 704.47,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Light2,
                },
              },
            },
          },
        },
        updateSlideProperties: {
          fields: "fuga",
          objectId: "id",
          slideProperties: {
            isSkipped: false,
            layoutObjectId: "suscipit",
            masterObjectId: "velit",
            notesPage: {},
          },
        },
        updateSlidesPosition: {
          insertionIndex: 633931,
          slideObjectIds: [
            "recusandae",
            "totam",
            "fugiat",
          ],
        },
        updateTableBorderProperties: {
          borderPosition: UpdateTableBorderPropertiesRequestBorderPositionEnum.InnerHorizontal,
          fields: "ducimus",
          objectId: "quos",
          tableBorderProperties: {
            dashStyle: TableBorderPropertiesDashStyleEnum.Dot,
            tableBorderFill: {
              solidFill: {
                alpha: 2870.51,
                color: {
                  rgbColor: {
                    blue: 8225.6,
                    green: 7065.75,
                    red: 7382.27,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent3,
                },
              },
            },
            weight: {
              magnitude: 4471.44,
              unit: DimensionUnitEnum.Emu,
            },
          },
          tableRange: {
            columnSpan: 968904,
            location: {
              columnIndex: 828657,
              rowIndex: 363161,
            },
            rowSpan: 924967,
          },
        },
        updateTableCellProperties: {
          fields: "aliquid",
          objectId: "aperiam",
          tableCellProperties: {
            contentAlignment: TableCellPropertiesContentAlignmentEnum.Middle,
            tableCellBackgroundFill: {
              propertyState: TableCellBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 4490.83,
                color: {
                  rgbColor: {
                    blue: 3485.19,
                    green: 9372.85,
                    red: 8149.67,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Light2,
                },
              },
            },
          },
          tableRange: {
            columnSpan: 985492,
            location: {
              columnIndex: 381760,
              rowIndex: 968972,
            },
            rowSpan: 697142,
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            897071,
            296556,
            121059,
            992012,
          ],
          fields: "adipisci",
          objectId: "non",
          tableColumnProperties: {
            columnWidth: {
              magnitude: 2282.63,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
        },
        updateTableRowProperties: {
          fields: "dignissimos",
          objectId: "a",
          rowIndices: [
            233420,
            358107,
            689768,
            385237,
          ],
          tableRowProperties: {
            minRowHeight: {
              magnitude: 583.56,
              unit: DimensionUnitEnum.Pt,
            },
          },
        },
        updateTextStyle: {
          cellLocation: {
            columnIndex: 730709,
            rowIndex: 113816,
          },
          fields: "accusamus",
          objectId: "similique",
          style: {
            backgroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 2724.37,
                  green: 1328.15,
                  red: 3790.57,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent2,
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.None,
            bold: false,
            fontFamily: "minima",
            fontSize: {
              magnitude: 7487.89,
              unit: DimensionUnitEnum.Pt,
            },
            foregroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 2378.07,
                  green: 7955.35,
                  red: 1718.53,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent4,
              },
            },
            italic: false,
            link: {
              pageObjectId: "in",
              relativeLink: LinkRelativeLinkEnum.NextSlide,
              slideIndex: 304468,
              url: "officiis",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "temporibus",
              weight: 351870,
            },
          },
          textRange: {
            endIndex: 237742,
            startIndex: 738391,
            type: RangeTypeEnum.FromStartIndex,
          },
        },
        updateVideoProperties: {
          fields: "quas",
          objectId: "hic",
          videoProperties: {
            autoPlay: false,
            end: 201517,
            mute: false,
            outline: {
              dashStyle: OutlineDashStyleEnum.DashDot,
              outlineFill: {
                solidFill: {
                  alpha: 5485.19,
                  color: {
                    rgbColor: {
                      blue: 8672.9,
                      green: 5196.43,
                      red: 9402.1,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Accent1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Inherit,
              weight: {
                magnitude: 246.19,
                unit: DimensionUnitEnum.Pt,
              },
            },
            start: 148829,
          },
        },
      },
      {
        createImage: {
          elementProperties: {
            pageObjectId: "reiciendis",
            size: {
              height: {
                magnitude: 1318.52,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 7079.18,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 7090.72,
              scaleY: 708.69,
              shearX: 6117.49,
              shearY: 2927.94,
              translateX: 6719.07,
              translateY: 1523.54,
              unit: AffineTransformUnitEnum.Emu,
            },
          },
          objectId: "commodi",
          url: "quidem",
        },
        createLine: {
          category: CreateLineRequestCategoryEnum.LineCategoryUnspecified,
          elementProperties: {
            pageObjectId: "voluptas",
            size: {
              height: {
                magnitude: 6041.18,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              width: {
                magnitude: 3828.08,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 8953.86,
              scaleY: 724.34,
              shearX: 9677.95,
              shearY: 193,
              translateX: 5468.85,
              translateY: 9795.74,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          lineCategory: CreateLineRequestLineCategoryEnum.Straight,
          objectId: "provident",
        },
        createParagraphBullets: {
          bulletPreset: CreateParagraphBulletsRequestBulletPresetEnum.BulletArrowDiamondDisc,
          cellLocation: {
            columnIndex: 896762,
            rowIndex: 215529,
          },
          objectId: "ea",
          textRange: {
            endIndex: 579912,
            startIndex: 552078,
            type: RangeTypeEnum.All,
          },
        },
        createShape: {
          elementProperties: {
            pageObjectId: "tempora",
            size: {
              height: {
                magnitude: 2730.09,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 9700.76,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 254.97,
              scaleY: 2484.13,
              shearX: 8880.44,
              shearY: 5058.66,
              translateX: 7086.09,
              translateY: 3103.81,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          objectId: "ipsam",
          shapeType: CreateShapeRequestShapeTypeEnum.FlowChartProcess,
        },
        createSheetsChart: {
          chartId: 524970,
          elementProperties: {
            pageObjectId: "sit",
            size: {
              height: {
                magnitude: 7505.95,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 3335.07,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
            },
            transform: {
              scaleX: 9241.59,
              scaleY: 9671.22,
              shearX: 8623.19,
              shearY: 1685.76,
              translateX: 486.9,
              translateY: 9014.83,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          linkingMode: CreateSheetsChartRequestLinkingModeEnum.NotLinkedImage,
          objectId: "in",
          spreadsheetId: "officiis",
        },
        createSlide: {
          insertionIndex: 104627,
          objectId: "laudantium",
          placeholderIdMappings: [
            {
              layoutPlaceholder: {
                index: 510629,
                parentObjectId: "cum",
                type: PlaceholderTypeEnum.DateAndTime,
              },
              layoutPlaceholderObjectId: "dolorum",
              objectId: "voluptatum",
            },
            {
              layoutPlaceholder: {
                index: 622385,
                parentObjectId: "hic",
                type: PlaceholderTypeEnum.SlideNumber,
              },
              layoutPlaceholderObjectId: "debitis",
              objectId: "neque",
            },
          ],
          slideLayoutReference: {
            layoutId: "dolorum",
            predefinedLayout: LayoutReferencePredefinedLayoutEnum.TitleAndBody,
          },
        },
        createTable: {
          columns: 639028,
          elementProperties: {
            pageObjectId: "dolorum",
            size: {
              height: {
                magnitude: 5483.61,
                unit: DimensionUnitEnum.Pt,
              },
              width: {
                magnitude: 2726.83,
                unit: DimensionUnitEnum.Emu,
              },
            },
            transform: {
              scaleX: 1482.68,
              scaleY: 2826.99,
              shearX: 8563.03,
              shearY: 302.35,
              translateX: 6350.57,
              translateY: 7103.37,
              unit: AffineTransformUnitEnum.UnitUnspecified,
            },
          },
          objectId: "consequatur",
          rows: 460220,
        },
        createVideo: {
          elementProperties: {
            pageObjectId: "ipsam",
            size: {
              height: {
                magnitude: 245.27,
                unit: DimensionUnitEnum.Emu,
              },
              width: {
                magnitude: 5580.65,
                unit: DimensionUnitEnum.Pt,
              },
            },
            transform: {
              scaleX: 3611.51,
              scaleY: 894.94,
              shearX: 5027.1,
              shearY: 4059.42,
              translateX: 1536.27,
              translateY: 243.13,
              unit: AffineTransformUnitEnum.Emu,
            },
          },
          id: "nostrum",
          objectId: "saepe",
          source: CreateVideoRequestSourceEnum.Youtube,
        },
        deleteObject: {
          objectId: "consequatur",
        },
        deleteParagraphBullets: {
          cellLocation: {
            columnIndex: 279068,
            rowIndex: 968865,
          },
          objectId: "dolorem",
          textRange: {
            endIndex: 690894,
            startIndex: 115703,
            type: RangeTypeEnum.RangeTypeUnspecified,
          },
        },
        deleteTableColumn: {
          cellLocation: {
            columnIndex: 577140,
            rowIndex: 289776,
          },
          tableObjectId: "quidem",
        },
        deleteTableRow: {
          cellLocation: {
            columnIndex: 539074,
            rowIndex: 671957,
          },
          tableObjectId: "nam",
        },
        deleteText: {
          cellLocation: {
            columnIndex: 948861,
            rowIndex: 388867,
          },
          objectId: "alias",
          textRange: {
            endIndex: 227084,
            startIndex: 647197,
            type: RangeTypeEnum.FixedRange,
          },
        },
        duplicateObject: {
          objectId: "unde",
          objectIds: {
            "provident": "repellendus",
            "delectus": "voluptates",
            "perferendis": "est",
            "quidem": "reprehenderit",
          },
        },
        groupObjects: {
          childrenObjectIds: [
            "fuga",
            "praesentium",
            "mollitia",
            "veniam",
          ],
          groupObjectId: "voluptatem",
        },
        insertTableColumns: {
          cellLocation: {
            columnIndex: 790840,
            rowIndex: 919532,
          },
          insertRight: false,
          number: 97243,
          tableObjectId: "atque",
        },
        insertTableRows: {
          cellLocation: {
            columnIndex: 442036,
            rowIndex: 991142,
          },
          insertBelow: false,
          number: 519952,
          tableObjectId: "suscipit",
        },
        insertText: {
          cellLocation: {
            columnIndex: 693957,
            rowIndex: 806670,
          },
          insertionIndex: 90885,
          objectId: "esse",
          text: "amet",
        },
        mergeTableCells: {
          objectId: "assumenda",
          tableRange: {
            columnSpan: 410301,
            location: {
              columnIndex: 539118,
              rowIndex: 623295,
            },
            rowSpan: 887265,
          },
        },
        refreshSheetsChart: {
          objectId: "officiis",
        },
        replaceAllShapesWithImage: {
          containsText: {
            matchCase: false,
            text: "accusamus",
          },
          imageReplaceMethod: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum.CenterInside,
          imageUrl: "minima",
          pageObjectIds: [
            "ex",
          ],
          replaceMethod: ReplaceAllShapesWithImageRequestReplaceMethodEnum.CenterCrop,
        },
        replaceAllShapesWithSheetsChart: {
          chartId: 544647,
          containsText: {
            matchCase: false,
            text: "at",
          },
          linkingMode: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum.Linked,
          pageObjectIds: [
            "suscipit",
            "repudiandae",
            "atque",
          ],
          spreadsheetId: "atque",
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "sunt",
          },
          pageObjectIds: [
            "dolorum",
            "repellendus",
            "labore",
            "reiciendis",
          ],
          replaceText: "doloremque",
        },
        replaceImage: {
          imageObjectId: "repudiandae",
          imageReplaceMethod: ReplaceImageRequestImageReplaceMethodEnum.ImageReplaceMethodUnspecified,
          url: "accusantium",
        },
        rerouteLine: {
          objectId: "beatae",
        },
        ungroupObjects: {
          objectIds: [
            "enim",
          ],
        },
        unmergeTableCells: {
          objectId: "laboriosam",
          tableRange: {
            columnSpan: 246535,
            location: {
              columnIndex: 952143,
              rowIndex: 562783,
            },
            rowSpan: 300029,
          },
        },
        updateImageProperties: {
          fields: "saepe",
          imageProperties: {
            brightness: 1604.67,
            contrast: 5801.07,
            cropProperties: {
              angle: 8863.05,
              bottomOffset: 5979.37,
              leftOffset: 4463.94,
              rightOffset: 2380.43,
              topOffset: 9078.76,
            },
            link: {
              pageObjectId: "occaecati",
              relativeLink: LinkRelativeLinkEnum.RelativeSlideLinkUnspecified,
              slideIndex: 145870,
              url: "id",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.Dot,
              outlineFill: {
                solidFill: {
                  alpha: 4402.64,
                  color: {
                    rgbColor: {
                      blue: 6255.28,
                      green: 764.86,
                      red: 3613.06,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Hyperlink,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Inherit,
              weight: {
                magnitude: 2473.99,
                unit: DimensionUnitEnum.Pt,
              },
            },
            recolor: {
              name: RecolorNameEnum.None,
              recolorStops: [
                {
                  alpha: 599.44,
                  color: {
                    rgbColor: {
                      blue: 5176.12,
                      green: 610.78,
                      red: 4746.68,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Text2,
                  },
                  position: 1843.62,
                },
                {
                  alpha: 7398.84,
                  color: {
                    rgbColor: {
                      blue: 4347.61,
                      green: 8980.63,
                      red: 1875.52,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Hyperlink,
                  },
                  position: 7152.08,
                },
              ],
            },
            shadow: {
              alignment: ShadowAlignmentEnum.Center,
              alpha: 5230.06,
              blurRadius: {
                magnitude: 3044.46,
                unit: DimensionUnitEnum.UnitUnspecified,
              },
              color: {
                rgbColor: {
                  blue: 9979.63,
                  green: 30.99,
                  red: 3621.89,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent6,
              },
              propertyState: ShadowPropertyStateEnum.NotRendered,
              rotateWithShape: false,
              transform: {
                scaleX: 6490.78,
                scaleY: 3782.45,
                shearX: 51.89,
                shearY: 9795.27,
                translateX: 9702.22,
                translateY: 1746.58,
                unit: AffineTransformUnitEnum.Emu,
              },
              type: ShadowTypeEnum.ShadowTypeUnspecified,
            },
            transparency: 2931.44,
          },
          objectId: "dolorum",
        },
        updateLineCategory: {
          lineCategory: UpdateLineCategoryRequestLineCategoryEnum.LineCategoryUnspecified,
          objectId: "quae",
        },
        updateLineProperties: {
          fields: "recusandae",
          lineProperties: {
            dashStyle: LinePropertiesDashStyleEnum.DashDot,
            endArrow: LinePropertiesEndArrowEnum.FillArrow,
            endConnection: {
              connectedObjectId: "molestiae",
              connectionSiteIndex: 403218,
            },
            lineFill: {
              solidFill: {
                alpha: 2840,
                color: {
                  rgbColor: {
                    blue: 6330.62,
                    green: 2384.13,
                    red: 8906.53,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Accent4,
                },
              },
            },
            link: {
              pageObjectId: "eum",
              relativeLink: LinkRelativeLinkEnum.NextSlide,
              slideIndex: 928219,
              url: "esse",
            },
            startArrow: LinePropertiesStartArrowEnum.FillDiamond,
            startConnection: {
              connectedObjectId: "quis",
              connectionSiteIndex: 431785,
            },
            weight: {
              magnitude: 9704.94,
              unit: DimensionUnitEnum.Emu,
            },
          },
          objectId: "aspernatur",
        },
        updatePageElementAltText: {
          description: "ullam",
          objectId: "quasi",
          title: "Miss",
        },
        updatePageElementTransform: {
          applyMode: UpdatePageElementTransformRequestApplyModeEnum.Relative,
          objectId: "mollitia",
          transform: {
            scaleX: 5910.27,
            scaleY: 8217.19,
            shearX: 6591.77,
            shearY: 4027.67,
            translateX: 3972.57,
            translateY: 375.65,
            unit: AffineTransformUnitEnum.Pt,
          },
        },
        updatePageElementsZOrder: {
          operation: UpdatePageElementsZOrderRequestOperationEnum.SendToBack,
          pageElementObjectIds: [
            "in",
            "nam",
          ],
        },
        updatePageProperties: {
          fields: "earum",
          objectId: "officia",
          pageProperties: {
            colorScheme: {
              colors: [
                {
                  color: {
                    blue: 8130.54,
                    green: 2666.97,
                    red: 9762.26,
                  },
                  type: ThemeColorPairTypeEnum.Accent5,
                },
                {
                  color: {
                    blue: 8897.94,
                    green: 9569.33,
                    red: 7645.62,
                  },
                  type: ThemeColorPairTypeEnum.Dark1,
                },
                {
                  color: {
                    blue: 6982.49,
                    green: 2722.29,
                    red: 3354.98,
                  },
                  type: ThemeColorPairTypeEnum.Dark1,
                },
              ],
            },
            pageBackgroundFill: {
              propertyState: PageBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 7652.71,
                color: {
                  rgbColor: {
                    blue: 626.36,
                    green: 216.88,
                    red: 2419.01,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Light1,
                },
              },
              stretchedPictureFill: {
                contentUrl: "eum",
                size: {
                  height: {
                    magnitude: 2606.28,
                    unit: DimensionUnitEnum.Emu,
                  },
                  width: {
                    magnitude: 8710.83,
                    unit: DimensionUnitEnum.Pt,
                  },
                },
              },
            },
          },
        },
        updateParagraphStyle: {
          cellLocation: {
            columnIndex: 179410,
            rowIndex: 958741,
          },
          fields: "eum",
          objectId: "dicta",
          style: {
            alignment: ParagraphStyleAlignmentEnum.Start,
            direction: ParagraphStyleDirectionEnum.TextDirectionUnspecified,
            indentEnd: {
              magnitude: 5834.04,
              unit: DimensionUnitEnum.Emu,
            },
            indentFirstLine: {
              magnitude: 9364.69,
              unit: DimensionUnitEnum.Pt,
            },
            indentStart: {
              magnitude: 9407.82,
              unit: DimensionUnitEnum.Pt,
            },
            lineSpacing: 525.08,
            spaceAbove: {
              magnitude: 9358.33,
              unit: DimensionUnitEnum.Emu,
            },
            spaceBelow: {
              magnitude: 9834.27,
              unit: DimensionUnitEnum.Pt,
            },
            spacingMode: ParagraphStyleSpacingModeEnum.NeverCollapse,
          },
          textRange: {
            endIndex: 780931,
            startIndex: 380335,
            type: RangeTypeEnum.RangeTypeUnspecified,
          },
        },
        updateShapeProperties: {
          fields: "fugit",
          objectId: "cumque",
          shapeProperties: {
            autofit: {
              autofitType: AutofitAutofitTypeEnum.TextAutofit,
              fontScale: 1890.62,
              lineSpacingReduction: 6567.62,
            },
            contentAlignment: ShapePropertiesContentAlignmentEnum.Bottom,
            link: {
              pageObjectId: "nulla",
              relativeLink: LinkRelativeLinkEnum.RelativeSlideLinkUnspecified,
              slideIndex: 97258,
              url: "et",
            },
            outline: {
              dashStyle: OutlineDashStyleEnum.Dash,
              outlineFill: {
                solidFill: {
                  alpha: 6191.83,
                  color: {
                    rgbColor: {
                      blue: 5810.82,
                      green: 3824.4,
                      red: 2415.57,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Dark1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Rendered,
              weight: {
                magnitude: 9849.34,
                unit: DimensionUnitEnum.Pt,
              },
            },
            shadow: {
              alignment: ShadowAlignmentEnum.BottomCenter,
              alpha: 585.34,
              blurRadius: {
                magnitude: 2711.13,
                unit: DimensionUnitEnum.Emu,
              },
              color: {
                rgbColor: {
                  blue: 4731.9,
                  green: 1158.34,
                  red: 4797.54,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent3,
              },
              propertyState: ShadowPropertyStateEnum.NotRendered,
              rotateWithShape: false,
              transform: {
                scaleX: 9799.63,
                scaleY: 9672.6,
                shearX: 4237.06,
                shearY: 999.58,
                translateX: 8571.25,
                translateY: 396.5,
                unit: AffineTransformUnitEnum.UnitUnspecified,
              },
              type: ShadowTypeEnum.ShadowTypeUnspecified,
            },
            shapeBackgroundFill: {
              propertyState: ShapeBackgroundFillPropertyStateEnum.Rendered,
              solidFill: {
                alpha: 4582.59,
                color: {
                  rgbColor: {
                    blue: 4037.93,
                    green: 2352.63,
                    red: 3998.12,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Dark1,
                },
              },
            },
          },
        },
        updateSlideProperties: {
          fields: "laborum",
          objectId: "sunt",
          slideProperties: {
            isSkipped: false,
            layoutObjectId: "nostrum",
            masterObjectId: "fugiat",
            notesPage: {},
          },
        },
        updateSlidesPosition: {
          insertionIndex: 713767,
          slideObjectIds: [
            "officia",
            "suscipit",
          ],
        },
        updateTableBorderProperties: {
          borderPosition: UpdateTableBorderPropertiesRequestBorderPositionEnum.InnerHorizontal,
          fields: "perferendis",
          objectId: "eum",
          tableBorderProperties: {
            dashStyle: TableBorderPropertiesDashStyleEnum.Dot,
            tableBorderFill: {
              solidFill: {
                alpha: 6145.28,
                color: {
                  rgbColor: {
                    blue: 6616.07,
                    green: 700.42,
                    red: 6253.58,
                  },
                  themeColor: OpaqueColorThemeColorEnum.Text1,
                },
              },
            },
            weight: {
              magnitude: 9139.92,
              unit: DimensionUnitEnum.Emu,
            },
          },
          tableRange: {
            columnSpan: 671794,
            location: {
              columnIndex: 726343,
              rowIndex: 324083,
            },
            rowSpan: 536923,
          },
        },
        updateTableCellProperties: {
          fields: "enim",
          objectId: "vitae",
          tableCellProperties: {
            contentAlignment: TableCellPropertiesContentAlignmentEnum.Bottom,
            tableCellBackgroundFill: {
              propertyState: TableCellBackgroundFillPropertyStateEnum.NotRendered,
              solidFill: {
                alpha: 7758.03,
                color: {
                  rgbColor: {
                    blue: 4053.73,
                    green: 2811.53,
                    red: 3210.43,
                  },
                  themeColor: OpaqueColorThemeColorEnum.FollowedHyperlink,
                },
              },
            },
          },
          tableRange: {
            columnSpan: 29950,
            location: {
              columnIndex: 561577,
              rowIndex: 737254,
            },
            rowSpan: 399660,
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            530860,
          ],
          fields: "omnis",
          objectId: "veritatis",
          tableColumnProperties: {
            columnWidth: {
              magnitude: 7032.18,
              unit: DimensionUnitEnum.Emu,
            },
          },
        },
        updateTableRowProperties: {
          fields: "culpa",
          objectId: "voluptatem",
          rowIndices: [
            889288,
            103298,
            682119,
            867168,
          ],
          tableRowProperties: {
            minRowHeight: {
              magnitude: 8913.15,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
          },
        },
        updateTextStyle: {
          cellLocation: {
            columnIndex: 1207,
            rowIndex: 534917,
          },
          fields: "earum",
          objectId: "ex",
          style: {
            backgroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 9583.08,
                  green: 5241.84,
                  red: 7963.2,
                },
                themeColor: OpaqueColorThemeColorEnum.Accent2,
              },
            },
            baselineOffset: TextStyleBaselineOffsetEnum.Subscript,
            bold: false,
            fontFamily: "ratione",
            fontSize: {
              magnitude: 3552.25,
              unit: DimensionUnitEnum.UnitUnspecified,
            },
            foregroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 8483.41,
                  green: 5181.5,
                  red: 7706.75,
                },
                themeColor: OpaqueColorThemeColorEnum.Background1,
              },
            },
            italic: false,
            link: {
              pageObjectId: "nam",
              relativeLink: LinkRelativeLinkEnum.NextSlide,
              slideIndex: 633415,
              url: "dolor",
            },
            smallCaps: false,
            strikethrough: false,
            underline: false,
            weightedFontFamily: {
              fontFamily: "aliquam",
              weight: 80532,
            },
          },
          textRange: {
            endIndex: 537279,
            startIndex: 85311,
            type: RangeTypeEnum.FixedRange,
          },
        },
        updateVideoProperties: {
          fields: "dolor",
          objectId: "consequatur",
          videoProperties: {
            autoPlay: false,
            end: 100014,
            mute: false,
            outline: {
              dashStyle: OutlineDashStyleEnum.DashStyleUnspecified,
              outlineFill: {
                solidFill: {
                  alpha: 2650.39,
                  color: {
                    rgbColor: {
                      blue: 1442.86,
                      green: 661.49,
                      red: 5137.6,
                    },
                    themeColor: OpaqueColorThemeColorEnum.Dark1,
                  },
                },
              },
              propertyState: OutlinePropertyStateEnum.Rendered,
              weight: {
                magnitude: 8562.77,
                unit: DimensionUnitEnum.Emu,
              },
            },
            start: 162120,
          },
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "ipsa",
    },
  },
  accessToken: "quas",
  alt: AltEnum.Proto,
  callback: "impedit",
  fields: "officiis",
  key: "esse",
  oauthToken: "necessitatibus",
  presentationId: "sed",
  prettyPrint: false,
  quotaUser: "veniam",
  uploadType: "nesciunt",
  uploadProtocol: "expedita",
};

sdk.presentations.slidesPresentationsBatchUpdate(req).then((res: SlidesPresentationsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->