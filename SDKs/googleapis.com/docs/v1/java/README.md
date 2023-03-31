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
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdatePathParams;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateQueryParams;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateRequest;
import org.openapis.openapi.models.operations.DocsDocumentsBatchUpdateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocsDocumentsBatchUpdateRequest req = new DocsDocumentsBatchUpdateRequest() {{
                security = new DocsDocumentsBatchUpdateSecurity() {{
                    option1 = new DocsDocumentsBatchUpdateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DocsDocumentsBatchUpdatePathParams() {{
                    documentId = "corrupti";
                }};
                queryParams = new DocsDocumentsBatchUpdateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BatchUpdateDocumentRequest() {{
                    requests = new org.openapis.openapi.models.shared.Request[]{{
                        add(new Request() {{
                            createFooter = new CreateFooterRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 437587;
                                    segmentId = "magnam";
                                }};
                                type = "DEFAULT";
                            }};
                            createFootnote = new CreateFootnoteRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "ipsa";
                                }};
                                location = new Location() {{
                                    index = 963663;
                                    segmentId = "tempora";
                                }};
                            }};
                            createHeader = new CreateHeaderRequest() {{
                                sectionBreakLocation = new Location() {{
                                    index = 383441;
                                    segmentId = "molestiae";
                                }};
                                type = "DEFAULT";
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "placeat";
                                range = new Range() {{
                                    endIndex = 528895;
                                    segmentId = "iusto";
                                    startIndex = 568045;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_ARROW3D_CIRCLE_SQUARE";
                                range = new Range() {{
                                    endIndex = 925597;
                                    segmentId = "temporibus";
                                    startIndex = 71036;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 337396;
                                    segmentId = "veritatis";
                                    startIndex = 648172;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "perferendis";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "ipsam";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "repellendus";
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
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 5373.73;
                                        unit = "PT";
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
                                sectionType = "SECTION_TYPE_UNSPECIFIED";
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
                                imageReplaceMethod = "CENTER_CROP";
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
                                        unit = "PT";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 1589.69;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 1103.75;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 6563.3;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 1381.83;
                                        unit = "PT";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 1965.82;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 368725;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6625.27;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 135.71;
                                            unit = "UNIT_UNSPECIFIED";
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
                                    alignment = "END";
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
                                        dashStyle = "DASH";
                                        padding = new Dimension() {{
                                            magnitude = 4686.51;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 9767.62;
                                            unit = "UNIT_UNSPECIFIED";
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
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        padding = new Dimension() {{
                                            magnitude = 391.87;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2828.07;
                                            unit = "PT";
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
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 1187.27;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3179.83;
                                            unit = "PT";
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
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        padding = new Dimension() {{
                                            magnitude = 6924.72;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5666.02;
                                            unit = "PT";
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
                                        dashStyle = "DASH";
                                        padding = new Dimension() {{
                                            magnitude = 939.4;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5759.47;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    direction = "RIGHT_TO_LEFT";
                                    headingId = "incidunt";
                                    indentEnd = new Dimension() {{
                                        magnitude = 3185.69;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 6674.11;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 1317.97;
                                        unit = "PT";
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 7163.27;
                                    namedStyleType = "HEADING_5";
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
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 5528.22;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spacingMode = "SPACING_MODE_UNSPECIFIED";
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = "START";
                                            offset = new Dimension() {{
                                                magnitude = 46.95;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 5696.18;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 7351.94;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "END";
                                            offset = new Dimension() {{
                                                magnitude = 4332.88;
                                                unit = "UNIT_UNSPECIFIED";
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
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 6800.56;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = "NONE";
                                    contentDirection = "RIGHT_TO_LEFT";
                                    defaultFooterId = "maiores";
                                    defaultHeaderId = "rerum";
                                    evenPageFooterId = "dicta";
                                    evenPageHeaderId = "magnam";
                                    firstPageFooterId = "cumque";
                                    firstPageHeaderId = "facere";
                                    marginBottom = new Dimension() {{
                                        magnitude = 4118.2;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 6754.39;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 2497.96;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 3132.18;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 9654.17;
                                        unit = "PT";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 5884.65;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 659669;
                                    sectionType = "CONTINUOUS";
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
                                        dashStyle = "DOT";
                                        width = new Dimension() {{
                                            magnitude = 4748.67;
                                            unit = "UNIT_UNSPECIFIED";
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
                                        dashStyle = "DOT";
                                        width = new Dimension() {{
                                            magnitude = 2879.91;
                                            unit = "UNIT_UNSPECIFIED";
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
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 8784.53;
                                            unit = "UNIT_UNSPECIFIED";
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
                                        dashStyle = "DOT";
                                        width = new Dimension() {{
                                            magnitude = 3540.47;
                                            unit = "PT";
                                        }};
                                    }};
                                    columnSpan = 551816;
                                    contentAlignment = "TOP";
                                    paddingBottom = new Dimension() {{
                                        magnitude = 336.25;
                                        unit = "PT";
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 9689.62;
                                        unit = "PT";
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 3209.97;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 2212.62;
                                        unit = "PT";
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
                                        unit = "PT";
                                    }};
                                    widthType = "EVENLY_DISTRIBUTED";
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
                                        unit = "UNIT_UNSPECIFIED";
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
                                    baselineOffset = "BASELINE_OFFSET_UNSPECIFIED";
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 691.67;
                                        unit = "PT";
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
                                type = "DEFAULT";
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
                                type = "DEFAULT";
                            }};
                            createNamedRange = new CreateNamedRangeRequest() {{
                                name = "nobis";
                                range = new Range() {{
                                    endIndex = 171629;
                                    segmentId = "quis";
                                    startIndex = 521037;
                                }};
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_LEFTTRIANGLE_DIAMOND_DISC";
                                range = new Range() {{
                                    endIndex = 54338;
                                    segmentId = "quis";
                                    startIndex = 199996;
                                }};
                            }};
                            deleteContentRange = new DeleteContentRangeRequest() {{
                                range = new Range() {{
                                    endIndex = 179490;
                                    segmentId = "perferendis";
                                    startIndex = 170986;
                                }};
                            }};
                            deleteFooter = new DeleteFooterRequest() {{
                                footerId = "minus";
                            }};
                            deleteHeader = new DeleteHeaderRequest() {{
                                headerId = "quam";
                            }};
                            deleteNamedRange = new DeleteNamedRangeRequest() {{
                                name = "dolor";
                                namedRangeId = "vero";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                range = new Range() {{
                                    endIndex = 345352;
                                    segmentId = "hic";
                                    startIndex = 928082;
                                }};
                            }};
                            deletePositionedObject = new DeletePositionedObjectRequest() {{
                                objectId = "omnis";
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 704415;
                                    rowIndex = 596656;
                                    tableStartLocation = new Location() {{
                                        index = 31838;
                                        segmentId = "porro";
                                    }};
                                }};
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 164694;
                                    rowIndex = 500026;
                                    tableStartLocation = new Location() {{
                                        index = 621479;
                                        segmentId = "eaque";
                                    }};
                                }};
                            }};
                            insertInlineImage = new InsertInlineImageRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "occaecati";
                                }};
                                location = new Location() {{
                                    index = 699098;
                                    segmentId = "adipisci";
                                }};
                                objectSize = new Size() {{
                                    height = new Dimension() {{
                                        magnitude = 9923.97;
                                        unit = "PT";
                                    }};
                                    width = new Dimension() {{
                                        magnitude = 2672.62;
                                        unit = "PT";
                                    }};
                                }};
                                uri = "https://minty-subgroup.name";
                            }};
                            insertPageBreak = new InsertPageBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "nobis";
                                }};
                                location = new Location() {{
                                    index = 730122;
                                    segmentId = "delectus";
                                }};
                            }};
                            insertSectionBreak = new InsertSectionBreakRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "quaerat";
                                }};
                                location = new Location() {{
                                    index = 554242;
                                    segmentId = "aliquid";
                                }};
                                sectionType = "SECTION_TYPE_UNSPECIFIED";
                            }};
                            insertTable = new InsertTableRequest() {{
                                columns = 209843;
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "dolor";
                                }};
                                location = new Location() {{
                                    index = 186193;
                                    segmentId = "ipsum";
                                }};
                                rows = 944373;
                            }};
                            insertTableColumn = new InsertTableColumnRequest() {{
                                insertRight = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 569574;
                                    rowIndex = 739551;
                                    tableStartLocation = new Location() {{
                                        index = 452109;
                                        segmentId = "dignissimos";
                                    }};
                                }};
                            }};
                            insertTableRow = new InsertTableRowRequest() {{
                                insertBelow = false;
                                tableCellLocation = new TableCellLocation() {{
                                    columnIndex = 970237;
                                    rowIndex = 227414;
                                    tableStartLocation = new Location() {{
                                        index = 680545;
                                        segmentId = "numquam";
                                    }};
                                }};
                            }};
                            insertText = new InsertTextRequest() {{
                                endOfSegmentLocation = new EndOfSegmentLocation() {{
                                    segmentId = "veritatis";
                                }};
                                location = new Location() {{
                                    index = 58029;
                                    segmentId = "ipsa";
                                }};
                                text = "iure";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 487838;
                                    rowSpan = 311796;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 881005;
                                        rowIndex = 696344;
                                        tableStartLocation = new Location() {{
                                            index = 976405;
                                            segmentId = "voluptas";
                                        }};
                                    }};
                                }};
                            }};
                            pinTableHeaderRows = new PinTableHeaderRowsRequest() {{
                                pinnedHeaderRowsCount = 617658;
                                tableStartLocation = new Location() {{
                                    index = 179603;
                                    segmentId = "atque";
                                }};
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "sit";
                                }};
                                replaceText = "fugiat";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "ab";
                                imageReplaceMethod = "CENTER_CROP";
                                uri = "https://late-in-laws.net";
                            }};
                            replaceNamedRangeContent = new ReplaceNamedRangeContentRequest() {{
                                namedRangeId = "deleniti";
                                namedRangeName = "omnis";
                                text = "necessitatibus";
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                tableRange = new TableRange() {{
                                    columnSpan = 714697;
                                    rowSpan = 990339;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 469497;
                                        rowIndex = 216897;
                                        tableStartLocation = new Location() {{
                                            index = 456015;
                                            segmentId = "id";
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
                                                    blue = 9064.18;
                                                    green = 2633.22;
                                                    red = 1372.2;
                                                }};
                                            }};
                                        }};
                                    }};
                                    defaultFooterId = "perferendis";
                                    defaultHeaderId = "amet";
                                    evenPageFooterId = "optio";
                                    evenPageHeaderId = "accusamus";
                                    firstPageFooterId = "ad";
                                    firstPageHeaderId = "saepe";
                                    marginBottom = new Dimension() {{
                                        magnitude = 3834.64;
                                        unit = "PT";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 5883.17;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 8310.49;
                                        unit = "PT";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 6289.82;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 8726.51;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 2735.42;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    pageNumberStart = 798047;
                                    pageSize = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 8853.38;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 6798.8;
                                            unit = "PT";
                                        }};
                                    }};
                                    useCustomHeaderFooterMargins = false;
                                    useEvenPageHeaderFooter = false;
                                    useFirstPageHeaderFooter = false;
                                }};
                                fields = "esse";
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                fields = "harum";
                                paragraphStyle = new ParagraphStyle() {{
                                    alignment = "CENTER";
                                    avoidWidowAndOrphan = false;
                                    borderBetween = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2155.07;
                                                    green = 7887.4;
                                                    red = 9473.71;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        padding = new Dimension() {{
                                            magnitude = 7308.56;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2539.41;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderBottom = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2133.12;
                                                    green = 9574.51;
                                                    red = 5182.01;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        padding = new Dimension() {{
                                            magnitude = 256.62;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2074.7;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderLeft = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4246.85;
                                                    green = 7304.42;
                                                    red = 3741.7;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 4635.75;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2776.28;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderRight = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5867.84;
                                                    green = 8075.81;
                                                    red = 8638.56;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 1175.31;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5173.79;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderTop = new ParagraphBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1320.68;
                                                    green = 1749.09;
                                                    red = 7168.6;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "DOT";
                                        padding = new Dimension() {{
                                            magnitude = 3960.6;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5654.21;
                                            unit = "PT";
                                        }};
                                    }};
                                    direction = "CONTENT_DIRECTION_UNSPECIFIED";
                                    headingId = "neque";
                                    indentEnd = new Dimension() {{
                                        magnitude = 1448.47;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 4880.56;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 3556.13;
                                        unit = "PT";
                                    }};
                                    keepLinesTogether = false;
                                    keepWithNext = false;
                                    lineSpacing = 9404.32;
                                    namedStyleType = "NAMED_STYLE_TYPE_UNSPECIFIED";
                                    pageBreakBefore = false;
                                    shading = new Shading() {{
                                        backgroundColor = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7653.26;
                                                    green = 7469.94;
                                                    red = 7486.64;
                                                }};
                                            }};
                                        }};
                                    }};
                                    spaceAbove = new Dimension() {{
                                        magnitude = 925.96;
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 2174.5;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spacingMode = "COLLAPSE_LISTS";
                                    tabStops = new org.openapis.openapi.models.shared.TabStop[]{{
                                        add(new TabStop() {{
                                            alignment = "CENTER";
                                            offset = new Dimension() {{
                                                magnitude = 5844.76;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "END";
                                            offset = new Dimension() {{
                                                magnitude = 2091.57;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                        add(new TabStop() {{
                                            alignment = "START";
                                            offset = new Dimension() {{
                                                magnitude = 2408.29;
                                                unit = "PT";
                                            }};
                                        }}),
                                    }};
                                }};
                                range = new Range() {{
                                    endIndex = 100294;
                                    segmentId = "quae";
                                    startIndex = 16429;
                                }};
                            }};
                            updateSectionStyle = new UpdateSectionStyleRequest() {{
                                fields = "quas";
                                range = new Range() {{
                                    endIndex = 929530;
                                    segmentId = "consequatur";
                                    startIndex = 669917;
                                }};
                                sectionStyle = new SectionStyle() {{
                                    columnProperties = new org.openapis.openapi.models.shared.SectionColumnProperties[]{{
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 7851.53;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 2817.3;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 5864.1;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 639.55;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 4856.28;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 9774.96;
                                                unit = "PT";
                                            }};
                                        }}),
                                        add(new SectionColumnProperties() {{
                                            paddingEnd = new Dimension() {{
                                                magnitude = 8765.06;
                                                unit = "PT";
                                            }};
                                            width = new Dimension() {{
                                                magnitude = 3381.59;
                                                unit = "UNIT_UNSPECIFIED";
                                            }};
                                        }}),
                                    }};
                                    columnSeparatorStyle = "BETWEEN_EACH_COLUMN";
                                    contentDirection = "LEFT_TO_RIGHT";
                                    defaultFooterId = "consectetur";
                                    defaultHeaderId = "vero";
                                    evenPageFooterId = "tenetur";
                                    evenPageHeaderId = "dignissimos";
                                    firstPageFooterId = "hic";
                                    firstPageHeaderId = "distinctio";
                                    marginBottom = new Dimension() {{
                                        magnitude = 7992.03;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginFooter = new Dimension() {{
                                        magnitude = 6304.48;
                                        unit = "PT";
                                    }};
                                    marginHeader = new Dimension() {{
                                        magnitude = 8742.88;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginLeft = new Dimension() {{
                                        magnitude = 2930.2;
                                        unit = "PT";
                                    }};
                                    marginRight = new Dimension() {{
                                        magnitude = 8489.44;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    marginTop = new Dimension() {{
                                        magnitude = 6178.77;
                                        unit = "PT";
                                    }};
                                    pageNumberStart = 13236;
                                    sectionType = "NEXT_PAGE";
                                    useFirstPageHeaderFooter = false;
                                }};
                            }};
                            updateTableCellStyle = new UpdateTableCellStyleRequest() {{
                                fields = "exercitationem";
                                tableCellStyle = new TableCellStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        color = new Color() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 8623.1;
                                                green = 1481.41;
                                                red = 7804.27;
                                            }};
                                        }};
                                    }};
                                    borderBottom = new TableCellBorder() {{
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
                                    borderLeft = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6394.73;
                                                    green = 2694.79;
                                                    red = 3685.84;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 1369;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderRight = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8221.18;
                                                    green = 2978.42;
                                                    red = 1898.48;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 5113.19;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    borderTop = new TableCellBorder() {{
                                        color = new OptionalColor() {{
                                            color = new Color() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2243.17;
                                                    green = 9807;
                                                    red = 978.44;
                                                }};
                                            }};
                                        }};
                                        dashStyle = "SOLID";
                                        width = new Dimension() {{
                                            magnitude = 8621.92;
                                            unit = "PT";
                                        }};
                                    }};
                                    columnSpan = 972920;
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSUPPORTED";
                                    paddingBottom = new Dimension() {{
                                        magnitude = 9608.35;
                                        unit = "PT";
                                    }};
                                    paddingLeft = new Dimension() {{
                                        magnitude = 9065.56;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingRight = new Dimension() {{
                                        magnitude = 7740.48;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    paddingTop = new Dimension() {{
                                        magnitude = 3331.45;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    rowSpan = 81101;
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 301831;
                                    rowSpan = 407241;
                                    tableCellLocation = new TableCellLocation() {{
                                        columnIndex = 775220;
                                        rowIndex = 232234;
                                        tableStartLocation = new Location() {{
                                            index = 926213;
                                            segmentId = "aspernatur";
                                        }};
                                    }};
                                }};
                                tableStartLocation = new Location() {{
                                    index = 325310;
                                    segmentId = "eaque";
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(725595),
                                    add(13948),
                                    add(11427),
                                    add(533466),
                                }};
                                fields = "impedit";
                                tableColumnProperties = new TableColumnProperties() {{
                                    width = new Dimension() {{
                                        magnitude = 3045.82;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    widthType = "FIXED_WIDTH";
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
                                        unit = "UNIT_UNSPECIFIED";
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
                                    baselineOffset = "BASELINE_OFFSET_UNSPECIFIED";
                                    bold = false;
                                    fontSize = new Dimension() {{
                                        magnitude = 5919.35;
                                        unit = "UNIT_UNSPECIFIED";
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
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "reprehenderit";
                        targetRevisionId = "quidem";
                    }};
                }};
            }};            

            DocsDocumentsBatchUpdateResponse res = sdk.documents.docsDocumentsBatchUpdate(req);

            if (res.batchUpdateDocumentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
