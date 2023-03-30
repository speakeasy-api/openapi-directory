# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/docs/v1/go
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

    req := operations.DocsDocumentsBatchUpdateRequest{
        Security: operations.DocsDocumentsBatchUpdateSecurity{
            Option1: &operations.DocsDocumentsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DocsDocumentsBatchUpdatePathParams{
            DocumentID: "corrupti",
        },
        QueryParams: operations.DocsDocumentsBatchUpdateQueryParams{
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
        Request: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 437587,
                            SegmentID: "magnam",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "ipsa",
                        },
                        Location: &shared.Location{
                            Index: 963663,
                            SegmentID: "tempora",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 383441,
                            SegmentID: "molestiae",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "placeat",
                        Range: &shared.Range{
                            EndIndex: 528895,
                            SegmentID: "iusto",
                            StartIndex: 568045,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW3D_CIRCLE_SQUARE",
                        Range: &shared.Range{
                            EndIndex: 925597,
                            SegmentID: "temporibus",
                            StartIndex: 71036,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 337396,
                            SegmentID: "veritatis",
                            StartIndex: 648172,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "perferendis",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "ipsam",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "repellendus",
                        NamedRangeID: "sapiente",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 778157,
                            SegmentID: "odit",
                            StartIndex: 870013,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "at",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 978619,
                            RowIndex: 473608,
                            TableStartLocation: &shared.Location{
                                Index: 799159,
                                SegmentID: "quod",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 461479,
                            RowIndex: 520478,
                            TableStartLocation: &shared.Location{
                                Index: 780529,
                                SegmentID: "dolorum",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dicta",
                        },
                        Location: &shared.Location{
                            Index: 720633,
                            SegmentID: "officia",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 5820.2,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 5373.73,
                                Unit: "PT",
                            },
                        },
                        URI: "https://mean-brick.info",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "molestiae",
                        },
                        Location: &shared.Location{
                            Index: 264555,
                            SegmentID: "qui",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "impedit",
                        },
                        Location: &shared.Location{
                            Index: 736918,
                            SegmentID: "esse",
                        },
                        SectionType: "SECTION_TYPE_UNSPECIFIED",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 568434,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "aspernatur",
                        },
                        Location: &shared.Location{
                            Index: 18789,
                            SegmentID: "ad",
                        },
                        Rows: 617636,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 149675,
                            RowIndex: 612096,
                            TableStartLocation: &shared.Location{
                                Index: 222321,
                                SegmentID: "natus",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 386489,
                            RowIndex: 943749,
                            TableStartLocation: &shared.Location{
                                Index: 902599,
                                SegmentID: "fuga",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "in",
                        },
                        Location: &shared.Location{
                            Index: 359508,
                            SegmentID: "iste",
                        },
                        Text: "iure",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 902349,
                            RowSpan: 697631,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 99280,
                                RowIndex: 60225,
                                TableStartLocation: &shared.Location{
                                    Index: 969810,
                                    SegmentID: "est",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 653140,
                        TableStartLocation: &shared.Location{
                            Index: 670638,
                            SegmentID: "dolores",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "dolorem",
                        },
                        ReplaceText: "corporis",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "explicabo",
                        ImageReplaceMethod: "CENTER_CROP",
                        URI: "http://palatable-forum.biz",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "excepturi",
                        NamedRangeName: "accusantium",
                        Text: "iure",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 634274,
                            RowSpan: 988374,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 958950,
                                RowIndex: 102044,
                                TableStartLocation: &shared.Location{
                                    Index: 652790,
                                    SegmentID: "dolorem",
                                },
                            },
                        },
                    },
                    UpdateDocumentStyle: &shared.UpdateDocumentStyleRequest{
                        DocumentStyle: &shared.DocumentStyle{
                            Background: &shared.Background{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6350.59,
                                            Green: 1613.09,
                                            Red: 9953,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "mollitia",
                            DefaultHeaderID: "occaecati",
                            EvenPageFooterID: "numquam",
                            EvenPageHeaderID: "commodi",
                            FirstPageFooterID: "quam",
                            FirstPageHeaderID: "molestiae",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 2444.25,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 1589.69,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 1103.75,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 6563.3,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 1381.83,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 1965.82,
                                Unit: "PT",
                            },
                            PageNumberStart: 368725,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6625.27,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 135.71,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "error",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "temporibus",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "END",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 960.98,
                                            Green: 9719.45,
                                            Red: 9764.6,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 4686.51,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 9767.62,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6048.46,
                                            Green: 4511.59,
                                            Red: 7392.64,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 391.87,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2828.07,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1201.96,
                                            Green: 3594.44,
                                            Red: 2961.4,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 1187.27,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 3179.83,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4142.63,
                                            Green: 9182.36,
                                            Red: 641.47,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 6924.72,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5666.02,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2653.89,
                                            Green: 5089.69,
                                            Red: 5232.48,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 939.4,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5759.47,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "RIGHT_TO_LEFT",
                            HeadingID: "incidunt",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 3185.69,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 6674.11,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 1317.97,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 7163.27,
                            NamedStyleType: "HEADING_5",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2894.06,
                                            Green: 2647.3,
                                            Red: 1831.91,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 3978.21,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 5528.22,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "START",
                                    Offset: &shared.Dimension{
                                        Magnitude: 46.95,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 5696.18,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 7351.94,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 4332.88,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 756107,
                            SegmentID: "sint",
                            StartIndex: 396098,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "provident",
                        Range: &shared.Range{
                            EndIndex: 896039,
                            SegmentID: "sint",
                            StartIndex: 638921,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 8915.55,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 6800.56,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "maiores",
                            DefaultHeaderID: "rerum",
                            EvenPageFooterID: "dicta",
                            EvenPageHeaderID: "magnam",
                            FirstPageFooterID: "cumque",
                            FirstPageHeaderID: "facere",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 4118.2,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 6754.39,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 2497.96,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 3132.18,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 9654.17,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 5884.65,
                                Unit: "PT",
                            },
                            PageNumberStart: 659669,
                            SectionType: "CONTINUOUS",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "deleniti",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 9560.84,
                                        Green: 2305.33,
                                        Red: 6439.9,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3948.69,
                                            Green: 4238.55,
                                            Red: 6188.09,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 4748.67,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4701.32,
                                            Green: 3015.75,
                                            Red: 7160.75,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 2879.91,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3834.62,
                                            Green: 6180.16,
                                            Red: 7491.7,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 8784.53,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1028.63,
                                            Green: 2982.82,
                                            Red: 923.73,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 3540.47,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 551816,
                            ContentAlignment: "TOP",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 336.25,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 9689.62,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 3209.97,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 2212.62,
                                Unit: "PT",
                            },
                            RowSpan: 141264,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 367562,
                            RowSpan: 97260,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 435865,
                                RowIndex: 984043,
                                TableStartLocation: &shared.Location{
                                    Index: 891924,
                                    SegmentID: "eius",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 806194,
                            SegmentID: "deleniti",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            447926,
                            100226,
                            99569,
                        },
                        Fields: "repudiandae",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 3523.12,
                                Unit: "PT",
                            },
                            WidthType: "EVENLY_DISTRIBUTED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 998848,
                            SegmentID: "quibusdam",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "sed",
                        RowIndices: []int{
                            868126,
                            37559,
                            162493,
                            508315,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 6155.6,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 123820,
                            SegmentID: "quo",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "illum",
                        Range: &shared.Range{
                            EndIndex: 864934,
                            SegmentID: "maxime",
                            StartIndex: 411397,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 5691.01,
                                        Green: 1399.72,
                                        Red: 4071.83,
                                    },
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 691.67,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 6974.29,
                                        Green: 3732.91,
                                        Red: 4535.43,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "autem",
                                HeadingID: "nam",
                                URL: "eaque",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "pariatur",
                                Weight: 365496,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 975522,
                            SegmentID: "perferendis",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "amet",
                        },
                        Location: &shared.Location{
                            Index: 11714,
                            SegmentID: "cumque",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 359978,
                            SegmentID: "hic",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "nobis",
                        Range: &shared.Range{
                            EndIndex: 171629,
                            SegmentID: "quis",
                            StartIndex: 521037,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_LEFTTRIANGLE_DIAMOND_DISC",
                        Range: &shared.Range{
                            EndIndex: 54338,
                            SegmentID: "quis",
                            StartIndex: 199996,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 179490,
                            SegmentID: "perferendis",
                            StartIndex: 170986,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "minus",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "quam",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "dolor",
                        NamedRangeID: "vero",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 345352,
                            SegmentID: "hic",
                            StartIndex: 928082,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "omnis",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 704415,
                            RowIndex: 596656,
                            TableStartLocation: &shared.Location{
                                Index: 31838,
                                SegmentID: "porro",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 164694,
                            RowIndex: 500026,
                            TableStartLocation: &shared.Location{
                                Index: 621479,
                                SegmentID: "eaque",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "occaecati",
                        },
                        Location: &shared.Location{
                            Index: 699098,
                            SegmentID: "adipisci",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 9923.97,
                                Unit: "PT",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 2672.62,
                                Unit: "PT",
                            },
                        },
                        URI: "https://minty-subgroup.name",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "nobis",
                        },
                        Location: &shared.Location{
                            Index: 730122,
                            SegmentID: "delectus",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "quaerat",
                        },
                        Location: &shared.Location{
                            Index: 554242,
                            SegmentID: "aliquid",
                        },
                        SectionType: "SECTION_TYPE_UNSPECIFIED",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 209843,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dolor",
                        },
                        Location: &shared.Location{
                            Index: 186193,
                            SegmentID: "ipsum",
                        },
                        Rows: 944373,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 569574,
                            RowIndex: 739551,
                            TableStartLocation: &shared.Location{
                                Index: 452109,
                                SegmentID: "dignissimos",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 970237,
                            RowIndex: 227414,
                            TableStartLocation: &shared.Location{
                                Index: 680545,
                                SegmentID: "numquam",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "veritatis",
                        },
                        Location: &shared.Location{
                            Index: 58029,
                            SegmentID: "ipsa",
                        },
                        Text: "iure",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 487838,
                            RowSpan: 311796,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 881005,
                                RowIndex: 696344,
                                TableStartLocation: &shared.Location{
                                    Index: 976405,
                                    SegmentID: "voluptas",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 617658,
                        TableStartLocation: &shared.Location{
                            Index: 179603,
                            SegmentID: "atque",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "sit",
                        },
                        ReplaceText: "fugiat",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "ab",
                        ImageReplaceMethod: "CENTER_CROP",
                        URI: "https://late-in-laws.net",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "deleniti",
                        NamedRangeName: "omnis",
                        Text: "necessitatibus",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 714697,
                            RowSpan: 990339,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 469497,
                                RowIndex: 216897,
                                TableStartLocation: &shared.Location{
                                    Index: 456015,
                                    SegmentID: "id",
                                },
                            },
                        },
                    },
                    UpdateDocumentStyle: &shared.UpdateDocumentStyleRequest{
                        DocumentStyle: &shared.DocumentStyle{
                            Background: &shared.Background{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9064.18,
                                            Green: 2633.22,
                                            Red: 1372.2,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "perferendis",
                            DefaultHeaderID: "amet",
                            EvenPageFooterID: "optio",
                            EvenPageHeaderID: "accusamus",
                            FirstPageFooterID: "ad",
                            FirstPageHeaderID: "saepe",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 3834.64,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 5883.17,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 8310.49,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 6289.82,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 8726.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 2735.42,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 798047,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 8853.38,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6798.8,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "esse",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "harum",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2155.07,
                                            Green: 7887.4,
                                            Red: 9473.71,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 7308.56,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2539.41,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2133.12,
                                            Green: 9574.51,
                                            Red: 5182.01,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 256.62,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2074.7,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4246.85,
                                            Green: 7304.42,
                                            Red: 3741.7,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 4635.75,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2776.28,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5867.84,
                                            Green: 8075.81,
                                            Red: 8638.56,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 1175.31,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5173.79,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1320.68,
                                            Green: 1749.09,
                                            Red: 7168.6,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 3960.6,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5654.21,
                                    Unit: "PT",
                                },
                            },
                            Direction: "CONTENT_DIRECTION_UNSPECIFIED",
                            HeadingID: "neque",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 1448.47,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 4880.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 3556.13,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 9404.32,
                            NamedStyleType: "NAMED_STYLE_TYPE_UNSPECIFIED",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7653.26,
                                            Green: 7469.94,
                                            Red: 7486.64,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 925.96,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 2174.5,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 5844.76,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 2091.57,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "START",
                                    Offset: &shared.Dimension{
                                        Magnitude: 2408.29,
                                        Unit: "PT",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 100294,
                            SegmentID: "quae",
                            StartIndex: 16429,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "quas",
                        Range: &shared.Range{
                            EndIndex: 929530,
                            SegmentID: "consequatur",
                            StartIndex: 669917,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 7851.53,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 2817.3,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 5864.1,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 639.55,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 4856.28,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 9774.96,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 8765.06,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 3381.59,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "BETWEEN_EACH_COLUMN",
                            ContentDirection: "LEFT_TO_RIGHT",
                            DefaultFooterID: "consectetur",
                            DefaultHeaderID: "vero",
                            EvenPageFooterID: "tenetur",
                            EvenPageHeaderID: "dignissimos",
                            FirstPageFooterID: "hic",
                            FirstPageHeaderID: "distinctio",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 7992.03,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 6304.48,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 8742.88,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 2930.2,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 8489.44,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 6178.77,
                                Unit: "PT",
                            },
                            PageNumberStart: 13236,
                            SectionType: "NEXT_PAGE",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "exercitationem",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 8623.1,
                                        Green: 1481.41,
                                        Red: 7804.27,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9818.3,
                                            Green: 9850.33,
                                            Red: 4783.7,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 4973.91,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6394.73,
                                            Green: 2694.79,
                                            Red: 3685.84,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 1369,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8221.18,
                                            Green: 2978.42,
                                            Red: 1898.48,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 5113.19,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2243.17,
                                            Green: 9807,
                                            Red: 978.44,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 8621.92,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 972920,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 9608.35,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 9065.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 7740.48,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 3331.45,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 81101,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 301831,
                            RowSpan: 407241,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 775220,
                                RowIndex: 232234,
                                TableStartLocation: &shared.Location{
                                    Index: 926213,
                                    SegmentID: "aspernatur",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 325310,
                            SegmentID: "eaque",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            725595,
                            13948,
                            11427,
                            533466,
                        },
                        Fields: "impedit",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 3045.82,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "FIXED_WIDTH",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 79522,
                            SegmentID: "non",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "et",
                        RowIndices: []int{
                            672048,
                            810424,
                            245367,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 4321.48,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 752135,
                            SegmentID: "quas",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "assumenda",
                        Range: &shared.Range{
                            EndIndex: 860552,
                            SegmentID: "voluptas",
                            StartIndex: 727044,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 965.49,
                                        Green: 2703.28,
                                        Red: 2561.39,
                                    },
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 5919.35,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 4764.77,
                                        Green: 3015.98,
                                        Red: 4879.35,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "eius",
                                HeadingID: "esse",
                                URL: "esse",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "rem",
                                Weight: 683282,
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "reprehenderit",
                TargetRevisionID: "quidem",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Documents.DocsDocumentsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Documents

* `DocsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `DocsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `DocsDocumentsGet` - Gets the latest version of the specified document.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
