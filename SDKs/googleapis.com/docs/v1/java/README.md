# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateRequest;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateResponse;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Background;
import org.openapis.openapi.models.shared.BatchUpdateDocumentRequest;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.CreateFooterRequest;
import org.openapis.openapi.models.shared.CreateFooterRequestTypeEnum;
import org.openapis.openapi.models.shared.CreateFootnoteRequest;
import org.openapis.openapi.models.shared.CreateHeaderRequest;
import org.openapis.openapi.models.shared.CreateHeaderRequestTypeEnum;
import org.openapis.openapi.models.shared.CreateNamedRangeRequest;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequest;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequestBulletPresetEnum;
import org.openapis.openapi.models.shared.DeleteContentRangeRequest;
import org.openapis.openapi.models.shared.DeleteFooterRequest;
import org.openapis.openapi.models.shared.DeleteHeaderRequest;
import org.openapis.openapi.models.shared.DeleteNamedRangeRequest;
import org.openapis.openapi.models.shared.DeleteParagraphBulletsRequest;
import org.openapis.openapi.models.shared.DeletePositionedObjectRequest;
import org.openapis.openapi.models.shared.DeleteTableColumnRequest;
import org.openapis.openapi.models.shared.DeleteTableRowRequest;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.DimensionUnitEnum;
import org.openapis.openapi.models.shared.DocumentStyle;
import org.openapis.openapi.models.shared.EndOfSegmentLocation;
import org.openapis.openapi.models.shared.InsertInlineImageRequest;
import org.openapis.openapi.models.shared.InsertPageBreakRequest;
import org.openapis.openapi.models.shared.InsertSectionBreakRequest;
import org.openapis.openapi.models.shared.InsertSectionBreakRequestSectionTypeEnum;
import org.openapis.openapi.models.shared.InsertTableColumnRequest;
import org.openapis.openapi.models.shared.InsertTableRequest;
import org.openapis.openapi.models.shared.InsertTableRowRequest;
import org.openapis.openapi.models.shared.InsertTextRequest;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MergeTableCellsRequest;
import org.openapis.openapi.models.shared.OptionalColor;
import org.openapis.openapi.models.shared.ParagraphBorder;
import org.openapis.openapi.models.shared.ParagraphBorderDashStyleEnum;
import org.openapis.openapi.models.shared.ParagraphStyle;
import org.openapis.openapi.models.shared.ParagraphStyleAlignmentEnum;
import org.openapis.openapi.models.shared.ParagraphStyleDirectionEnum;
import org.openapis.openapi.models.shared.ParagraphStyleNamedStyleTypeEnum;
import org.openapis.openapi.models.shared.ParagraphStyleSpacingModeEnum;
import org.openapis.openapi.models.shared.PinTableHeaderRowsRequest;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.ReplaceAllTextRequest;
import org.openapis.openapi.models.shared.ReplaceImageRequest;
import org.openapis.openapi.models.shared.ReplaceImageRequestImageReplaceMethodEnum;
import org.openapis.openapi.models.shared.ReplaceNamedRangeContentRequest;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.RgbColor;
import org.openapis.openapi.models.shared.SectionColumnProperties;
import org.openapis.openapi.models.shared.SectionStyle;
import org.openapis.openapi.models.shared.SectionStyleColumnSeparatorStyleEnum;
import org.openapis.openapi.models.shared.SectionStyleContentDirectionEnum;
import org.openapis.openapi.models.shared.SectionStyleSectionTypeEnum;
import org.openapis.openapi.models.shared.Shading;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.SubstringMatchCriteria;
import org.openapis.openapi.models.shared.TabStop;
import org.openapis.openapi.models.shared.TabStopAlignmentEnum;
import org.openapis.openapi.models.shared.TableCellBorder;
import org.openapis.openapi.models.shared.TableCellBorderDashStyleEnum;
import org.openapis.openapi.models.shared.TableCellLocation;
import org.openapis.openapi.models.shared.TableCellStyle;
import org.openapis.openapi.models.shared.TableCellStyleContentAlignmentEnum;
import org.openapis.openapi.models.shared.TableColumnProperties;
import org.openapis.openapi.models.shared.TableColumnPropertiesWidthTypeEnum;
import org.openapis.openapi.models.shared.TableRange;
import org.openapis.openapi.models.shared.TableRowStyle;
import org.openapis.openapi.models.shared.TextStyle;
import org.openapis.openapi.models.shared.TextStyleBaselineOffsetEnum;
import org.openapis.openapi.models.shared.UnmergeTableCellsRequest;
import org.openapis.openapi.models.shared.UpdateDocumentStyleRequest;
import org.openapis.openapi.models.shared.UpdateParagraphStyleRequest;
import org.openapis.openapi.models.shared.UpdateSectionStyleRequest;
import org.openapis.openapi.models.shared.UpdateTableCellStyleRequest;
import org.openapis.openapi.models.shared.UpdateTableColumnPropertiesRequest;
import org.openapis.openapi.models.shared.UpdateTableRowStyleRequest;
import org.openapis.openapi.models.shared.UpdateTextStyleRequest;
import org.openapis.openapi.models.shared.WeightedFontFamily;
import org.openapis.openapi.models.shared.WriteControl;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocsDocumentsBatchUpdateRequest req = new DocsDocumentsBatchUpdateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchUpdateDocumentRequest = new BatchUpdateDocumentRequest() {{
                    requests = new org.openapis.openapi.models.shared.Request[]{{
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 844266;
                                    segmentId = "unde";
                                }};
                                type = CreateFooterRequestTypeEnum.DEFAULT_;
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "corrupti";
                                }};
                                location = new Location() {{
                                    index = 847252;
                                    segmentId = "vel";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 623564;
                                    segmentId = "deserunt";
                                }};
                                type = CreateHeaderRequestTypeEnum.HEADER_FOOTER_TYPE_UNSPECIFIED;
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "Dr. Valerie Toy";
                                range = new Range() {{
                                    endIndex = 383441;
                                    segmentId = "molestiae";
                                    startIndex = 791725;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = CreateParagraphBulletsRequestBulletPresetEnum.NUMBERED_DECIMAL_NESTED;
                                range = new Range() {{
                                    endIndex = 528895;
                                    segmentId = "iusto";
                                    startIndex = 568045;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 392785;
                                    segmentId = "recusandae";
                                    startIndex = 836079;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "ab";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "quis";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "Iris Aufderhar";
                                namedRangeId = "sapiente";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 778157;
                                    segmentId = "odit";
                                    startIndex = 870013;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "at";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 978619;
                                    rowIndex = 473608;
                                    tableStartLocation = new Location() {{
                                        index = 799159;
                                        segmentId = "quod";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 461479;
                                    rowIndex = 520478;
                                    tableStartLocation = new Location() {{
                                        index = 780529;
                                        segmentId = "dolorum";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "dicta";
                                }};
                                location = new Location() {{
                                    index = 720633;
                                    segmentId = "officia";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 5820.2;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 5373.73;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                }};
                                uri = "https://mean-brick.info";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "molestiae";
                                }};
                                location = new Location() {{
                                    index = 264555;
                                    segmentId = "qui";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "impedit";
                                }};
                                location = new Location() {{
                                    index = 736918;
                                    segmentId = "esse";
                                }};
                                sectionType = InsertSectionBreakRequestSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 568434;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "aspernatur";
                                }};
                                location = new Location() {{
                                    index = 18789;
                                    segmentId = "ad";
                                }};
                                rows = 617636;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 149675;
                                    rowIndex = 612096;
                                    tableStartLocation = new Location() {{
                                        index = 222321;
                                        segmentId = "natus";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 386489;
                                    rowIndex = 943749;
                                    tableStartLocation = new Location() {{
                                        index = 902599;
                                        segmentId = "fuga";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "in";
                                }};
                                location = new Location() {{
                                    index = 359508;
                                    segmentId = "iste";
                                }};
                                text = "iure";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 902349;
                                    rowSpan = 697631;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 99280;
                                        rowIndex = 60225;
                                        tableStartLocation = new Location() {{
                                            index = 969810;
                                            segmentId = "est";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 653140;
                                tableStartLocation = new Location() {{
                                    index = 670638;
                                    segmentId = "dolores";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "dolorem";
                                }};
                                replaceText = "corporis";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "explicabo";
                                imageReplaceMethod = ReplaceImageRequestImageReplaceMethodEnum.CENTER_CROP;
                                uri = "http://palatable-forum.biz";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "excepturi";
                                namedRangeName = "accusantium";
                                text = "iure";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 634274;
                                    rowSpan = 988374;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 958950;
                                        rowIndex = 102044;
                                        tableStartLocation = new Location() {{
                                            index = 652790;
                                            segmentId = "dolorem";
                                        }};
                                    }};
                                }};
                            }};
                            updateDocumentStyle = new UpdateDocumentStyleRequest() {{
                                documentStyle = new DocumentStyle() {{
                                    background = new Background() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6350.59;
                                                    green = 1613.09;
                                                    red = 9953;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "mollitia";
                                    defaultHeaderId = "occaecati";
                                    evenPageFooterId = "numquam";
                                    evenPageHeaderId = "commodi";
                                    firstPageFooterId = "quam";
                                    firstPageHeaderId = "molestiae";
                                    marginBottom = new Dimension() {{
                                        magnitude = 2444.25;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 1589.69;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 1103.75;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 6563.3;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 1381.83;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 1965.82;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    pageNumberStart = 368725;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6625.27;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 135.71;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "error";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "temporibus";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = ParagraphStyleAlignmentEnum.END;
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 960.98;
                                                    green = 9719.45;
                                                    red = 9764.6;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH;
                                        padding = new Dimension() {{
                                            magnitude = 4686.51;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 9767.62;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6048.46;
                                                    green = 4511.59;
                                                    red = 7392.64;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 391.87;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2828.07;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1201.96;
                                                    green = 3594.44;
                                                    red = 2961.4;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.SOLID;
                                        padding = new Dimension() {{
                                            magnitude = 1187.27;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3179.83;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4142.63;
                                                    green = 9182.36;
                                                    red = 641.47;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 6924.72;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5666.02;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2653.89;
                                                    green = 5089.69;
                                                    red = 5232.48;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH;
                                        padding = new Dimension() {{
                                            magnitude = 939.4;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5759.47;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    direction = ParagraphStyleDirectionEnum.RIGHT_TO_LEFT;
                                    headingId = "incidunt";
                                    indentEnd = new Dimension() {{
                                        magnitude = 3185.69;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 6674.11;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 1317.97;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 7163.27;
                                    namedStyleType = ParagraphStyleNamedStyleTypeEnum.HEADING5;
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2894.06;
                                                    green = 2647.3;
                                                    red = 1831.91;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 3978.21;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 5528.22;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    spacingMode = ParagraphStyleSpacingModeEnum.SPACING_MODE_UNSPECIFIED;
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.START;
                                            offset = new Dimension() {{
                                                magnitude = 46.95;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.CENTER;
                                            offset = new Dimension() {{
                                                magnitude = 5696.18;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.CENTER;
                                            offset = new Dimension() {{
                                                magnitude = 7351.94;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.END;
                                            offset = new Dimension() {{
                                                magnitude = 4332.88;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 756107;
                                    segmentId = "sint";
                                    startIndex = 396098;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "provident";
                                range = new Range() {{
                                    endIndex = 896039;
                                    segmentId = "sint";
                                    startIndex = 638921;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 8915.55;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 6800.56;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = SectionStyleColumnSeparatorStyleEnum.NONE;
                                    contentDirection = SectionStyleContentDirectionEnum.RIGHT_TO_LEFT;
                                    defaultFooterId = "maiores";
                                    defaultHeaderId = "rerum";
                                    evenPageFooterId = "dicta";
                                    evenPageHeaderId = "magnam";
                                    firstPageFooterId = "cumque";
                                    firstPageHeaderId = "facere";
                                    marginBottom = new Dimension() {{
                                        magnitude = 4118.2;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 6754.39;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 2497.96;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 3132.18;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 9654.17;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 5884.65;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    pageNumberStart = 659669;
                                    sectionType = SectionStyleSectionTypeEnum.CONTINUOUS;
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "deleniti";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 9560.84;
                                                green = 2305.33;
                                                red = 6439.9;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3948.69;
                                                    green = 4238.55;
                                                    red = 6188.09;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DOT;
                                        width = new Dimension() {{
                                            magnitude = 4748.67;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4701.32;
                                                    green = 3015.75;
                                                    red = 7160.75;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DOT;
                                        width = new Dimension() {{
                                            magnitude = 2879.91;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3834.62;
                                                    green = 6180.16;
                                                    red = 7491.7;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.SOLID;
                                        width = new Dimension() {{
                                            magnitude = 8784.53;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1028.63;
                                                    green = 2982.82;
                                                    red = 923.73;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DOT;
                                        width = new Dimension() {{
                                            magnitude = 3540.47;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    columnSpan = 551816;
                                    contentAlignment = TableCellStyleContentAlignmentEnum.TOP;
                                    paddingBottom = new Dimension() {{
                                        magnitude = 336.25;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 9689.62;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 3209.97;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 2212.62;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    rowSpan = 141264;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 367562;
                                    rowSpan = 97260;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 435865;
                                        rowIndex = 984043;
                                        tableStartLocation = new Location() {{
                                            index = 891924;
                                            segmentId = "eius";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 806194;
                                    segmentId = "deleniti";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(447926),
                                    add(100226),
                                    add(99569),
                                }};
                                fields = "repudiandae";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 3523.12;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    widthType = TableColumnPropertiesWidthTypeEnum.EVENLY_DISTRIBUTED;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 998848;
                                    segmentId = "quibusdam";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "sed";
                                rowIndices = new Integer[]{{
                                    add(868126),
                                    add(37559),
                                    add(162493),
                                    add(508315),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 6155.6;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 123820;
                                    segmentId = "quo";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "illum";
                                range = new Range() {{
                                    endIndex = 864934;
                                    segmentId = "maxime";
                                    startIndex = 411397;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 5691.01;
                                                green = 1399.72;
                                                red = 4071.83;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = TextStyleBaselineOffsetEnum.BASELINE_OFFSET_UNSPECIFIED;
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 691.67;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 6974.29;
                                                green = 3732.91;
                                                red = 4535.43;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "autem";
                                        headingId = "nam";
                                        url = "eaque";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "pariatur";
                                        weight = 365496;
                                    }};
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 975522;
                                    segmentId = "perferendis";
                                }};
                                type = CreateFooterRequestTypeEnum.DEFAULT_;
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "amet";
                                }};
                                location = new Location() {{
                                    index = 11714;
                                    segmentId = "cumque";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 359978;
                                    segmentId = "hic";
                                }};
                                type = CreateHeaderRequestTypeEnum.DEFAULT_;
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "Ernest Hayes";
                                range = new Range() {{
                                    endIndex = 54338;
                                    segmentId = "quis";
                                    startIndex = 199996;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = CreateParagraphBulletsRequestBulletPresetEnum.BULLET_DIAMONDX_ARROW3_D_SQUARE;
                                range = new Range() {{
                                    endIndex = 18521;
                                    segmentId = "dolores";
                                    startIndex = 793698;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 463451;
                                    segmentId = "dolor";
                                    startIndex = 874573;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "nostrum";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "hic";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "Alejandro Purdy DDS";
                                namedRangeId = "consequuntur";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 500026;
                                    segmentId = "error";
                                    startIndex = 50370;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "occaecati";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 699098;
                                    rowIndex = 237893;
                                    tableStartLocation = new Location() {{
                                        index = 992397;
                                        segmentId = "earum";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 267262;
                                    rowIndex = 613966;
                                    tableStartLocation = new Location() {{
                                        index = 679091;
                                        segmentId = "deleniti";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "pariatur";
                                }};
                                location = new Location() {{
                                    index = 589910;
                                    segmentId = "nobis";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 7301.22;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 3119.45;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                }};
                                uri = "http://drafty-correspondent.biz";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "qui";
                                }};
                                location = new Location() {{
                                    index = 218749;
                                    segmentId = "hic";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "excepturi";
                                }};
                                location = new Location() {{
                                    index = 739551;
                                    segmentId = "voluptate";
                                }};
                                sectionType = InsertSectionBreakRequestSectionTypeEnum.CONTINUOUS;
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 970237;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "amet";
                                }};
                                location = new Location() {{
                                    index = 680545;
                                    segmentId = "numquam";
                                }};
                                rows = 85295;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 58029;
                                    rowIndex = 56418;
                                    tableStartLocation = new Location() {{
                                        index = 434417;
                                        segmentId = "odio";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 311796;
                                    rowIndex = 881005;
                                    tableStartLocation = new Location() {{
                                        index = 696344;
                                        segmentId = "voluptatibus";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "voluptas";
                                }};
                                location = new Location() {{
                                    index = 617658;
                                    segmentId = "eos";
                                }};
                                text = "atque";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 24678;
                                    rowSpan = 854614;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 67249;
                                        rowIndex = 743835;
                                        tableStartLocation = new Location() {{
                                            index = 679393;
                                            segmentId = "iusto";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 453697;
                                tableStartLocation = new Location() {{
                                    index = 677082;
                                    segmentId = "deleniti";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "omnis";
                                }};
                                replaceText = "necessitatibus";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "distinctio";
                                imageReplaceMethod = ReplaceImageRequestImageReplaceMethodEnum.CENTER_CROP;
                                uri = "http://dutiful-increase.name";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "saepe";
                                namedRangeName = "eius";
                                text = "aspernatur";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 20651;
                                    rowSpan = 229219;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 758379;
                                        rowIndex = 881586;
                                        tableStartLocation = new Location() {{
                                            index = 320017;
                                            segmentId = "saepe";
                                        }};
                                    }};
                                }};
                            }};
                            updateDocumentStyle = new UpdateDocumentStyleRequest() {{
                                documentStyle = new DocumentStyle() {{
                                    background = new Background() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3834.64;
                                                    green = 6457.85;
                                                    red = 5883.17;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "minima";
                                    defaultHeaderId = "repellendus";
                                    evenPageFooterId = "totam";
                                    evenPageHeaderId = "similique";
                                    firstPageFooterId = "alias";
                                    firstPageHeaderId = "at";
                                    marginBottom = new Dimension() {{
                                        magnitude = 3118.6;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 4254.51;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 8853.38;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 6798.8;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 4561.3;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 4834.09;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    pageNumberStart = 788740;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 9473.71;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7308.56;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "numquam";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "enim";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = ParagraphStyleAlignmentEnum.START;
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9574.51;
                                                    green = 5182.01;
                                                    red = 4717.52;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 7115.84;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1536.94;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7304.42;
                                                    green = 3741.7;
                                                    red = 6462.65;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.SOLID;
                                        padding = new Dimension() {{
                                            magnitude = 2148.8;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1864.58;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8075.81;
                                                    green = 8638.56;
                                                    red = 7470.8;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 6748.48;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2768.94;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1749.09;
                                                    green = 7168.6;
                                                    red = 7044.74;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.SOLID;
                                        padding = new Dimension() {{
                                            magnitude = 4631.5;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 8404.29;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2048.65;
                                                    green = 1448.47;
                                                    red = 1649.59;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.SOLID;
                                        padding = new Dimension() {{
                                            magnitude = 1248.33;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7220.81;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    direction = ParagraphStyleDirectionEnum.CONTENT_DIRECTION_UNSPECIFIED;
                                    headingId = "cumque";
                                    indentEnd = new Dimension() {{
                                        magnitude = 7469.94;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 925.96;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 2174.5;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 7492.55;
                                    namedStyleType = ParagraphStyleNamedStyleTypeEnum.HEADING2;
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7316.94;
                                                    green = 5844.76;
                                                    red = 456.14;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 9619.37;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 2921.47;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    spacingMode = ParagraphStyleSpacingModeEnum.SPACING_MODE_UNSPECIFIED;
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.TAB_STOP_ALIGNMENT_UNSPECIFIED;
                                            offset = new Dimension() {{
                                                magnitude = 630.38;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.CENTER;
                                            offset = new Dimension() {{
                                                magnitude = 9295.3;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.CENTER;
                                            offset = new Dimension() {{
                                                magnitude = 8330.38;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 984330;
                                    segmentId = "ut";
                                    startIndex = 703495;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "cupiditate";
                                range = new Range() {{
                                    endIndex = 181631;
                                    segmentId = "quae";
                                    startIndex = 512393;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 5804.47;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 7875.42;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 6064.76;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 2184.03;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = SectionStyleColumnSeparatorStyleEnum.NONE;
                                    contentDirection = SectionStyleContentDirectionEnum.CONTENT_DIRECTION_UNSPECIFIED;
                                    defaultFooterId = "vero";
                                    defaultHeaderId = "tenetur";
                                    evenPageFooterId = "dignissimos";
                                    evenPageHeaderId = "hic";
                                    firstPageFooterId = "distinctio";
                                    firstPageHeaderId = "quod";
                                    marginBottom = new Dimension() {{
                                        magnitude = 4861.6;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 7085.48;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 4981.4;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 8445.5;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 1943.42;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 7733.26;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    pageNumberStart = 974259;
                                    sectionType = SectionStyleSectionTypeEnum.CONTINUOUS;
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "nulla";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 1481.41;
                                                green = 7804.27;
                                                red = 9818.3;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9850.33;
                                                    green = 4783.7;
                                                    red = 7535.7;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.SOLID;
                                        width = new Dimension() {{
                                            magnitude = 40.48;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2694.79;
                                                    green = 3685.84;
                                                    red = 4104.92;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        width = new Dimension() {{
                                            magnitude = 4282.24;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2978.42;
                                                    green = 1898.48;
                                                    red = 4011.32;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DOT;
                                        width = new Dimension() {{
                                            magnitude = 1206.57;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9807;
                                                    green = 978.44;
                                                    red = 4061.2;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DASH;
                                        width = new Dimension() {{
                                            magnitude = 5692.11;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    columnSpan = 343605;
                                    contentAlignment = TableCellStyleContentAlignmentEnum.BOTTOM;
                                    paddingBottom = new Dimension() {{
                                        magnitude = 7888.73;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 4113.72;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 3592.71;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 3994.99;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    rowSpan = 301831;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 407241;
                                    rowSpan = 775220;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 232234;
                                        rowIndex = 926213;
                                        tableStartLocation = new Location() {{
                                            index = 132487;
                                            segmentId = "minima";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 53427;
                                    segmentId = "a";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(13948),
                                    add(11427),
                                    add(533466),
                                }};
                                fields = "impedit";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 3045.82;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    widthType = TableColumnPropertiesWidthTypeEnum.FIXED_WIDTH;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 79522;
                                    segmentId = "non";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "et";
                                rowIndices = new Integer[]{{
                                    add(672048),
                                    add(810424),
                                    add(245367),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 4321.48;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 752135;
                                    segmentId = "quas";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "assumenda";
                                range = new Range() {{
                                    endIndex = 860552;
                                    segmentId = "voluptas";
                                    startIndex = 727044;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 965.49;
                                                green = 2703.28;
                                                red = 2561.39;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = TextStyleBaselineOffsetEnum.BASELINE_OFFSET_UNSPECIFIED;
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 5919.35;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 4764.77;
                                                green = 3015.98;
                                                red = 4879.35;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "eius";
                                        headingId = "esse";
                                        url = "esse";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "rem";
                                        weight = 683282;
                                    }};
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 442015;
                                    segmentId = "quidem";
                                }};
                                type = CreateFooterRequestTypeEnum.DEFAULT_;
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "ut";
                                }};
                                location = new Location() {{
                                    index = 433439;
                                    segmentId = "suscipit";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 826871;
                                    segmentId = "eos";
                                }};
                                type = CreateHeaderRequestTypeEnum.DEFAULT_;
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "Harold Bednar";
                                range = new Range() {{
                                    endIndex = 206594;
                                    segmentId = "quo";
                                    startIndex = 847276;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = CreateParagraphBulletsRequestBulletPresetEnum.NUMBERED_DECIMAL_NESTED;
                                range = new Range() {{
                                    endIndex = 681359;
                                    segmentId = "eius";
                                    startIndex = 178367;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 373813;
                                    segmentId = "ab";
                                    startIndex = 587600;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "consequatur";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "tempora";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "Roberto Collier";
                                namedRangeId = "esse";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 925164;
                                    segmentId = "aperiam";
                                    startIndex = 715179;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "quod";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 490819;
                                    rowIndex = 76956;
                                    tableStartLocation = new Location() {{
                                        index = 469498;
                                        segmentId = "totam";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 882710;
                                    rowIndex = 306810;
                                    tableStartLocation = new Location() {{
                                        index = 488410;
                                        segmentId = "occaecati";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "commodi";
                                }};
                                location = new Location() {{
                                    index = 959434;
                                    segmentId = "dolores";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 6455.7;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 353.62;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                }};
                                uri = "http://nasty-leveret.com";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "deleniti";
                                }};
                                location = new Location() {{
                                    index = 143829;
                                    segmentId = "fuga";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "mollitia";
                                }};
                                location = new Location() {{
                                    index = 277596;
                                    segmentId = "atque";
                                }};
                                sectionType = InsertSectionBreakRequestSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 325685;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "nisi";
                                }};
                                location = new Location() {{
                                    index = 147014;
                                    segmentId = "sapiente";
                                }};
                                rows = 159870;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 187131;
                                    rowIndex = 129412;
                                    tableStartLocation = new Location() {{
                                        index = 903984;
                                        segmentId = "occaecati";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 543806;
                                    rowIndex = 92260;
                                    tableStartLocation = new Location() {{
                                        index = 456911;
                                        segmentId = "eveniet";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "accusamus";
                                }};
                                location = new Location() {{
                                    index = 82971;
                                    segmentId = "esse";
                                }};
                                text = "quod";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 724168;
                                    rowSpan = 877131;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 399025;
                                        rowIndex = 93459;
                                        tableStartLocation = new Location() {{
                                            index = 904045;
                                            segmentId = "vel";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 690025;
                                tableStartLocation = new Location() {{
                                    index = 473221;
                                    segmentId = "rerum";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "occaecati";
                                }};
                                replaceText = "minima";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "distinctio";
                                imageReplaceMethod = ReplaceImageRequestImageReplaceMethodEnum.CENTER_CROP;
                                uri = "http://pointless-reference.biz";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "cumque";
                                namedRangeName = "consequuntur";
                                text = "consequatur";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 796392;
                                    rowSpan = 308286;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 959167;
                                        rowIndex = 232865;
                                        tableStartLocation = new Location() {{
                                            index = 458139;
                                            segmentId = "blanditiis";
                                        }};
                                    }};
                                }};
                            }};
                            updateDocumentStyle = new UpdateDocumentStyleRequest() {{
                                documentStyle = new DocumentStyle() {{
                                    background = new Background() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5909.84;
                                                    green = 9537.22;
                                                    red = 8577.23;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "quas";
                                    defaultHeaderId = "esse";
                                    evenPageFooterId = "quasi";
                                    evenPageHeaderId = "a";
                                    firstPageFooterId = "error";
                                    firstPageHeaderId = "sint";
                                    marginBottom = new Dimension() {{
                                        magnitude = 8630.23;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 1576.32;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 9924.3;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 850.01;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 944.58;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 6336.08;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    pageNumberStart = 949298;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 627.13;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4240.32;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "eius";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "libero";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = ParagraphStyleAlignmentEnum.JUSTIFIED;
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7422.38;
                                                    green = 333.04;
                                                    red = 3069.86;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH;
                                        padding = new Dimension() {{
                                            magnitude = 1197.71;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4438.79;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3917.74;
                                                    green = 163.28;
                                                    red = 5318.49;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 8453.58;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5362.75;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6802.7;
                                                    green = 996.15;
                                                    red = 6091.78;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH;
                                        padding = new Dimension() {{
                                            magnitude = 984.78;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 920.27;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 559.65;
                                                    green = 3267.01;
                                                    red = 865.32;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        padding = new Dimension() {{
                                            magnitude = 2371.73;
                                            unit = DimensionUnitEnum.PT;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 8395.13;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5223.71;
                                                    green = 156.06;
                                                    red = 5130.75;
                                                }};
                                            }};
                                        }};
                                        dashStyle = ParagraphBorderDashStyleEnum.SOLID;
                                        padding = new Dimension() {{
                                            magnitude = 6498.32;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5445.91;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    direction = ParagraphStyleDirectionEnum.CONTENT_DIRECTION_UNSPECIFIED;
                                    headingId = "dolor";
                                    indentEnd = new Dimension() {{
                                        magnitude = 5801.52;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 7710.89;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 3762.26;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 4910.25;
                                    namedStyleType = ParagraphStyleNamedStyleTypeEnum.NORMAL_TEXT;
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9816.4;
                                                    green = 6184.8;
                                                    red = 2446.51;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 9742.57;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 9903.45;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    spacingMode = ParagraphStyleSpacingModeEnum.NEVER_COLLAPSE;
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.TAB_STOP_ALIGNMENT_UNSPECIFIED;
                                            offset = new Dimension() {{
                                                magnitude = 8315.2;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = TabStopAlignmentEnum.END;
                                            offset = new Dimension() {{
                                                magnitude = 4903.05;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 989410;
                                    segmentId = "nemo";
                                    startIndex = 65304;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "quaerat";
                                range = new Range() {{
                                    endIndex = 783235;
                                    segmentId = "quod";
                                    startIndex = 288398;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 2414.18;
                                                unit = DimensionUnitEnum.PT;
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 6625.05;
                                                unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = SectionStyleColumnSeparatorStyleEnum.COLUMN_SEPARATOR_STYLE_UNSPECIFIED;
                                    contentDirection = SectionStyleContentDirectionEnum.LEFT_TO_RIGHT;
                                    defaultFooterId = "est";
                                    defaultHeaderId = "recusandae";
                                    evenPageFooterId = "totam";
                                    evenPageHeaderId = "fugiat";
                                    firstPageFooterId = "vel";
                                    firstPageHeaderId = "ducimus";
                                    marginBottom = new Dimension() {{
                                        magnitude = 5546.88;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 2870.51;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 7065.75;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 4148.57;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 3605.45;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 8286.57;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    pageNumberStart = 924967;
                                    sectionType = SectionStyleSectionTypeEnum.CONTINUOUS;
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "aperiam";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 7386.83;
                                                green = 2326.27;
                                                red = 4490.83;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3485.19;
                                                    green = 9372.85;
                                                    red = 8149.67;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.SOLID;
                                        width = new Dimension() {{
                                            magnitude = 9854.92;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9689.72;
                                                    green = 6971.42;
                                                    red = 9049.49;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DASH;
                                        width = new Dimension() {{
                                            magnitude = 2965.56;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9920.12;
                                                    green = 2415.45;
                                                    red = 2494.2;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.DASH_STYLE_UNSPECIFIED;
                                        width = new Dimension() {{
                                            magnitude = 1059.06;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9509.53;
                                                    green = 8915.23;
                                                    red = 2334.2;
                                                }};
                                            }};
                                        }};
                                        dashStyle = TableCellBorderDashStyleEnum.SOLID;
                                        width = new Dimension() {{
                                            magnitude = 6897.68;
                                            unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                        }};
                                    }};
                                    columnSpan = 58356;
                                    contentAlignment = TableCellStyleContentAlignmentEnum.BOTTOM;
                                    paddingBottom = new Dimension() {{
                                        magnitude = 7307.09;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 8817.21;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 2724.37;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 3790.57;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    rowSpan = 374296;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 324405;
                                    rowSpan = 748789;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 680116;
                                        rowIndex = 237807;
                                        tableStartLocation = new Location() {{
                                            index = 795535;
                                            segmentId = "dolores";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 503934;
                                    segmentId = "in";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(304468),
                                    add(885963),
                                }};
                                fields = "temporibus";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 3518.7;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    widthType = TableColumnPropertiesWidthTypeEnum.FIXED_WIDTH;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 502389;
                                    segmentId = "quas";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "hic";
                                rowIndices = new Integer[]{{
                                    add(633998),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 5485.19;
                                        unit = DimensionUnitEnum.PT;
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 519643;
                                    segmentId = "hic";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "exercitationem";
                                range = new Range() {{
                                    endIndex = 750765;
                                    segmentId = "sit";
                                    startIndex = 699575;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 1488.29;
                                                green = 9679.66;
                                                red = 1318.52;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = TextStyleBaselineOffsetEnum.SUBSCRIPT;
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 7079.18;
                                        unit = DimensionUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 7090.72;
                                                green = 708.69;
                                                red = 6117.49;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "dolore";
                                        headingId = "laborum";
                                        url = "sed";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "in";
                                        weight = 417486;
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "quidem";
                        targetRevisionId = "explicabo";
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "suscipit";
                key = "sapiente";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "reiciendis";
                uploadProtocol = "perferendis";
            }};            

            DocsDocumentsBatchUpdateResponse res = sdk.documents.docsDocumentsBatchUpdate(req, new DocsDocumentsBatchUpdateSecurity() {{
                option1 = new DocsDocumentsBatchUpdateSecurityOption1("corrupti", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdateDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documents](docs/documents/README.md)

* [docsDocumentsBatchUpdate](docs/documents/README.md#docsdocumentsbatchupdate) - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* [docsDocumentsCreate](docs/documents/README.md#docsdocumentscreate) - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* [docsDocumentsGet](docs/documents/README.md#docsdocumentsget) - Gets the latest version of the specified document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
