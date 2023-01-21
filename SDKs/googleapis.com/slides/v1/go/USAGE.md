<!-- Start SDK Example Usage -->
```go
package main

import (
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
            PresentationID: "sit",
        },
        QueryParams: operations.SlidesPresentationsBatchUpdateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchUpdatePresentationRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "debitis",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 52.099998,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 50.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 15.100000,
                                ScaleY: 66.099998,
                                ShearX: 1.100000,
                                ShearY: 52.099998,
                                TranslateX: 91.099998,
                                TranslateY: 57.099998,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "commodi",
                        URL: "quis",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "STRAIGHT",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "aut",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 10.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 87.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 78.199997,
                                ScaleY: 87.099998,
                                ShearX: 0.100000,
                                ShearY: 77.099998,
                                TranslateX: 88.099998,
                                TranslateY: 52.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "STRAIGHT",
                        ObjectID: "ut",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "NUMBERED_DIGIT_NESTED",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 4756106358532488297,
                            RowIndex: 5837486892148644279,
                        },
                        ObjectID: "tempore",
                        TextRange: &shared.Range{
                            EndIndex: 2264299874001785192,
                            StartIndex: 1061380815263676471,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "beatae",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 19.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 81.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 64.199997,
                                ScaleY: 78.199997,
                                ShearX: 89.099998,
                                ShearY: 63.200001,
                                TranslateX: 94.099998,
                                TranslateY: 72.199997,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "qui",
                        ShapeType: "CAN",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 8559453321117178323,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "ab",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 90.099998,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 40.099998,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 38.200001,
                                ScaleY: 20.100000,
                                ShearX: 41.200001,
                                ShearY: 89.199997,
                                TranslateX: 41.099998,
                                TranslateY: 59.200001,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "consequatur",
                        SpreadsheetID: "dolor",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 7945398411639602224,
                        ObjectID: "error",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 4989862523986425397,
                                    ParentObjectID: "nostrum",
                                    Type: "NONE",
                                },
                                LayoutPlaceholderObjectID: "laboriosam",
                                ObjectID: "sed",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "a",
                            PredefinedLayout: "TITLE",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 7540276489530073149,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quas",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 48.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 35.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 57.099998,
                                ScaleY: 39.200001,
                                ShearX: 0.100000,
                                ShearY: 12.200000,
                                TranslateX: 45.099998,
                                TranslateY: 50.099998,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "cumque",
                        Rows: 2718877847597668777,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "necessitatibus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 97.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 94.199997,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 84.099998,
                                ScaleY: 70.199997,
                                ShearX: 38.099998,
                                ShearY: 93.099998,
                                TranslateX: 59.099998,
                                TranslateY: 68.099998,
                                Unit: "PT",
                            },
                        },
                        ID: "vel",
                        ObjectID: "vel",
                        Source: "SOURCE_UNSPECIFIED",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "qui",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3661602461251866513,
                            RowIndex: 1899012902909494361,
                        },
                        ObjectID: "adipisci",
                        TextRange: &shared.Range{
                            EndIndex: 3321710981400855005,
                            StartIndex: 4230816687517220040,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 6017140934898985776,
                            RowIndex: 7953274849279451463,
                        },
                        TableObjectID: "laborum",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8958290475970215309,
                            RowIndex: 6870143829354119039,
                        },
                        TableObjectID: "laborum",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8532234679993278697,
                            RowIndex: 2151743514245058837,
                        },
                        ObjectID: "minus",
                        TextRange: &shared.Range{
                            EndIndex: 330151684706709734,
                            StartIndex: 4984797317908301849,
                            Type: "FIXED_RANGE",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "excepturi",
                        ObjectIds: map[string]string{
                            "inventore": "delectus",
                            "ipsa": "animi",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "ut",
                            "aliquam",
                        },
                        GroupObjectID: "fuga",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 7899896093082851758,
                            RowIndex: 4680282486764958852,
                        },
                        InsertRight: false,
                        Number: 5857858779299113932,
                        TableObjectID: "non",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 5366472482114725502,
                            RowIndex: 432317278959866118,
                        },
                        InsertBelow: true,
                        Number: 40355290058559125,
                        TableObjectID: "quasi",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 5534365872829545664,
                            RowIndex: 9076578640078988002,
                        },
                        InsertionIndex: 5385528149427080665,
                        ObjectID: "sit",
                        Text: "possimus",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "modi",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 4780663321723042645,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 4251159253746038912,
                                RowIndex: 6729602721413075826,
                            },
                            RowSpan: 7446022752824825204,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "est",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "ex",
                        },
                        ImageReplaceMethod: "CENTER_INSIDE",
                        ImageURL: "quia",
                        PageObjectIds: []string{
                            "velit",
                            "quae",
                            "est",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 1886763054291282555,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "possimus",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "doloribus",
                        },
                        SpreadsheetID: "saepe",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "earum",
                        },
                        PageObjectIds: []string{
                            "ut",
                            "asperiores",
                        },
                        ReplaceText: "et",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "est",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URL: "quam",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "voluptas",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "dolores",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "suscipit",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 2934204676738798773,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 3752781218885968701,
                                RowIndex: 2991421044203248760,
                            },
                            RowSpan: 5310393022320405575,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "possimus",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 16.200001,
                            Contrast: 14.100000,
                            CropProperties: &shared.CropProperties{
                                Angle: 78.199997,
                                BottomOffset: 46.099998,
                                LeftOffset: 84.099998,
                                RightOffset: 67.099998,
                                TopOffset: 26.200001,
                            },
                            Link: &shared.Link{
                                PageObjectID: "modi",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 29372123613087746,
                                URL: "amet",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 32.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 30.200001,
                                                Green: 3.100000,
                                                Red: 73.199997,
                                            },
                                            ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 78.199997,
                                    Unit: "EMU",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK1",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 84.199997,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 47.099998,
                                                Green: 90.099998,
                                                Red: 16.200001,
                                            },
                                            ThemeColor: "BACKGROUND1",
                                        },
                                        Position: 40.200001,
                                    },
                                    shared.ColorStop{
                                        Alpha: 39.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 96.099998,
                                                Green: 40.099998,
                                                Red: 49.200001,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                        Position: 91.199997,
                                    },
                                    shared.ColorStop{
                                        Alpha: 16.100000,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 31.200001,
                                                Green: 31.200001,
                                                Red: 29.100000,
                                            },
                                            ThemeColor: "FOLLOWED_HYPERLINK",
                                        },
                                        Position: 77.199997,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_CENTER",
                                Alpha: 69.199997,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 0.200000,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 31.100000,
                                        Green: 0.100000,
                                        Red: 61.200001,
                                    },
                                    ThemeColor: "TEXT1",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: true,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 77.099998,
                                    ScaleY: 34.099998,
                                    ShearX: 92.099998,
                                    ShearY: 48.099998,
                                    TranslateX: 55.200001,
                                    TranslateY: 93.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 66.199997,
                        },
                        ObjectID: "vero",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "BENT",
                        ObjectID: "ex",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "magni",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "DOT",
                            EndArrow: "FILL_ARROW",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "cumque",
                                ConnectionSiteIndex: 4723077349289610856,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 80.199997,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 15.200000,
                                            Green: 10.200000,
                                            Red: 53.200001,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "aut",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 542203605369773217,
                                URL: "quia",
                            },
                            StartArrow: "OPEN_DIAMOND",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "debitis",
                                ConnectionSiteIndex: 3507238623703885833,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 19.200001,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "non",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "nihil",
                        ObjectID: "laborum",
                        Title: "recusandae",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "exercitationem",
                        Transform: &shared.AffineTransform{
                            ScaleX: 87.199997,
                            ScaleY: 72.199997,
                            ShearX: 76.199997,
                            ShearY: 27.200001,
                            TranslateX: 55.099998,
                            TranslateY: 27.200001,
                            Unit: "EMU",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "BRING_FORWARD",
                        PageElementObjectIds: []string{
                            "quo",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "dolorum",
                        ObjectID: "laboriosam",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 11.200000,
                                            Green: 88.199997,
                                            Red: 72.099998,
                                        },
                                        Type: "ACCENT1",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 19.100000,
                                            Green: 64.099998,
                                            Red: 67.199997,
                                        },
                                        Type: "DARK2",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "NOT_RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 9.100000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 40.099998,
                                            Green: 36.099998,
                                            Red: 26.200001,
                                        },
                                        ThemeColor: "ACCENT5",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "qui",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 47.099998,
                                            Unit: "PT",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 4.200000,
                                            Unit: "EMU",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3804333472281854609,
                            RowIndex: 8989348688501218597,
                        },
                        Fields: "id",
                        ObjectID: "laboriosam",
                        Style: &shared.ParagraphStyle{
                            Alignment: "JUSTIFIED",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 26.100000,
                                Unit: "EMU",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 13.200000,
                                Unit: "EMU",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 13.200000,
                                Unit: "PT",
                            },
                            LineSpacing: 32.099998,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 76.099998,
                                Unit: "EMU",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 86.199997,
                                Unit: "PT",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 6637759466079315288,
                            StartIndex: 6365065626272028244,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "cupiditate",
                        ObjectID: "temporibus",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "NONE",
                                FontScale: 9.100000,
                                LineSpacingReduction: 98.099998,
                            },
                            ContentAlignment: "MIDDLE",
                            Link: &shared.Link{
                                PageObjectID: "et",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 5749655769367477879,
                                URL: "eligendi",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "SOLID",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 44.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 33.200001,
                                                Green: 70.199997,
                                                Red: 52.200001,
                                            },
                                            ThemeColor: "LIGHT2",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 82.199997,
                                    Unit: "EMU",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "RIGHT_CENTER",
                                Alpha: 90.099998,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 27.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2.100000,
                                        Green: 59.200001,
                                        Red: 19.100000,
                                    },
                                    ThemeColor: "BACKGROUND2",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: true,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 24.200001,
                                    ScaleY: 3.200000,
                                    ShearX: 83.099998,
                                    ShearY: 55.200001,
                                    TranslateX: 28.200001,
                                    TranslateY: 28.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "OUTER",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 10.100000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 36.099998,
                                            Green: 96.199997,
                                            Red: 28.100000,
                                        },
                                        ThemeColor: "ACCENT2",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "veniam",
                        ObjectID: "hic",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: true,
                            LayoutObjectID: "veritatis",
                            MasterObjectID: "architecto",
                            NotesPage: &shared.Page{
                            
                            },
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 130050936231533110,
                        SlideObjectIds: []string{
                            "maiores",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "ALL",
                        Fields: "modi",
                        ObjectID: "eos",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "LONG_DASH",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 54.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 24.200001,
                                            Green: 56.099998,
                                            Red: 46.200001,
                                        },
                                        ThemeColor: "ACCENT2",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 16.100000,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 3442715492156217084,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 8317526059903811569,
                                RowIndex: 2255326391773287055,
                            },
                            RowSpan: 987824140718201109,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "hic",
                        ObjectID: "quo",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "MIDDLE",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 97.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 13.100000,
                                            Green: 87.099998,
                                            Red: 98.099998,
                                        },
                                        ThemeColor: "TEXT2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 8927346200986611569,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 8758726653918526048,
                                RowIndex: 4542131346235756591,
                            },
                            RowSpan: 1243154352626961822,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            4453568751938336055,
                            4187283006391173278,
                            8025972667622276724,
                        },
                        Fields: "fuga",
                        ObjectID: "error",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 66.099998,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "esse",
                        ObjectID: "veritatis",
                        RowIndices: []int32{
                            6882592878163350015,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 56.200001,
                                Unit: "EMU",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 567807051509369863,
                            RowIndex: 1118925641558030772,
                        },
                        Fields: "delectus",
                        ObjectID: "voluptatem",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 63.200001,
                                        Green: 61.200001,
                                        Red: 38.099998,
                                    },
                                    ThemeColor: "DARK1",
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: true,
                            FontFamily: "doloribus",
                            FontSize: &shared.Dimension{
                                Magnitude: 83.199997,
                                Unit: "EMU",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 84.099998,
                                        Green: 34.200001,
                                        Red: 54.200001,
                                    },
                                    ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "autem",
                                RelativeLink: "PREVIOUS_SLIDE",
                                SlideIndex: 5176820051672627311,
                                URL: "autem",
                            },
                            SmallCaps: true,
                            Strikethrough: false,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "aut",
                                Weight: 1262668619261927117,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 9146925156135650264,
                            StartIndex: 8254902724902178832,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "culpa",
                        ObjectID: "quaerat",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: true,
                            End: 8513154721577553219,
                            Mute: true,
                            Outline: &shared.Outline{
                                DashStyle: "SOLID",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 52.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 61.200001,
                                                Green: 1.200000,
                                                Red: 83.099998,
                                            },
                                            ThemeColor: "DARK1",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 97.199997,
                                    Unit: "PT",
                                },
                            },
                            Start: 3439885235236011334,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "omnis",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 10.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 33.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 50.200001,
                                ScaleY: 5.100000,
                                ShearX: 36.200001,
                                ShearY: 9.100000,
                                TranslateX: 22.100000,
                                TranslateY: 3.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "quasi",
                        URL: "necessitatibus",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "BENT",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "minus",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 22.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 93.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 15.100000,
                                ScaleY: 44.099998,
                                ShearX: 21.100000,
                                ShearY: 39.099998,
                                TranslateX: 15.100000,
                                TranslateY: 29.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "CURVED",
                        ObjectID: "dolores",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "NUMBERED_UPPERALPHA_ALPHA_ROMAN",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1596246021614689099,
                            RowIndex: 5903985231896006729,
                        },
                        ObjectID: "est",
                        TextRange: &shared.Range{
                            EndIndex: 3143771170135834941,
                            StartIndex: 580104165684934573,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "eius",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 39.200001,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 54.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 88.099998,
                                ScaleY: 79.199997,
                                ShearX: 1.100000,
                                ShearY: 96.199997,
                                TranslateX: 98.199997,
                                TranslateY: 88.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "et",
                        ShapeType: "STAR_4",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 4398689318643636665,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "nostrum",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 33.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 67.099998,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 12.100000,
                                ScaleY: 98.099998,
                                ShearX: 59.200001,
                                ShearY: 27.100000,
                                TranslateX: 43.200001,
                                TranslateY: 59.200001,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "LINKED",
                        ObjectID: "consequuntur",
                        SpreadsheetID: "est",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 5178187820906561927,
                        ObjectID: "hic",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 3081965838106123659,
                                    ParentObjectID: "et",
                                    Type: "SLIDE_NUMBER",
                                },
                                LayoutPlaceholderObjectID: "qui",
                                ObjectID: "sit",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 4159235276401511432,
                                    ParentObjectID: "aperiam",
                                    Type: "TITLE",
                                },
                                LayoutPlaceholderObjectID: "odit",
                                ObjectID: "qui",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 3767314868303873018,
                                    ParentObjectID: "mollitia",
                                    Type: "PICTURE",
                                },
                                LayoutPlaceholderObjectID: "reiciendis",
                                ObjectID: "velit",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "qui",
                            PredefinedLayout: "PREDEFINED_LAYOUT_UNSPECIFIED",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 6527583377403115980,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "ut",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 41.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 97.099998,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 87.199997,
                                ScaleY: 19.200001,
                                ShearX: 87.099998,
                                ShearY: 7.100000,
                                TranslateX: 41.099998,
                                TranslateY: 24.200001,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "id",
                        Rows: 7472755522613843569,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "esse",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 10.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 23.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 65.099998,
                                ScaleY: 18.100000,
                                ShearX: 81.199997,
                                ShearY: 11.100000,
                                TranslateX: 56.099998,
                                TranslateY: 25.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ID: "qui",
                        ObjectID: "atque",
                        Source: "SOURCE_UNSPECIFIED",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "perferendis",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1181579482718331838,
                            RowIndex: 4654229052986410184,
                        },
                        ObjectID: "minus",
                        TextRange: &shared.Range{
                            EndIndex: 9161383625625055457,
                            StartIndex: 7541252924241332912,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 2653267917996046848,
                            RowIndex: 3970053644452846618,
                        },
                        TableObjectID: "libero",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8994354134321950075,
                            RowIndex: 3275748967946648889,
                        },
                        TableObjectID: "porro",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 316247834821120826,
                            RowIndex: 2840817240348370202,
                        },
                        ObjectID: "sint",
                        TextRange: &shared.Range{
                            EndIndex: 6540176775873860965,
                            StartIndex: 3868665265513893187,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "ut",
                        ObjectIds: map[string]string{
                            "hic": "qui",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "facilis",
                        },
                        GroupObjectID: "consequatur",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 7779165914100841804,
                            RowIndex: 8234502182930258900,
                        },
                        InsertRight: false,
                        Number: 6391372909720997418,
                        TableObjectID: "eum",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 6657741761168958455,
                            RowIndex: 5405743782790223869,
                        },
                        InsertBelow: true,
                        Number: 7935722871723264328,
                        TableObjectID: "praesentium",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8121438638750070275,
                            RowIndex: 1729960082164518080,
                        },
                        InsertionIndex: 5702086962551646585,
                        ObjectID: "iure",
                        Text: "rem",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "dolore",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 6953150776380284364,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 2649597358590710526,
                                RowIndex: 4930083333664384026,
                            },
                            RowSpan: 3506754790132148294,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "sint",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "officia",
                        },
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        ImageURL: "sit",
                        PageObjectIds: []string{
                            "earum",
                        },
                        ReplaceMethod: "CENTER_CROP",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 6825038547171313815,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "alias",
                        },
                        LinkingMode: "LINKED",
                        PageObjectIds: []string{
                            "repudiandae",
                        },
                        SpreadsheetID: "sed",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "cum",
                        },
                        PageObjectIds: []string{
                            "odit",
                        },
                        ReplaceText: "alias",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "voluptas",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "ratione",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "dolore",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "est",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "et",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 1990483423942727863,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 1713996192319931980,
                                RowIndex: 4490710882427176211,
                            },
                            RowSpan: 5875807663581146597,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "dolorem",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 18.200001,
                            Contrast: 63.099998,
                            CropProperties: &shared.CropProperties{
                                Angle: 95.099998,
                                BottomOffset: 48.099998,
                                LeftOffset: 7.100000,
                                RightOffset: 81.199997,
                                TopOffset: 47.200001,
                            },
                            Link: &shared.Link{
                                PageObjectID: "aut",
                                RelativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                                SlideIndex: 8029842999747407507,
                                URL: "harum",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 1.200000,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 50.099998,
                                                Green: 23.100000,
                                                Red: 67.099998,
                                            },
                                            ThemeColor: "BACKGROUND2",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 95.199997,
                                    Unit: "EMU",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "DARK7",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 59.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 18.100000,
                                                Green: 19.100000,
                                                Red: 60.099998,
                                            },
                                            ThemeColor: "ACCENT4",
                                        },
                                        Position: 23.100000,
                                    },
                                    shared.ColorStop{
                                        Alpha: 28.100000,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 35.200001,
                                                Green: 15.200000,
                                                Red: 95.199997,
                                            },
                                            ThemeColor: "ACCENT3",
                                        },
                                        Position: 90.199997,
                                    },
                                    shared.ColorStop{
                                        Alpha: 92.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 79.099998,
                                                Green: 40.200001,
                                                Red: 54.099998,
                                            },
                                            ThemeColor: "DARK2",
                                        },
                                        Position: 33.099998,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_CENTER",
                                Alpha: 1.200000,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 16.100000,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 76.099998,
                                        Green: 53.200001,
                                        Red: 61.200001,
                                    },
                                    ThemeColor: "BACKGROUND1",
                                },
                                PropertyState: "INHERIT",
                                RotateWithShape: true,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 74.099998,
                                    ScaleY: 1.200000,
                                    ShearX: 16.100000,
                                    ShearY: 48.200001,
                                    TranslateX: 38.099998,
                                    TranslateY: 76.199997,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            Transparency: 16.200001,
                        },
                        ObjectID: "sit",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "BENT",
                        ObjectID: "pariatur",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "sunt",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH",
                            EndArrow: "FILL_CIRCLE",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "et",
                                ConnectionSiteIndex: 6331874230681325768,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 98.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 41.099998,
                                            Green: 78.099998,
                                            Red: 43.200001,
                                        },
                                        ThemeColor: "BACKGROUND2",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "voluptatem",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 4826757228282060115,
                                URL: "ut",
                            },
                            StartArrow: "ARROW_STYLE_UNSPECIFIED",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "quaerat",
                                ConnectionSiteIndex: 6273714329613264825,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 17.100000,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "neque",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "libero",
                        ObjectID: "sit",
                        Title: "quibusdam",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "RELATIVE",
                        ObjectID: "ut",
                        Transform: &shared.AffineTransform{
                            ScaleX: 37.099998,
                            ScaleY: 64.199997,
                            ShearX: 41.099998,
                            ShearY: 9.100000,
                            TranslateX: 58.200001,
                            TranslateY: 43.099998,
                            Unit: "PT",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "BRING_TO_FRONT",
                        PageElementObjectIds: []string{
                            "dolor",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "nihil",
                        ObjectID: "error",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 73.099998,
                                            Green: 92.199997,
                                            Red: 57.200001,
                                        },
                                        Type: "ACCENT4",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 52.200001,
                                            Green: 8.100000,
                                            Red: 14.200000,
                                        },
                                        Type: "HYPERLINK",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 97.199997,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 90.199997,
                                            Green: 44.099998,
                                            Red: 94.099998,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "id",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 75.199997,
                                            Unit: "UNIT_UNSPECIFIED",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 53.099998,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 6715168048463867653,
                            RowIndex: 7250130363035207046,
                        },
                        Fields: "illo",
                        ObjectID: "animi",
                        Style: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 7.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 4.100000,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 24.100000,
                                Unit: "EMU",
                            },
                            LineSpacing: 35.200001,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 29.100000,
                                Unit: "EMU",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 90.099998,
                                Unit: "EMU",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 6905122417775429793,
                            StartIndex: 1571699275741121577,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "placeat",
                        ObjectID: "ullam",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "NONE",
                                FontScale: 48.099998,
                                LineSpacingReduction: 44.099998,
                            },
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            Link: &shared.Link{
                                PageObjectID: "omnis",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 1991503504410083385,
                                URL: "quia",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 21.100000,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 43.099998,
                                                Green: 38.099998,
                                                Red: 88.099998,
                                            },
                                            ThemeColor: "ACCENT4",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 66.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "CENTER",
                                Alpha: 75.199997,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 2.200000,
                                    Unit: "PT",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 11.200000,
                                        Green: 72.099998,
                                        Red: 24.200001,
                                    },
                                    ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 13.200000,
                                    ScaleY: 74.099998,
                                    ShearX: 64.199997,
                                    ShearY: 37.099998,
                                    TranslateX: 62.200001,
                                    TranslateY: 46.200001,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 48.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 78.099998,
                                            Green: 53.200001,
                                            Red: 66.099998,
                                        },
                                        ThemeColor: "ACCENT3",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "impedit",
                        ObjectID: "tempore",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "quia",
                            MasterObjectID: "qui",
                            NotesPage: &shared.Page{
                            
                            },
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 1424107421612846593,
                        SlideObjectIds: []string{
                            "explicabo",
                            "qui",
                            "perferendis",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_HORIZONTAL",
                        Fields: "autem",
                        ObjectID: "perferendis",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH_STYLE_UNSPECIFIED",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 4.200000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 30.200001,
                                            Green: 21.100000,
                                            Red: 42.200001,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 21.100000,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 5520765340442643335,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 6902257492812896644,
                                RowIndex: 6734780860601130496,
                            },
                            RowSpan: 8825996503121630473,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "et",
                        ObjectID: "non",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 5.100000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 95.099998,
                                            Green: 23.100000,
                                            Red: 70.099998,
                                        },
                                        ThemeColor: "DARK2",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 8102114840316298299,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 8600815741527501233,
                                RowIndex: 6966857314290352368,
                            },
                            RowSpan: 1202122511747129770,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            5565432672928178105,
                            21324731883578266,
                            5853948748050377045,
                        },
                        Fields: "aut",
                        ObjectID: "architecto",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 14.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "modi",
                        ObjectID: "nisi",
                        RowIndices: []int32{
                            1958726289865903116,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 91.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 9175069393917774142,
                            RowIndex: 9002579079570733075,
                        },
                        Fields: "repellat",
                        ObjectID: "repellendus",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 46.099998,
                                        Green: 50.200001,
                                        Red: 96.099998,
                                    },
                                    ThemeColor: "LIGHT2",
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontFamily: "necessitatibus",
                            FontSize: &shared.Dimension{
                                Magnitude: 1.200000,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 59.200001,
                                        Green: 28.200001,
                                        Red: 84.099998,
                                    },
                                    ThemeColor: "ACCENT4",
                                },
                            },
                            Italic: true,
                            Link: &shared.Link{
                                PageObjectID: "iste",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 3656259066175733051,
                                URL: "placeat",
                            },
                            SmallCaps: false,
                            Strikethrough: true,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "animi",
                                Weight: 6247846618947578285,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 4727040426207778405,
                            StartIndex: 989983806312576166,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "necessitatibus",
                        ObjectID: "iure",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 6737015371108714790,
                            Mute: true,
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 27.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 93.199997,
                                                Green: 94.199997,
                                                Red: 77.199997,
                                            },
                                            ThemeColor: "ACCENT6",
                                        },
                                    },
                                },
                                PropertyState: "RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 73.199997,
                                    Unit: "EMU",
                                },
                            },
                            Start: 4757502497353226815,
                        },
                    },
                },
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "sunt",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 93.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 37.099998,
                                    Unit: "EMU",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 43.099998,
                                ScaleY: 47.099998,
                                ShearX: 35.099998,
                                ShearY: 71.099998,
                                TranslateX: 24.100000,
                                TranslateY: 87.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ObjectID: "eum",
                        URL: "mollitia",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "LINE_CATEGORY_UNSPECIFIED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "inventore",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 13.100000,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 50.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 1.100000,
                                ScaleY: 39.099998,
                                ShearX: 38.200001,
                                ShearY: 7.200000,
                                TranslateX: 77.199997,
                                TranslateY: 87.099998,
                                Unit: "EMU",
                            },
                        },
                        LineCategory: "BENT",
                        ObjectID: "ratione",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_STAR_CIRCLE_SQUARE",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 4894894472276827153,
                            RowIndex: 3784438660469815446,
                        },
                        ObjectID: "quo",
                        TextRange: &shared.Range{
                            EndIndex: 4099325840936144508,
                            StartIndex: 3692155382777412043,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "at",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 66.199997,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 68.199997,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 66.099998,
                                ScaleY: 79.099998,
                                ShearX: 49.099998,
                                ShearY: 2.200000,
                                TranslateX: 84.099998,
                                TranslateY: 74.199997,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "occaecati",
                        ShapeType: "ROUND_RECTANGLE",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 7417344509807136667,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "sint",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 37.099998,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 81.199997,
                                ScaleY: 5.100000,
                                ShearX: 94.099998,
                                ShearY: 57.099998,
                                TranslateX: 9.200000,
                                TranslateY: 20.200001,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        ObjectID: "est",
                        SpreadsheetID: "omnis",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 1930604905261301277,
                        ObjectID: "ipsam",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 1605894336133505247,
                                    ParentObjectID: "molestias",
                                    Type: "SLIDE_NUMBER",
                                },
                                LayoutPlaceholderObjectID: "pariatur",
                                ObjectID: "voluptatum",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 7954642727981767676,
                                    ParentObjectID: "rem",
                                    Type: "CLIP_ART",
                                },
                                LayoutPlaceholderObjectID: "enim",
                                ObjectID: "quia",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 2965405812565520853,
                                    ParentObjectID: "nulla",
                                    Type: "CLIP_ART",
                                },
                                LayoutPlaceholderObjectID: "et",
                                ObjectID: "officiis",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "sequi",
                            PredefinedLayout: "MAIN_POINT",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 6342472296581271663,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "quia",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 29.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 90.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 2.100000,
                                ScaleY: 94.199997,
                                ShearX: 67.099998,
                                ShearY: 29.100000,
                                TranslateX: 9.100000,
                                TranslateY: 88.099998,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "vero",
                        Rows: 2902857852148037846,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "odio",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 98.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 80.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 55.099998,
                                ScaleY: 73.199997,
                                ShearX: 91.099998,
                                ShearY: 36.099998,
                                TranslateX: 13.100000,
                                TranslateY: 64.199997,
                                Unit: "PT",
                            },
                        },
                        ID: "quibusdam",
                        ObjectID: "harum",
                        Source: "YOUTUBE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "similique",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3054657700102913587,
                            RowIndex: 781851796045831926,
                        },
                        ObjectID: "occaecati",
                        TextRange: &shared.Range{
                            EndIndex: 8833187899968615810,
                            StartIndex: 3253461119903931116,
                            Type: "FIXED_RANGE",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 9121827246953183506,
                            RowIndex: 8376408892840619507,
                        },
                        TableObjectID: "accusamus",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 4381844509993944595,
                            RowIndex: 1084512385719096294,
                        },
                        TableObjectID: "inventore",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 5000573968927492077,
                            RowIndex: 9165582639352812835,
                        },
                        ObjectID: "iusto",
                        TextRange: &shared.Range{
                            EndIndex: 2608968789622504862,
                            StartIndex: 1018163613878502982,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "quo",
                        ObjectIds: map[string]string{
                            "et": "labore",
                            "est": "quod",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "sit",
                            "quo",
                            "omnis",
                        },
                        GroupObjectID: "reprehenderit",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 5013660325818858638,
                            RowIndex: 5585301752273376988,
                        },
                        InsertRight: true,
                        Number: 3401618189087798150,
                        TableObjectID: "ex",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 7421029053963350313,
                            RowIndex: 1331234533359793396,
                        },
                        InsertBelow: false,
                        Number: 1886546759492251557,
                        TableObjectID: "sed",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8821661725284584833,
                            RowIndex: 8900962896455943776,
                        },
                        InsertionIndex: 8273339943528607578,
                        ObjectID: "non",
                        Text: "nihil",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "ipsa",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 2381730300682964299,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 3232139147788894457,
                                RowIndex: 7834533953447049713,
                            },
                            RowSpan: 3109338638089662440,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "vitae",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "assumenda",
                        },
                        ImageReplaceMethod: "CENTER_CROP",
                        ImageURL: "ad",
                        PageObjectIds: []string{
                            "voluptatem",
                            "optio",
                        },
                        ReplaceMethod: "CENTER_INSIDE",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 8499153988203968599,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "consequatur",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "cum",
                            "eius",
                            "recusandae",
                        },
                        SpreadsheetID: "nisi",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "est",
                        },
                        PageObjectIds: []string{
                            "quisquam",
                            "dolor",
                            "itaque",
                        },
                        ReplaceText: "reiciendis",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "expedita",
                        ImageReplaceMethod: "CENTER_CROP",
                        URL: "qui",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "voluptatum",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "modi",
                            "adipisci",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "suscipit",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 1973385793056236322,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 8317462932549162366,
                                RowIndex: 2182438783508385766,
                            },
                            RowSpan: 134861696344271609,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "consectetur",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 40.200001,
                            Contrast: 47.099998,
                            CropProperties: &shared.CropProperties{
                                Angle: 83.199997,
                                BottomOffset: 77.199997,
                                LeftOffset: 43.099998,
                                RightOffset: 85.099998,
                                TopOffset: 57.099998,
                            },
                            Link: &shared.Link{
                                PageObjectID: "inventore",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 8693879900697206451,
                                URL: "quisquam",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "SOLID",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 67.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 47.200001,
                                                Green: 29.200001,
                                                Red: 57.099998,
                                            },
                                            ThemeColor: "ACCENT1",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 91.199997,
                                    Unit: "EMU",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "LIGHT2",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 4.200000,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 83.199997,
                                                Green: 20.100000,
                                                Red: 57.099998,
                                            },
                                            ThemeColor: "BACKGROUND2",
                                        },
                                        Position: 37.099998,
                                    },
                                    shared.ColorStop{
                                        Alpha: 63.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 90.199997,
                                                Green: 82.099998,
                                                Red: 40.200001,
                                            },
                                            ThemeColor: "ACCENT2",
                                        },
                                        Position: 1.200000,
                                    },
                                    shared.ColorStop{
                                        Alpha: 35.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 17.200001,
                                                Green: 69.099998,
                                                Red: 79.199997,
                                            },
                                            ThemeColor: "HYPERLINK",
                                        },
                                        Position: 90.199997,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "CENTER",
                                Alpha: 39.200001,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 15.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 73.199997,
                                        Green: 70.099998,
                                        Red: 46.099998,
                                    },
                                    ThemeColor: "DARK2",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: true,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 9.100000,
                                    ScaleY: 66.199997,
                                    ShearX: 95.099998,
                                    ShearY: 2.200000,
                                    TranslateX: 15.200000,
                                    TranslateY: 60.099998,
                                    Unit: "PT",
                                },
                                Type: "OUTER",
                            },
                            Transparency: 7.200000,
                        },
                        ObjectID: "magni",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "STRAIGHT",
                        ObjectID: "qui",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "ab",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "LONG_DASH",
                            EndArrow: "ARROW_STYLE_UNSPECIFIED",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "rem",
                                ConnectionSiteIndex: 2307441773719486059,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 35.200001,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 68.199997,
                                            Green: 87.199997,
                                            Red: 41.099998,
                                        },
                                        ThemeColor: "ACCENT1",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "aperiam",
                                RelativeLink: "FIRST_SLIDE",
                                SlideIndex: 7869915393126040987,
                                URL: "animi",
                            },
                            StartArrow: "OPEN_DIAMOND",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "earum",
                                ConnectionSiteIndex: 7557974826405794659,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 4.100000,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "quisquam",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "qui",
                        ObjectID: "voluptas",
                        Title: "non",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "APPLY_MODE_UNSPECIFIED",
                        ObjectID: "totam",
                        Transform: &shared.AffineTransform{
                            ScaleX: 78.099998,
                            ScaleY: 20.200001,
                            ShearX: 81.099998,
                            ShearY: 70.199997,
                            TranslateX: 24.100000,
                            TranslateY: 55.200001,
                            Unit: "UNIT_UNSPECIFIED",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "BRING_TO_FRONT",
                        PageElementObjectIds: []string{
                            "adipisci",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "qui",
                        ObjectID: "iste",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 64.199997,
                                            Green: 33.099998,
                                            Red: 70.199997,
                                        },
                                        Type: "HYPERLINK",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 9.200000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 92.199997,
                                            Green: 87.199997,
                                            Red: 96.199997,
                                        },
                                        ThemeColor: "ACCENT2",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "aspernatur",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 93.099998,
                                            Unit: "UNIT_UNSPECIFIED",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 21.200001,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 2856735946593628957,
                            RowIndex: 6550564210131640307,
                        },
                        Fields: "nemo",
                        ObjectID: "cumque",
                        Style: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            Direction: "LEFT_TO_RIGHT",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 60.099998,
                                Unit: "EMU",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 79.099998,
                                Unit: "EMU",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 32.200001,
                                Unit: "EMU",
                            },
                            LineSpacing: 64.199997,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 97.199997,
                                Unit: "EMU",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 57.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 3930959855133543959,
                            StartIndex: 6162329997169772036,
                            Type: "ALL",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "a",
                        ObjectID: "tempore",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "NONE",
                                FontScale: 71.099998,
                                LineSpacingReduction: 24.200001,
                            },
                            ContentAlignment: "MIDDLE",
                            Link: &shared.Link{
                                PageObjectID: "est",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 38163153731668594,
                                URL: "non",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 61.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 9.200000,
                                                Green: 49.200001,
                                                Red: 40.200001,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 59.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "TOP_CENTER",
                                Alpha: 75.099998,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 40.099998,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 79.199997,
                                        Green: 32.099998,
                                        Red: 76.199997,
                                    },
                                    ThemeColor: "DARK1",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: true,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 64.199997,
                                    ScaleY: 44.099998,
                                    ShearX: 97.099998,
                                    ShearY: 57.200001,
                                    TranslateX: 62.200001,
                                    TranslateY: 24.100000,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "NOT_RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 2.100000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 19.100000,
                                            Green: 55.099998,
                                            Red: 13.200000,
                                        },
                                        ThemeColor: "HYPERLINK",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "magnam",
                        ObjectID: "et",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: true,
                            LayoutObjectID: "pariatur",
                            MasterObjectID: "eum",
                            NotesPage: &shared.Page{
                            
                            },
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 5884980644893571393,
                        SlideObjectIds: []string{
                            "officiis",
                            "doloremque",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "INNER_VERTICAL",
                        Fields: "et",
                        ObjectID: "ut",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH_DOT",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 94.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1.200000,
                                            Green: 8.200000,
                                            Red: 12.200000,
                                        },
                                        ThemeColor: "DARK1",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 92.099998,
                                Unit: "EMU",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 1249923746254452511,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 6537984888763423894,
                                RowIndex: 1093473475765671326,
                            },
                            RowSpan: 8062498651678583044,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "tenetur",
                        ObjectID: "expedita",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 51.200001,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 26.200001,
                                            Green: 50.099998,
                                            Red: 35.200001,
                                        },
                                        ThemeColor: "HYPERLINK",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 7176186215974283898,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 3596952290617787554,
                                RowIndex: 6839999289365011635,
                            },
                            RowSpan: 8035597359195487026,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            95582894219885355,
                            7866457299860357722,
                            5655164823183241506,
                        },
                        Fields: "asperiores",
                        ObjectID: "eligendi",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 7.100000,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "rerum",
                        ObjectID: "sit",
                        RowIndices: []int32{
                            6812306629431358903,
                            5991003430725418013,
                            5440797801951523568,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 73.199997,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8281509370686532591,
                            RowIndex: 1044462685252647644,
                        },
                        Fields: "omnis",
                        ObjectID: "ratione",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 31.100000,
                                        Green: 96.099998,
                                        Red: 68.099998,
                                    },
                                    ThemeColor: "ACCENT5",
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: false,
                            FontFamily: "maiores",
                            FontSize: &shared.Dimension{
                                Magnitude: 82.199997,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 90.099998,
                                        Green: 82.099998,
                                        Red: 80.099998,
                                    },
                                    ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                },
                            },
                            Italic: true,
                            Link: &shared.Link{
                                PageObjectID: "debitis",
                                RelativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                                SlideIndex: 822519097365559180,
                                URL: "vero",
                            },
                            SmallCaps: false,
                            Strikethrough: true,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "quasi",
                                Weight: 1409180487490656414,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 1512446536873555566,
                            StartIndex: 3250056191358527009,
                            Type: "RANGE_TYPE_UNSPECIFIED",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "et",
                        ObjectID: "consequuntur",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 2185715640713388810,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 34.099998,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 57.200001,
                                                Green: 38.200001,
                                                Red: 0.100000,
                                            },
                                            ThemeColor: "TEXT1",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 69.199997,
                                    Unit: "PT",
                                },
                            },
                            Start: 7532318092269251268,
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "quisquam",
            },
        },
    }
    
    res, err := s.Presentations.SlidesPresentationsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdatePresentationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->