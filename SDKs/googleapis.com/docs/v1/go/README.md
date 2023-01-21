# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            DocumentID: "sit",
        },
        QueryParams: operations.DocsDocumentsBatchUpdateQueryParams{
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
        Request: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 2518412263346885298,
                            SegmentID: "voluptatum",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "ut",
                        },
                        Location: &shared.Location{
                            Index: 161231572858529631,
                            SegmentID: "et",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 7373105480197164748,
                            SegmentID: "iste",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "totam",
                        Range: &shared.Range{
                            EndIndex: 2217592893536642650,
                            SegmentID: "illum",
                            StartIndex: 6392442863481646880,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_GLYPH_PRESET_UNSPECIFIED",
                        Range: &shared.Range{
                            EndIndex: 2627038740284806767,
                            SegmentID: "dolore",
                            StartIndex: 4035568504096476779,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 959367522974354090,
                            SegmentID: "accusantium",
                            StartIndex: 1395437218309923052,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "commodi",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "quis",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "est",
                        NamedRangeID: "aut",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 3317123977833389635,
                            SegmentID: "non",
                            StartIndex: 167566062957544642,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "omnis",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1059542851699319360,
                            RowIndex: 6972732843819909978,
                            TableStartLocation: &shared.Location{
                                Index: 5558237345453186302,
                                SegmentID: "officiis",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 771642788862502430,
                            RowIndex: 8514850266767180993,
                            TableStartLocation: &shared.Location{
                                Index: 8683452355129068124,
                                SegmentID: "odio",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "qui",
                        },
                        Location: &shared.Location{
                            Index: 388440063886460141,
                            SegmentID: "at",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 74.099998,
                                Unit: "PT",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 0.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "exercitationem",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "aut",
                        },
                        Location: &shared.Location{
                            Index: 5837486892148644279,
                            SegmentID: "tempore",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "maiores",
                        },
                        Location: &shared.Location{
                            Index: 1061380815263676471,
                            SegmentID: "dolor",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 4112921325496946042,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "in",
                        },
                        Location: &shared.Location{
                            Index: 3508963237347473586,
                            SegmentID: "omnis",
                        },
                        Rows: 4564823113789767141,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 7014402135919778893,
                            RowIndex: 3983722386484812742,
                            TableStartLocation: &shared.Location{
                                Index: 2118716725206170867,
                                SegmentID: "rerum",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1938800996802160635,
                            RowIndex: 8097022081922209513,
                            TableStartLocation: &shared.Location{
                                Index: 7481608503761597087,
                                SegmentID: "qui",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "qui",
                        },
                        Location: &shared.Location{
                            Index: 4308690457412179793,
                            SegmentID: "in",
                        },
                        Text: "autem",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 8086159467323165929,
                            RowSpan: 35604086129376003,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 8559453321117178323,
                                RowIndex: 2006924026344156168,
                                TableStartLocation: &shared.Location{
                                    Index: 8218430188258725598,
                                    SegmentID: "ullam",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 2682844416202521633,
                        TableStartLocation: &shared.Location{
                            Index: 4304520335772049496,
                            SegmentID: "esse",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "quam",
                        },
                        ReplaceText: "velit",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "cumque",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "sunt",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "voluptates",
                        NamedRangeName: "magni",
                        Text: "et",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 6651829488660799814,
                            RowSpan: 8482125374365136680,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 7862762095958642309,
                                RowIndex: 4391202566038595699,
                                TableStartLocation: &shared.Location{
                                    Index: 6215632031706852400,
                                    SegmentID: "ut",
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
                                            Blue: 82.099998,
                                            Green: 26.100000,
                                            Red: 19.200001,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "nostrum",
                            DefaultHeaderID: "ut",
                            EvenPageFooterID: "laboriosam",
                            EvenPageHeaderID: "sed",
                            FirstPageFooterID: "a",
                            FirstPageHeaderID: "soluta",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 28.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 47.200001,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 37.099998,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 26.200001,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 0.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 15.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 2037591971392316788,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 94.199997,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 79.199997,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: true,
                            UseEvenPageHeaderFooter: true,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "et",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "impedit",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "JUSTIFIED",
                            AvoidWidowAndOrphan: true,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 70.199997,
                                            Green: 38.099998,
                                            Red: 93.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 60.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 66.099998,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 80.199997,
                                            Green: 57.099998,
                                            Red: 98.199997,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 54.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 58.200001,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 63.099998,
                                            Green: 27.200001,
                                            Red: 29.100000,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 54.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 29.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 86.099998,
                                            Green: 68.199997,
                                            Red: 92.199997,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 30.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 10.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 22.100000,
                                            Green: 46.200001,
                                            Red: 2.100000,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 18.200001,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 70.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "CONTENT_DIRECTION_UNSPECIFIED",
                            HeadingID: "voluptatem",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 20.200001,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 30.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 56.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: true,
                            LineSpacing: 90.199997,
                            NamedStyleType: "HEADING_6",
                            PageBreakBefore: true,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 50.099998,
                                            Green: 80.099998,
                                            Red: 47.099998,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 3.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 13.200000,
                                Unit: "PT",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "START",
                                    Offset: &shared.Dimension{
                                        Magnitude: 63.099998,
                                        Unit: "PT",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 8986113174196936481,
                            SegmentID: "ipsam",
                            StartIndex: 9002761601099372112,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "enim",
                        Range: &shared.Range{
                            EndIndex: 355470162357024396,
                            SegmentID: "distinctio",
                            StartIndex: 1638829746864917218,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 67.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 95.199997,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 30.100000,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 32.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "COLUMN_SEPARATOR_STYLE_UNSPECIFIED",
                            ContentDirection: "CONTENT_DIRECTION_UNSPECIFIED",
                            DefaultFooterID: "dicta",
                            DefaultHeaderID: "rem",
                            EvenPageFooterID: "doloremque",
                            EvenPageHeaderID: "quae",
                            FirstPageFooterID: "nisi",
                            FirstPageHeaderID: "recusandae",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 43.099998,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 7.100000,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 47.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 74.099998,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 26.100000,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 39.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 1444501184389758573,
                            SectionType: "CONTINUOUS",
                            UseFirstPageHeaderFooter: true,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "est",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 49.099998,
                                        Green: 91.199997,
                                        Red: 16.100000,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 31.200001,
                                            Green: 31.200001,
                                            Red: 29.100000,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 77.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 69.199997,
                                            Green: 0.200000,
                                            Red: 35.200001,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 0.100000,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 49.200001,
                                            Green: 54.200001,
                                            Red: 77.099998,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 8.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 48.099998,
                                            Green: 55.200001,
                                            Red: 93.199997,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 12.100000,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 5206561764403574099,
                            ContentAlignment: "BOTTOM",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 24.100000,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 72.199997,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 80.199997,
                                Unit: "PT",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 41.099998,
                                Unit: "PT",
                            },
                            RowSpan: 4431047122332405830,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 6901636176146439792,
                            RowSpan: 8662026721107688812,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 3696118768821457648,
                                RowIndex: 3450989031171849556,
                                TableStartLocation: &shared.Location{
                                    Index: 542203605369773217,
                                    SegmentID: "quia",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 6910103553472090033,
                            SegmentID: "debitis",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            2350280920086746644,
                        },
                        Fields: "enim",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 59.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "FIXED_WIDTH",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 1965282774241794518,
                            SegmentID: "nihil",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "exercitationem",
                        RowIndices: []int32{
                            2856324619161861976,
                            6464951731269418078,
                            5740420119606139691,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 76.199997,
                                Unit: "PT",
                            },
                            PreventOverflow: false,
                            TableHeader: true,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 2132755572425097180,
                            SegmentID: "minus",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "nostrum",
                        Range: &shared.Range{
                            EndIndex: 2734276392450386024,
                            SegmentID: "sit",
                            StartIndex: 5666133441297118052,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 50.200001,
                                        Green: 39.099998,
                                        Red: 11.200000,
                                    },
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 72.099998,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 19.100000,
                                        Green: 64.099998,
                                        Red: 67.199997,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "nihil",
                                HeadingID: "explicabo",
                                URL: "ex",
                            },
                            SmallCaps: true,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "et",
                                Weight: 2099360370584244541,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 540413947656020526,
                            SegmentID: "veniam",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "in",
                        },
                        Location: &shared.Location{
                            Index: 2245863337273937304,
                            SegmentID: "molestias",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 7707648684061456147,
                            SegmentID: "tenetur",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "similique",
                        Range: &shared.Range{
                            EndIndex: 8989348688501218597,
                            SegmentID: "id",
                            StartIndex: 6943106624917850135,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_STAR_CIRCLE_SQUARE",
                        Range: &shared.Range{
                            EndIndex: 6912591818321148019,
                            SegmentID: "totam",
                            StartIndex: 3424131883437816551,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 7100399552416253201,
                            SegmentID: "repellendus",
                            StartIndex: 6810414345605660316,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "eum",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "earum",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "et",
                        NamedRangeID: "officia",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 6167316338759183977,
                            SegmentID: "dolor",
                            StartIndex: 8856257683554197028,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "quaerat",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8724673710750471494,
                            RowIndex: 2733863447238824449,
                            TableStartLocation: &shared.Location{
                                Index: 5845754546124688304,
                                SegmentID: "recusandae",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3775576383156376750,
                            RowIndex: 6637759466079315288,
                            TableStartLocation: &shared.Location{
                                Index: 6365065626272028244,
                                SegmentID: "explicabo",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "cupiditate",
                        },
                        Location: &shared.Location{
                            Index: 3111322372526323983,
                            SegmentID: "saepe",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 9.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 34.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "qui",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "quis",
                        },
                        Location: &shared.Location{
                            Index: 3913336783472859509,
                            SegmentID: "velit",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "fuga",
                        },
                        Location: &shared.Location{
                            Index: 2305290727230306544,
                            SegmentID: "vero",
                        },
                        SectionType: "SECTION_TYPE_UNSPECIFIED",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 2126812273757444928,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "voluptatem",
                        },
                        Location: &shared.Location{
                            Index: 3593960998467723877,
                            SegmentID: "quae",
                        },
                        Rows: 3576897317488866583,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 7134140320308255526,
                            RowIndex: 7519322344649248496,
                            TableStartLocation: &shared.Location{
                                Index: 1848644437454039785,
                                SegmentID: "sed",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1987095690814515857,
                            RowIndex: 6539514747565850470,
                            TableStartLocation: &shared.Location{
                                Index: 5726286206110460081,
                                SegmentID: "cum",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "sint",
                        },
                        Location: &shared.Location{
                            Index: 1715780175123913789,
                            SegmentID: "eaque",
                        },
                        Text: "facilis",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 9004954358869665939,
                            RowSpan: 5841880204338597310,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 1491667709925898205,
                                RowIndex: 5660287419407512692,
                                TableStartLocation: &shared.Location{
                                    Index: 5167835839957148740,
                                    SegmentID: "voluptate",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 5132794701053150193,
                        TableStartLocation: &shared.Location{
                            Index: 9183065293705613090,
                            SegmentID: "et",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "distinctio",
                        },
                        ReplaceText: "in",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "consectetur",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "sequi",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "et",
                        NamedRangeName: "consequatur",
                        Text: "eum",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 2428722718885598687,
                            RowSpan: 8490340655146226453,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 770565711872751150,
                                RowIndex: 9146511554899224825,
                                TableStartLocation: &shared.Location{
                                    Index: 4180397911541166954,
                                    SegmentID: "nihil",
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
                                            Blue: 96.199997,
                                            Green: 28.100000,
                                            Red: 29.100000,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "hic",
                            DefaultHeaderID: "beatae",
                            EvenPageFooterID: "veritatis",
                            EvenPageHeaderID: "architecto",
                            FirstPageFooterID: "voluptas",
                            FirstPageHeaderID: "voluptatibus",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 66.099998,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 46.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 46.099998,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 56.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 59.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 16.200001,
                                Unit: "PT",
                            },
                            PageNumberStart: 8317526059903811569,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 95.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 67.099998,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: true,
                            UseFirstPageHeaderFooter: true,
                        },
                        Fields: "possimus",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "temporibus",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 20.100000,
                                            Green: 62.099998,
                                            Red: 64.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 79.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 46.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 42.200001,
                                            Green: 61.200001,
                                            Red: 60.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 31.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 77.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 63.200001,
                                            Green: 61.200001,
                                            Red: 38.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 96.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 83.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 84.099998,
                                            Green: 34.200001,
                                            Red: 54.200001,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 13.200000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 44.200001,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 0.100000,
                                            Green: 87.199997,
                                            Red: 71.099998,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 52.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 93.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "CONTENT_DIRECTION_UNSPECIFIED",
                            HeadingID: "qui",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 61.200001,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 45.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 65.199997,
                                Unit: "PT",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: true,
                            LineSpacing: 93.199997,
                            NamedStyleType: "NAMED_STYLE_TYPE_UNSPECIFIED",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 76.199997,
                                            Green: 37.099998,
                                            Red: 50.200001,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 5.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 41.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 63.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 8091719383208301671,
                            SegmentID: "sit",
                            StartIndex: 5243201087980725639,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "sequi",
                        Range: &shared.Range{
                            EndIndex: 8571763284599030303,
                            SegmentID: "quidem",
                            StartIndex: 7930433315298903244,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 48.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 44.099998,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 84.199997,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 15.100000,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 54.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 11.200000,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "LEFT_TO_RIGHT",
                            DefaultFooterID: "neque",
                            DefaultHeaderID: "explicabo",
                            EvenPageFooterID: "quis",
                            EvenPageHeaderID: "eius",
                            FirstPageFooterID: "voluptatum",
                            FirstPageHeaderID: "rerum",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 62.099998,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 75.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 79.199997,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 34.099998,
                                Unit: "PT",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 98.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 42.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 7051896623926270928,
                            SectionType: "NEXT_PAGE",
                            UseFirstPageHeaderFooter: true,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "illum",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 78.199997,
                                        Green: 67.099998,
                                        Red: 61.099998,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 66.099998,
                                            Green: 34.200001,
                                            Red: 39.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 43.200001,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 29.100000,
                                            Green: 77.199997,
                                            Red: 68.199997,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 65.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 10.100000,
                                            Green: 28.100000,
                                            Red: 68.099998,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 51.200001,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 29.100000,
                                            Green: 6.200000,
                                            Red: 12.200000,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 41.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            ColumnSpan: 1256636121486761221,
                            ContentAlignment: "CONTENT_ALIGNMENT_UNSPECIFIED",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 80.199997,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 19.200001,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 56.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 41.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 7587442529370418981,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 3554957634489563835,
                            RowSpan: 430554054357218177,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 7472755522613843569,
                                RowIndex: 1778653071074049664,
                                TableStartLocation: &shared.Location{
                                    Index: 1353118755563688658,
                                    SegmentID: "amet",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 6828846979819212770,
                            SegmentID: "et",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            3306342594498137649,
                        },
                        Fields: "aut",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 40.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "WIDTH_TYPE_UNSPECIFIED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 1426774087956781760,
                            SegmentID: "minus",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "praesentium",
                        RowIndices: []int32{
                            2071104450853766658,
                            3143222963282786161,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 1.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: true,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 3921074464802609215,
                            SegmentID: "ab",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "cumque",
                        Range: &shared.Range{
                            EndIndex: 3291909743485412796,
                            SegmentID: "quo",
                            StartIndex: 7541252924241332912,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 38.200001,
                                        Green: 45.099998,
                                        Red: 62.099998,
                                    },
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: true,
                            FontSize: &shared.Dimension{
                                Magnitude: 6.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 23.100000,
                                        Green: 29.200001,
                                        Red: 50.099998,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "facilis",
                                HeadingID: "consequatur",
                                URL: "molestiae",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: false,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "eum",
                                Weight: 6657741761168958455,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 5405743782790223869,
                            SegmentID: "similique",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "praesentium",
                        },
                        Location: &shared.Location{
                            Index: 8121438638750070275,
                            SegmentID: "ipsa",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 5702086962551646585,
                            SegmentID: "iure",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "dolore",
                        Range: &shared.Range{
                            EndIndex: 6953150776380284364,
                            SegmentID: "necessitatibus",
                            StartIndex: 4930083333664384026,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_ARROW3D_CIRCLE_SQUARE",
                        Range: &shared.Range{
                            EndIndex: 2934669432848039698,
                            SegmentID: "eos",
                            StartIndex: 1412002060194542908,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 186871433559237857,
                            SegmentID: "sit",
                            StartIndex: 8708302418582466431,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "earum",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "distinctio",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "assumenda",
                        NamedRangeID: "et",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 6420443935081685062,
                            SegmentID: "in",
                            StartIndex: 5913214372295988511,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "repudiandae",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 868310853933923931,
                            RowIndex: 4024174484415072725,
                            TableStartLocation: &shared.Location{
                                Index: 2818818235453588190,
                                SegmentID: "sunt",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 2532597011683728087,
                            RowIndex: 8028815005489571747,
                            TableStartLocation: &shared.Location{
                                Index: 1865222027608673291,
                                SegmentID: "nisi",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "ratione",
                        },
                        Location: &shared.Location{
                            Index: 1940187917623811174,
                            SegmentID: "est",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 19.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 36.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "dolorem",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "voluptate",
                        },
                        Location: &shared.Location{
                            Index: 1446068653600132704,
                            SegmentID: "inventore",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "et",
                        },
                        Location: &shared.Location{
                            Index: 3801960864973229618,
                            SegmentID: "minima",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 588020994197119961,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "quia",
                        },
                        Location: &shared.Location{
                            Index: 8100496912418235212,
                            SegmentID: "inventore",
                        },
                        Rows: 2432923324136795944,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1225141574850718952,
                            RowIndex: 4972956926970340934,
                            TableStartLocation: &shared.Location{
                                Index: 3723469953046556180,
                                SegmentID: "debitis",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3959252866103534258,
                            RowIndex: 8941705303156473931,
                            TableStartLocation: &shared.Location{
                                Index: 4839335983314888046,
                                SegmentID: "a",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "mollitia",
                        },
                        Location: &shared.Location{
                            Index: 7444465196638686575,
                            SegmentID: "at",
                        },
                        Text: "sunt",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 7754674919171441303,
                            RowSpan: 1742633543905152800,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 4531580916635252633,
                                RowIndex: 5149764551953052561,
                                TableStartLocation: &shared.Location{
                                    Index: 4969333038957635892,
                                    SegmentID: "nihil",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 8955779660177681159,
                        TableStartLocation: &shared.Location{
                            Index: 4364884530242378933,
                            SegmentID: "asperiores",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "ratione",
                        },
                        ReplaceText: "voluptatem",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "sit",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "sed",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "expedita",
                        NamedRangeName: "et",
                        Text: "consequatur",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 2223670193668799695,
                            RowSpan: 3451293677882737618,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 2258152543186252621,
                                RowIndex: 4062817593834499404,
                                TableStartLocation: &shared.Location{
                                    Index: 8229745102967699455,
                                    SegmentID: "ipsam",
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
                                            Blue: 41.200001,
                                            Green: 33.099998,
                                            Red: 90.199997,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "ex",
                            DefaultHeaderID: "dolores",
                            EvenPageFooterID: "quaerat",
                            EvenPageHeaderID: "iste",
                            FirstPageFooterID: "harum",
                            FirstPageHeaderID: "id",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 54.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 33.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 1.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 10.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 6.200000,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 61.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 6671831600411150880,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 52.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 1.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            UseCustomHeaderFooterMargins: false,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: true,
                        },
                        Fields: "et",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "eum",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "START",
                            AvoidWidowAndOrphan: true,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 0.100000,
                                            Green: 16.200001,
                                            Red: 10.100000,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 28.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 70.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 58.200001,
                                            Green: 80.099998,
                                            Red: 16.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 18.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 92.199997,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 78.199997,
                                            Green: 17.100000,
                                            Red: 93.199997,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 6.200000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 47.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 64.199997,
                                            Green: 41.099998,
                                            Red: 9.100000,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 59.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 95.099998,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 33.099998,
                                            Green: 74.099998,
                                            Red: 73.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 45.200001,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 73.099998,
                                    Unit: "PT",
                                },
                            },
                            Direction: "RIGHT_TO_LEFT",
                            HeadingID: "voluptate",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 14.200000,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 78.199997,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 90.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            KeepLinesTogether: false,
                            KeepWithNext: true,
                            LineSpacing: 68.199997,
                            NamedStyleType: "HEADING_3",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 69.199997,
                                            Green: 53.099998,
                                            Red: 67.099998,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 18.200001,
                                Unit: "PT",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 20.100000,
                                Unit: "PT",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "TAB_STOP_ALIGNMENT_UNSPECIFIED",
                                    Offset: &shared.Dimension{
                                        Magnitude: 28.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 4410845926925955578,
                            SegmentID: "enim",
                            StartIndex: 3486870209948638382,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "cupiditate",
                        Range: &shared.Range{
                            EndIndex: 7578087239393768517,
                            SegmentID: "id",
                            StartIndex: 3370703828755977220,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 78.099998,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 97.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 3.100000,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 48.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 32.200001,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 84.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "incidunt",
                            DefaultHeaderID: "qui",
                            EvenPageFooterID: "velit",
                            EvenPageHeaderID: "voluptatem",
                            FirstPageFooterID: "maxime",
                            FirstPageHeaderID: "omnis",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 82.199997,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 66.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 65.199997,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 2.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 11.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 42.099998,
                                Unit: "PT",
                            },
                            PageNumberStart: 7921758107490874573,
                            SectionType: "SECTION_TYPE_UNSPECIFIED",
                            UseFirstPageHeaderFooter: false,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "ea",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 41.099998,
                                        Green: 90.099998,
                                        Red: 55.200001,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 96.099998,
                                            Green: 17.100000,
                                            Red: 63.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 89.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 78.099998,
                                            Green: 53.200001,
                                            Red: 66.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 14.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 83.199997,
                                            Green: 47.099998,
                                            Red: 56.099998,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 20.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 21.100000,
                                            Green: 19.100000,
                                            Red: 9.200000,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 42.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            ColumnSpan: 2742799280698788084,
                            ContentAlignment: "TOP",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 34.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 62.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 76.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 5.100000,
                                Unit: "PT",
                            },
                            RowSpan: 1812144921524737254,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 5354894888320892660,
                            RowSpan: 761275051765677610,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 6355878022470812948,
                                RowIndex: 8323817990377645935,
                                TableStartLocation: &shared.Location{
                                    Index: 5183724500759976993,
                                    SegmentID: "ipsum",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 8600815741527501233,
                            SegmentID: "quis",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            8022009558530841117,
                        },
                        Fields: "sed",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 51.099998,
                                Unit: "PT",
                            },
                            WidthType: "EVENLY_DISTRIBUTED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 2470411993473519832,
                            SegmentID: "ut",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "sunt",
                        RowIndices: []int32{
                            667734108363032319,
                            7964800302216494054,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 2.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 9002579079570733075,
                            SegmentID: "repellat",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "repellendus",
                        Range: &shared.Range{
                            EndIndex: 3428291198634405193,
                            SegmentID: "aspernatur",
                            StartIndex: 5379109171852864931,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 83.099998,
                                        Green: 38.099998,
                                        Red: 33.200001,
                                    },
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 17.100000,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 31.100000,
                                        Green: 43.099998,
                                        Red: 48.099998,
                                    },
                                },
                            },
                            Italic: true,
                            Link: &shared.Link{
                                BookmarkID: "iste",
                                HeadingID: "vero",
                                URL: "blanditiis",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "eligendi",
                                Weight: 3318646018880871600,
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "est",
                TargetRevisionID: "voluptas",
            },
        },
    }
    
    res, err := s.Documents.DocsDocumentsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDocumentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### documents

* `DocsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `DocsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `DocsDocumentsGet` - Gets the latest version of the specified document.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
