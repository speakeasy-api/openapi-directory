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
        DollarXgafv: "2",
        BatchUpdateDocumentRequest: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 715190,
                            SegmentID: "quibusdam",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "nulla",
                        },
                        Location: &shared.Location{
                            Index: 544883,
                            SegmentID: "illum",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 423655,
                            SegmentID: "error",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "suscipit",
                        Range: &shared.Range{
                            EndIndex: 437587,
                            SegmentID: "magnam",
                            StartIndex: 891773,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_GLYPH_PRESET_UNSPECIFIED",
                        Range: &shared.Range{
                            EndIndex: 963663,
                            SegmentID: "tempora",
                            StartIndex: 383441,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 477665,
                            SegmentID: "minus",
                            StartIndex: 812169,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "voluptatum",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "iusto",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "excepturi",
                        NamedRangeID: "nisi",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 925597,
                            SegmentID: "temporibus",
                            StartIndex: 71036,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "quis",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 87129,
                            RowIndex: 648172,
                            TableStartLocation: &shared.Location{
                                Index: 20218,
                                SegmentID: "ipsam",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 832620,
                            RowIndex: 957156,
                            TableStartLocation: &shared.Location{
                                Index: 778157,
                                SegmentID: "odit",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "at",
                        },
                        Location: &shared.Location{
                            Index: 870088,
                            SegmentID: "maiores",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 4736.08,
                                Unit: "PT",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 8009.11,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "https://soulful-poppy.com",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "nam",
                        },
                        Location: &shared.Location{
                            Index: 639921,
                            SegmentID: "occaecati",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "fugit",
                        },
                        Location: &shared.Location{
                            Index: 537373,
                            SegmentID: "hic",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 521848,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "beatae",
                        },
                        Location: &shared.Location{
                            Index: 414662,
                            SegmentID: "molestiae",
                        },
                        Rows: 264555,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 186332,
                            RowIndex: 774234,
                            TableStartLocation: &shared.Location{
                                Index: 736918,
                                SegmentID: "esse",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 216550,
                            RowIndex: 568434,
                            TableStartLocation: &shared.Location{
                                Index: 135218,
                                SegmentID: "perferendis",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "ad",
                        },
                        Location: &shared.Location{
                            Index: 617636,
                            SegmentID: "sed",
                        },
                        Text: "iste",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 222321,
                            RowSpan: 616934,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 386489,
                                RowIndex: 943749,
                                TableStartLocation: &shared.Location{
                                    Index: 902599,
                                    SegmentID: "fuga",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 449950,
                        TableStartLocation: &shared.Location{
                            Index: 359508,
                            SegmentID: "iste",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "iure",
                        },
                        ReplaceText: "saepe",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "quidem",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "http://wiggly-plane.name",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "laborum",
                        NamedRangeName: "dolores",
                        Text: "dolorem",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 358152,
                            RowSpan: 128926,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 750686,
                                RowIndex: 315428,
                                TableStartLocation: &shared.Location{
                                    Index: 607831,
                                    SegmentID: "nemo",
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
                                            Blue: 3250.47,
                                            Green: 5701.97,
                                            Red: 384.25,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "iure",
                            DefaultHeaderID: "culpa",
                            EvenPageFooterID: "doloribus",
                            EvenPageHeaderID: "sapiente",
                            FirstPageFooterID: "architecto",
                            FirstPageHeaderID: "mollitia",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 2088.76,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 1613.09,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 6531.08,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 2532.91,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 4663.11,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 2444.25,
                                Unit: "PT",
                            },
                            PageNumberStart: 158969,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 3380.07,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6747.52,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "enim",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "odit",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "END",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1965.82,
                                            Green: 9495.72,
                                            Red: 3687.25,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 8209.94,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 971.01,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8379.45,
                                            Green: 6736.6,
                                            Red: 960.98,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 9764.6,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4686.51,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9767.62,
                                            Green: 557.14,
                                            Red: 6048.46,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 7392.64,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 391.87,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2828.07,
                                            Green: 9795.87,
                                            Red: 1201.96,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 2961.4,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1187.27,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3179.83,
                                            Green: 8804.76,
                                            Red: 4142.63,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 641.47,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6924.72,
                                    Unit: "PT",
                                },
                            },
                            Direction: "LEFT_TO_RIGHT",
                            HeadingID: "pariatur",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 2653.89,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 5232.48,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 939.4,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 5759.47,
                            NamedStyleType: "NAMED_STYLE_TYPE_UNSPECIFIED",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9292.97,
                                            Green: 2777.18,
                                            Red: 3185.69,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 93.56,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 8423.42,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 2894.06,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 3978.21,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 201.07,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 828940,
                            SegmentID: "ipsam",
                            StartIndex: 4695,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "fugit",
                        Range: &shared.Range{
                            EndIndex: 677817,
                            SegmentID: "excepturi",
                            StartIndex: 270008,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 7351.94,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 9621.89,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 2487.53,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 5761.57,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 5920.42,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 5722.52,
                                        Unit: "PT",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "COLUMN_SEPARATOR_STYLE_UNSPECIFIED",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "a",
                            DefaultHeaderID: "dolorum",
                            EvenPageFooterID: "in",
                            EvenPageHeaderID: "in",
                            FirstPageFooterID: "illum",
                            FirstPageHeaderID: "maiores",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 6994.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 2974.37,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 8137.98,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 3965.06,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 8811.04,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 5812.73,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 881736,
                            SectionType: "NEXT_PAGE",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "quidem",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 5884.65,
                                        Green: 7252.55,
                                        Red: 6596.69,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5013.24,
                                            Green: 5332.06,
                                            Red: 9560.84,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 6439.9,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4238.55,
                                            Green: 6188.09,
                                            Red: 6063.93,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 191.93,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3015.75,
                                            Green: 7160.75,
                                            Red: 6601.74,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 2900.77,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6180.16,
                                            Green: 7491.7,
                                            Red: 4287.69,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 1354.74,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            ColumnSpan: 298282,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 5699.65,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 5908.73,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 5743.25,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 6532.01,
                                Unit: "PT",
                            },
                            RowSpan: 652103,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 320997,
                            RowSpan: 431418,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 221262,
                                RowIndex: 896547,
                                TableStartLocation: &shared.Location{
                                    Index: 141264,
                                    SegmentID: "nemo",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 97260,
                            SegmentID: "iure",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            891924,
                            260341,
                            806194,
                            537023,
                        },
                        Fields: "facilis",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 4479.26,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "WIDTH_TYPE_UNSPECIFIED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 919483,
                            SegmentID: "ullam",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "expedita",
                        RowIndices: []int{
                            998848,
                            841140,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 1494.48,
                                Unit: "PT",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 868126,
                            SegmentID: "accusantium",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "consequuntur",
                        Range: &shared.Range{
                            EndIndex: 508315,
                            SegmentID: "natus",
                            StartIndex: 166847,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 1238.2,
                                        Green: 7790.51,
                                        Red: 8480.09,
                                    },
                                },
                            },
                            BaselineOffset: "SUBSCRIPT",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 8073.19,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 5691.01,
                                        Green: 1399.72,
                                        Red: 4071.83,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "accusantium",
                                HeadingID: "ab",
                                URL: "maiores",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "quidem",
                                Weight: 373291,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 453543,
                            SegmentID: "autem",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "eaque",
                        },
                        Location: &shared.Location{
                            Index: 866383,
                            SegmentID: "nemo",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 975522,
                            SegmentID: "perferendis",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "amet",
                        Range: &shared.Range{
                            EndIndex: 11714,
                            SegmentID: "cumque",
                            StartIndex: 359978,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "NUMBERED_ZERODECIMAL_ALPHA_ROMAN",
                        Range: &shared.Range{
                            EndIndex: 729991,
                            SegmentID: "nobis",
                            StartIndex: 171629,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 339404,
                            SegmentID: "totam",
                            StartIndex: 489549,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "eaque",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "quis",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "nesciunt",
                        NamedRangeID: "eos",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 18521,
                            SegmentID: "dolores",
                            StartIndex: 793698,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "quam",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 223924,
                            RowIndex: 874573,
                            TableStartLocation: &shared.Location{
                                Index: 345352,
                                SegmentID: "hic",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 928082,
                            RowIndex: 608253,
                            TableStartLocation: &shared.Location{
                                Index: 704415,
                                SegmentID: "perspiciatis",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "voluptatem",
                        },
                        Location: &shared.Location{
                            Index: 783645,
                            SegmentID: "consequuntur",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 5000.26,
                                Unit: "PT",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 503.7,
                                Unit: "PT",
                            },
                        },
                        URI: "https://enraged-wrench.org",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "modi",
                        },
                        Location: &shared.Location{
                            Index: 613966,
                            SegmentID: "dolorum",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "deleniti",
                        },
                        Location: &shared.Location{
                            Index: 864282,
                            SegmentID: "provident",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 730122,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "delectus",
                        },
                        Location: &shared.Location{
                            Index: 311945,
                            SegmentID: "quos",
                        },
                        Rows: 398221,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 212390,
                            RowIndex: 209843,
                            TableStartLocation: &shared.Location{
                                Index: 222443,
                                SegmentID: "qui",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 218749,
                            RowIndex: 944373,
                            TableStartLocation: &shared.Location{
                                Index: 569574,
                                SegmentID: "cum",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "voluptate",
                        },
                        Location: &shared.Location{
                            Index: 490459,
                            SegmentID: "reiciendis",
                        },
                        Text: "amet",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 680545,
                            RowSpan: 254356,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 85295,
                                RowIndex: 58029,
                                TableStartLocation: &shared.Location{
                                    Index: 56418,
                                    SegmentID: "iure",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 487838,
                        TableStartLocation: &shared.Location{
                            Index: 311796,
                            SegmentID: "accusamus",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "quidem",
                        },
                        ReplaceText: "voluptatibus",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "voluptas",
                        ImageReplaceMethod: "CENTER_CROP",
                        URI: "http://monstrous-ambassador.org",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "ab",
                        NamedRangeName: "soluta",
                        Text: "dolorum",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 478596,
                            RowSpan: 453697,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 677082,
                                RowIndex: 536579,
                                TableStartLocation: &shared.Location{
                                    Index: 607045,
                                    SegmentID: "necessitatibus",
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
                                            Blue: 7146.97,
                                            Green: 9903.39,
                                            Red: 4694.97,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "ipsum",
                            DefaultHeaderID: "voluptate",
                            EvenPageFooterID: "id",
                            EvenPageHeaderID: "saepe",
                            FirstPageFooterID: "eius",
                            FirstPageHeaderID: "aspernatur",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 206.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 7583.79,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 3200.17,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 3834.64,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 5883.17,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 8310.49,
                                Unit: "PT",
                            },
                            PageNumberStart: 628982,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 0.55,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 3118.6,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "vel",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "quod",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "JUSTIFIED",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1856.36,
                                            Green: 6798.8,
                                            Red: 9527.92,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 6874.88,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2155.07,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9473.71,
                                            Green: 2294.42,
                                            Red: 7308.56,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 2539.41,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2133.12,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5182.01,
                                            Green: 4717.52,
                                            Red: 256.62,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 2074.7,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 4246.85,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3741.7,
                                            Green: 6462.65,
                                            Red: 4635.75,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 2776.28,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 5867.84,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8638.56,
                                            Green: 7470.8,
                                            Red: 1175.31,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 5173.79,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1320.68,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "RIGHT_TO_LEFT",
                            HeadingID: "facilis",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 3960.6,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 5654.21,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 1832.8,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 1448.47,
                            NamedStyleType: "NORMAL_TEXT",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4880.56,
                                            Green: 1248.33,
                                            Red: 3556.13,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 7220.81,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 304.52,
                                Unit: "PT",
                            },
                            SpacingMode: "COLLAPSE_LISTS",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 9037.2,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 7492.55,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 5844.76,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 961937,
                            SegmentID: "dolorem",
                            StartIndex: 292147,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "labore",
                        Range: &shared.Range{
                            EndIndex: 240829,
                            SegmentID: "dolorum",
                            StartIndex: 100294,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 164.29,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 9295.3,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "BETWEEN_EACH_COLUMN",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "porro",
                            DefaultHeaderID: "doloribus",
                            EvenPageFooterID: "ut",
                            EvenPageHeaderID: "facilis",
                            FirstPageFooterID: "cupiditate",
                            FirstPageHeaderID: "qui",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 639.55,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 4856.28,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 9774.96,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 8765.06,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 3381.59,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 9615.71,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 231701,
                            SectionType: "NEXT_PAGE",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "tenetur",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 4922.68,
                                        Green: 9413.78,
                                        Red: 7155.61,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7992.03,
                                            Green: 4861.6,
                                            Red: 6304.48,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 8742.88,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2930.2,
                                            Green: 8445.5,
                                            Red: 8489.44,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 6178.77,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 132.36,
                                            Green: 9742.59,
                                            Red: 3472.33,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 1481.41,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
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
                            ColumnSpan: 639473,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 3685.84,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 1369,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 8221.18,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 1898.48,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 511319,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 120657,
                            RowSpan: 224317,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 980700,
                                RowIndex: 97844,
                                TableStartLocation: &shared.Location{
                                    Index: 406120,
                                    SegmentID: "nulla",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 569211,
                            SegmentID: "voluptatibus",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            960835,
                            788873,
                        },
                        Fields: "saepe",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 4113.72,
                                Unit: "PT",
                            },
                            WidthType: "EVENLY_DISTRIBUTED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 333145,
                            SegmentID: "aliquid",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "inventore",
                        RowIndices: []int{
                            407241,
                            775220,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 2322.34,
                                Unit: "PT",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 132487,
                            SegmentID: "minima",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "eaque",
                        Range: &shared.Range{
                            EndIndex: 952871,
                            SegmentID: "libero",
                            StartIndex: 13948,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 114.27,
                                        Green: 5334.66,
                                        Red: 7705.81,
                                    },
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 1469.46,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 795.22,
                                        Green: 2506.22,
                                        Red: 896.03,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "dolorum",
                                HeadingID: "laborum",
                                URL: "placeat",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "velit",
                                Weight: 432148,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 420539,
                            SegmentID: "nobis",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "assumenda",
                        },
                        Location: &shared.Location{
                            Index: 860552,
                            SegmentID: "voluptas",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 727044,
                            SegmentID: "quasi",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "numquam",
                        Range: &shared.Range{
                            EndIndex: 131482,
                            SegmentID: "provident",
                            StartIndex: 55374,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_LEFTTRIANGLE_DIAMOND_DISC",
                        Range: &shared.Range{
                            EndIndex: 301598,
                            SegmentID: "odio",
                            StartIndex: 262118,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 458515,
                            SegmentID: "esse",
                            StartIndex: 524593,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "fuga",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "reprehenderit",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "quidem",
                        NamedRangeID: "fugiat",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 283519,
                            SegmentID: "eum",
                            StartIndex: 379927,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "assumenda",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 181151,
                            RowIndex: 509342,
                            TableStartLocation: &shared.Location{
                                Index: 788546,
                                SegmentID: "veritatis",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 56848,
                            RowIndex: 660040,
                            TableStartLocation: &shared.Location{
                                Index: 696997,
                                SegmentID: "neque",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "quo",
                        },
                        Location: &shared.Location{
                            Index: 847276,
                            SegmentID: "quo",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 6813.59,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 1783.67,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "http://official-admin.biz",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "debitis",
                        },
                        Location: &shared.Location{
                            Index: 370853,
                            SegmentID: "aspernatur",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "sequi",
                        },
                        Location: &shared.Location{
                            Index: 779192,
                            SegmentID: "esse",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 44612,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "distinctio",
                        },
                        Location: &shared.Location{
                            Index: 799796,
                            SegmentID: "dignissimos",
                        },
                        Rows: 76956,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 469498,
                            RowIndex: 518835,
                            TableStartLocation: &shared.Location{
                                Index: 882710,
                                SegmentID: "aliquam",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 488410,
                            RowIndex: 577543,
                            TableStartLocation: &shared.Location{
                                Index: 414567,
                                SegmentID: "sapiente",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dolores",
                        },
                        Location: &shared.Location{
                            Index: 645570,
                            SegmentID: "molestiae",
                        },
                        Text: "accusantium",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 783648,
                            RowSpan: 430402,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 556429,
                                RowIndex: 510017,
                                TableStartLocation: &shared.Location{
                                    Index: 159867,
                                    SegmentID: "deleniti",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 143829,
                        TableStartLocation: &shared.Location{
                            Index: 681393,
                            SegmentID: "mollitia",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "incidunt",
                        },
                        ReplaceText: "atque",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "explicabo",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "http://costly-vicinity.com",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "ratione",
                        NamedRangeName: "explicabo",
                        Text: "saepe",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 578922,
                            RowSpan: 543806,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 92260,
                                RowIndex: 456911,
                                TableStartLocation: &shared.Location{
                                    Index: 910545,
                                    SegmentID: "accusamus",
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
                                            Blue: 829.71,
                                            Green: 4586.04,
                                            Red: 8003.79,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "nam",
                            DefaultHeaderID: "vero",
                            EvenPageFooterID: "aliquid",
                            EvenPageHeaderID: "quasi",
                            FirstPageFooterID: "saepe",
                            FirstPageHeaderID: "vel",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 6900.25,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 6996.22,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 3277.2,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 7567.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 6360.61,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 2400.2,
                                Unit: "PT",
                            },
                            PageNumberStart: 160538,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 97.66,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 3082.86,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "consectetur",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "esse",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5909.84,
                                            Green: 9537.22,
                                            Red: 8577.23,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 4572.23,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 9518.75,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5757.51,
                                            Green: 8630.23,
                                            Red: 8207.67,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 9088.44,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 8155.24,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1594.14,
                                            Green: 944.58,
                                            Red: 6288.99,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 3984.34,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 627.13,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4240.32,
                                            Green: 4473.78,
                                            Red: 2586.84,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 8490.39,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 333.04,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 9589.83,
                                            Green: 1197.71,
                                            Red: 3553.69,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 3567.07,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 163.28,
                                    Unit: "PT",
                                },
                            },
                            Direction: "CONTENT_DIRECTION_UNSPECIFIED",
                            HeadingID: "quibusdam",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 4012.59,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 9292.92,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 996.15,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 9453.02,
                            NamedStyleType: "NAMED_STYLE_TYPE_UNSPECIFIED",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8694.89,
                                            Green: 920.27,
                                            Red: 4541.62,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 559.65,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 865.32,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 330.74,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 5130.75,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 680.74,
                                        Unit: "PT",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 251941,
                            SegmentID: "voluptatem",
                            StartIndex: 221161,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "occaecati",
                        Range: &shared.Range{
                            EndIndex: 253191,
                            SegmentID: "impedit",
                            StartIndex: 131055,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 120.36,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 1154.84,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 6184.8,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 9742.57,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "BETWEEN_EACH_COLUMN",
                            ContentDirection: "CONTENT_DIRECTION_UNSPECIFIED",
                            DefaultFooterID: "ea",
                            DefaultHeaderID: "quaerat",
                            EvenPageFooterID: "consequuntur",
                            EvenPageHeaderID: "repellendus",
                            FirstPageFooterID: "officia",
                            FirstPageHeaderID: "maxime",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 4903.05,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 9894.1,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 653.04,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 7832.35,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 2883.98,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 2414.18,
                                Unit: "PT",
                            },
                            PageNumberStart: 662505,
                            SectionType: "CONTINUOUS",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "velit",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 6339.31,
                                        Green: 6658.59,
                                        Red: 9268.8,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5173.09,
                                            Green: 8539.4,
                                            Red: 4240.89,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 5546.88,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2870.51,
                                            Green: 8225.6,
                                            Red: 7065.75,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 4148.57,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3605.45,
                                            Green: 9689.04,
                                            Red: 8286.57,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 9249.67,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 460.07,
                                            Green: 7386.83,
                                            Red: 2326.27,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 3485.19,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 814967,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSUPPORTED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 9854.92,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 9689.72,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 9049.49,
                                Unit: "PT",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 2965.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 992012,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 241545,
                            RowSpan: 249420,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 228263,
                                RowIndex: 105906,
                                TableStartLocation: &shared.Location{
                                    Index: 489509,
                                    SegmentID: "a",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 891523,
                            SegmentID: "consectetur",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            689768,
                            385237,
                        },
                        Fields: "ipsa",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 9167.27,
                                Unit: "PT",
                            },
                            WidthType: "WIDTH_TYPE_UNSPECIFIED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 881721,
                            SegmentID: "similique",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "tempora",
                        RowIndices: []int{
                            379057,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 3742.44,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 324405,
                            SegmentID: "nobis",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "dolorum",
                        Range: &shared.Range{
                            EndIndex: 237807,
                            SegmentID: "minus",
                            StartIndex: 171853,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 5039.34,
                                        Green: 4492.92,
                                        Red: 2962.42,
                                    },
                                },
                            },
                            BaselineOffset: "NONE",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 8859.63,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 3518.7,
                                        Green: 2377.42,
                                        Red: 7383.91,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "blanditiis",
                                HeadingID: "quas",
                                URL: "hic",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "nesciunt",
                                Weight: 633998,
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "corrupti",
                TargetRevisionID: "pariatur",
            },
        },
        AccessToken: "totam",
        Alt: "proto",
        Callback: "exercitationem",
        DocumentID: "nobis",
        Fields: "sit",
        Key: "rerum",
        OauthToken: "sed",
        PrettyPrint: false,
        QuotaUser: "reiciendis",
        UploadType: "explicabo",
        UploadProtocol: "asperiores",
    }

    ctx := context.Background()
    res, err := s.Documents.DocsDocumentsBatchUpdate(ctx, req, operations.DocsDocumentsBatchUpdateSecurity{
        Option1: &operations.DocsDocumentsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
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
## Available Resources and Operations


### Documents

* `DocsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `DocsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `DocsDocumentsGet` - Gets the latest version of the specified document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
