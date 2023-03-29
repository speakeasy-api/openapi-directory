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
            DocumentID: "unde",
        },
        QueryParams: operations.DocsDocumentsBatchUpdateQueryParams{
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
        Request: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 437587,
                            SegmentID: "ullam",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "inventore",
                        },
                        Location: &shared.Location{
                            Index: 963663,
                            SegmentID: "enim",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 383441,
                            SegmentID: "voluptatum",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "vel",
                        Range: &shared.Range{
                            EndIndex: 528895,
                            SegmentID: "deleniti",
                            StartIndex: 568045,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW3D_CIRCLE_SQUARE",
                        Range: &shared.Range{
                            EndIndex: 925597,
                            SegmentID: "quo",
                            StartIndex: 71036,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 337396,
                            SegmentID: "dicta",
                            StartIndex: 648172,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "voluptatem",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "consequatur",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "fugiat",
                        NamedRangeID: "a",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 778157,
                            SegmentID: "eos",
                            StartIndex: 870013,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "accusamus",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 978619,
                            RowIndex: 473608,
                            TableStartLocation: &shared.Location{
                                Index: 799159,
                                SegmentID: "et",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 461479,
                            RowIndex: 520478,
                            TableStartLocation: &shared.Location{
                                Index: 780529,
                                SegmentID: "soluta",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "sed",
                        },
                        Location: &shared.Location{
                            Index: 720633,
                            SegmentID: "rerum",
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
                        URI: "https://jovany.com",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "esse",
                        },
                        Location: &shared.Location{
                            Index: 473600,
                            SegmentID: "voluptatem",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "amet",
                        },
                        Location: &shared.Location{
                            Index: 774234,
                            SegmentID: "id",
                        },
                        SectionType: "CONTINUOUS",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 216550,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "similique",
                        },
                        Location: &shared.Location{
                            Index: 135218,
                            SegmentID: "sit",
                        },
                        Rows: 324141,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 617636,
                            RowIndex: 149675,
                            TableStartLocation: &shared.Location{
                                Index: 612096,
                                SegmentID: "modi",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 616934,
                            RowIndex: 386489,
                            TableStartLocation: &shared.Location{
                                Index: 943749,
                                SegmentID: "ut",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "soluta",
                        },
                        Location: &shared.Location{
                            Index: 449950,
                            SegmentID: "ea",
                        },
                        Text: "laborum",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 437032,
                            RowSpan: 902349,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 697631,
                                RowIndex: 99280,
                                TableStartLocation: &shared.Location{
                                    Index: 60225,
                                    SegmentID: "ut",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 666767,
                        TableStartLocation: &shared.Location{
                            Index: 653140,
                            SegmentID: "libero",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "ipsum",
                        },
                        ReplaceText: "non",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "ea",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "https://emerson.name",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "commodi",
                        NamedRangeName: "quia",
                        Text: "similique",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 38425,
                            RowSpan: 438601,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 634274,
                                RowIndex: 988374,
                                TableStartLocation: &shared.Location{
                                    Index: 958950,
                                    SegmentID: "aut",
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
                                            Blue: 6527.9,
                                            Green: 2088.76,
                                            Red: 6350.59,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "neque",
                            DefaultHeaderID: "asperiores",
                            EvenPageFooterID: "et",
                            EvenPageHeaderID: "culpa",
                            FirstPageFooterID: "aliquam",
                            FirstPageHeaderID: "esse",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 4663.11,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 2444.25,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 1589.69,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 1103.75,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 6563.3,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 1381.83,
                                Unit: "PT",
                            },
                            PageNumberStart: 196582,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9495.72,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6625.27,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "perferendis",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "aspernatur",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "END",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
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
                            BorderBottom: &shared.ParagraphBorder{
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
                            BorderLeft: &shared.ParagraphBorder{
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
                            BorderRight: &shared.ParagraphBorder{
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
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5666.02,
                                            Green: 8651.03,
                                            Red: 2653.89,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 5232.48,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 939.4,
                                    Unit: "PT",
                                },
                            },
                            Direction: "LEFT_TO_RIGHT",
                            HeadingID: "vitae",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 9292.97,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 3185.69,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 6674.11,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 1317.97,
                            NamedStyleType: "HEADING_3",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7163.27,
                                            Green: 8413.86,
                                            Red: 2894.06,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 2647.3,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 3978.21,
                                Unit: "PT",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 8289.4,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 4695,
                            SegmentID: "ratione",
                            StartIndex: 677817,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "similique",
                        Range: &shared.Range{
                            EndIndex: 270008,
                            SegmentID: "nihil",
                            StartIndex: 735194,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 9621.89,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 2487.53,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 5761.57,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 5920.42,
                                        Unit: "PT",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "LEFT_TO_RIGHT",
                            DefaultFooterID: "modi",
                            DefaultHeaderID: "necessitatibus",
                            EvenPageFooterID: "tenetur",
                            EvenPageHeaderID: "soluta",
                            FirstPageFooterID: "ducimus",
                            FirstPageHeaderID: "ducimus",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 8464.09,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 6994.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 2974.37,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 8137.98,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 3965.06,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 8811.04,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 581273,
                            SectionType: "SECTION_TYPE_UNSPECIFIED",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "aut",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 9654.17,
                                        Green: 6925.32,
                                        Red: 5884.65,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7252.55,
                                            Green: 6596.69,
                                            Red: 5013.24,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 9560.84,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6439.9,
                                            Green: 3948.69,
                                            Red: 4238.55,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 6063.93,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 191.93,
                                            Green: 4701.32,
                                            Red: 3015.75,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 6601.74,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 2900.77,
                                            Green: 3834.62,
                                            Red: 6180.16,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 4287.69,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 135474,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 2982.82,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 5699.65,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 5908.73,
                                Unit: "PT",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 5743.25,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 653201,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 968962,
                            RowSpan: 652103,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 320997,
                                RowIndex: 431418,
                                TableStartLocation: &shared.Location{
                                    Index: 221262,
                                    SegmentID: "eveniet",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 141264,
                            SegmentID: "consequatur",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            435865,
                        },
                        Fields: "maiores",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 8919.24,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "FIXED_WIDTH",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 537023,
                            SegmentID: "nihil",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "ducimus",
                        RowIndices: []int{
                            99569,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 9194.83,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 714242,
                            SegmentID: "totam",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "repellat",
                        Range: &shared.Range{
                            EndIndex: 841140,
                            SegmentID: "voluptatem",
                            StartIndex: 904648,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 8681.26,
                                        Green: 375.59,
                                        Red: 1624.93,
                                    },
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 6155.6,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 1238.2,
                                        Green: 7790.51,
                                        Red: 8480.09,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "et",
                                HeadingID: "consequatur",
                                URL: "velit",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "similique",
                                Weight: 139972,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 407183,
                            SegmentID: "aperiam",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "voluptatibus",
                        },
                        Location: &shared.Location{
                            Index: 697429,
                            SegmentID: "quis",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 453543,
                            SegmentID: "quam",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "ab",
                        Range: &shared.Range{
                            EndIndex: 866383,
                            SegmentID: "consequatur",
                            StartIndex: 975522,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_GLYPH_PRESET_UNSPECIFIED",
                        Range: &shared.Range{
                            EndIndex: 855804,
                            SegmentID: "incidunt",
                            StartIndex: 11714,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 764912,
                            SegmentID: "ea",
                            StartIndex: 944124,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "qui",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "placeat",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "ipsum",
                        NamedRangeID: "laboriosam",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 521037,
                            SegmentID: "corrupti",
                            StartIndex: 54338,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "laboriosam",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 199996,
                            RowIndex: 179490,
                            TableStartLocation: &shared.Location{
                                Index: 18521,
                                SegmentID: "ipsum",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 793698,
                            RowIndex: 463451,
                            TableStartLocation: &shared.Location{
                                Index: 223924,
                                SegmentID: "officiis",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "nisi",
                        },
                        Location: &shared.Location{
                            Index: 944120,
                            SegmentID: "non",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 6082.53,
                                Unit: "PT",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 5966.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "https://casimir.name",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dolorum",
                        },
                        Location: &shared.Location{
                            Index: 50370,
                            SegmentID: "in",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "cumque",
                        },
                        Location: &shared.Location{
                            Index: 237893,
                            SegmentID: "asperiores",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 267262,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "laborum",
                        },
                        Location: &shared.Location{
                            Index: 679091,
                            SegmentID: "sed",
                        },
                        Rows: 864282,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 589910,
                            RowIndex: 750844,
                            TableStartLocation: &shared.Location{
                                Index: 730122,
                                SegmentID: "delectus",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 311945,
                            RowIndex: 554242,
                            TableStartLocation: &shared.Location{
                                Index: 398221,
                                SegmentID: "non",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "non",
                        },
                        Location: &shared.Location{
                            Index: 222443,
                            SegmentID: "amet",
                        },
                        Text: "eius",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 944373,
                            RowSpan: 569574,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 739551,
                                RowIndex: 452109,
                                TableStartLocation: &shared.Location{
                                    Index: 490459,
                                    SegmentID: "ut",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 227414,
                        TableStartLocation: &shared.Location{
                            Index: 680545,
                            SegmentID: "aliquam",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "dicta",
                        },
                        ReplaceText: "inventore",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "inventore",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "http://elvis.org",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "optio",
                        NamedRangeName: "reiciendis",
                        Text: "vel",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 617658,
                            RowSpan: 179603,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 542499,
                                RowIndex: 24678,
                                TableStartLocation: &shared.Location{
                                    Index: 854614,
                                    SegmentID: "et",
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
                                            Blue: 7438.35,
                                            Green: 6793.93,
                                            Red: 4785.96,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "qui",
                            DefaultHeaderID: "cum",
                            EvenPageFooterID: "sed",
                            EvenPageHeaderID: "est",
                            FirstPageFooterID: "eveniet",
                            FirstPageHeaderID: "quo",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 9903.39,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 2168.97,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 6630.78,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 2633.22,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 206.51,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 7583.79,
                                Unit: "PT",
                            },
                            PageNumberStart: 320017,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 9044.25,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 6457.85,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "quia",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "eum",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 6289.82,
                                            Green: 0.55,
                                            Red: 8726.51,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 2735.42,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 7980.47,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
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
                            BorderLeft: &shared.ParagraphBorder{
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
                            BorderRight: &shared.ParagraphBorder{
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
                            BorderTop: &shared.ParagraphBorder{
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
                            Direction: "RIGHT_TO_LEFT",
                            HeadingID: "placeat",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 1175.31,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 5173.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 1320.68,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: false,
                            LineSpacing: 7168.6,
                            NamedStyleType: "HEADING_4",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3960.6,
                                            Green: 4631.5,
                                            Red: 5654.21,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 8404.29,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 2048.65,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 3556.13,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 304.52,
                                        Unit: "PT",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 746994,
                            SegmentID: "placeat",
                            StartIndex: 92596,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "et",
                        Range: &shared.Range{
                            EndIndex: 217450,
                            SegmentID: "vitae",
                            StartIndex: 749255,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 7316.94,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 456.14,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 2091.57,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 2869.15,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 6772.63,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 630.38,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "aut",
                            DefaultHeaderID: "libero",
                            EvenPageFooterID: "fugiat",
                            EvenPageHeaderID: "repellendus",
                            FirstPageFooterID: "maiores",
                            FirstPageHeaderID: "veniam",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 7034.95,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 1816.31,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 5123.93,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 5804.47,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 7875.42,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 6064.76,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 218403,
                            SectionType: "NEXT_PAGE",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "blanditiis",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 2317.01,
                                        Green: 8788.7,
                                        Red: 9493.19,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 4922.68,
                                            Green: 9413.78,
                                            Red: 7155.61,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 4861.6,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 7085.48,
                                            Green: 8742.88,
                                            Red: 4981.4,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 8445.5,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 1943.42,
                                            Green: 6178.77,
                                            Red: 7733.26,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 9742.59,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 8623.1,
                                            Green: 1481.41,
                                            Red: 7804.27,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 9850.33,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            ColumnSpan: 753570,
                            ContentAlignment: "TOP",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 40.48,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 2694.79,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 4104.92,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 4282.24,
                                Unit: "PT",
                            },
                            RowSpan: 297842,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 189848,
                            RowSpan: 401132,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 511319,
                                RowIndex: 120657,
                                TableStartLocation: &shared.Location{
                                    Index: 224317,
                                    SegmentID: "voluptatibus",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 97844,
                            SegmentID: "voluptate",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            569211,
                            972920,
                            343605,
                            960835,
                        },
                        Fields: "temporibus",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 9065.56,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "FIXED_WIDTH",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 359271,
                            SegmentID: "sit",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "in",
                        RowIndices: []int{
                            301831,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 4072.41,
                                Unit: "PT",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 232234,
                            SegmentID: "molestiae",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "magni",
                        Range: &shared.Range{
                            EndIndex: 325310,
                            SegmentID: "illo",
                            StartIndex: 952871,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 7255.95,
                                        Green: 139.48,
                                        Red: 114.27,
                                    },
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 7705.81,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 1469.46,
                                        Green: 8828.6,
                                        Red: 795.22,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "magnam",
                                HeadingID: "sunt",
                                URL: "cum",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "tempore",
                                Weight: 810424,
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "dolore",
                TargetRevisionID: "et",
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
