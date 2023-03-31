# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/slides/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SlidesPresentationsBatchUpdateRequest{
        DollarXgafv: "2",
        BatchUpdatePresentationRequest: &shared.BatchUpdatePresentationRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "distinctio",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 8442.66,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 8579.46,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8472.52,
                                ScaleY: 4236.55,
                                ShearX: 6235.64,
                                ShearY: 6458.94,
                                TranslateX: 3843.82,
                                TranslateY: 4375.87,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "debitis",
                        URL: "ipsa",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "CURVED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "tempora",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 3834.41,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7917.25,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 5288.95,
                                ScaleY: 4799.77,
                                ShearX: 5680.45,
                                ShearY: 3927.85,
                                TranslateX: 9255.97,
                                TranslateY: 8360.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "BENT",
                        ObjectID: "veritatis",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "NUMBERED_DIGIT_ALPHA_ROMAN",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 20218,
                            RowIndex: 368241,
                        },
                        ObjectID: "repellendus",
                        TextRange: &shared.Range{
                            EndIndex: 957156,
                            StartIndex: 778157,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "at",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 8700.88,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4736.08,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8009.11,
                                ScaleY: 4614.79,
                                ShearX: 5204.78,
                                ShearY: 7805.29,
                                TranslateX: 6788.8,
                                TranslateY: 1182.74,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "officia",
                        ShapeType: "STAR_16",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 143353,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "deleniti",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9446.69,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5218.48,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 4146.62,
                                ScaleY: 4736,
                                ShearX: 2645.55,
                                ShearY: 1863.32,
                                TranslateX: 7742.34,
                                TranslateY: 7369.18,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "excepturi",
                        SpreadsheetID: "aspernatur",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 18789,
                        ObjectID: "ad",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 149675,
                                    ParentObjectID: "iste",
                                    Type: "CLIP_ART",
                                },
                                LayoutPlaceholderObjectID: "natus",
                                ObjectID: "laboriosam",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 943749,
                                    ParentObjectID: "saepe",
                                    Type: "PICTURE",
                                },
                                LayoutPlaceholderObjectID: "in",
                                ObjectID: "corporis",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 613064,
                                    ParentObjectID: "iure",
                                    Type: "TITLE",
                                },
                                LayoutPlaceholderObjectID: "quidem",
                                ObjectID: "architecto",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "ipsa",
                            PredefinedLayout: "BIG_NUMBER",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 666767,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "mollitia",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6706.38,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2103.82,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 1289.26,
                                ScaleY: 7506.86,
                                ShearX: 3154.28,
                                ShearY: 6078.31,
                                TranslateX: 3637.11,
                                TranslateY: 3250.47,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "accusantium",
                        Rows: 438601,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "culpa",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9883.74,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1020.44,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 2088.76,
                                ScaleY: 6350.59,
                                ShearX: 1613.09,
                                ShearY: 9953,
                                TranslateX: 6531.08,
                                TranslateY: 5818.5,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ID: "commodi",
                        ObjectID: "quam",
                        Source: "YOUTUBE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "velit",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 623510,
                            RowIndex: 158969,
                        },
                        ObjectID: "quis",
                        TextRange: &shared.Range{
                            EndIndex: 110375,
                            StartIndex: 674752,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 317202,
                            RowIndex: 138183,
                        },
                        TableObjectID: "quo",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 196582,
                            RowIndex: 949572,
                        },
                        TableObjectID: "ipsam",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 662527,
                            RowIndex: 820994,
                        },
                        ObjectID: "aut",
                        TextRange: &shared.Range{
                            EndIndex: 97101,
                            StartIndex: 622846,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "laborum",
                        ObjectIds: map[string]string{
                            "reiciendis": "voluptatibus",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                        GroupObjectID: "omnis",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 451159,
                            RowIndex: 739264,
                        },
                        InsertRight: false,
                        Number: 19987,
                        TableObjectID: "doloremque",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 441711,
                            RowIndex: 282807,
                        },
                        InsertBelow: false,
                        Number: 979587,
                        TableObjectID: "dicta",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 359444,
                            RowIndex: 296140,
                        },
                        InsertionIndex: 480894,
                        ObjectID: "dicta",
                        Text: "harum",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "enim",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 880476,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 414263,
                                RowIndex: 918236,
                            },
                            RowSpan: 64147,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "ipsum",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "quidem",
                        },
                        ImageReplaceMethod: "CENTER_INSIDE",
                        ImageURL: "excepturi",
                        PageObjectIds: []string{
                            "modi",
                            "praesentium",
                            "rem",
                            "voluptates",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 921158,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "sint",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "incidunt",
                            "enim",
                            "consequatur",
                            "est",
                        },
                        SpreadsheetID: "quibusdam",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "explicabo",
                        },
                        PageObjectIds: []string{
                            "distinctio",
                            "quibusdam",
                            "labore",
                        },
                        ReplaceText: "modi",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "qui",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "cupiditate",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "quos",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "magni",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "assumenda",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 369808,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 4695,
                                RowIndex: 146441,
                            },
                            RowSpan: 677817,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "excepturi",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 2700.08,
                            Contrast: 7037.37,
                            CropProperties: &shared.CropProperties{
                                Angle: 7351.94,
                                BottomOffset: 2884.76,
                                LeftOffset: 9621.89,
                                RightOffset: 4332.88,
                                TopOffset: 2487.53,
                            },
                            Link: &shared.Link{
                                PageObjectID: "eligendi",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 396098,
                                URL: "provident",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 5722.52,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 6389.21,
                                                Green: 2230.81,
                                                Red: 8915.55,
                                            },
                                            ThemeColor: "BACKGROUND2",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 4471.25,
                                    Unit: "EMU",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "GRAYSCALE",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 6994.79,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 1162.02,
                                                Green: 2974.37,
                                                Red: 7670.24,
                                            },
                                            ThemeColor: "TEXT1",
                                        },
                                        Position: 4118.2,
                                    },
                                    shared.ColorStop{
                                        Alpha: 3965.06,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 6754.39,
                                                Green: 8811.04,
                                                Red: 2497.96,
                                            },
                                            ThemeColor: "ACCENT5",
                                        },
                                        Position: 3132.18,
                                    },
                                    shared.ColorStop{
                                        Alpha: 8817.36,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 9654.17,
                                                Green: 6925.32,
                                                Red: 5884.65,
                                            },
                                            ThemeColor: "FOLLOWED_HYPERLINK",
                                        },
                                        Position: 6596.69,
                                    },
                                    shared.ColorStop{
                                        Alpha: 5013.24,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5332.06,
                                                Green: 9560.84,
                                                Red: 2305.33,
                                            },
                                            ThemeColor: "ACCENT6",
                                        },
                                        Position: 3948.69,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "LEFT_CENTER",
                                Alpha: 6188.09,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 6063.93,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 191.93,
                                        Green: 4701.32,
                                        Red: 3015.75,
                                    },
                                    ThemeColor: "FOLLOWED_HYPERLINK",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 2879.91,
                                    ScaleY: 2900.77,
                                    ShearX: 3834.62,
                                    ShearY: 6180.16,
                                    TranslateX: 7491.7,
                                    TranslateY: 4287.69,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 1028.63,
                        },
                        ObjectID: "magnam",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "LINE_CATEGORY_UNSPECIFIED",
                        ObjectID: "excepturi",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "ullam",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "DASH_DOT",
                            EndArrow: "FILL_DIAMOND",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "sint",
                                ConnectionSiteIndex: 33625,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 6532.01,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9689.62,
                                            Green: 6521.03,
                                            Red: 3209.97,
                                        },
                                        ThemeColor: "ACCENT3",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "dolor",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 141264,
                                URL: "nemo",
                            },
                            StartArrow: "NONE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "iure",
                                ConnectionSiteIndex: 984043,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 8919.24,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "maxime",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "deleniti",
                        ObjectID: "facilis",
                        Title: "Ms.",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "APPLY_MODE_UNSPECIFIED",
                        ObjectID: "architecto",
                        Transform: &shared.AffineTransform{
                            ScaleX: 9194.83,
                            ScaleY: 3523.12,
                            ShearX: 7142.42,
                            ShearY: 4692.49,
                            TranslateX: 9988.48,
                            TranslateY: 8411.4,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_TO_BACK",
                        PageElementObjectIds: []string{
                            "accusantium",
                            "consequuntur",
                            "praesentium",
                            "natus",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "magni",
                        ObjectID: "sunt",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 8480.09,
                                            Green: 8649.34,
                                            Red: 8073.19,
                                        },
                                        Type: "ACCENT2",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 5691.01,
                                            Green: 1399.72,
                                            Red: 4071.83,
                                        },
                                        Type: "THEME_COLOR_TYPE_UNSPECIFIED",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 691.67,
                                            Green: 9825.75,
                                            Red: 6974.29,
                                        },
                                        Type: "ACCENT2",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 4535.43,
                                            Green: 4200.75,
                                            Red: 7220.56,
                                        },
                                        Type: "THEME_COLOR_TYPE_UNSPECIFIED",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 3654.96,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9755.22,
                                            Green: 166.27,
                                            Red: 8558.04,
                                        },
                                        ThemeColor: "DARK2",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "aut",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 7649.12,
                                            Unit: "EMU",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 9441.24,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 749999,
                            RowIndex: 171629,
                        },
                        Fields: "quis",
                        ObjectID: "totam",
                        Style: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 3389.85,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 1794.9,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 1709.86,
                                Unit: "PT",
                            },
                            LineSpacing: 4634.51,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 2239.24,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 3453.52,
                                Unit: "PT",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 608253,
                            StartIndex: 704415,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "voluptatem",
                        ObjectID: "porro",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "AUTOFIT_TYPE_UNSPECIFIED",
                                FontScale: 5000.26,
                                LineSpacingReduction: 6214.79,
                            },
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            Link: &shared.Link{
                                PageObjectID: "occaecati",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 237893,
                                URL: "asperiores",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 2672.62,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 6139.66,
                                                Green: 6790.91,
                                                Red: 5356.33,
                                            },
                                            ThemeColor: "BACKGROUND1",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 7508.44,
                                    Unit: "PT",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_RIGHT",
                                Alpha: 3119.45,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 5542.42,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2123.9,
                                        Green: 2098.43,
                                        Red: 2224.43,
                                    },
                                    ThemeColor: "DARK2",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 9443.73,
                                    ScaleY: 5695.74,
                                    ShearX: 7395.51,
                                    ShearY: 4521.09,
                                    TranslateX: 4904.59,
                                    TranslateY: 9702.37,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "OUTER",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 852.95,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 580.29,
                                            Green: 564.18,
                                            Red: 4344.17,
                                        },
                                        ThemeColor: "ACCENT4",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "quaerat",
                        ObjectID: "accusamus",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "quidem",
                            MasterObjectID: "voluptatibus",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 377752,
                        SlideObjectIds: []string{
                            "eos",
                            "atque",
                            "sit",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "RIGHT",
                        Fields: "ab",
                        ObjectID: "soluta",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH_DOT",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4785.96,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4536.97,
                                            Green: 6770.82,
                                            Red: 5365.79,
                                        },
                                        ThemeColor: "ACCENT6",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 8966.72,
                                Unit: "PT",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 990339,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 469497,
                                RowIndex: 216897,
                            },
                            RowSpan: 456015,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "id",
                        ObjectID: "saepe",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 206.51,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2292.19,
                                            Green: 7583.79,
                                            Red: 8815.86,
                                        },
                                        ThemeColor: "ACCENT1",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 904425,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 383464,
                                RowIndex: 645785,
                            },
                            RowSpan: 588317,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            831049,
                            519711,
                        },
                        Fields: "similique",
                        ObjectID: "alias",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 8726.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "tempora",
                        ObjectID: "vel",
                        RowIndices: []int{
                            885338,
                            185636,
                            679880,
                            952792,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 4561.3,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 483409,
                            RowIndex: 215507,
                        },
                        Fields: "quisquam",
                        ObjectID: "tenetur",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2294.42,
                                        Green: 7308.56,
                                        Red: 8802.98,
                                    },
                                    ThemeColor: "LIGHT2",
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontFamily: "dolorem",
                            FontSize: &shared.Dimension{
                                Magnitude: 9574.51,
                                Unit: "EMU",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 4717.52,
                                        Green: 256.62,
                                        Red: 7115.84,
                                    },
                                    ThemeColor: "DARK2",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "sed",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 730442,
                                URL: "voluptas",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "deserunt",
                                Weight: 463575,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 214880,
                            StartIndex: 277628,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "cupiditate",
                        ObjectID: "maxime",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 863856,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 1175.31,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 6748.48,
                                                Green: 5173.79,
                                                Red: 2768.94,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 7168.6,
                                    Unit: "PT",
                                },
                            },
                            Start: 396060,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quam",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 5654.21,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1832.8,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 1448.47,
                                ScaleY: 1649.59,
                                ShearX: 4880.56,
                                ShearY: 1248.33,
                                TranslateX: 3556.13,
                                TranslateY: 7220.81,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "voluptatem",
                        URL: "cumque",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "BENT",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "nobis",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 925.96,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2174.5,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 7492.55,
                                ScaleY: 5521.93,
                                ShearX: 7316.94,
                                ShearY: 5844.76,
                                TranslateX: 456.14,
                                TranslateY: 9619.37,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "STRAIGHT",
                        ObjectID: "labore",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW_DIAMOND_DISC",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 677263,
                            RowIndex: 100294,
                        },
                        ObjectID: "quae",
                        TextRange: &shared.Range{
                            EndIndex: 16429,
                            StartIndex: 555649,
                            Type: "ALL",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "consequatur",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6699.17,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7851.53,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 2817.3,
                                ScaleY: 7034.95,
                                ShearX: 5864.1,
                                ShearY: 1816.31,
                                TranslateX: 639.55,
                                TranslateY: 5123.93,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "occaecati",
                        ShapeType: "ELLIPSE_RIBBON",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 787542,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "vero",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6064.76,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2184.03,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 4551.69,
                                ScaleY: 2317.01,
                                ShearX: 8788.7,
                                ShearY: 9493.19,
                                TranslateX: 4922.68,
                                TranslateY: 9413.78,
                                Unit: "PT",
                            },
                        },
                        LinkingMode: "LINKED",
                        ObjectID: "odio",
                        SpreadsheetID: "similique",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 708548,
                        ObjectID: "vero",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 293020,
                                    ParentObjectID: "quibusdam",
                                    Type: "TABLE",
                                },
                                LayoutPlaceholderObjectID: "sequi",
                                ObjectID: "natus",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 773326,
                                    ParentObjectID: "aut",
                                    Type: "SLIDE_IMAGE",
                                },
                                LayoutPlaceholderObjectID: "exercitationem",
                                ObjectID: "nulla",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "fugit",
                            PredefinedLayout: "ONE_COLUMN_TEXT",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 981830,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "doloribus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 4783.7,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4973.91,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 6394.73,
                                ScaleY: 2694.79,
                                ShearX: 3685.84,
                                ShearY: 4104.92,
                                TranslateX: 1369,
                                TranslateY: 4282.24,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "magnam",
                        Rows: 189848,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "ex",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 5113.19,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2243.17,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 978.44,
                                ScaleY: 4061.2,
                                ShearX: 8621.92,
                                ShearY: 5692.11,
                                TranslateX: 9729.2,
                                TranslateY: 3436.05,
                                Unit: "PT",
                            },
                        },
                        ID: "quisquam",
                        ObjectID: "saepe",
                        Source: "YOUTUBE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "impedit",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 359271,
                            RowIndex: 333145,
                        },
                        ObjectID: "aliquid",
                        TextRange: &shared.Range{
                            EndIndex: 81101,
                            StartIndex: 301831,
                            Type: "FIXED_RANGE",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 775220,
                            RowIndex: 232234,
                        },
                        TableObjectID: "recusandae",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 132487,
                            RowIndex: 325310,
                        },
                        TableObjectID: "eaque",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 952871,
                            RowIndex: 725595,
                        },
                        ObjectID: "aut",
                        TextRange: &shared.Range{
                            EndIndex: 11427,
                            StartIndex: 533466,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "aliquam",
                        ObjectIds: map[string]string{
                            "accusamus": "inventore",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "et",
                            "dolorum",
                        },
                        GroupObjectID: "laborum",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 810424,
                            RowIndex: 245367,
                        },
                        InsertRight: false,
                        Number: 432148,
                        TableObjectID: "autem",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 752135,
                            RowIndex: 557369,
                        },
                        InsertBelow: false,
                        Number: 829603,
                        TableObjectID: "nulla",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 379034,
                            RowIndex: 727044,
                        },
                        InsertionIndex: 96549,
                        ObjectID: "tempora",
                        Text: "numquam",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "explicabo",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 591935,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 55374,
                                RowIndex: 476477,
                            },
                            RowSpan: 301598,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "odio",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "eius",
                        },
                        ImageReplaceMethod: "CENTER_INSIDE",
                        ImageURL: "esse",
                        PageObjectIds: []string{
                            "fuga",
                            "reprehenderit",
                            "quidem",
                        },
                        ReplaceMethod: "CENTER_CROP",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 283519,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "eum",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "eos",
                            "praesentium",
                            "quisquam",
                            "veritatis",
                        },
                        SpreadsheetID: "ipsa",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "id",
                        },
                        PageObjectIds: []string{
                            "neque",
                            "quo",
                            "illum",
                        },
                        ReplaceText: "quo",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "fuga",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URL: "eos",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "voluptas",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "cupiditate",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "consequatur",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 272822,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 892050,
                                RowIndex: 370853,
                            },
                            RowSpan: 133465,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "sequi",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 7791.92,
                            Contrast: 4598.56,
                            CropProperties: &shared.CropProperties{
                                Angle: 9251.64,
                                BottomOffset: 446.12,
                                LeftOffset: 7151.79,
                                RightOffset: 7997.96,
                                TopOffset: 4908.19,
                            },
                            Link: &shared.Link{
                                PageObjectID: "inventore",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 518835,
                                URL: "accusamus",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 4884.1,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5775.43,
                                                Green: 4145.67,
                                                Red: 9594.34,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 4752.89,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK9",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 5564.29,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5100.17,
                                                Green: 1598.67,
                                                Red: 5361.78,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                        Position: 6813.93,
                                    },
                                    shared.ColorStop{
                                        Alpha: 6494.63,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 2775.96,
                                                Green: 5392.24,
                                                Red: 1288.6,
                                            },
                                            ThemeColor: "ACCENT1",
                                        },
                                        Position: 3926.76,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "TOP_LEFT",
                                Alpha: 9564.06,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 1598.7,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 1294.12,
                                        Green: 9039.84,
                                        Red: 5789.22,
                                    },
                                    ThemeColor: "ACCENT5",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 4569.11,
                                    ScaleY: 9105.45,
                                    ShearX: 8820.42,
                                    ShearY: 829.71,
                                    TranslateX: 4586.04,
                                    TranslateY: 8003.79,
                                    Unit: "PT",
                                },
                                Type: "OUTER",
                            },
                            Transparency: 3990.25,
                        },
                        ObjectID: "quasi",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "CURVED",
                        ObjectID: "vel",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "harum",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "DASH",
                            EndArrow: "OPEN_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "occaecati",
                                ConnectionSiteIndex: 327720,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7162.44,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7567.79,
                                            Green: 270.69,
                                            Red: 6360.61,
                                        },
                                        ThemeColor: "FOLLOWED_HYPERLINK",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "adipisci",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 160538,
                                URL: "consequatur",
                            },
                            StartArrow: "OPEN_CIRCLE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "quaerat",
                                ConnectionSiteIndex: 959167,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 2328.65,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "blanditiis",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "provident",
                        ObjectID: "a",
                        Title: "Dr.",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "esse",
                        Transform: &shared.AffineTransform{
                            ScaleX: 974.68,
                            ScaleY: 9518.75,
                            ShearX: 6216.79,
                            ShearY: 5757.51,
                            TranslateX: 8630.23,
                            TranslateY: 8207.67,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_TO_BACK",
                        PageElementObjectIds: []string{
                            "facere",
                            "veritatis",
                            "consequuntur",
                            "quasi",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "similique",
                        ObjectID: "culpa",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 9492.98,
                                            Green: 627.13,
                                            Red: 9367.47,
                                        },
                                        Type: "ACCENT3",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 4473.78,
                                            Green: 2586.84,
                                            Red: 7276.97,
                                        },
                                        Type: "BACKGROUND1",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 333.04,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3069.86,
                                            Green: 9589.83,
                                            Red: 1197.71,
                                        },
                                        ThemeColor: "ACCENT2",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "reprehenderit",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 3567.07,
                                            Unit: "EMU",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 163.28,
                                            Unit: "EMU",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 185232,
                            RowIndex: 845358,
                        },
                        Fields: "ex",
                        ObjectID: "deleniti",
                        Style: &shared.ParagraphStyle{
                            Alignment: "JUSTIFIED",
                            Direction: "RIGHT_TO_LEFT",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 996.15,
                                Unit: "EMU",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 9453.02,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 8694.89,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            LineSpacing: 4541.62,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 559.65,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 865.32,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 614465,
                            StartIndex: 839513,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "rem",
                        ObjectID: "aut",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "TEXT_AUTOFIT",
                                FontScale: 4287.96,
                                LineSpacingReduction: 6498.32,
                            },
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            Link: &shared.Link{
                                PageObjectID: "corrupti",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 32465,
                                URL: "dolor",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 2531.91,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 7710.89,
                                                Green: 1310.55,
                                                Red: 3762.26,
                                            },
                                            ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 1154.84,
                                    Unit: "PT",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "RIGHT_CENTER",
                                Alpha: 2446.51,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 9742.57,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 9903.45,
                                        Green: 456.59,
                                        Red: 4090.54,
                                    },
                                    ThemeColor: "ACCENT1",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 8315.2,
                                    ScaleY: 6387.62,
                                    ShearX: 8070.23,
                                    ShearY: 4903.05,
                                    TranslateX: 6400.24,
                                    TranslateY: 9894.1,
                                    Unit: "EMU",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7832.35,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8018.36,
                                            Green: 2883.98,
                                            Red: 704.47,
                                        },
                                        ThemeColor: "LIGHT2",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "fuga",
                        ObjectID: "id",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "suscipit",
                            MasterObjectID: "velit",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 633931,
                        SlideObjectIds: []string{
                            "recusandae",
                            "totam",
                            "fugiat",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_HORIZONTAL",
                        Fields: "ducimus",
                        ObjectID: "quos",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DOT",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2870.51,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8225.6,
                                            Green: 7065.75,
                                            Red: 7382.27,
                                        },
                                        ThemeColor: "ACCENT3",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 4471.44,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 968904,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 828657,
                                RowIndex: 363161,
                            },
                            RowSpan: 924967,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "aliquid",
                        ObjectID: "aperiam",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "MIDDLE",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4490.83,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3485.19,
                                            Green: 9372.85,
                                            Red: 8149.67,
                                        },
                                        ThemeColor: "LIGHT2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 985492,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 381760,
                                RowIndex: 968972,
                            },
                            RowSpan: 697142,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            897071,
                            296556,
                            121059,
                            992012,
                        },
                        Fields: "adipisci",
                        ObjectID: "non",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 2282.63,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "dignissimos",
                        ObjectID: "a",
                        RowIndices: []int{
                            233420,
                            358107,
                            689768,
                            385237,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 583.56,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 730709,
                            RowIndex: 113816,
                        },
                        Fields: "accusamus",
                        ObjectID: "similique",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2724.37,
                                        Green: 1328.15,
                                        Red: 3790.57,
                                    },
                                    ThemeColor: "ACCENT2",
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontFamily: "minima",
                            FontSize: &shared.Dimension{
                                Magnitude: 7487.89,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2378.07,
                                        Green: 7955.35,
                                        Red: 1718.53,
                                    },
                                    ThemeColor: "ACCENT4",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "in",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 304468,
                                URL: "officiis",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "temporibus",
                                Weight: 351870,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 237742,
                            StartIndex: 738391,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "quas",
                        ObjectID: "hic",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 201517,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 5485.19,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 8672.9,
                                                Green: 5196.43,
                                                Red: 9402.1,
                                            },
                                            ThemeColor: "ACCENT1",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 246.19,
                                    Unit: "PT",
                                },
                            },
                            Start: 148829,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "reiciendis",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 1318.52,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7079.18,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 7090.72,
                                ScaleY: 708.69,
                                ShearX: 6117.49,
                                ShearY: 2927.94,
                                TranslateX: 6719.07,
                                TranslateY: 1523.54,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "commodi",
                        URL: "quidem",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "LINE_CATEGORY_UNSPECIFIED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "voluptas",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6041.18,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 3828.08,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8953.86,
                                ScaleY: 724.34,
                                ShearX: 9677.95,
                                ShearY: 193,
                                TranslateX: 5468.85,
                                TranslateY: 9795.74,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "STRAIGHT",
                        ObjectID: "provident",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW_DIAMOND_DISC",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 896762,
                            RowIndex: 215529,
                        },
                        ObjectID: "ea",
                        TextRange: &shared.Range{
                            EndIndex: 579912,
                            StartIndex: 552078,
                            Type: "ALL",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "tempora",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 2730.09,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 9700.76,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 254.97,
                                ScaleY: 2484.13,
                                ShearX: 8880.44,
                                ShearY: 5058.66,
                                TranslateX: 7086.09,
                                TranslateY: 3103.81,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "ipsam",
                        ShapeType: "FLOW_CHART_PROCESS",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 524970,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "sit",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7505.95,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 3335.07,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 9241.59,
                                ScaleY: 9671.22,
                                ShearX: 8623.19,
                                ShearY: 1685.76,
                                TranslateX: 486.9,
                                TranslateY: 9014.83,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "in",
                        SpreadsheetID: "officiis",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 104627,
                        ObjectID: "laudantium",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 510629,
                                    ParentObjectID: "cum",
                                    Type: "DATE_AND_TIME",
                                },
                                LayoutPlaceholderObjectID: "dolorum",
                                ObjectID: "voluptatum",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 622385,
                                    ParentObjectID: "hic",
                                    Type: "SLIDE_NUMBER",
                                },
                                LayoutPlaceholderObjectID: "debitis",
                                ObjectID: "neque",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "dolorum",
                            PredefinedLayout: "TITLE_AND_BODY",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 639028,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "dolorum",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 5483.61,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2726.83,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 1482.68,
                                ScaleY: 2826.99,
                                ShearX: 8563.03,
                                ShearY: 302.35,
                                TranslateX: 6350.57,
                                TranslateY: 7103.37,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "consequatur",
                        Rows: 460220,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "ipsam",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 245.27,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5580.65,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 3611.51,
                                ScaleY: 894.94,
                                ShearX: 5027.1,
                                ShearY: 4059.42,
                                TranslateX: 1536.27,
                                TranslateY: 243.13,
                                Unit: "EMU",
                            },
                        },
                        ID: "nostrum",
                        ObjectID: "saepe",
                        Source: "YOUTUBE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "consequatur",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 279068,
                            RowIndex: 968865,
                        },
                        ObjectID: "dolorem",
                        TextRange: &shared.Range{
                            EndIndex: 690894,
                            StartIndex: 115703,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 577140,
                            RowIndex: 289776,
                        },
                        TableObjectID: "quidem",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 539074,
                            RowIndex: 671957,
                        },
                        TableObjectID: "nam",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 948861,
                            RowIndex: 388867,
                        },
                        ObjectID: "alias",
                        TextRange: &shared.Range{
                            EndIndex: 227084,
                            StartIndex: 647197,
                            Type: "FIXED_RANGE",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "unde",
                        ObjectIds: map[string]string{
                            "provident": "repellendus",
                            "delectus": "voluptates",
                            "perferendis": "est",
                            "quidem": "reprehenderit",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "fuga",
                            "praesentium",
                            "mollitia",
                            "veniam",
                        },
                        GroupObjectID: "voluptatem",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 790840,
                            RowIndex: 919532,
                        },
                        InsertRight: false,
                        Number: 97243,
                        TableObjectID: "atque",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 442036,
                            RowIndex: 991142,
                        },
                        InsertBelow: false,
                        Number: 519952,
                        TableObjectID: "suscipit",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 693957,
                            RowIndex: 806670,
                        },
                        InsertionIndex: 90885,
                        ObjectID: "esse",
                        Text: "amet",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "assumenda",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 410301,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 539118,
                                RowIndex: 623295,
                            },
                            RowSpan: 887265,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "officiis",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "accusamus",
                        },
                        ImageReplaceMethod: "CENTER_INSIDE",
                        ImageURL: "minima",
                        PageObjectIds: []string{
                            "ex",
                        },
                        ReplaceMethod: "CENTER_CROP",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 544647,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "at",
                        },
                        LinkingMode: "LINKED",
                        PageObjectIds: []string{
                            "suscipit",
                            "repudiandae",
                            "atque",
                        },
                        SpreadsheetID: "atque",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "sunt",
                        },
                        PageObjectIds: []string{
                            "dolorum",
                            "repellendus",
                            "labore",
                            "reiciendis",
                        },
                        ReplaceText: "doloremque",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "repudiandae",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URL: "accusantium",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "beatae",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "enim",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "laboriosam",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 246535,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 952143,
                                RowIndex: 562783,
                            },
                            RowSpan: 300029,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "saepe",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 1604.67,
                            Contrast: 5801.07,
                            CropProperties: &shared.CropProperties{
                                Angle: 8863.05,
                                BottomOffset: 5979.37,
                                LeftOffset: 4463.94,
                                RightOffset: 2380.43,
                                TopOffset: 9078.76,
                            },
                            Link: &shared.Link{
                                PageObjectID: "occaecati",
                                RelativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                                SlideIndex: 145870,
                                URL: "id",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 4402.64,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 6255.28,
                                                Green: 764.86,
                                                Red: 3613.06,
                                            },
                                            ThemeColor: "HYPERLINK",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 2473.99,
                                    Unit: "PT",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "NONE",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 599.44,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5176.12,
                                                Green: 610.78,
                                                Red: 4746.68,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                        Position: 1843.62,
                                    },
                                    shared.ColorStop{
                                        Alpha: 7398.84,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 4347.61,
                                                Green: 8980.63,
                                                Red: 1875.52,
                                            },
                                            ThemeColor: "HYPERLINK",
                                        },
                                        Position: 7152.08,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "CENTER",
                                Alpha: 5230.06,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 3044.46,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 9979.63,
                                        Green: 30.99,
                                        Red: 3621.89,
                                    },
                                    ThemeColor: "ACCENT6",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 6490.78,
                                    ScaleY: 3782.45,
                                    ShearX: 51.89,
                                    ShearY: 9795.27,
                                    TranslateX: 9702.22,
                                    TranslateY: 1746.58,
                                    Unit: "EMU",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 2931.44,
                        },
                        ObjectID: "dolorum",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "LINE_CATEGORY_UNSPECIFIED",
                        ObjectID: "quae",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "recusandae",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "DASH_DOT",
                            EndArrow: "FILL_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "molestiae",
                                ConnectionSiteIndex: 403218,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2840,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6330.62,
                                            Green: 2384.13,
                                            Red: 8906.53,
                                        },
                                        ThemeColor: "ACCENT4",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "eum",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 928219,
                                URL: "esse",
                            },
                            StartArrow: "FILL_DIAMOND",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "quis",
                                ConnectionSiteIndex: 431785,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 9704.94,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "aspernatur",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "ullam",
                        ObjectID: "quasi",
                        Title: "Miss",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "mollitia",
                        Transform: &shared.AffineTransform{
                            ScaleX: 5910.27,
                            ScaleY: 8217.19,
                            ShearX: 6591.77,
                            ShearY: 4027.67,
                            TranslateX: 3972.57,
                            TranslateY: 375.65,
                            Unit: "PT",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_TO_BACK",
                        PageElementObjectIds: []string{
                            "in",
                            "nam",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "earum",
                        ObjectID: "officia",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 8130.54,
                                            Green: 2666.97,
                                            Red: 9762.26,
                                        },
                                        Type: "ACCENT5",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 8897.94,
                                            Green: 9569.33,
                                            Red: 7645.62,
                                        },
                                        Type: "DARK1",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 6982.49,
                                            Green: 2722.29,
                                            Red: 3354.98,
                                        },
                                        Type: "DARK1",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7652.71,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 626.36,
                                            Green: 216.88,
                                            Red: 2419.01,
                                        },
                                        ThemeColor: "LIGHT1",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "eum",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 2606.28,
                                            Unit: "EMU",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 8710.83,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 179410,
                            RowIndex: 958741,
                        },
                        Fields: "eum",
                        ObjectID: "dicta",
                        Style: &shared.ParagraphStyle{
                            Alignment: "START",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 5834.04,
                                Unit: "EMU",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 9364.69,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 9407.82,
                                Unit: "PT",
                            },
                            LineSpacing: 525.08,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 9358.33,
                                Unit: "EMU",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 9834.27,
                                Unit: "PT",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 780931,
                            StartIndex: 380335,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "fugit",
                        ObjectID: "cumque",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "TEXT_AUTOFIT",
                                FontScale: 1890.62,
                                LineSpacingReduction: 6567.62,
                            },
                            ContentAlignment: "BOTTOM",
                            Link: &shared.Link{
                                PageObjectID: "nulla",
                                RelativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                                SlideIndex: 97258,
                                URL: "et",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 6191.83,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5810.82,
                                                Green: 3824.4,
                                                Red: 2415.57,
                                            },
                                            ThemeColor: "DARK1",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 9849.34,
                                    Unit: "PT",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_CENTER",
                                Alpha: 585.34,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 2711.13,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 4731.9,
                                        Green: 1158.34,
                                        Red: 4797.54,
                                    },
                                    ThemeColor: "ACCENT3",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 9799.63,
                                    ScaleY: 9672.6,
                                    ShearX: 4237.06,
                                    ShearY: 999.58,
                                    TranslateX: 8571.25,
                                    TranslateY: 396.5,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4582.59,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4037.93,
                                            Green: 2352.63,
                                            Red: 3998.12,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "laborum",
                        ObjectID: "sunt",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "nostrum",
                            MasterObjectID: "fugiat",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 713767,
                        SlideObjectIds: []string{
                            "officia",
                            "suscipit",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_HORIZONTAL",
                        Fields: "perferendis",
                        ObjectID: "eum",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DOT",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 6145.28,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6616.07,
                                            Green: 700.42,
                                            Red: 6253.58,
                                        },
                                        ThemeColor: "TEXT1",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 9139.92,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 671794,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 726343,
                                RowIndex: 324083,
                            },
                            RowSpan: 536923,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "enim",
                        ObjectID: "vitae",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "BOTTOM",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "NOT_RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7758.03,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4053.73,
                                            Green: 2811.53,
                                            Red: 3210.43,
                                        },
                                        ThemeColor: "FOLLOWED_HYPERLINK",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 29950,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 561577,
                                RowIndex: 737254,
                            },
                            RowSpan: 399660,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            530860,
                        },
                        Fields: "omnis",
                        ObjectID: "veritatis",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 7032.18,
                                Unit: "EMU",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "culpa",
                        ObjectID: "voluptatem",
                        RowIndices: []int{
                            889288,
                            103298,
                            682119,
                            867168,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 8913.15,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1207,
                            RowIndex: 534917,
                        },
                        Fields: "earum",
                        ObjectID: "ex",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 9583.08,
                                        Green: 5241.84,
                                        Red: 7963.2,
                                    },
                                    ThemeColor: "ACCENT2",
                                },
                            },
                            BaselineOffset: "SUBSCRIPT",
                            Bold: false,
                            FontFamily: "ratione",
                            FontSize: &shared.Dimension{
                                Magnitude: 3552.25,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 8483.41,
                                        Green: 5181.5,
                                        Red: 7706.75,
                                    },
                                    ThemeColor: "BACKGROUND1",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "nam",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 633415,
                                URL: "dolor",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "aliquam",
                                Weight: 80532,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 537279,
                            StartIndex: 85311,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "dolor",
                        ObjectID: "consequatur",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 100014,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 2650.39,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 1442.86,
                                                Green: 661.49,
                                                Red: 5137.6,
                                            },
                                            ThemeColor: "DARK1",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 8562.77,
                                    Unit: "EMU",
                                },
                            },
                            Start: 162120,
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "ipsa",
            },
        },
        AccessToken: "quas",
        Alt: "proto",
        Callback: "impedit",
        Fields: "officiis",
        Key: "esse",
        OauthToken: "necessitatibus",
        PresentationID: "sed",
        PrettyPrint: false,
        QuotaUser: "veniam",
        UploadType: "nesciunt",
        UploadProtocol: "expedita",
    }

    ctx := context.Background()
    res, err := s.Presentations.SlidesPresentationsBatchUpdate(ctx, req, operations.SlidesPresentationsBatchUpdateSecurity{
        Option1: &operations.SlidesPresentationsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdatePresentationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Presentations

* `SlidesPresentationsBatchUpdate` - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `SlidesPresentationsCreate` - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
* `SlidesPresentationsGet` - Gets the latest version of the specified presentation.
* `SlidesPresentationsPagesGet` - Gets the latest version of the specified page in the presentation.
* `SlidesPresentationsPagesGetThumbnail` - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
