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

import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateRequest;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateDocumentRequest;
import org.openapis.openapi.models.shared.WriteControl;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.UpdateTextStyleRequest;
import org.openapis.openapi.models.shared.TextStyleBaselineOffsetEnum;
import org.openapis.openapi.models.shared.TextStyle;
import org.openapis.openapi.models.shared.WeightedFontFamily;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.OptionalColor;
import org.openapis.openapi.models.shared.Color;
import org.openapis.openapi.models.shared.RgbColor;
import org.openapis.openapi.models.shared.DimensionUnitEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.UpdateTableRowStyleRequest;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.TableRowStyle;
import org.openapis.openapi.models.shared.UpdateTableColumnPropertiesRequest;
import org.openapis.openapi.models.shared.TableColumnPropertiesWidthTypeEnum;
import org.openapis.openapi.models.shared.TableColumnProperties;
import org.openapis.openapi.models.shared.UpdateTableCellStyleRequest;
import org.openapis.openapi.models.shared.TableRange;
import org.openapis.openapi.models.shared.TableCellLocation;
import org.openapis.openapi.models.shared.TableCellStyleContentAlignmentEnum;
import org.openapis.openapi.models.shared.TableCellStyle;
import org.openapis.openapi.models.shared.TableCellBorderDashStyleEnum;
import org.openapis.openapi.models.shared.TableCellBorder;
import org.openapis.openapi.models.shared.UpdateSectionStyleRequest;
import org.openapis.openapi.models.shared.SectionStyleColumnSeparatorStyleEnum;
import org.openapis.openapi.models.shared.SectionStyleContentDirectionEnum;
import org.openapis.openapi.models.shared.SectionStyleSectionTypeEnum;
import org.openapis.openapi.models.shared.SectionStyle;
import org.openapis.openapi.models.shared.SectionColumnProperties;
import org.openapis.openapi.models.shared.UpdateParagraphStyleRequest;
import org.openapis.openapi.models.shared.ParagraphStyleAlignmentEnum;
import org.openapis.openapi.models.shared.ParagraphStyleDirectionEnum;
import org.openapis.openapi.models.shared.ParagraphStyleNamedStyleTypeEnum;
import org.openapis.openapi.models.shared.ParagraphStyleSpacingModeEnum;
import org.openapis.openapi.models.shared.ParagraphStyle;
import org.openapis.openapi.models.shared.TabStopAlignmentEnum;
import org.openapis.openapi.models.shared.TabStop;
import org.openapis.openapi.models.shared.Shading;
import org.openapis.openapi.models.shared.ParagraphBorderDashStyleEnum;
import org.openapis.openapi.models.shared.ParagraphBorder;
import org.openapis.openapi.models.shared.UpdateDocumentStyleRequest;
import org.openapis.openapi.models.shared.DocumentStyle;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.Background;
import org.openapis.openapi.models.shared.UnmergeTableCellsRequest;
import org.openapis.openapi.models.shared.ReplaceNamedRangeContentRequest;
import org.openapis.openapi.models.shared.ReplaceImageRequestImageReplaceMethodEnum;
import org.openapis.openapi.models.shared.ReplaceImageRequest;
import org.openapis.openapi.models.shared.ReplaceAllTextRequest;
import org.openapis.openapi.models.shared.SubstringMatchCriteria;
import org.openapis.openapi.models.shared.PinTableHeaderRowsRequest;
import org.openapis.openapi.models.shared.MergeTableCellsRequest;
import org.openapis.openapi.models.shared.InsertTextRequest;
import org.openapis.openapi.models.shared.EndOfSegmentLocation;
import org.openapis.openapi.models.shared.InsertTableRowRequest;
import org.openapis.openapi.models.shared.InsertTableColumnRequest;
import org.openapis.openapi.models.shared.InsertTableRequest;
import org.openapis.openapi.models.shared.InsertSectionBreakRequestSectionTypeEnum;
import org.openapis.openapi.models.shared.InsertSectionBreakRequest;
import org.openapis.openapi.models.shared.InsertPageBreakRequest;
import org.openapis.openapi.models.shared.InsertInlineImageRequest;
import org.openapis.openapi.models.shared.DeleteTableRowRequest;
import org.openapis.openapi.models.shared.DeleteTableColumnRequest;
import org.openapis.openapi.models.shared.DeletePositionedObjectRequest;
import org.openapis.openapi.models.shared.DeleteParagraphBulletsRequest;
import org.openapis.openapi.models.shared.DeleteNamedRangeRequest;
import org.openapis.openapi.models.shared.DeleteHeaderRequest;
import org.openapis.openapi.models.shared.DeleteFooterRequest;
import org.openapis.openapi.models.shared.DeleteContentRangeRequest;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequestBulletPresetEnum;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequest;
import org.openapis.openapi.models.shared.CreateNamedRangeRequest;
import org.openapis.openapi.models.shared.CreateHeaderRequestTypeEnum;
import org.openapis.openapi.models.shared.CreateHeaderRequest;
import org.openapis.openapi.models.shared.CreateFootnoteRequest;
import org.openapis.openapi.models.shared.CreateFooterRequestTypeEnum;
import org.openapis.openapi.models.shared.CreateFooterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocsDocumentsBatchUpdateRequest req = new DocsDocumentsBatchUpdateRequest() {{
                dollarXgafv = "2";
                batchUpdateDocumentRequest = new BatchUpdateDocumentRequest() {{
                    requests = new org.openapis.openapi.models.shared.Request[]{{
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 715190;
                                    segmentId = "quibusdam";
                                }};
                                type = "DEFAULT";
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "nulla";
                                }};
                                location = new Location() {{
                                    index = 544883;
                                    segmentId = "illum";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 423655;
                                    segmentId = "error";
                                }};
                                type = "DEFAULT";
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "suscipit";
                                range = new Range() {{
                                    endIndex = 437587;
                                    segmentId = "magnam";
                                    startIndex = 891773;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_GLYPH_PRESET_UNSPECIFIED";
                                range = new Range() {{
                                    endIndex = 963663;
                                    segmentId = "tempora";
                                    startIndex = 383441;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 477665;
                                    segmentId = "minus";
                                    startIndex = 812169;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "voluptatum";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "iusto";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "excepturi";
                                namedRangeId = "nisi";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 925597;
                                    segmentId = "temporibus";
                                    startIndex = 71036;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "quis";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 87129;
                                    rowIndex = 648172;
                                    tableStartLocation = new Location() {{
                                        index = 20218;
                                        segmentId = "ipsam";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 832620;
                                    rowIndex = 957156;
                                    tableStartLocation = new Location() {{
                                        index = 778157;
                                        segmentId = "odit";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "at";
                                }};
                                location = new Location() {{
                                    index = 870088;
                                    segmentId = "maiores";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 4736.08;
                                        unit = "PT";
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 8009.11;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                uri = "https://soulful-poppy.com";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "nam";
                                }};
                                location = new Location() {{
                                    index = 639921;
                                    segmentId = "occaecati";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "fugit";
                                }};
                                location = new Location() {{
                                    index = 537373;
                                    segmentId = "hic";
                                }};
                                sectionType = "NEXT_PAGE";
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 521848;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "beatae";
                                }};
                                location = new Location() {{
                                    index = 414662;
                                    segmentId = "molestiae";
                                }};
                                rows = 264555;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 186332;
                                    rowIndex = 774234;
                                    tableStartLocation = new Location() {{
                                        index = 736918;
                                        segmentId = "esse";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 216550;
                                    rowIndex = 568434;
                                    tableStartLocation = new Location() {{
                                        index = 135218;
                                        segmentId = "perferendis";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "ad";
                                }};
                                location = new Location() {{
                                    index = 617636;
                                    segmentId = "sed";
                                }};
                                text = "iste";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 222321;
                                    rowSpan = 616934;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 386489;
                                        rowIndex = 943749;
                                        tableStartLocation = new Location() {{
                                            index = 902599;
                                            segmentId = "fuga";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 449950;
                                tableStartLocation = new Location() {{
                                    index = 359508;
                                    segmentId = "iste";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "iure";
                                }};
                                replaceText = "saepe";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "quidem";
                                imageReplaceMethod = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
                                uri = "http://wiggly-plane.name";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "laborum";
                                namedRangeName = "dolores";
                                text = "dolorem";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 358152;
                                    rowSpan = 128926;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 750686;
                                        rowIndex = 315428;
                                        tableStartLocation = new Location() {{
                                            index = 607831;
                                            segmentId = "nemo";
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
                                                    blue = 3250.47;
                                                    green = 5701.97;
                                                    red = 384.25;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "iure";
                                    defaultHeaderId = "culpa";
                                    evenPageFooterId = "doloribus";
                                    evenPageHeaderId = "sapiente";
                                    firstPageFooterId = "architecto";
                                    firstPageHeaderId = "mollitia";
                                    marginBottom = new Dimension() {{
                                        magnitude = 2088.76;
                                        unit = "PT";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 1613.09;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 6531.08;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 2532.91;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 4663.11;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 2444.25;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 158969;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 3380.07;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 6747.52;
                                            unit = "PT";
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "enim";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "odit";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = "END";
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1965.82;
                                                    green = 9495.72;
                                                    red = 3687.25;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 8209.94;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 971.01;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8379.45;
                                                    green = 6736.6;
                                                    red = 960.98;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        padding = new Dimension() {{
                                            magnitude = 9764.6;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4686.51;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9767.62;
                                                    green = 557.14;
                                                    red = 6048.46;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 7392.64;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 391.87;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2828.07;
                                                    green = 9795.87;
                                                    red = 1201.96;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 2961.4;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1187.27;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3179.83;
                                                    green = 8804.76;
                                                    red = 4142.63;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        padding = new Dimension() {{
                                            magnitude = 641.47;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 6924.72;
                                            unit = "PT";
                                        }};
                                    }};
                                    direction = "LEFT_TO_RIGHT";
                                    headingId = "pariatur";
                                    indentEnd = new Dimension() {{
                                        magnitude = 2653.89;
                                        unit = "PT";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 5232.48;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 939.4;
                                        unit = "PT";
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 5759.47;
                                    namedStyleType = "NAMED_STYLE_TYPE_UNSPECIFIED";
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9292.97;
                                                    green = 2777.18;
                                                    red = 3185.69;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 93.56;
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 8423.42;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spacingMode = "NEVER_COLLAPSE";
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = "END";
                                            offset = new Dimension() {{
                                                magnitude = 2894.06;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "TAB_STOP_ALIGNMENT_UNSPECIFIED";
                                            offset = new Dimension() {{
                                                magnitude = 3978.21;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 201.07;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 828940;
                                    segmentId = "ipsam";
                                    startIndex = 4695;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "fugit";
                                range = new Range() {{
                                    endIndex = 677817;
                                    segmentId = "excepturi";
                                    startIndex = 270008;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 7351.94;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 9621.89;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 2487.53;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 5761.57;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 5920.42;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 5722.52;
                                                unit = "PT";
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED";
                                    contentDirection = "RIGHT_TO_LEFT";
                                    defaultFooterId = "a";
                                    defaultHeaderId = "dolorum";
                                    evenPageFooterId = "in";
                                    evenPageHeaderId = "in";
                                    firstPageFooterId = "illum";
                                    firstPageHeaderId = "maiores";
                                    marginBottom = new Dimension() {{
                                        magnitude = 6994.79;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 2974.37;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 8137.98;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 3965.06;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 8811.04;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 5812.73;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    pageNumberStart = 881736;
                                    sectionType = "NEXT_PAGE";
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "quidem";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 5884.65;
                                                green = 7252.55;
                                                red = 6596.69;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5013.24;
                                                    green = 5332.06;
                                                    red = 9560.84;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        width = new Dimension() {{
                                            magnitude = 6439.9;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4238.55;
                                                    green = 6188.09;
                                                    red = 6063.93;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 191.93;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3015.75;
                                                    green = 7160.75;
                                                    red = 6601.74;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 2900.77;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6180.16;
                                                    green = 7491.7;
                                                    red = 4287.69;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        width = new Dimension() {{
                                            magnitude = 1354.74;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    columnSpan = 298282;
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSPECIFIED";
                                    paddingBottom = new Dimension() {{
                                        magnitude = 5699.65;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 5908.73;
                                        unit = "PT";
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 5743.25;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 6532.01;
                                        unit = "PT";
                                    }};
                                    rowSpan = 652103;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 320997;
                                    rowSpan = 431418;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 221262;
                                        rowIndex = 896547;
                                        tableStartLocation = new Location() {{
                                            index = 141264;
                                            segmentId = "nemo";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 97260;
                                    segmentId = "iure";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(891924),
                                    add(260341),
                                    add(806194),
                                    add(537023),
                                }};
                                fields = "facilis";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 4479.26;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    widthType = "WIDTH_TYPE_UNSPECIFIED";
                                }};
                                tableStartLocation = new Location() {{
                                    index = 919483;
                                    segmentId = "ullam";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "expedita";
                                rowIndices = new Integer[]{{
                                    add(998848),
                                    add(841140),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 1494.48;
                                        unit = "PT";
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 868126;
                                    segmentId = "accusantium";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "consequuntur";
                                range = new Range() {{
                                    endIndex = 508315;
                                    segmentId = "natus";
                                    startIndex = 166847;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 1238.2;
                                                green = 7790.51;
                                                red = 8480.09;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = "SUBSCRIPT";
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 8073.19;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 5691.01;
                                                green = 1399.72;
                                                red = 4071.83;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "accusantium";
                                        headingId = "ab";
                                        url = "maiores";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "quidem";
                                        weight = 373291;
                                    }};
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 453543;
                                    segmentId = "autem";
                                }};
                                type = "DEFAULT";
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "eaque";
                                }};
                                location = new Location() {{
                                    index = 866383;
                                    segmentId = "nemo";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 975522;
                                    segmentId = "perferendis";
                                }};
                                type = "DEFAULT";
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "amet";
                                range = new Range() {{
                                    endIndex = 11714;
                                    segmentId = "cumque";
                                    startIndex = 359978;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "NUMBERED_ZERODECIMAL_ALPHA_ROMAN";
                                range = new Range() {{
                                    endIndex = 729991;
                                    segmentId = "nobis";
                                    startIndex = 171629;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 339404;
                                    segmentId = "totam";
                                    startIndex = 489549;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "eaque";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "quis";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "nesciunt";
                                namedRangeId = "eos";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 18521;
                                    segmentId = "dolores";
                                    startIndex = 793698;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "quam";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 223924;
                                    rowIndex = 874573;
                                    tableStartLocation = new Location() {{
                                        index = 345352;
                                        segmentId = "hic";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 928082;
                                    rowIndex = 608253;
                                    tableStartLocation = new Location() {{
                                        index = 704415;
                                        segmentId = "perspiciatis";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "voluptatem";
                                }};
                                location = new Location() {{
                                    index = 783645;
                                    segmentId = "consequuntur";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 5000.26;
                                        unit = "PT";
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 503.7;
                                        unit = "PT";
                                    }};
                                }};
                                uri = "https://enraged-wrench.org";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "modi";
                                }};
                                location = new Location() {{
                                    index = 613966;
                                    segmentId = "dolorum";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "deleniti";
                                }};
                                location = new Location() {{
                                    index = 864282;
                                    segmentId = "provident";
                                }};
                                sectionType = "NEXT_PAGE";
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 730122;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "delectus";
                                }};
                                location = new Location() {{
                                    index = 311945;
                                    segmentId = "quos";
                                }};
                                rows = 398221;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 212390;
                                    rowIndex = 209843;
                                    tableStartLocation = new Location() {{
                                        index = 222443;
                                        segmentId = "qui";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 218749;
                                    rowIndex = 944373;
                                    tableStartLocation = new Location() {{
                                        index = 569574;
                                        segmentId = "cum";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "voluptate";
                                }};
                                location = new Location() {{
                                    index = 490459;
                                    segmentId = "reiciendis";
                                }};
                                text = "amet";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 680545;
                                    rowSpan = 254356;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 85295;
                                        rowIndex = 58029;
                                        tableStartLocation = new Location() {{
                                            index = 56418;
                                            segmentId = "iure";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 487838;
                                tableStartLocation = new Location() {{
                                    index = 311796;
                                    segmentId = "accusamus";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "quidem";
                                }};
                                replaceText = "voluptatibus";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "voluptas";
                                imageReplaceMethod = "CENTER_CROP";
                                uri = "http://monstrous-ambassador.org";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "ab";
                                namedRangeName = "soluta";
                                text = "dolorum";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 478596;
                                    rowSpan = 453697;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 677082;
                                        rowIndex = 536579;
                                        tableStartLocation = new Location() {{
                                            index = 607045;
                                            segmentId = "necessitatibus";
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
                                                    blue = 7146.97;
                                                    green = 9903.39;
                                                    red = 4694.97;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "ipsum";
                                    defaultHeaderId = "voluptate";
                                    evenPageFooterId = "id";
                                    evenPageHeaderId = "saepe";
                                    firstPageFooterId = "eius";
                                    firstPageHeaderId = "aspernatur";
                                    marginBottom = new Dimension() {{
                                        magnitude = 206.51;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 7583.79;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 3200.17;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 3834.64;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 5883.17;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 8310.49;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 628982;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 0.55;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3118.6;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "vel";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "quod";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = "JUSTIFIED";
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1856.36;
                                                    green = 6798.8;
                                                    red = 9527.92;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 6874.88;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2155.07;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9473.71;
                                                    green = 2294.42;
                                                    red = 7308.56;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        padding = new Dimension() {{
                                            magnitude = 2539.41;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2133.12;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5182.01;
                                                    green = 4717.52;
                                                    red = 256.62;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 2074.7;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4246.85;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3741.7;
                                                    green = 6462.65;
                                                    red = 4635.75;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        padding = new Dimension() {{
                                            magnitude = 2776.28;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5867.84;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8638.56;
                                                    green = 7470.8;
                                                    red = 1175.31;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 5173.79;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1320.68;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    direction = "RIGHT_TO_LEFT";
                                    headingId = "facilis";
                                    indentEnd = new Dimension() {{
                                        magnitude = 3960.6;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 5654.21;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 1832.8;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 1448.47;
                                    namedStyleType = "NORMAL_TEXT";
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4880.56;
                                                    green = 1248.33;
                                                    red = 3556.13;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 7220.81;
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 304.52;
                                        unit = "PT";
                                    }};
                                    spacingMode = "COLLAPSE_LISTS";
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = "TAB_STOP_ALIGNMENT_UNSPECIFIED";
                                            offset = new Dimension() {{
                                                magnitude = 9037.2;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "TAB_STOP_ALIGNMENT_UNSPECIFIED";
                                            offset = new Dimension() {{
                                                magnitude = 7492.55;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 5844.76;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 961937;
                                    segmentId = "dolorem";
                                    startIndex = 292147;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "labore";
                                range = new Range() {{
                                    endIndex = 240829;
                                    segmentId = "dolorum";
                                    startIndex = 100294;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 164.29;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 9295.3;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = "BETWEEN_EACH_COLUMN";
                                    contentDirection = "RIGHT_TO_LEFT";
                                    defaultFooterId = "porro";
                                    defaultHeaderId = "doloribus";
                                    evenPageFooterId = "ut";
                                    evenPageHeaderId = "facilis";
                                    firstPageFooterId = "cupiditate";
                                    firstPageHeaderId = "qui";
                                    marginBottom = new Dimension() {{
                                        magnitude = 639.55;
                                        unit = "PT";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 4856.28;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 9774.96;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 8765.06;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 3381.59;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 9615.71;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    pageNumberStart = 231701;
                                    sectionType = "NEXT_PAGE";
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "tenetur";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 4922.68;
                                                green = 9413.78;
                                                red = 7155.61;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7992.03;
                                                    green = 4861.6;
                                                    red = 6304.48;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        width = new Dimension() {{
                                            magnitude = 8742.88;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2930.2;
                                                    green = 8445.5;
                                                    red = 8489.44;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        width = new Dimension() {{
                                            magnitude = 6178.77;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 132.36;
                                                    green = 9742.59;
                                                    red = 3472.33;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        width = new Dimension() {{
                                            magnitude = 1481.41;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9818.3;
                                                    green = 9850.33;
                                                    red = 4783.7;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH";
                                        width = new Dimension() {{
                                            magnitude = 4973.91;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    columnSpan = 639473;
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSUPPORTED";
                                    paddingBottom = new Dimension() {{
                                        magnitude = 3685.84;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 1369;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 8221.18;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 1898.48;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    rowSpan = 511319;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 120657;
                                    rowSpan = 224317;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 980700;
                                        rowIndex = 97844;
                                        tableStartLocation = new Location() {{
                                            index = 406120;
                                            segmentId = "nulla";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 569211;
                                    segmentId = "voluptatibus";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(960835),
                                    add(788873),
                                }};
                                fields = "saepe";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 4113.72;
                                        unit = "PT";
                                    }};
                                    widthType = "EVENLY_DISTRIBUTED";
                                }};
                                tableStartLocation = new Location() {{
                                    index = 333145;
                                    segmentId = "aliquid";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "inventore";
                                rowIndices = new Integer[]{{
                                    add(407241),
                                    add(775220),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 2322.34;
                                        unit = "PT";
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 132487;
                                    segmentId = "minima";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "eaque";
                                range = new Range() {{
                                    endIndex = 952871;
                                    segmentId = "libero";
                                    startIndex = 13948;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 114.27;
                                                green = 5334.66;
                                                red = 7705.81;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = "NONE";
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 1469.46;
                                        unit = "PT";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 795.22;
                                                green = 2506.22;
                                                red = 896.03;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "dolorum";
                                        headingId = "laborum";
                                        url = "placeat";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "velit";
                                        weight = 432148;
                                    }};
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 420539;
                                    segmentId = "nobis";
                                }};
                                type = "DEFAULT";
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "assumenda";
                                }};
                                location = new Location() {{
                                    index = 860552;
                                    segmentId = "voluptas";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 727044;
                                    segmentId = "quasi";
                                }};
                                type = "HEADER_FOOTER_TYPE_UNSPECIFIED";
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "numquam";
                                range = new Range() {{
                                    endIndex = 131482;
                                    segmentId = "provident";
                                    startIndex = 55374;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_LEFTTRIANGLE_DIAMOND_DISC";
                                range = new Range() {{
                                    endIndex = 301598;
                                    segmentId = "odio";
                                    startIndex = 262118;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 458515;
                                    segmentId = "esse";
                                    startIndex = 524593;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "fuga";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "reprehenderit";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "quidem";
                                namedRangeId = "fugiat";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 283519;
                                    segmentId = "eum";
                                    startIndex = 379927;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "assumenda";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 181151;
                                    rowIndex = 509342;
                                    tableStartLocation = new Location() {{
                                        index = 788546;
                                        segmentId = "veritatis";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 56848;
                                    rowIndex = 660040;
                                    tableStartLocation = new Location() {{
                                        index = 696997;
                                        segmentId = "neque";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "quo";
                                }};
                                location = new Location() {{
                                    index = 847276;
                                    segmentId = "quo";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 6813.59;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 1783.67;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                uri = "http://official-admin.biz";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "debitis";
                                }};
                                location = new Location() {{
                                    index = 370853;
                                    segmentId = "aspernatur";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "sequi";
                                }};
                                location = new Location() {{
                                    index = 779192;
                                    segmentId = "esse";
                                }};
                                sectionType = "NEXT_PAGE";
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 44612;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "distinctio";
                                }};
                                location = new Location() {{
                                    index = 799796;
                                    segmentId = "dignissimos";
                                }};
                                rows = 76956;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 469498;
                                    rowIndex = 518835;
                                    tableStartLocation = new Location() {{
                                        index = 882710;
                                        segmentId = "aliquam";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 488410;
                                    rowIndex = 577543;
                                    tableStartLocation = new Location() {{
                                        index = 414567;
                                        segmentId = "sapiente";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "dolores";
                                }};
                                location = new Location() {{
                                    index = 645570;
                                    segmentId = "molestiae";
                                }};
                                text = "accusantium";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 783648;
                                    rowSpan = 430402;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 556429;
                                        rowIndex = 510017;
                                        tableStartLocation = new Location() {{
                                            index = 159867;
                                            segmentId = "deleniti";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 143829;
                                tableStartLocation = new Location() {{
                                    index = 681393;
                                    segmentId = "mollitia";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "incidunt";
                                }};
                                replaceText = "atque";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "explicabo";
                                imageReplaceMethod = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
                                uri = "http://costly-vicinity.com";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "ratione";
                                namedRangeName = "explicabo";
                                text = "saepe";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 578922;
                                    rowSpan = 543806;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 92260;
                                        rowIndex = 456911;
                                        tableStartLocation = new Location() {{
                                            index = 910545;
                                            segmentId = "accusamus";
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
                                                    blue = 829.71;
                                                    green = 4586.04;
                                                    red = 8003.79;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "nam";
                                    defaultHeaderId = "vero";
                                    evenPageFooterId = "aliquid";
                                    evenPageHeaderId = "quasi";
                                    firstPageFooterId = "saepe";
                                    firstPageHeaderId = "vel";
                                    marginBottom = new Dimension() {{
                                        magnitude = 6900.25;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 6996.22;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 3277.2;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 7567.79;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 6360.61;
                                        unit = "PT";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 2400.2;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 160538;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 97.66;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3082.86;
                                            unit = "PT";
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "consectetur";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "esse";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = "CENTER";
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5909.84;
                                                    green = 9537.22;
                                                    red = 8577.23;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 4572.23;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 9518.75;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5757.51;
                                                    green = 8630.23;
                                                    red = 8207.67;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        padding = new Dimension() {{
                                            magnitude = 9088.44;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 8155.24;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1594.14;
                                                    green = 944.58;
                                                    red = 6288.99;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 3984.34;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 627.13;
                                            unit = "PT";
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4240.32;
                                                    green = 4473.78;
                                                    red = 2586.84;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 8490.39;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 333.04;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9589.83;
                                                    green = 1197.71;
                                                    red = 3553.69;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 3567.07;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 163.28;
                                            unit = "PT";
                                        }};
                                    }};
                                    direction = "CONTENT_DIRECTION_UNSPECIFIED";
                                    headingId = "quibusdam";
                                    indentEnd = new Dimension() {{
                                        magnitude = 4012.59;
                                        unit = "PT";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 9292.92;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 996.15;
                                        unit = "PT";
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 9453.02;
                                    namedStyleType = "NAMED_STYLE_TYPE_UNSPECIFIED";
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8694.89;
                                                    green = 920.27;
                                                    red = 4541.62;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 559.65;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 865.32;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spacingMode = "SPACING_MODE_UNSPECIFIED";
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = "END";
                                            offset = new Dimension() {{
                                                magnitude = 330.74;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "TAB_STOP_ALIGNMENT_UNSPECIFIED";
                                            offset = new Dimension() {{
                                                magnitude = 5130.75;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 680.74;
                                                unit = "PT";
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 251941;
                                    segmentId = "voluptatem";
                                    startIndex = 221161;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "occaecati";
                                range = new Range() {{
                                    endIndex = 253191;
                                    segmentId = "impedit";
                                    startIndex = 131055;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 120.36;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 1154.84;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 6184.8;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 9742.57;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = "BETWEEN_EACH_COLUMN";
                                    contentDirection = "CONTENT_DIRECTION_UNSPECIFIED";
                                    defaultFooterId = "ea";
                                    defaultHeaderId = "quaerat";
                                    evenPageFooterId = "consequuntur";
                                    evenPageHeaderId = "repellendus";
                                    firstPageFooterId = "officia";
                                    firstPageHeaderId = "maxime";
                                    marginBottom = new Dimension() {{
                                        magnitude = 4903.05;
                                        unit = "PT";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 9894.1;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 653.04;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 7832.35;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 2883.98;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 2414.18;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 662505;
                                    sectionType = "CONTINUOUS";
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "velit";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 6339.31;
                                                green = 6658.59;
                                                red = 9268.8;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5173.09;
                                                    green = 8539.4;
                                                    red = 4240.89;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 5546.88;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2870.51;
                                                    green = 8225.6;
                                                    red = 7065.75;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        width = new Dimension() {{
                                            magnitude = 4148.57;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3605.45;
                                                    green = 9689.04;
                                                    red = 8286.57;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 9249.67;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 460.07;
                                                    green = 7386.83;
                                                    red = 2326.27;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 3485.19;
                                            unit = "PT";
                                        }};
                                    }};
                                    columnSpan = 814967;
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSUPPORTED";
                                    paddingBottom = new Dimension() {{
                                        magnitude = 9854.92;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 9689.72;
                                        unit = "PT";
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 9049.49;
                                        unit = "PT";
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 2965.56;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    rowSpan = 992012;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 241545;
                                    rowSpan = 249420;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 228263;
                                        rowIndex = 105906;
                                        tableStartLocation = new Location() {{
                                            index = 489509;
                                            segmentId = "a";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 891523;
                                    segmentId = "consectetur";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(689768),
                                    add(385237),
                                }};
                                fields = "ipsa";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 9167.27;
                                        unit = "PT";
                                    }};
                                    widthType = "WIDTH_TYPE_UNSPECIFIED";
                                }};
                                tableStartLocation = new Location() {{
                                    index = 881721;
                                    segmentId = "similique";
                                }};
                            }};
                            updateTableRowStyle = new UpdateTableRowStyleRequest() {{
                                fields = "tempora";
                                rowIndices = new Integer[]{{
                                    add(379057),
                                }};
                                tableRowStyle = new TableRowStyle() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 3742.44;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    preventOverflow = false;
                                    tableHeader = false;
                                }};
                                tableStartLocation = new Location() {{
                                    index = 324405;
                                    segmentId = "nobis";
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                fields = "dolorum";
                                range = new Range() {{
                                    endIndex = 237807;
                                    segmentId = "minus";
                                    startIndex = 171853;
                                }};
                                textStyle = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 5039.34;
                                                green = 4492.92;
                                                red = 2962.42;
                                            }};
                                        }};
                                    }};
                                    baselineOffset = "NONE";
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 8859.63;
                                        unit = "PT";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 3518.7;
                                                green = 2377.42;
                                                red = 7383.91;
                                            }};
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        bookmarkId = "blanditiis";
                                        headingId = "quas";
                                        url = "hic";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "nesciunt";
                                        weight = 633998;
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "corrupti";
                        targetRevisionId = "pariatur";
                    }};
                }};
                accessToken = "totam";
                alt = "proto";
                callback = "exercitationem";
                documentId = "nobis";
                fields = "sit";
                key = "rerum";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "explicabo";
                uploadProtocol = "asperiores";
            }}            

            DocsDocumentsBatchUpdateResponse res = sdk.documents.docsDocumentsBatchUpdate(req, new DocsDocumentsBatchUpdateSecurity() {{
                option1 = new DocsDocumentsBatchUpdateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdateDocumentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documents

* `docsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `docsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `docsDocumentsGet` - Gets the latest version of the specified document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
