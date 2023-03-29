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
            PresentationID: "unde",
        },
        QueryParams: operations.SlidesPresentationsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.BatchUpdatePresentationRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "iusto",
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
                        ObjectID: "similique",
                        URL: "reprehenderit",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "CURVED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quo",
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
                        ObjectID: "reiciendis",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 799159,
                            RowIndex: 800911,
                        },
                        ObjectID: "praesentium",
                        TextRange: &shared.Range{
                            EndIndex: 520478,
                            StartIndex: 780529,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "sed",
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
                        ObjectID: "voluptatem",
                        ShapeType: "DONUT",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 774234,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "id",
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
                        ObjectID: "earum",
                        SpreadsheetID: "ut",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 681820,
                        ObjectID: "qui",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 613064,
                                    ParentObjectID: "iusto",
                                    Type: "TITLE",
                                },
                                LayoutPlaceholderObjectID: "optio",
                                ObjectID: "aspernatur",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 60225,
                                    ParentObjectID: "ut",
                                    Type: "PICTURE",
                                },
                                LayoutPlaceholderObjectID: "et",
                                ObjectID: "libero",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "ipsum",
                            PredefinedLayout: "CAPTION_ONLY",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 358152,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "magni",
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
                        ObjectID: "aut",
                        Rows: 652790,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "non",
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
                        ID: "nesciunt",
                        ObjectID: "laboriosam",
                        Source: "SOURCE_UNSPECIFIED",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "cum",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 656330,
                            RowIndex: 317202,
                        },
                        ObjectID: "eos",
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
                        TableObjectID: "qui",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 13571,
                            RowIndex: 97101,
                        },
                        TableObjectID: "fuga",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 837945,
                            RowIndex: 673660,
                        },
                        ObjectID: "explicabo",
                        TextRange: &shared.Range{
                            EndIndex: 971945,
                            StartIndex: 976460,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "totam",
                        ObjectIds: map[string]string{
                            "reiciendis": "illo",
                            "id": "qui",
                            "quod": "sit",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "odio",
                        },
                        GroupObjectID: "veniam",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 979587,
                            RowIndex: 120196,
                        },
                        InsertRight: false,
                        Number: 359444,
                        TableObjectID: "exercitationem",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 480894,
                            RowIndex: 118727,
                        },
                        InsertBelow: false,
                        Number: 688661,
                        TableObjectID: "voluptatem",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 880476,
                            RowIndex: 414263,
                        },
                        InsertionIndex: 918236,
                        ObjectID: "veritatis",
                        Text: "numquam",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "eligendi",
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
                        ObjectID: "molestias",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "cupiditate",
                        },
                        ImageReplaceMethod: "CENTER_CROP",
                        ImageURL: "explicabo",
                        PageObjectIds: []string{
                            "in",
                            "vitae",
                            "non",
                            "minima",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 9356,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "libero",
                        },
                        LinkingMode: "LINKED",
                        PageObjectIds: []string{
                            "est",
                        },
                        SpreadsheetID: "porro",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "voluptas",
                        },
                        PageObjectIds: []string{
                            "voluptatem",
                            "sit",
                        },
                        ReplaceText: "in",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "officia",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "voluptatem",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "dolorem",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "quis",
                            "consequatur",
                            "ratione",
                            "cum",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "similique",
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
                        Fields: "sapiente",
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
                                PageObjectID: "sunt",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 223081,
                                URL: "necessitatibus",
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
                        ObjectID: "omnis",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "BENT",
                        ObjectID: "aperiam",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "et",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH_DOT",
                            EndArrow: "OPEN_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "voluptatem",
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
                                PageObjectID: "iusto",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 891924,
                                URL: "quaerat",
                            },
                            StartArrow: "OPEN_CIRCLE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "sed",
                                ConnectionSiteIndex: 703889,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 4479.26,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "aspernatur",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "sint",
                        ObjectID: "aliquid",
                        Title: "International Applications Strategist",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "ABSOLUTE",
                        ObjectID: "voluptatem",
                        Transform: &shared.AffineTransform{
                            ScaleX: 9046.48,
                            ScaleY: 8681.26,
                            ShearX: 375.59,
                            ShearY: 1624.93,
                            TranslateX: 5083.15,
                            TranslateY: 6155.6,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "Z_ORDER_OPERATION_UNSPECIFIED",
                        PageElementObjectIds: []string{
                            "pariatur",
                            "et",
                            "consequatur",
                            "velit",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "similique",
                        ObjectID: "eos",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 332.22,
                                            Green: 691.67,
                                            Red: 9825.75,
                                        },
                                        Type: "HYPERLINK",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 3732.91,
                                            Green: 4535.43,
                                            Red: 4200.75,
                                        },
                                        Type: "FOLLOWED_HYPERLINK",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 8663.83,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3654.96,
                                            Green: 9755.22,
                                            Red: 166.27,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "incidunt",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 117.14,
                                            Unit: "PT",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 3599.78,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 729991,
                            RowIndex: 749999,
                        },
                        Fields: "ipsum",
                        ObjectID: "laboriosam",
                        Style: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            Direction: "LEFT_TO_RIGHT",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 543.38,
                                Unit: "EMU",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 1999.96,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 185.21,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            LineSpacing: 7936.98,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 4634.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 8745.73,
                                Unit: "EMU",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 928082,
                            StartIndex: 608253,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "mollitia",
                        ObjectID: "doloremque",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "SHAPE_AUTOFIT",
                                FontScale: 1646.94,
                                LineSpacingReduction: 5000.26,
                            },
                            ContentAlignment: "MIDDLE",
                            Link: &shared.Link{
                                PageObjectID: "ab",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 699098,
                                URL: "labore",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 9342.14,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 2672.62,
                                                Green: 6139.66,
                                                Red: 6790.91,
                                            },
                                            ThemeColor: "ACCENT5",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 5899.1,
                                    Unit: "PT",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_LEFT",
                                Alpha: 9644.9,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 3119.45,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 3982.21,
                                        Green: 2123.9,
                                        Red: 2098.43,
                                    },
                                    ThemeColor: "DARK2",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 2187.49,
                                    ScaleY: 9443.73,
                                    ShearX: 5695.74,
                                    ShearY: 7395.51,
                                    TranslateX: 4521.09,
                                    TranslateY: 4904.59,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2543.56,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 852.95,
                                            Green: 580.29,
                                            Red: 564.18,
                                        },
                                        ThemeColor: "ACCENT3",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "corrupti",
                        ObjectID: "enim",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "aut",
                            MasterObjectID: "optio",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 976405,
                        SlideObjectIds: []string{
                            "et",
                            "dolor",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_VERTICAL",
                        Fields: "accusantium",
                        ObjectID: "at",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH_STYLE_UNSPECIFIED",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 7438.35,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6793.93,
                                            Green: 4785.96,
                                            Red: 4536.97,
                                        },
                                        ThemeColor: "HYPERLINK",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 5365.79,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 896672,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 714697,
                                RowIndex: 990339,
                            },
                            RowSpan: 469497,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "eius",
                        ObjectID: "blanditiis",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "MIDDLE",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2633.22,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1372.2,
                                            Green: 206.51,
                                            Red: 2292.19,
                                        },
                                        ThemeColor: "FOLLOWED_HYPERLINK",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 881586,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 320017,
                                RowIndex: 904425,
                            },
                            RowSpan: 383464,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            588317,
                            324683,
                            831049,
                        },
                        Fields: "occaecati",
                        ObjectID: "et",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 0.55,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "enim",
                        ObjectID: "ad",
                        RowIndices: []int{
                            798047,
                            885338,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 1856.36,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 952792,
                            RowIndex: 456130,
                        },
                        Fields: "est",
                        ObjectID: "atque",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2155.07,
                                        Green: 7887.4,
                                        Red: 9473.71,
                                    },
                                    ThemeColor: "DARK2",
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: false,
                            FontFamily: "aut",
                            FontSize: &shared.Dimension{
                                Magnitude: 2539.41,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2133.12,
                                        Green: 9574.51,
                                        Red: 5182.01,
                                    },
                                    ThemeColor: "ACCENT4",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "accusantium",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 207470,
                                URL: "sequi",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "nihil",
                                Weight: 730442,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 374170,
                            StartIndex: 646265,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "numquam",
                        ObjectID: "minima",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 186458,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 8075.81,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 8638.56,
                                                Green: 7470.8,
                                                Red: 1175.31,
                                            },
                                            ThemeColor: "HYPERLINK",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 2768.94,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Start: 174909,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "porro",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7044.74,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4631.5,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8404.29,
                                ScaleY: 1832.8,
                                ShearX: 2048.65,
                                ShearY: 1448.47,
                                TranslateX: 1649.59,
                                TranslateY: 4880.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "ex",
                        URL: "quisquam",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "CURVED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "doloremque",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 7653.26,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7486.64,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 9037.2,
                                ScaleY: 2174.5,
                                ShearX: 834.22,
                                ShearY: 7492.55,
                                TranslateX: 5521.93,
                                TranslateY: 7316.94,
                                Unit: "EMU",
                            },
                        },
                        LineCategory: "STRAIGHT",
                        ObjectID: "sapiente",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW_DIAMOND_DISC",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 292147,
                            RowIndex: 286915,
                        },
                        ObjectID: "labore",
                        TextRange: &shared.Range{
                            EndIndex: 677263,
                            StartIndex: 100294,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "sit",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 5556.49,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 92.4,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8330.38,
                                ScaleY: 7851.53,
                                ShearX: 9843.3,
                                ShearY: 2817.3,
                                TranslateX: 7034.95,
                                TranslateY: 5864.1,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "veritatis",
                        ShapeType: "ROUND_2_DIAGONAL_RECTANGLE",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 485628,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "culpa",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9774.96,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 8765.06,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 3381.59,
                                ScaleY: 2184.03,
                                ShearX: 9615.71,
                                ShearY: 4551.69,
                                TranslateX: 2317.01,
                                TranslateY: 8788.7,
                                Unit: "PT",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "earum",
                        SpreadsheetID: "porro",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 799203,
                        ObjectID: "corrupti",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 708548,
                                    ParentObjectID: "officiis",
                                    Type: "HEADER",
                                },
                                LayoutPlaceholderObjectID: "nostrum",
                                ObjectID: "nulla",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 848944,
                                    ParentObjectID: "adipisci",
                                    Type: "OBJECT",
                                },
                                LayoutPlaceholderObjectID: "est",
                                ObjectID: "perferendis",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 974259,
                                    ParentObjectID: "ut",
                                    Type: "TABLE",
                                },
                                LayoutPlaceholderObjectID: "ratione",
                                ObjectID: "dolor",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "voluptatibus",
                            PredefinedLayout: "BIG_NUMBER",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 478370,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "facere",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 4973.91,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6394.73,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 3685.84,
                                ScaleY: 4104.92,
                                ShearX: 1369,
                                ShearY: 4282.24,
                                TranslateX: 8221.18,
                                TranslateY: 2978.42,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "in",
                        Rows: 511319,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quia",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 2243.17,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 978.44,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 8621.92,
                                ScaleY: 5692.11,
                                ShearX: 9729.2,
                                ShearY: 3436.05,
                                TranslateX: 9608.35,
                                TranslateY: 7888.73,
                                Unit: "PT",
                            },
                        },
                        ID: "velit",
                        ObjectID: "est",
                        Source: "YOUTUBE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "sit",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 399499,
                            RowIndex: 81101,
                        },
                        ObjectID: "corporis",
                        TextRange: &shared.Range{
                            EndIndex: 407241,
                            StartIndex: 775220,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 926213,
                            RowIndex: 132487,
                        },
                        TableObjectID: "voluptas",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 53427,
                            RowIndex: 952871,
                        },
                        TableObjectID: "est",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 13948,
                            RowIndex: 11427,
                        },
                        ObjectID: "provident",
                        TextRange: &shared.Range{
                            EndIndex: 770581,
                            StartIndex: 304582,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "aut",
                        ObjectIds: map[string]string{
                            "magnam": "sunt",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "tempore",
                            "consequatur",
                            "dolore",
                        },
                        GroupObjectID: "et",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 420539,
                            RowIndex: 752135,
                        },
                        InsertRight: false,
                        Number: 557369,
                        TableObjectID: "eum",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 860552,
                            RowIndex: 379034,
                        },
                        InsertBelow: false,
                        Number: 727044,
                        TableObjectID: "aspernatur",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 270328,
                            RowIndex: 256139,
                        },
                        InsertionIndex: 131482,
                        ObjectID: "deserunt",
                        Text: "illo",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "voluptatum",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 301598,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 487935,
                                RowIndex: 262118,
                            },
                            RowSpan: 458515,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "blanditiis",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "cupiditate",
                        },
                        ImageReplaceMethod: "CENTER_CROP",
                        ImageURL: "dignissimos",
                        PageObjectIds: []string{
                            "at",
                            "veniam",
                            "et",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 826871,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "sit",
                        },
                        LinkingMode: "LINKED",
                        PageObjectIds: []string{
                            "dicta",
                            "inventore",
                            "distinctio",
                            "optio",
                        },
                        SpreadsheetID: "quia",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "omnis",
                        },
                        PageObjectIds: []string{
                            "omnis",
                            "soluta",
                            "quaerat",
                            "dolor",
                        },
                        ReplaceText: "autem",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "quasi",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "aut",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "enim",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "quis",
                            "dolores",
                            "velit",
                            "dolor",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "praesentium",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 925164,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 44612,
                                RowIndex: 715179,
                            },
                            RowSpan: 799796,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "quos",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 769.56,
                            Contrast: 4694.98,
                            CropProperties: &shared.CropProperties{
                                Angle: 5188.35,
                                BottomOffset: 8827.1,
                                LeftOffset: 3068.1,
                                RightOffset: 4884.1,
                                TopOffset: 5775.43,
                            },
                            Link: &shared.Link{
                                PageObjectID: "esse",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 174112,
                                URL: "facilis",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 353.62,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 7836.48,
                                                Green: 4304.02,
                                                Red: 5564.29,
                                            },
                                            ThemeColor: "ACCENT4",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 5361.78,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK7",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 2775.96,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 5392.24,
                                                Green: 1288.6,
                                                Red: 3256.85,
                                            },
                                            ThemeColor: "ACCENT2",
                                        },
                                        Position: 1470.14,
                                    },
                                    shared.ColorStop{
                                        Alpha: 9564.06,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 1598.7,
                                                Green: 1871.31,
                                                Red: 1294.12,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                        Position: 5789.22,
                                    },
                                    shared.ColorStop{
                                        Alpha: 5438.06,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 922.6,
                                                Green: 4569.11,
                                                Red: 9105.45,
                                            },
                                            ThemeColor: "BACKGROUND1",
                                        },
                                        Position: 829.71,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "LEFT_CENTER",
                                Alpha: 8003.79,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 7241.68,
                                    Unit: "PT",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 3990.25,
                                        Green: 934.59,
                                        Red: 9040.45,
                                    },
                                    ThemeColor: "ACCENT3",
                                },
                                PropertyState: "INHERIT",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 4732.21,
                                    ScaleY: 6996.22,
                                    ShearX: 5801.97,
                                    ShearY: 3277.2,
                                    TranslateX: 7162.44,
                                    TranslateY: 7567.79,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "OUTER",
                            },
                            Transparency: 7313.98,
                        },
                        ObjectID: "labore",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "CURVED",
                        ObjectID: "nesciunt",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "aut",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH",
                            EndArrow: "FILL_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "a",
                                ConnectionSiteIndex: 232865,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4581.39,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5034.27,
                                            Green: 5909.84,
                                            Red: 9537.22,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "iste",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 97468,
                                URL: "tenetur",
                            },
                            StartArrow: "FILL_DIAMOND",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "in",
                                ConnectionSiteIndex: 863023,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 8207.67,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "voluptates",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "asperiores",
                        ObjectID: "illum",
                        Title: "Senior Marketing Executive",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "harum",
                        Transform: &shared.AffineTransform{
                            ScaleX: 3984.34,
                            ScaleY: 9492.98,
                            ShearX: 627.13,
                            ShearY: 9367.47,
                            TranslateX: 4240.32,
                            TranslateY: 4473.78,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_BACKWARD",
                        PageElementObjectIds: []string{
                            "quod",
                            "aperiam",
                            "nemo",
                            "a",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "sed",
                        ObjectID: "ex",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 3567.07,
                                            Green: 3917.74,
                                            Red: 163.28,
                                        },
                                        Type: "ACCENT5",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 1852.32,
                                            Green: 8453.58,
                                            Red: 4012.59,
                                        },
                                        Type: "ACCENT5",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 6802.7,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 996.15,
                                            Green: 6091.78,
                                            Red: 9453.02,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "accusamus",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 920.27,
                                            Unit: "EMU",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 559.65,
                                            Unit: "UNIT_UNSPECIFIED",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 86532,
                            RowIndex: 232744,
                        },
                        Fields: "labore",
                        ObjectID: "et",
                        Style: &shared.ParagraphStyle{
                            Alignment: "JUSTIFIED",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 5223.71,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 5130.75,
                                Unit: "EMU",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 6498.32,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            LineSpacing: 5445.91,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 2519.41,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 2211.61,
                                Unit: "EMU",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 771089,
                            StartIndex: 131055,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "aut",
                        ObjectID: "quos",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "AUTOFIT_TYPE_UNSPECIFIED",
                                FontScale: 9816.4,
                                LineSpacingReduction: 6184.8,
                            },
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            Link: &shared.Link{
                                PageObjectID: "aut",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 990345,
                                URL: "quae",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 3100.67,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 1629.54,
                                                Green: 8315.2,
                                                Red: 6387.62,
                                            },
                                            ThemeColor: "TEXT1",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 6400.24,
                                    Unit: "PT",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "TOP_RIGHT",
                                Alpha: 653.04,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 3127.53,
                                    Unit: "PT",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 8018.36,
                                        Green: 2883.98,
                                        Red: 704.47,
                                    },
                                    ThemeColor: "LIGHT2",
                                },
                                PropertyState: "INHERIT",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 6625.05,
                                    ScaleY: 3807.29,
                                    ShearX: 2460.63,
                                    ShearY: 6339.31,
                                    TranslateX: 6658.59,
                                    TranslateY: 9268.8,
                                    Unit: "EMU",
                                },
                                Type: "OUTER",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "NOT_RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4976.78,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5546.88,
                                            Green: 4278.34,
                                            Red: 2870.51,
                                        },
                                        ThemeColor: "TEXT1",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "nihil",
                        ObjectID: "id",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "esse",
                            MasterObjectID: "ducimus",
                            NotesPage: &shared.Page{},
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 360545,
                        SlideObjectIds: []string{
                            "eum",
                            "commodi",
                            "molestiae",
                            "qui",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "ALL",
                        Fields: "id",
                        ObjectID: "incidunt",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 3485.19,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9372.85,
                                            Green: 8149.67,
                                            Red: 2572.33,
                                        },
                                        ThemeColor: "BACKGROUND2",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 3817.6,
                                Unit: "PT",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 697142,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 904949,
                                RowIndex: 897071,
                            },
                            RowSpan: 296556,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "quia",
                        ObjectID: "asperiores",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2282.63,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1059.06,
                                            Green: 4895.09,
                                            Red: 9509.53,
                                        },
                                        ThemeColor: "TEXT2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 233420,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 358107,
                                RowIndex: 689768,
                            },
                            RowSpan: 385237,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            916727,
                        },
                        Fields: "qui",
                        ObjectID: "fugit",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 8817.21,
                                Unit: "EMU",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "enim",
                        ObjectID: "dolores",
                        RowIndices: []int{
                            374244,
                            374296,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 3244.05,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 680116,
                            RowIndex: 237807,
                        },
                        Fields: "quibusdam",
                        ObjectID: "ipsum",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 5039.34,
                                        Green: 4492.92,
                                        Red: 2962.42,
                                    },
                                    ThemeColor: "ACCENT1",
                                },
                            },
                            BaselineOffset: "SUBSCRIPT",
                            Bold: false,
                            FontFamily: "quo",
                            FontSize: &shared.Dimension{
                                Magnitude: 3518.7,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 7383.91,
                                        Green: 5023.89,
                                        Red: 5553.61,
                                    },
                                    ThemeColor: "BACKGROUND2",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "sed",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 548519,
                                URL: "et",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "occaecati",
                                Weight: 940210,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 348783,
                            StartIndex: 750765,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "cumque",
                        ObjectID: "voluptatem",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 967966,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 9944.01,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 7079.18,
                                                Green: 4518.22,
                                                Red: 7090.72,
                                            },
                                            ThemeColor: "DARK1",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 2927.94,
                                    Unit: "PT",
                                },
                            },
                            Start: 152354,
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "ducimus",
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
