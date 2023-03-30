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
        Security: operations.SlidesPresentationsBatchUpdateSecurity{
            Option1: &operations.SlidesPresentationsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.SlidesPresentationsBatchUpdatePathParams{
            PresentationID: "corrupti",
        },
        QueryParams: operations.SlidesPresentationsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BatchUpdatePresentationRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "iure",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 2975.34,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 567.13,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 2726.56,
                                ScaleY: 3834.41,
                                ShearX: 4776.65,
                                ShearY: 7917.25,
                                TranslateX: 8121.69,
                                TranslateY: 5288.95,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "excepturi",
                        URL: "nisi",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "CURVED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "temporibus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 710.36,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 871.29,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 202.18,
                                ScaleY: 3682.41,
                                ShearX: 8326.2,
                                ShearY: 9571.56,
                                TranslateX: 7781.57,
                                TranslateY: 1403.5,
                                Unit: "PT",
                            },
                        },
                        LineCategory: "CURVED",
                        ObjectID: "maiores",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 799159,
                            RowIndex: 800911,
                        },
                        ObjectID: "esse",
                        TextRange: &shared.Range{
                            EndIndex: 520478,
                            StartIndex: 780529,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "dicta",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7206.33,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5820.2,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 5373.73,
                                ScaleY: 9446.69,
                                ShearX: 7586.16,
                                ShearY: 5218.48,
                                TranslateX: 1059.07,
                                TranslateY: 4146.62,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "modi",
                        ShapeType: "DONUT",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 774234,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "cum",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 4561.5,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5684.34,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 187.89,
                                ScaleY: 3241.41,
                                ShearX: 6176.36,
                                ShearY: 1496.75,
                                TranslateX: 6120.96,
                                TranslateY: 2223.21,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "hic",
                        SpreadsheetID: "saepe",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 681820,
                        ObjectID: "in",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 613064,
                                    ParentObjectID: "iure",
                                    Type: "TITLE",
                                },
                                LayoutPlaceholderObjectID: "quidem",
                                ObjectID: "architecto",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 60225,
                                    ParentObjectID: "reiciendis",
                                    Type: "PICTURE",
                                },
                                LayoutPlaceholderObjectID: "mollitia",
                                ObjectID: "laborum",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "dolores",
                            PredefinedLayout: "CAPTION_ONLY",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 358152,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "explicabo",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7506.86,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6078.31,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 3250.47,
                                ScaleY: 5701.97,
                                ShearX: 384.25,
                                ShearY: 4386.01,
                                TranslateX: 6342.74,
                                TranslateY: 9883.74,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "architecto",
                        Rows: 652790,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "dolorem",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6350.59,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 9953,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 5818.5,
                                ScaleY: 2532.91,
                                ShearX: 4143.69,
                                ShearY: 4663.11,
                                TranslateX: 4746.97,
                                TranslateY: 2444.25,
                                Unit: "EMU",
                            },
                        },
                        ID: "quia",
                        ObjectID: "quis",
                        Source: "SOURCE_UNSPECIFIED",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "laborum",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 656330,
                            RowIndex: 317202,
                        },
                        ObjectID: "odit",
                        TextRange: &shared.Range{
                            EndIndex: 778346,
                            StartIndex: 196582,
                            Type: "ALL",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 368725,
                            RowIndex: 662527,
                        },
                        TableObjectID: "possimus",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 13571,
                            RowIndex: 97101,
                        },
                        TableObjectID: "error",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 837945,
                            RowIndex: 673660,
                        },
                        ObjectID: "quasi",
                        TextRange: &shared.Range{
                            EndIndex: 971945,
                            StartIndex: 976460,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "nihil",
                        ObjectIds: map[string]string{
                            "voluptatibus": "ipsa",
                            "omnis": "voluptate",
                            "cum": "perferendis",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "reprehenderit",
                        },
                        GroupObjectID: "ut",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 979587,
                            RowIndex: 120196,
                        },
                        InsertRight: false,
                        Number: 359444,
                        TableObjectID: "dolore",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 480894,
                            RowIndex: 118727,
                        },
                        InsertBelow: false,
                        Number: 688661,
                        TableObjectID: "enim",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 880476,
                            RowIndex: 414263,
                        },
                        InsertionIndex: 918236,
                        ObjectID: "quae",
                        Text: "ipsum",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "quidem",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 565189,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 566602,
                                RowIndex: 865103,
                            },
                            RowSpan: 265389,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "praesentium",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "rem",
                        },
                        ImageReplaceMethod: "CENTER_CROP",
                        ImageURL: "quasi",
                        PageObjectIds: []string{
                            "sint",
                            "veritatis",
                            "itaque",
                            "incidunt",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 9356,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "est",
                        },
                        LinkingMode: "LINKED",
                        PageObjectIds: []string{
                            "deserunt",
                        },
                        SpreadsheetID: "distinctio",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "quibusdam",
                        },
                        PageObjectIds: []string{
                            "modi",
                            "qui",
                        },
                        ReplaceText: "aliquid",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "cupiditate",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "perferendis",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "magni",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "ipsam",
                            "alias",
                            "fugit",
                            "dolorum",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "excepturi",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 270008,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 703737,
                                RowIndex: 735194,
                            },
                            RowSpan: 288476,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "delectus",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 4332.88,
                            Contrast: 2487.53,
                            CropProperties: &shared.CropProperties{
                                Angle: 7561.07,
                                BottomOffset: 5761.57,
                                LeftOffset: 3960.98,
                                RightOffset: 5920.42,
                                TopOffset: 8960.39,
                            },
                            Link: &shared.Link{
                                PageObjectID: "sint",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 223081,
                                URL: "debitis",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 6800.56,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 4471.25,
                                                Green: 4491.98,
                                                Red: 8464.09,
                                            },
                                            ThemeColor: "BACKGROUND2",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 1162.02,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK9",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 4118.2,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 3965.06,
                                                Green: 6754.39,
                                                Red: 8811.04,
                                            },
                                            ThemeColor: "LIGHT2",
                                        },
                                        Position: 5812.73,
                                    },
                                    shared.ColorStop{
                                        Alpha: 3132.18,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 8817.36,
                                                Green: 9654.17,
                                                Red: 6925.32,
                                            },
                                            ThemeColor: "ACCENT6",
                                        },
                                        Position: 7252.55,
                                    },
                                    shared.ColorStop{
                                        Alpha: 6596.69,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5013.24,
                                                Green: 5332.06,
                                                Red: 9560.84,
                                            },
                                            ThemeColor: "DARK2",
                                        },
                                        Position: 6439.9,
                                    },
                                    shared.ColorStop{
                                        Alpha: 3948.69,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 4238.55,
                                                Green: 6188.09,
                                                Red: 6063.93,
                                            },
                                            ThemeColor: "ACCENT4",
                                        },
                                        Position: 191.93,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "LEFT_CENTER",
                                Alpha: 3015.75,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 7160.75,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2879.91,
                                        Green: 2900.77,
                                        Red: 3834.62,
                                    },
                                    ThemeColor: "ACCENT6",
                                },
                                PropertyState: "INHERIT",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 4287.69,
                                    ScaleY: 8784.53,
                                    ShearX: 1354.74,
                                    ShearY: 1028.63,
                                    TranslateX: 2982.82,
                                    TranslateY: 923.73,
                                    Unit: "EMU",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 5908.73,
                        },
                        ObjectID: "quos",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "BENT",
                        ObjectID: "accusantium",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "mollitia",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH_DOT",
                            EndArrow: "OPEN_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "ad",
                                ConnectionSiteIndex: 431418,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2212.62,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8965.47,
                                            Green: 1412.64,
                                            Red: 3675.62,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "iure",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 891924,
                                URL: "eius",
                            },
                            StartArrow: "OPEN_CIRCLE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "deleniti",
                                ConnectionSiteIndex: 703889,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 4479.26,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "architecto",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "repudiandae",
                        ObjectID: "ullam",
                        Title: "Miss",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "repellat",
                        Transform: &shared.AffineTransform{
                            ScaleX: 8411.4,
                            ScaleY: 1494.48,
                            ShearX: 9046.48,
                            ShearY: 8681.26,
                            TranslateX: 375.59,
                            TranslateY: 1624.93,
                            Unit: "EMU",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_BACKWARD",
                        PageElementObjectIds: []string{
                            "sunt",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "quo",
                        ObjectID: "illum",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 8073.19,
                                            Green: 4113.97,
                                            Red: 5691.01,
                                        },
                                        Type: "LIGHT1",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 4071.83,
                                            Green: 332.22,
                                            Red: 691.67,
                                        },
                                        Type: "BACKGROUND2",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 6974.29,
                                            Green: 3732.91,
                                            Red: 4535.43,
                                        },
                                        Type: "ACCENT3",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 7220.56,
                                            Green: 505.88,
                                            Red: 8663.83,
                                        },
                                        Type: "ACCENT2",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 166.27,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8558.04,
                                            Green: 2307.42,
                                            Red: 117.14,
                                        },
                                        ThemeColor: "TEXT1",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "corporis",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 9441.24,
                                            Unit: "PT",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 7499.99,
                                            Unit: "UNIT_UNSPECIFIED",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 339404,
                            RowIndex: 521037,
                        },
                        Fields: "dignissimos",
                        ObjectID: "eaque",
                        Style: &shared.ParagraphStyle{
                            Alignment: "START",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 1794.9,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 1709.86,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 4634.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            LineSpacing: 8745.73,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 3453.52,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 9280.82,
                                Unit: "EMU",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 596656,
                            StartIndex: 31838,
                            Type: "ALL",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "consequuntur",
                        ObjectID: "blanditiis",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "TEXT_AUTOFIT",
                                FontScale: 503.7,
                                LineSpacingReduction: 5772.29,
                            },
                            ContentAlignment: "MIDDLE",
                            Link: &shared.Link{
                                PageObjectID: "adipisci",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 934214,
                                URL: "modi",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 6790.91,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5356.33,
                                                Green: 8642.82,
                                                Red: 5899.1,
                                            },
                                            ThemeColor: "FOLLOWED_HYPERLINK",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 9644.9,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "CENTER",
                                Alpha: 3982.21,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 2123.9,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2224.43,
                                        Green: 1861.93,
                                        Red: 2187.49,
                                    },
                                    ThemeColor: "BACKGROUND2",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 7395.51,
                                    ScaleY: 4521.09,
                                    ShearX: 4904.59,
                                    ShearY: 9702.37,
                                    TranslateX: 2274.14,
                                    TranslateY: 6805.45,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 564.18,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4344.17,
                                            Green: 4878.38,
                                            Red: 3117.96,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "quidem",
                        ObjectID: "voluptatibus",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "voluptas",
                            MasterObjectID: "natus",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 179603,
                        SlideObjectIds: []string{
                            "sit",
                            "fugiat",
                            "ab",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "OUTER",
                        Fields: "dolorum",
                        ObjectID: "iusto",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 6770.82,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5365.79,
                                            Green: 6070.45,
                                            Red: 8966.72,
                                        },
                                        ThemeColor: "FOLLOWED_HYPERLINK",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 9903.39,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 216897,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 456015,
                                RowIndex: 663078,
                            },
                            RowSpan: 906418,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "eius",
                        ObjectID: "aspernatur",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7583.79,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8815.86,
                                            Green: 3200.17,
                                            Red: 9044.25,
                                        },
                                        ThemeColor: "ACCENT2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 645785,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 588317,
                                RowIndex: 324683,
                            },
                            RowSpan: 831049,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            628982,
                            55,
                            872651,
                        },
                        Fields: "quaerat",
                        ObjectID: "tempora",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 4254.51,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "officiis",
                        ObjectID: "qui",
                        RowIndices: []int{
                            952792,
                            456130,
                            687488,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 4834.09,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 788740,
                            RowIndex: 947371,
                        },
                        Fields: "amet",
                        ObjectID: "tempore",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 8802.98,
                                        Green: 2539.41,
                                        Red: 3136.92,
                                    },
                                    ThemeColor: "DARK2",
                                },
                            },
                            BaselineOffset: "SUBSCRIPT",
                            Bold: false,
                            FontFamily: "totam",
                            FontSize: &shared.Dimension{
                                Magnitude: 4717.52,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 7115.84,
                                        Green: 2074.7,
                                        Red: 1536.94,
                                    },
                                    ThemeColor: "ACCENT3",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "libero",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 646265,
                                URL: "quam",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "ipsum",
                                Weight: 277628,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 186458,
                            StartIndex: 586784,
                            Type: "ALL",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "pariatur",
                        ObjectID: "soluta",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 117531,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 5173.79,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 2768.94,
                                                Green: 1320.68,
                                                Red: 1749.09,
                                            },
                                            ThemeColor: "FOLLOWED_HYPERLINK",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 3960.6,
                                    Unit: "EMU",
                                },
                            },
                            Start: 565421,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "temporibus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 1832.8,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1448.47,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 4880.56,
                                ScaleY: 1248.33,
                                ShearX: 3556.13,
                                ShearY: 7220.81,
                                TranslateX: 9404.32,
                                TranslateY: 304.52,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "soluta",
                        URL: "nobis",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "LINE_CATEGORY_UNSPECIFIED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "saepe",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 2174.5,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7492.55,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 7316.94,
                                ScaleY: 5844.76,
                                ShearX: 456.14,
                                ShearY: 9619.37,
                                TranslateX: 2091.57,
                                TranslateY: 2921.47,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "STRAIGHT",
                        ObjectID: "dolorum",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_DIAMONDX_ARROW3D_SQUARE",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 63038,
                            RowIndex: 16429,
                        },
                        ObjectID: "quas",
                        TextRange: &shared.Range{
                            EndIndex: 929530,
                            StartIndex: 9240,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "repellendus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7851.53,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2817.3,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 5864.1,
                                ScaleY: 1816.31,
                                ShearX: 639.55,
                                ShearY: 5123.93,
                                TranslateX: 4856.28,
                                TranslateY: 5804.47,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "quisquam",
                        ShapeType: "FLOW_CHART_PREDEFINED_PROCESS",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 606476,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quis",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 2184.03,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4551.69,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8788.7,
                                ScaleY: 9493.19,
                                ShearX: 4922.68,
                                ShearY: 9413.78,
                                TranslateX: 7155.61,
                                TranslateY: 7992.03,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "LINKED",
                        ObjectID: "facilis",
                        SpreadsheetID: "vero",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 498140,
                        ObjectID: "dolore",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 848944,
                                    ParentObjectID: "sequi",
                                    Type: "OBJECT",
                                },
                                LayoutPlaceholderObjectID: "impedit",
                                ObjectID: "aut",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 974259,
                                    ParentObjectID: "exercitationem",
                                    Type: "TABLE",
                                },
                                LayoutPlaceholderObjectID: "fugit",
                                ObjectID: "porro",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 981830,
                                    ParentObjectID: "doloribus",
                                    Type: "HEADER",
                                },
                                LayoutPlaceholderObjectID: "eligendi",
                                ObjectID: "ducimus",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 4048,
                                    ParentObjectID: "officia",
                                    Type: "CENTERED_TITLE",
                                },
                                LayoutPlaceholderObjectID: "ipsam",
                                ObjectID: "ea",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "aspernatur",
                            PredefinedLayout: "TITLE_AND_TWO_COLUMNS",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 822118,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "magnam",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 1898.48,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5113.19,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 2243.17,
                                ScaleY: 9807,
                                ShearX: 978.44,
                                ShearY: 4061.2,
                                TranslateX: 8621.92,
                                TranslateY: 5692.11,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "nostrum",
                        Rows: 960835,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quisquam",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9065.56,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7740.48,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 3331.45,
                                ScaleY: 3994.99,
                                ShearX: 811.01,
                                ShearY: 3018.31,
                                TranslateX: 4072.41,
                                TranslateY: 7752.2,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ID: "recusandae",
                        ObjectID: "aspernatur",
                        Source: "SOURCE_UNSPECIFIED",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "eaque",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
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
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 304582,
                            RowIndex: 146946,
                        },
                        TableObjectID: "accusamus",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 79522,
                            RowIndex: 250622,
                        },
                        TableObjectID: "et",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 677412,
                            RowIndex: 672048,
                        },
                        ObjectID: "placeat",
                        TextRange: &shared.Range{
                            EndIndex: 245367,
                            StartIndex: 432148,
                            Type: "FIXED_RANGE",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "nobis",
                        ObjectIds: map[string]string{
                            "assumenda": "nulla",
                            "voluptas": "libero",
                            "quasi": "tempora",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "explicabo",
                            "provident",
                        },
                        GroupObjectID: "ipsa",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 476477,
                            RowIndex: 301598,
                        },
                        InsertRight: false,
                        Number: 487935,
                        TableObjectID: "eius",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 458515,
                            RowIndex: 456141,
                        },
                        InsertBelow: false,
                        Number: 524593,
                        TableObjectID: "fuga",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 442015,
                            RowIndex: 695626,
                        },
                        InsertionIndex: 852635,
                        ObjectID: "ut",
                        Text: "eum",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "suscipit",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 826871,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 181151,
                                RowIndex: 509342,
                            },
                            RowSpan: 788546,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "veritatis",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "ipsa",
                        },
                        ImageReplaceMethod: "CENTER_INSIDE",
                        ImageURL: "quidem",
                        PageObjectIds: []string{
                            "quo",
                        },
                        ReplaceMethod: "CENTER_CROP",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 777408,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "fuga",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "voluptas",
                        },
                        SpreadsheetID: "ab",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "cupiditate",
                        },
                        PageObjectIds: []string{
                            "tempora",
                        },
                        ReplaceText: "debitis",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "ipsam",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URL: "sequi",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "quo",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "recusandae",
                            "aperiam",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "distinctio",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 799796,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 490819,
                                RowIndex: 76956,
                            },
                            RowSpan: 469498,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "totam",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 8827.1,
                            Contrast: 3068.1,
                            CropProperties: &shared.CropProperties{
                                Angle: 4884.1,
                                BottomOffset: 5775.43,
                                LeftOffset: 4145.67,
                                RightOffset: 9594.34,
                                TopOffset: 1741.12,
                            },
                            Link: &shared.Link{
                                PageObjectID: "deserunt",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 35362,
                                URL: "porro",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 5564.29,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5100.17,
                                                Green: 1598.67,
                                                Red: 5361.78,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 6494.63,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK3",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 3256.85,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 3926.76,
                                                Green: 1470.14,
                                                Red: 9564.06,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                        Position: 1871.31,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "TOP_LEFT",
                                Alpha: 9039.84,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 5789.22,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 922.6,
                                        Green: 4569.11,
                                        Red: 9105.45,
                                    },
                                    ThemeColor: "BACKGROUND1",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 4586.04,
                                    ScaleY: 8003.79,
                                    ShearX: 7241.68,
                                    ShearY: 8771.31,
                                    TranslateX: 3990.25,
                                    TranslateY: 934.59,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 6900.25,
                        },
                        ObjectID: "molestiae",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "BENT",
                        ObjectID: "occaecati",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "minima",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH",
                            EndArrow: "OPEN_CIRCLE",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "sit",
                                ConnectionSiteIndex: 636061,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7313.98,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2400.2,
                                            Green: 7669.64,
                                            Red: 1605.38,
                                        },
                                        ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "minus",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 959167,
                                URL: "consectetur",
                            },
                            StartArrow: "FILL_SQUARE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "blanditiis",
                                ConnectionSiteIndex: 590984,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 9537.22,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "quas",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "esse",
                        ObjectID: "quasi",
                        Title: "Dr.",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "sint",
                        Transform: &shared.AffineTransform{
                            ScaleX: 8630.23,
                            ScaleY: 8207.67,
                            ShearX: 1576.32,
                            ShearY: 9088.44,
                            TranslateX: 9924.3,
                            TranslateY: 8155.24,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "Z_ORDER_OPERATION_UNSPECIFIED",
                        PageElementObjectIds: []string{
                            "similique",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "culpa",
                        ObjectID: "aliquid",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 627.13,
                                            Green: 9367.47,
                                            Red: 4240.32,
                                        },
                                        Type: "ACCENT3",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 2586.84,
                                            Green: 7276.97,
                                            Red: 8490.39,
                                        },
                                        Type: "FOLLOWED_HYPERLINK",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 333.04,
                                            Green: 3069.86,
                                            Red: 9589.83,
                                        },
                                        Type: "LIGHT1",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 3553.69,
                                            Green: 4438.79,
                                            Red: 3567.07,
                                        },
                                        Type: "ACCENT2",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 5318.49,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1852.32,
                                            Green: 8453.58,
                                            Red: 4012.59,
                                        },
                                        ThemeColor: "ACCENT5",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "itaque",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 6802.7,
                                            Unit: "UNIT_UNSPECIFIED",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 6091.78,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 98478,
                            RowIndex: 869489,
                        },
                        Fields: "et",
                        ObjectID: "voluptate",
                        Style: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 865.32,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 2371.73,
                                Unit: "EMU",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 8395.13,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            LineSpacing: 5223.71,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 156.06,
                                Unit: "EMU",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 4287.96,
                                Unit: "EMU",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 544591,
                            StartIndex: 251941,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "dolor",
                        ObjectID: "occaecati",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "NONE",
                                FontScale: 7710.89,
                                LineSpacingReduction: 1310.55,
                            },
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            Link: &shared.Link{
                                PageObjectID: "aut",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 115484,
                                URL: "maiores",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 2446.51,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 9742.57,
                                                Green: 3743.23,
                                                Red: 9903.45,
                                            },
                                            ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 3100.67,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_CENTER",
                                Alpha: 6387.62,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 8070.23,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 6400.24,
                                        Green: 9894.1,
                                        Red: 3681.02,
                                    },
                                    ThemeColor: "DARK1",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 7832.35,
                                    ScaleY: 8018.36,
                                    ShearX: 2883.98,
                                    ShearY: 704.47,
                                    TranslateX: 2414.18,
                                    TranslateY: 6835.73,
                                    Unit: "EMU",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 6339.31,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6658.59,
                                            Green: 9268.8,
                                            Red: 5173.09,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "vel",
                        ObjectID: "ducimus",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "quos",
                            MasterObjectID: "vel",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 287051,
                        SlideObjectIds: []string{
                            "facilis",
                            "cum",
                            "commodi",
                            "in",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_HORIZONTAL",
                        Fields: "reiciendis",
                        ObjectID: "assumenda",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DOT",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 9249.67,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3975.33,
                                            Green: 460.07,
                                            Red: 7386.83,
                                        },
                                        ThemeColor: "DARK2",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 4490.83,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 937285,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 814967,
                                RowIndex: 257233,
                            },
                            RowSpan: 985492,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "suscipit",
                        ObjectID: "reiciendis",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "MIDDLE",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 8970.71,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2965.56,
                                            Green: 1210.59,
                                            Red: 9920.12,
                                        },
                                        ThemeColor: "LIGHT2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 249420,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 228263,
                                RowIndex: 105906,
                            },
                            RowSpan: 489509,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            891523,
                            233420,
                            358107,
                            689768,
                        },
                        Fields: "laboriosam",
                        ObjectID: "ipsa",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 9167.27,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "vitae",
                        ObjectID: "accusamus",
                        RowIndices: []int{
                            272437,
                            132815,
                            379057,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 3742.44,
                                Unit: "EMU",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 324405,
                            RowIndex: 748789,
                        },
                        Fields: "dolorum",
                        ObjectID: "adipisci",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 7955.35,
                                        Green: 1718.53,
                                        Red: 5039.34,
                                    },
                                    ThemeColor: "ACCENT3",
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontFamily: "aliquam",
                            FontSize: &shared.Dimension{
                                Magnitude: 8859.63,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 3518.7,
                                        Green: 2377.42,
                                        Red: 7383.91,
                                    },
                                    ThemeColor: "ACCENT4",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "quas",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 201517,
                                URL: "culpa",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "corrupti",
                                Weight: 867290,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 519643,
                            StartIndex: 940210,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "nobis",
                        ObjectID: "sit",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 699575,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "SOLID",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 9679.66,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 1318.52,
                                                Green: 9944.01,
                                                Red: 7079.18,
                                            },
                                            ThemeColor: "ACCENT3",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 708.69,
                                    Unit: "EMU",
                                },
                            },
                            Start: 292794,
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "laborum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Presentations.SlidesPresentationsBatchUpdate(ctx, req)
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
## SDK Available Operations


### Presentations

* `SlidesPresentationsBatchUpdate` - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `SlidesPresentationsCreate` - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
* `SlidesPresentationsGet` - Gets the latest version of the specified presentation.
* `SlidesPresentationsPagesGet` - Gets the latest version of the specified page in the presentation.
* `SlidesPresentationsPagesGetThumbnail` - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
