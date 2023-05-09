<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Documents.DocsDocumentsBatchUpdate(ctx, operations.DocsDocumentsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchUpdateDocumentRequest: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(715190),
                            SegmentID: sdk.String("quibusdam"),
                        },
                        Type: shared.CreateFooterRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("nulla"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(544883),
                            SegmentID: sdk.String("illum"),
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(423655),
                            SegmentID: sdk.String("error"),
                        },
                        Type: shared.CreateHeaderRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: sdk.String("Willie Gulgowski DVM"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(272656),
                            SegmentID: sdk.String("suscipit"),
                            StartIndex: sdk.Int(477665),
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: shared.CreateParagraphBulletsRequestBulletPresetEnumNumberedDecimalNested.ToPointer(),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(812169),
                            SegmentID: sdk.String("voluptatum"),
                            StartIndex: sdk.Int(479977),
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(568045),
                            SegmentID: sdk.String("nisi"),
                            StartIndex: sdk.Int(925597),
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: sdk.String("temporibus"),
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: sdk.String("ab"),
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: sdk.String("Mrs. Marie O'Connell"),
                        NamedRangeID: sdk.String("sapiente"),
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(778157),
                            SegmentID: sdk.String("odit"),
                            StartIndex: sdk.Int(870013),
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: sdk.String("at"),
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(978619),
                            RowIndex: sdk.Int(473608),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(799159),
                                SegmentID: sdk.String("quod"),
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(461479),
                            RowIndex: sdk.Int(520478),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(780529),
                                SegmentID: sdk.String("dolorum"),
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("dicta"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(720633),
                            SegmentID: sdk.String("officia"),
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: sdk.Float64(5820.2),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(5373.73),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                        },
                        URI: sdk.String("https://mean-brick.info"),
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("molestiae"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(264555),
                            SegmentID: sdk.String("qui"),
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("impedit"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(736918),
                            SegmentID: sdk.String("esse"),
                        },
                        SectionType: shared.InsertSectionBreakRequestSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: sdk.Int(568434),
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("aspernatur"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(18789),
                            SegmentID: sdk.String("ad"),
                        },
                        Rows: sdk.Int(617636),
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(149675),
                            RowIndex: sdk.Int(612096),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(222321),
                                SegmentID: sdk.String("natus"),
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(386489),
                            RowIndex: sdk.Int(943749),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(902599),
                                SegmentID: sdk.String("fuga"),
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("in"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(359508),
                            SegmentID: sdk.String("iste"),
                        },
                        Text: sdk.String("iure"),
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(902349),
                            RowSpan: sdk.Int(697631),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(99280),
                                RowIndex: sdk.Int(60225),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(969810),
                                    SegmentID: sdk.String("est"),
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: sdk.Int(653140),
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(670638),
                            SegmentID: sdk.String("dolores"),
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: sdk.Bool(false),
                            Text: sdk.String("dolorem"),
                        },
                        ReplaceText: sdk.String("corporis"),
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: sdk.String("explicabo"),
                        ImageReplaceMethod: shared.ReplaceImageRequestImageReplaceMethodEnumCenterCrop.ToPointer(),
                        URI: sdk.String("http://palatable-forum.biz"),
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: sdk.String("excepturi"),
                        NamedRangeName: sdk.String("accusantium"),
                        Text: sdk.String("iure"),
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(634274),
                            RowSpan: sdk.Int(988374),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(958950),
                                RowIndex: sdk.Int(102044),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(652790),
                                    SegmentID: sdk.String("dolorem"),
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
                                            Blue: sdk.Float32(6350.59),
                                            Green: sdk.Float32(1613.09),
                                            Red: sdk.Float32(9953),
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: sdk.String("mollitia"),
                            DefaultHeaderID: sdk.String("occaecati"),
                            EvenPageFooterID: sdk.String("numquam"),
                            EvenPageHeaderID: sdk.String("commodi"),
                            FirstPageFooterID: sdk.String("quam"),
                            FirstPageHeaderID: sdk.String("molestiae"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(2444.25),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(1589.69),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(1103.75),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(6563.3),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(1381.83),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(1965.82),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(368725),
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: sdk.Float64(6625.27),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(135.71),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            UseCustomHeaderFooterMargins: sdk.Bool(false),
                            UseEvenPageHeaderFooter: sdk.Bool(false),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                        Fields: sdk.String("error"),
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: sdk.String("temporibus"),
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: shared.ParagraphStyleAlignmentEnumEnd.ToPointer(),
                            AvoidWidowAndOrphan: sdk.Bool(false),
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(960.98),
                                            Green: sdk.Float32(9719.45),
                                            Red: sdk.Float32(9764.6),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDash.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(4686.51),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(9767.62),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(6048.46),
                                            Green: sdk.Float32(4511.59),
                                            Red: sdk.Float32(7392.64),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(391.87),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(2828.07),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(1201.96),
                                            Green: sdk.Float32(3594.44),
                                            Red: sdk.Float32(2961.4),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumSolid.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(1187.27),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(3179.83),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(4142.63),
                                            Green: sdk.Float32(9182.36),
                                            Red: sdk.Float32(641.47),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(6924.72),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(5666.02),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(2653.89),
                                            Green: sdk.Float32(5089.69),
                                            Red: sdk.Float32(5232.48),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDash.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(939.4),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(5759.47),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            Direction: shared.ParagraphStyleDirectionEnumRightToLeft.ToPointer(),
                            HeadingID: sdk.String("incidunt"),
                            IndentEnd: &shared.Dimension{
                                Magnitude: sdk.Float64(3185.69),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: sdk.Float64(6674.11),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: sdk.Float64(1317.97),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            KeepLinesTogether: sdk.Bool(false),
                            KeepWithNext: sdk.Bool(false),
                            LineSpacing: sdk.Float32(7163.27),
                            NamedStyleType: shared.ParagraphStyleNamedStyleTypeEnumHeading5.ToPointer(),
                            PageBreakBefore: sdk.Bool(false),
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(2894.06),
                                            Green: sdk.Float32(2647.3),
                                            Red: sdk.Float32(1831.91),
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: sdk.Float64(3978.21),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: sdk.Float64(5528.22),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            SpacingMode: shared.ParagraphStyleSpacingModeEnumSpacingModeUnspecified.ToPointer(),
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumStart.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(46.95),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumCenter.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(5696.18),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumCenter.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(7351.94),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumEnd.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(4332.88),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: sdk.Int(756107),
                            SegmentID: sdk.String("sint"),
                            StartIndex: sdk.Int(396098),
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: sdk.String("provident"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(896039),
                            SegmentID: sdk.String("sint"),
                            StartIndex: sdk.Int(638921),
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: sdk.Float64(8915.55),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: sdk.Float64(6800.56),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                            },
                            ColumnSeparatorStyle: shared.SectionStyleColumnSeparatorStyleEnumNone.ToPointer(),
                            ContentDirection: shared.SectionStyleContentDirectionEnumRightToLeft.ToPointer(),
                            DefaultFooterID: sdk.String("maiores"),
                            DefaultHeaderID: sdk.String("rerum"),
                            EvenPageFooterID: sdk.String("dicta"),
                            EvenPageHeaderID: sdk.String("magnam"),
                            FirstPageFooterID: sdk.String("cumque"),
                            FirstPageHeaderID: sdk.String("facere"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(4118.2),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(6754.39),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(2497.96),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(3132.18),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(9654.17),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(5884.65),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(659669),
                            SectionType: shared.SectionStyleSectionTypeEnumContinuous.ToPointer(),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: sdk.String("deleniti"),
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(9560.84),
                                        Green: sdk.Float32(2305.33),
                                        Red: sdk.Float32(6439.9),
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(3948.69),
                                            Green: sdk.Float32(4238.55),
                                            Red: sdk.Float32(6188.09),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDot.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(4748.67),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(4701.32),
                                            Green: sdk.Float32(3015.75),
                                            Red: sdk.Float32(7160.75),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDot.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(2879.91),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(3834.62),
                                            Green: sdk.Float32(6180.16),
                                            Red: sdk.Float32(7491.7),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumSolid.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(8784.53),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(1028.63),
                                            Green: sdk.Float32(2982.82),
                                            Red: sdk.Float32(923.73),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDot.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(3540.47),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            ColumnSpan: sdk.Int(551816),
                            ContentAlignment: shared.TableCellStyleContentAlignmentEnumTop.ToPointer(),
                            PaddingBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(336.25),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(9689.62),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: sdk.Float64(3209.97),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: sdk.Float64(2212.62),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            RowSpan: sdk.Int(141264),
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(367562),
                            RowSpan: sdk.Int(97260),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(435865),
                                RowIndex: sdk.Int(984043),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(891924),
                                    SegmentID: sdk.String("eius"),
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(806194),
                            SegmentID: sdk.String("deleniti"),
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            447926,
                            100226,
                            99569,
                        },
                        Fields: sdk.String("repudiandae"),
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(3523.12),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            WidthType: shared.TableColumnPropertiesWidthTypeEnumEvenlyDistributed.ToPointer(),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(998848),
                            SegmentID: sdk.String("quibusdam"),
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: sdk.String("sed"),
                        RowIndices: []int{
                            868126,
                            37559,
                            162493,
                            508315,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: sdk.Float64(6155.6),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PreventOverflow: sdk.Bool(false),
                            TableHeader: sdk.Bool(false),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(123820),
                            SegmentID: sdk.String("quo"),
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: sdk.String("illum"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(864934),
                            SegmentID: sdk.String("maxime"),
                            StartIndex: sdk.Int(411397),
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(5691.01),
                                        Green: sdk.Float32(1399.72),
                                        Red: sdk.Float32(4071.83),
                                    },
                                },
                            },
                            BaselineOffset: shared.TextStyleBaselineOffsetEnumBaselineOffsetUnspecified.ToPointer(),
                            Bold: sdk.Bool(false),
                            FontSize: &shared.Dimension{
                                Magnitude: sdk.Float64(691.67),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(6974.29),
                                        Green: sdk.Float32(3732.91),
                                        Red: sdk.Float32(4535.43),
                                    },
                                },
                            },
                            Italic: sdk.Bool(false),
                            Link: &shared.Link{
                                BookmarkID: sdk.String("autem"),
                                HeadingID: sdk.String("nam"),
                                URL: sdk.String("eaque"),
                            },
                            SmallCaps: sdk.Bool(false),
                            Strikethrough: sdk.Bool(false),
                            Underline: sdk.Bool(false),
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: sdk.String("pariatur"),
                                Weight: sdk.Int(365496),
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(975522),
                            SegmentID: sdk.String("perferendis"),
                        },
                        Type: shared.CreateFooterRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("amet"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(11714),
                            SegmentID: sdk.String("cumque"),
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(359978),
                            SegmentID: sdk.String("hic"),
                        },
                        Type: shared.CreateHeaderRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: sdk.String("Ernest Hayes"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(54338),
                            SegmentID: sdk.String("quis"),
                            StartIndex: sdk.Int(199996),
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: shared.CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondxArrow3DSquare.ToPointer(),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(18521),
                            SegmentID: sdk.String("dolores"),
                            StartIndex: sdk.Int(793698),
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(463451),
                            SegmentID: sdk.String("dolor"),
                            StartIndex: sdk.Int(874573),
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: sdk.String("nostrum"),
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: sdk.String("hic"),
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: sdk.String("Alejandro Purdy DDS"),
                        NamedRangeID: sdk.String("consequuntur"),
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(500026),
                            SegmentID: sdk.String("error"),
                            StartIndex: sdk.Int(50370),
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: sdk.String("occaecati"),
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(699098),
                            RowIndex: sdk.Int(237893),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(992397),
                                SegmentID: sdk.String("earum"),
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(267262),
                            RowIndex: sdk.Int(613966),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(679091),
                                SegmentID: sdk.String("deleniti"),
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("pariatur"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(589910),
                            SegmentID: sdk.String("nobis"),
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: sdk.Float64(7301.22),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(3119.45),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                        },
                        URI: sdk.String("http://drafty-correspondent.biz"),
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("qui"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(218749),
                            SegmentID: sdk.String("hic"),
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("excepturi"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(739551),
                            SegmentID: sdk.String("voluptate"),
                        },
                        SectionType: shared.InsertSectionBreakRequestSectionTypeEnumContinuous.ToPointer(),
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: sdk.Int(970237),
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("amet"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(680545),
                            SegmentID: sdk.String("numquam"),
                        },
                        Rows: sdk.Int(85295),
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(58029),
                            RowIndex: sdk.Int(56418),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(434417),
                                SegmentID: sdk.String("odio"),
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(311796),
                            RowIndex: sdk.Int(881005),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(696344),
                                SegmentID: sdk.String("voluptatibus"),
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("voluptas"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(617658),
                            SegmentID: sdk.String("eos"),
                        },
                        Text: sdk.String("atque"),
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(24678),
                            RowSpan: sdk.Int(854614),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(67249),
                                RowIndex: sdk.Int(743835),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(679393),
                                    SegmentID: sdk.String("iusto"),
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: sdk.Int(453697),
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(677082),
                            SegmentID: sdk.String("deleniti"),
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: sdk.Bool(false),
                            Text: sdk.String("omnis"),
                        },
                        ReplaceText: sdk.String("necessitatibus"),
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: sdk.String("distinctio"),
                        ImageReplaceMethod: shared.ReplaceImageRequestImageReplaceMethodEnumCenterCrop.ToPointer(),
                        URI: sdk.String("http://dutiful-increase.name"),
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: sdk.String("saepe"),
                        NamedRangeName: sdk.String("eius"),
                        Text: sdk.String("aspernatur"),
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(20651),
                            RowSpan: sdk.Int(229219),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(758379),
                                RowIndex: sdk.Int(881586),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(320017),
                                    SegmentID: sdk.String("saepe"),
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
                                            Blue: sdk.Float32(3834.64),
                                            Green: sdk.Float32(6457.85),
                                            Red: sdk.Float32(5883.17),
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: sdk.String("minima"),
                            DefaultHeaderID: sdk.String("repellendus"),
                            EvenPageFooterID: sdk.String("totam"),
                            EvenPageHeaderID: sdk.String("similique"),
                            FirstPageFooterID: sdk.String("alias"),
                            FirstPageHeaderID: sdk.String("at"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(3118.6),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(4254.51),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(8853.38),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(6798.8),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(4561.3),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(4834.09),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(788740),
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: sdk.Float64(9473.71),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(7308.56),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            UseCustomHeaderFooterMargins: sdk.Bool(false),
                            UseEvenPageHeaderFooter: sdk.Bool(false),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                        Fields: sdk.String("numquam"),
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: sdk.String("enim"),
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: shared.ParagraphStyleAlignmentEnumStart.ToPointer(),
                            AvoidWidowAndOrphan: sdk.Bool(false),
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9574.51),
                                            Green: sdk.Float32(5182.01),
                                            Red: sdk.Float32(4717.52),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(7115.84),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(1536.94),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(7304.42),
                                            Green: sdk.Float32(3741.7),
                                            Red: sdk.Float32(6462.65),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumSolid.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(2148.8),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(1864.58),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(8075.81),
                                            Green: sdk.Float32(8638.56),
                                            Red: sdk.Float32(7470.8),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(6748.48),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(2768.94),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(1749.09),
                                            Green: sdk.Float32(7168.6),
                                            Red: sdk.Float32(7044.74),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumSolid.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(4631.5),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(8404.29),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(2048.65),
                                            Green: sdk.Float32(1448.47),
                                            Red: sdk.Float32(1649.59),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumSolid.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(1248.33),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(7220.81),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            Direction: shared.ParagraphStyleDirectionEnumContentDirectionUnspecified.ToPointer(),
                            HeadingID: sdk.String("cumque"),
                            IndentEnd: &shared.Dimension{
                                Magnitude: sdk.Float64(7469.94),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: sdk.Float64(925.96),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: sdk.Float64(2174.5),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            KeepLinesTogether: sdk.Bool(false),
                            KeepWithNext: sdk.Bool(false),
                            LineSpacing: sdk.Float32(7492.55),
                            NamedStyleType: shared.ParagraphStyleNamedStyleTypeEnumHeading2.ToPointer(),
                            PageBreakBefore: sdk.Bool(false),
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(7316.94),
                                            Green: sdk.Float32(5844.76),
                                            Red: sdk.Float32(456.14),
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: sdk.Float64(9619.37),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: sdk.Float64(2921.47),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            SpacingMode: shared.ParagraphStyleSpacingModeEnumSpacingModeUnspecified.ToPointer(),
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumTabStopAlignmentUnspecified.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(630.38),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumCenter.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(9295.3),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumCenter.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(8330.38),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: sdk.Int(984330),
                            SegmentID: sdk.String("ut"),
                            StartIndex: sdk.Int(703495),
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: sdk.String("cupiditate"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(181631),
                            SegmentID: sdk.String("quae"),
                            StartIndex: sdk.Int(512393),
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: sdk.Float64(5804.47),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: sdk.Float64(7875.42),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: sdk.Float64(6064.76),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: sdk.Float64(2184.03),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                },
                            },
                            ColumnSeparatorStyle: shared.SectionStyleColumnSeparatorStyleEnumNone.ToPointer(),
                            ContentDirection: shared.SectionStyleContentDirectionEnumContentDirectionUnspecified.ToPointer(),
                            DefaultFooterID: sdk.String("vero"),
                            DefaultHeaderID: sdk.String("tenetur"),
                            EvenPageFooterID: sdk.String("dignissimos"),
                            EvenPageHeaderID: sdk.String("hic"),
                            FirstPageFooterID: sdk.String("distinctio"),
                            FirstPageHeaderID: sdk.String("quod"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(4861.6),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(7085.48),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(4981.4),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(8445.5),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(1943.42),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(7733.26),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(974259),
                            SectionType: shared.SectionStyleSectionTypeEnumContinuous.ToPointer(),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: sdk.String("nulla"),
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(1481.41),
                                        Green: sdk.Float32(7804.27),
                                        Red: sdk.Float32(9818.3),
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9850.33),
                                            Green: sdk.Float32(4783.7),
                                            Red: sdk.Float32(7535.7),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumSolid.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(40.48),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(2694.79),
                                            Green: sdk.Float32(3685.84),
                                            Red: sdk.Float32(4104.92),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(4282.24),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(2978.42),
                                            Green: sdk.Float32(1898.48),
                                            Red: sdk.Float32(4011.32),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDot.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(1206.57),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9807),
                                            Green: sdk.Float32(978.44),
                                            Red: sdk.Float32(4061.2),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDash.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(5692.11),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            ColumnSpan: sdk.Int(343605),
                            ContentAlignment: shared.TableCellStyleContentAlignmentEnumBottom.ToPointer(),
                            PaddingBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(7888.73),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(4113.72),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: sdk.Float64(3592.71),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: sdk.Float64(3994.99),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            RowSpan: sdk.Int(301831),
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(407241),
                            RowSpan: sdk.Int(775220),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(232234),
                                RowIndex: sdk.Int(926213),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(132487),
                                    SegmentID: sdk.String("minima"),
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(53427),
                            SegmentID: sdk.String("a"),
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            13948,
                            11427,
                            533466,
                        },
                        Fields: sdk.String("impedit"),
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(3045.82),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            WidthType: shared.TableColumnPropertiesWidthTypeEnumFixedWidth.ToPointer(),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(79522),
                            SegmentID: sdk.String("non"),
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: sdk.String("et"),
                        RowIndices: []int{
                            672048,
                            810424,
                            245367,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: sdk.Float64(4321.48),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PreventOverflow: sdk.Bool(false),
                            TableHeader: sdk.Bool(false),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(752135),
                            SegmentID: sdk.String("quas"),
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: sdk.String("assumenda"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(860552),
                            SegmentID: sdk.String("voluptas"),
                            StartIndex: sdk.Int(727044),
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(965.49),
                                        Green: sdk.Float32(2703.28),
                                        Red: sdk.Float32(2561.39),
                                    },
                                },
                            },
                            BaselineOffset: shared.TextStyleBaselineOffsetEnumBaselineOffsetUnspecified.ToPointer(),
                            Bold: sdk.Bool(false),
                            FontSize: &shared.Dimension{
                                Magnitude: sdk.Float64(5919.35),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(4764.77),
                                        Green: sdk.Float32(3015.98),
                                        Red: sdk.Float32(4879.35),
                                    },
                                },
                            },
                            Italic: sdk.Bool(false),
                            Link: &shared.Link{
                                BookmarkID: sdk.String("eius"),
                                HeadingID: sdk.String("esse"),
                                URL: sdk.String("esse"),
                            },
                            SmallCaps: sdk.Bool(false),
                            Strikethrough: sdk.Bool(false),
                            Underline: sdk.Bool(false),
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: sdk.String("rem"),
                                Weight: sdk.Int(683282),
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(442015),
                            SegmentID: sdk.String("quidem"),
                        },
                        Type: shared.CreateFooterRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("ut"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(433439),
                            SegmentID: sdk.String("suscipit"),
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: sdk.Int(826871),
                            SegmentID: sdk.String("eos"),
                        },
                        Type: shared.CreateHeaderRequestTypeEnumDefault.ToPointer(),
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: sdk.String("Harold Bednar"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(206594),
                            SegmentID: sdk.String("quo"),
                            StartIndex: sdk.Int(847276),
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: shared.CreateParagraphBulletsRequestBulletPresetEnumNumberedDecimalNested.ToPointer(),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(681359),
                            SegmentID: sdk.String("eius"),
                            StartIndex: sdk.Int(178367),
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(373813),
                            SegmentID: sdk.String("ab"),
                            StartIndex: sdk.Int(587600),
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: sdk.String("consequatur"),
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: sdk.String("tempora"),
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: sdk.String("Roberto Collier"),
                        NamedRangeID: sdk.String("esse"),
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: sdk.Int(925164),
                            SegmentID: sdk.String("aperiam"),
                            StartIndex: sdk.Int(715179),
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: sdk.String("quod"),
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(490819),
                            RowIndex: sdk.Int(76956),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(469498),
                                SegmentID: sdk.String("totam"),
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(882710),
                            RowIndex: sdk.Int(306810),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(488410),
                                SegmentID: sdk.String("occaecati"),
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("commodi"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(959434),
                            SegmentID: sdk.String("dolores"),
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: sdk.Float64(6455.7),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(353.62),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                        },
                        URI: sdk.String("http://nasty-leveret.com"),
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("deleniti"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(143829),
                            SegmentID: sdk.String("fuga"),
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("mollitia"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(277596),
                            SegmentID: sdk.String("atque"),
                        },
                        SectionType: shared.InsertSectionBreakRequestSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: sdk.Int(325685),
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("nisi"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(147014),
                            SegmentID: sdk.String("sapiente"),
                        },
                        Rows: sdk.Int(159870),
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(187131),
                            RowIndex: sdk.Int(129412),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(903984),
                                SegmentID: sdk.String("occaecati"),
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: sdk.Bool(false),
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: sdk.Int(543806),
                            RowIndex: sdk.Int(92260),
                            TableStartLocation: &shared.Location{
                                Index: sdk.Int(456911),
                                SegmentID: sdk.String("eveniet"),
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: sdk.String("accusamus"),
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(82971),
                            SegmentID: sdk.String("esse"),
                        },
                        Text: sdk.String("quod"),
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(724168),
                            RowSpan: sdk.Int(877131),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(399025),
                                RowIndex: sdk.Int(93459),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(904045),
                                    SegmentID: sdk.String("vel"),
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: sdk.Int(690025),
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(473221),
                            SegmentID: sdk.String("rerum"),
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: sdk.Bool(false),
                            Text: sdk.String("occaecati"),
                        },
                        ReplaceText: sdk.String("minima"),
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: sdk.String("distinctio"),
                        ImageReplaceMethod: shared.ReplaceImageRequestImageReplaceMethodEnumCenterCrop.ToPointer(),
                        URI: sdk.String("http://pointless-reference.biz"),
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: sdk.String("cumque"),
                        NamedRangeName: sdk.String("consequuntur"),
                        Text: sdk.String("consequatur"),
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(796392),
                            RowSpan: sdk.Int(308286),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(959167),
                                RowIndex: sdk.Int(232865),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(458139),
                                    SegmentID: sdk.String("blanditiis"),
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
                                            Blue: sdk.Float32(5909.84),
                                            Green: sdk.Float32(9537.22),
                                            Red: sdk.Float32(8577.23),
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: sdk.String("quas"),
                            DefaultHeaderID: sdk.String("esse"),
                            EvenPageFooterID: sdk.String("quasi"),
                            EvenPageHeaderID: sdk.String("a"),
                            FirstPageFooterID: sdk.String("error"),
                            FirstPageHeaderID: sdk.String("sint"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(8630.23),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(1576.32),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(9924.3),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(850.01),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(944.58),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(6336.08),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(949298),
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: sdk.Float64(627.13),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(4240.32),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            UseCustomHeaderFooterMargins: sdk.Bool(false),
                            UseEvenPageHeaderFooter: sdk.Bool(false),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                        Fields: sdk.String("eius"),
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: sdk.String("libero"),
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: shared.ParagraphStyleAlignmentEnumJustified.ToPointer(),
                            AvoidWidowAndOrphan: sdk.Bool(false),
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(7422.38),
                                            Green: sdk.Float32(333.04),
                                            Red: sdk.Float32(3069.86),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDash.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(1197.71),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(4438.79),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(3917.74),
                                            Green: sdk.Float32(163.28),
                                            Red: sdk.Float32(5318.49),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(8453.58),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(5362.75),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(6802.7),
                                            Green: sdk.Float32(996.15),
                                            Red: sdk.Float32(6091.78),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDash.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(984.78),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(920.27),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(559.65),
                                            Green: sdk.Float32(3267.01),
                                            Red: sdk.Float32(865.32),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(2371.73),
                                    Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(8395.13),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(5223.71),
                                            Green: sdk.Float32(156.06),
                                            Red: sdk.Float32(5130.75),
                                        },
                                    },
                                },
                                DashStyle: shared.ParagraphBorderDashStyleEnumSolid.ToPointer(),
                                Padding: &shared.Dimension{
                                    Magnitude: sdk.Float64(6498.32),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(5445.91),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            Direction: shared.ParagraphStyleDirectionEnumContentDirectionUnspecified.ToPointer(),
                            HeadingID: sdk.String("dolor"),
                            IndentEnd: &shared.Dimension{
                                Magnitude: sdk.Float64(5801.52),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: sdk.Float64(7710.89),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: sdk.Float64(3762.26),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            KeepLinesTogether: sdk.Bool(false),
                            KeepWithNext: sdk.Bool(false),
                            LineSpacing: sdk.Float32(4910.25),
                            NamedStyleType: shared.ParagraphStyleNamedStyleTypeEnumNormalText.ToPointer(),
                            PageBreakBefore: sdk.Bool(false),
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9816.4),
                                            Green: sdk.Float32(6184.8),
                                            Red: sdk.Float32(2446.51),
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: sdk.Float64(9742.57),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: sdk.Float64(9903.45),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            SpacingMode: shared.ParagraphStyleSpacingModeEnumNeverCollapse.ToPointer(),
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumTabStopAlignmentUnspecified.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(8315.2),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                },
                                shared.TabStop{
                                    Alignment: shared.TabStopAlignmentEnumEnd.ToPointer(),
                                    Offset: &shared.Dimension{
                                        Magnitude: sdk.Float64(4903.05),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: sdk.Int(989410),
                            SegmentID: sdk.String("nemo"),
                            StartIndex: sdk.Int(65304),
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: sdk.String("quaerat"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(783235),
                            SegmentID: sdk.String("quod"),
                            StartIndex: sdk.Int(288398),
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: sdk.Float64(2414.18),
                                        Unit: shared.DimensionUnitEnumPt.ToPointer(),
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: sdk.Float64(6625.05),
                                        Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                    },
                                },
                            },
                            ColumnSeparatorStyle: shared.SectionStyleColumnSeparatorStyleEnumColumnSeparatorStyleUnspecified.ToPointer(),
                            ContentDirection: shared.SectionStyleContentDirectionEnumLeftToRight.ToPointer(),
                            DefaultFooterID: sdk.String("est"),
                            DefaultHeaderID: sdk.String("recusandae"),
                            EvenPageFooterID: sdk.String("totam"),
                            EvenPageHeaderID: sdk.String("fugiat"),
                            FirstPageFooterID: sdk.String("vel"),
                            FirstPageHeaderID: sdk.String("ducimus"),
                            MarginBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(5546.88),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: sdk.Float64(2870.51),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: sdk.Float64(7065.75),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(4148.57),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: sdk.Float64(3605.45),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: sdk.Float64(8286.57),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PageNumberStart: sdk.Int(924967),
                            SectionType: shared.SectionStyleSectionTypeEnumContinuous.ToPointer(),
                            UseFirstPageHeaderFooter: sdk.Bool(false),
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: sdk.String("aperiam"),
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(7386.83),
                                        Green: sdk.Float32(2326.27),
                                        Red: sdk.Float32(4490.83),
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(3485.19),
                                            Green: sdk.Float32(9372.85),
                                            Red: sdk.Float32(8149.67),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumSolid.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(9854.92),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9689.72),
                                            Green: sdk.Float32(6971.42),
                                            Red: sdk.Float32(9049.49),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDash.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(2965.56),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9920.12),
                                            Green: sdk.Float32(2415.45),
                                            Red: sdk.Float32(2494.2),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumDashStyleUnspecified.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(1059.06),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: sdk.Float32(9509.53),
                                            Green: sdk.Float32(8915.23),
                                            Red: sdk.Float32(2334.2),
                                        },
                                    },
                                },
                                DashStyle: shared.TableCellBorderDashStyleEnumSolid.ToPointer(),
                                Width: &shared.Dimension{
                                    Magnitude: sdk.Float64(6897.68),
                                    Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                                },
                            },
                            ColumnSpan: sdk.Int(58356),
                            ContentAlignment: shared.TableCellStyleContentAlignmentEnumBottom.ToPointer(),
                            PaddingBottom: &shared.Dimension{
                                Magnitude: sdk.Float64(7307.09),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: sdk.Float64(8817.21),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: sdk.Float64(2724.37),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: sdk.Float64(3790.57),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            RowSpan: sdk.Int(374296),
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: sdk.Int(324405),
                            RowSpan: sdk.Int(748789),
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: sdk.Int(680116),
                                RowIndex: sdk.Int(237807),
                                TableStartLocation: &shared.Location{
                                    Index: sdk.Int(795535),
                                    SegmentID: sdk.String("dolores"),
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(503934),
                            SegmentID: sdk.String("in"),
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int{
                            304468,
                            885963,
                        },
                        Fields: sdk.String("temporibus"),
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: sdk.Float64(3518.7),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            WidthType: shared.TableColumnPropertiesWidthTypeEnumFixedWidth.ToPointer(),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(502389),
                            SegmentID: sdk.String("quas"),
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: sdk.String("hic"),
                        RowIndices: []int{
                            633998,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: sdk.Float64(5485.19),
                                Unit: shared.DimensionUnitEnumPt.ToPointer(),
                            },
                            PreventOverflow: sdk.Bool(false),
                            TableHeader: sdk.Bool(false),
                        },
                        TableStartLocation: &shared.Location{
                            Index: sdk.Int(519643),
                            SegmentID: sdk.String("hic"),
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: sdk.String("exercitationem"),
                        Range: &shared.Range{
                            EndIndex: sdk.Int(750765),
                            SegmentID: sdk.String("sit"),
                            StartIndex: sdk.Int(699575),
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(1488.29),
                                        Green: sdk.Float32(9679.66),
                                        Red: sdk.Float32(1318.52),
                                    },
                                },
                            },
                            BaselineOffset: shared.TextStyleBaselineOffsetEnumSubscript.ToPointer(),
                            Bold: sdk.Bool(false),
                            FontSize: &shared.Dimension{
                                Magnitude: sdk.Float64(7079.18),
                                Unit: shared.DimensionUnitEnumUnitUnspecified.ToPointer(),
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: sdk.Float32(7090.72),
                                        Green: sdk.Float32(708.69),
                                        Red: sdk.Float32(6117.49),
                                    },
                                },
                            },
                            Italic: sdk.Bool(false),
                            Link: &shared.Link{
                                BookmarkID: sdk.String("dolore"),
                                HeadingID: sdk.String("laborum"),
                                URL: sdk.String("sed"),
                            },
                            SmallCaps: sdk.Bool(false),
                            Strikethrough: sdk.Bool(false),
                            Underline: sdk.Bool(false),
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: sdk.String("in"),
                                Weight: sdk.Int(417486),
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: sdk.String("quidem"),
                TargetRevisionID: sdk.String("explicabo"),
            },
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        DocumentID: "suscipit",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.DocsDocumentsBatchUpdateSecurity{
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