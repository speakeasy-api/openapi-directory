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

import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption4;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption5;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurityOption6;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateRequest;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdatePresentationRequest;
import org.openapis.openapi.models.shared.WriteControl;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.UpdateVideoPropertiesRequest;
import org.openapis.openapi.models.shared.VideoProperties;
import org.openapis.openapi.models.shared.OutlineDashStyleEnum;
import org.openapis.openapi.models.shared.OutlinePropertyStateEnum;
import org.openapis.openapi.models.shared.Outline;
import org.openapis.openapi.models.shared.DimensionUnitEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.OutlineFill;
import org.openapis.openapi.models.shared.SolidFill;
import org.openapis.openapi.models.shared.OpaqueColorThemeColorEnum;
import org.openapis.openapi.models.shared.OpaqueColor;
import org.openapis.openapi.models.shared.RgbColor;
import org.openapis.openapi.models.shared.UpdateTextStyleRequest;
import org.openapis.openapi.models.shared.RangeTypeEnum;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.TextStyleBaselineOffsetEnum;
import org.openapis.openapi.models.shared.TextStyle;
import org.openapis.openapi.models.shared.WeightedFontFamily;
import org.openapis.openapi.models.shared.LinkRelativeLinkEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.OptionalColor;
import org.openapis.openapi.models.shared.TableCellLocation;
import org.openapis.openapi.models.shared.UpdateTableRowPropertiesRequest;
import org.openapis.openapi.models.shared.TableRowProperties;
import org.openapis.openapi.models.shared.UpdateTableColumnPropertiesRequest;
import org.openapis.openapi.models.shared.TableColumnProperties;
import org.openapis.openapi.models.shared.UpdateTableCellPropertiesRequest;
import org.openapis.openapi.models.shared.TableRange;
import org.openapis.openapi.models.shared.TableCellPropertiesContentAlignmentEnum;
import org.openapis.openapi.models.shared.TableCellProperties;
import org.openapis.openapi.models.shared.TableCellBackgroundFillPropertyStateEnum;
import org.openapis.openapi.models.shared.TableCellBackgroundFill;
import org.openapis.openapi.models.shared.UpdateTableBorderPropertiesRequestBorderPositionEnum;
import org.openapis.openapi.models.shared.UpdateTableBorderPropertiesRequest;
import org.openapis.openapi.models.shared.TableBorderPropertiesDashStyleEnum;
import org.openapis.openapi.models.shared.TableBorderProperties;
import org.openapis.openapi.models.shared.TableBorderFill;
import org.openapis.openapi.models.shared.UpdateSlidesPositionRequest;
import org.openapis.openapi.models.shared.UpdateSlidePropertiesRequest;
import org.openapis.openapi.models.shared.SlideProperties;
import org.openapis.openapi.models.shared.UpdateShapePropertiesRequest;
import org.openapis.openapi.models.shared.ShapePropertiesContentAlignmentEnum;
import org.openapis.openapi.models.shared.ShapeProperties;
import org.openapis.openapi.models.shared.ShapeBackgroundFillPropertyStateEnum;
import org.openapis.openapi.models.shared.ShapeBackgroundFill;
import org.openapis.openapi.models.shared.ShadowAlignmentEnum;
import org.openapis.openapi.models.shared.ShadowPropertyStateEnum;
import org.openapis.openapi.models.shared.ShadowTypeEnum;
import org.openapis.openapi.models.shared.Shadow;
import org.openapis.openapi.models.shared.AffineTransformUnitEnum;
import org.openapis.openapi.models.shared.AffineTransform;
import org.openapis.openapi.models.shared.AutofitAutofitTypeEnum;
import org.openapis.openapi.models.shared.Autofit;
import org.openapis.openapi.models.shared.UpdateParagraphStyleRequest;
import org.openapis.openapi.models.shared.ParagraphStyleAlignmentEnum;
import org.openapis.openapi.models.shared.ParagraphStyleDirectionEnum;
import org.openapis.openapi.models.shared.ParagraphStyleSpacingModeEnum;
import org.openapis.openapi.models.shared.ParagraphStyle;
import org.openapis.openapi.models.shared.UpdatePagePropertiesRequest;
import org.openapis.openapi.models.shared.PageProperties;
import org.openapis.openapi.models.shared.PageBackgroundFillPropertyStateEnum;
import org.openapis.openapi.models.shared.PageBackgroundFill;
import org.openapis.openapi.models.shared.StretchedPictureFill;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.ColorScheme;
import org.openapis.openapi.models.shared.ThemeColorPairTypeEnum;
import org.openapis.openapi.models.shared.ThemeColorPair;
import org.openapis.openapi.models.shared.UpdatePageElementsZOrderRequestOperationEnum;
import org.openapis.openapi.models.shared.UpdatePageElementsZOrderRequest;
import org.openapis.openapi.models.shared.UpdatePageElementTransformRequestApplyModeEnum;
import org.openapis.openapi.models.shared.UpdatePageElementTransformRequest;
import org.openapis.openapi.models.shared.UpdatePageElementAltTextRequest;
import org.openapis.openapi.models.shared.UpdateLinePropertiesRequest;
import org.openapis.openapi.models.shared.LinePropertiesDashStyleEnum;
import org.openapis.openapi.models.shared.LinePropertiesEndArrowEnum;
import org.openapis.openapi.models.shared.LinePropertiesStartArrowEnum;
import org.openapis.openapi.models.shared.LineProperties;
import org.openapis.openapi.models.shared.LineConnection;
import org.openapis.openapi.models.shared.LineFill;
import org.openapis.openapi.models.shared.UpdateLineCategoryRequestLineCategoryEnum;
import org.openapis.openapi.models.shared.UpdateLineCategoryRequest;
import org.openapis.openapi.models.shared.UpdateImagePropertiesRequest;
import org.openapis.openapi.models.shared.ImageProperties;
import org.openapis.openapi.models.shared.RecolorNameEnum;
import org.openapis.openapi.models.shared.Recolor;
import org.openapis.openapi.models.shared.ColorStop;
import org.openapis.openapi.models.shared.CropProperties;
import org.openapis.openapi.models.shared.UnmergeTableCellsRequest;
import org.openapis.openapi.models.shared.UngroupObjectsRequest;
import org.openapis.openapi.models.shared.RerouteLineRequest;
import org.openapis.openapi.models.shared.ReplaceImageRequestImageReplaceMethodEnum;
import org.openapis.openapi.models.shared.ReplaceImageRequest;
import org.openapis.openapi.models.shared.ReplaceAllTextRequest;
import org.openapis.openapi.models.shared.SubstringMatchCriteria;
import org.openapis.openapi.models.shared.ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;
import org.openapis.openapi.models.shared.ReplaceAllShapesWithSheetsChartRequest;
import org.openapis.openapi.models.shared.ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;
import org.openapis.openapi.models.shared.ReplaceAllShapesWithImageRequestReplaceMethodEnum;
import org.openapis.openapi.models.shared.ReplaceAllShapesWithImageRequest;
import org.openapis.openapi.models.shared.RefreshSheetsChartRequest;
import org.openapis.openapi.models.shared.MergeTableCellsRequest;
import org.openapis.openapi.models.shared.InsertTextRequest;
import org.openapis.openapi.models.shared.InsertTableRowsRequest;
import org.openapis.openapi.models.shared.InsertTableColumnsRequest;
import org.openapis.openapi.models.shared.GroupObjectsRequest;
import org.openapis.openapi.models.shared.DuplicateObjectRequest;
import org.openapis.openapi.models.shared.DeleteTextRequest;
import org.openapis.openapi.models.shared.DeleteTableRowRequest;
import org.openapis.openapi.models.shared.DeleteTableColumnRequest;
import org.openapis.openapi.models.shared.DeleteParagraphBulletsRequest;
import org.openapis.openapi.models.shared.DeleteObjectRequest;
import org.openapis.openapi.models.shared.CreateVideoRequestSourceEnum;
import org.openapis.openapi.models.shared.CreateVideoRequest;
import org.openapis.openapi.models.shared.PageElementProperties;
import org.openapis.openapi.models.shared.CreateTableRequest;
import org.openapis.openapi.models.shared.CreateSlideRequest;
import org.openapis.openapi.models.shared.LayoutReferencePredefinedLayoutEnum;
import org.openapis.openapi.models.shared.LayoutReference;
import org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping;
import org.openapis.openapi.models.shared.PlaceholderTypeEnum;
import org.openapis.openapi.models.shared.Placeholder;
import org.openapis.openapi.models.shared.CreateSheetsChartRequestLinkingModeEnum;
import org.openapis.openapi.models.shared.CreateSheetsChartRequest;
import org.openapis.openapi.models.shared.CreateShapeRequestShapeTypeEnum;
import org.openapis.openapi.models.shared.CreateShapeRequest;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequestBulletPresetEnum;
import org.openapis.openapi.models.shared.CreateParagraphBulletsRequest;
import org.openapis.openapi.models.shared.CreateLineRequestCategoryEnum;
import org.openapis.openapi.models.shared.CreateLineRequestLineCategoryEnum;
import org.openapis.openapi.models.shared.CreateLineRequest;
import org.openapis.openapi.models.shared.CreateImageRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SlidesPresentationsBatchUpdateRequest req = new SlidesPresentationsBatchUpdateRequest() {{
                dollarXgafv = "2";
                batchUpdatePresentationRequest = new BatchUpdatePresentationRequest() {{
                    requests = new org.openapis.openapi.models.shared.Request[]{{
                        add(new Request() {{
                            createImage = new CreateImageRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "distinctio";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 8442.66;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 8579.46;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 8472.52;
                                        scaleY = 4236.55;
                                        shearX = 6235.64;
                                        shearY = 6458.94;
                                        translateX = 3843.82;
                                        translateY = 4375.87;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                objectId = "debitis";
                                url = "ipsa";
                            }};
                            createLine = new CreateLineRequest() {{
                                category = "CURVED";
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "tempora";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 3834.41;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7917.25;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 5288.95;
                                        scaleY = 4799.77;
                                        shearX = 5680.45;
                                        shearY = 3927.85;
                                        translateX = 9255.97;
                                        translateY = 8360.79;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                lineCategory = "BENT";
                                objectId = "veritatis";
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "NUMBERED_DIGIT_ALPHA_ROMAN";
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 20218;
                                    rowIndex = 368241;
                                }};
                                objectId = "repellendus";
                                textRange = new Range() {{
                                    endIndex = 957156;
                                    startIndex = 778157;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            createShape = new CreateShapeRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "at";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 8700.88;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4736.08;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 8009.11;
                                        scaleY = 4614.79;
                                        shearX = 5204.78;
                                        shearY = 7805.29;
                                        translateX = 6788.8;
                                        translateY = 1182.74;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "officia";
                                shapeType = "STAR_16";
                            }};
                            createSheetsChart = new CreateSheetsChartRequest() {{
                                chartId = 143353;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "deleniti";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 9446.69;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5218.48;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 4146.62;
                                        scaleY = 4736;
                                        shearX = 2645.55;
                                        shearY = 1863.32;
                                        translateX = 7742.34;
                                        translateY = 7369.18;
                                        unit = "EMU";
                                    }};
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                objectId = "excepturi";
                                spreadsheetId = "aspernatur";
                            }};
                            createSlide = new CreateSlideRequest() {{
                                insertionIndex = 18789;
                                objectId = "ad";
                                placeholderIdMappings = new org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping[]{{
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 149675;
                                            parentObjectId = "iste";
                                            type = "CLIP_ART";
                                        }};
                                        layoutPlaceholderObjectId = "natus";
                                        objectId = "laboriosam";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 943749;
                                            parentObjectId = "saepe";
                                            type = "PICTURE";
                                        }};
                                        layoutPlaceholderObjectId = "in";
                                        objectId = "corporis";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 613064;
                                            parentObjectId = "iure";
                                            type = "TITLE";
                                        }};
                                        layoutPlaceholderObjectId = "quidem";
                                        objectId = "architecto";
                                    }}),
                                }};
                                slideLayoutReference = new LayoutReference() {{
                                    layoutId = "ipsa";
                                    predefinedLayout = "BIG_NUMBER";
                                }};
                            }};
                            createTable = new CreateTableRequest() {{
                                columns = 666767;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "mollitia";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6706.38;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2103.82;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 1289.26;
                                        scaleY = 7506.86;
                                        shearX = 3154.28;
                                        shearY = 6078.31;
                                        translateX = 3637.11;
                                        translateY = 3250.47;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "accusantium";
                                rows = 438601;
                            }};
                            createVideo = new CreateVideoRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "culpa";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 9883.74;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1020.44;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 2088.76;
                                        scaleY = 6350.59;
                                        shearX = 1613.09;
                                        shearY = 9953;
                                        translateX = 6531.08;
                                        translateY = 5818.5;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                id = "commodi";
                                objectId = "quam";
                                source = "YOUTUBE";
                            }};
                            deleteObject = new DeleteObjectRequest() {{
                                objectId = "velit";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 623510;
                                    rowIndex = 158969;
                                }};
                                objectId = "quis";
                                textRange = new Range() {{
                                    endIndex = 110375;
                                    startIndex = 674752;
                                    type = "FROM_START_INDEX";
                                }};
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 317202;
                                    rowIndex = 138183;
                                }};
                                tableObjectId = "quo";
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 196582;
                                    rowIndex = 949572;
                                }};
                                tableObjectId = "ipsam";
                            }};
                            deleteText = new DeleteTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 662527;
                                    rowIndex = 820994;
                                }};
                                objectId = "aut";
                                textRange = new Range() {{
                                    endIndex = 97101;
                                    startIndex = 622846;
                                    type = "ALL";
                                }};
                            }};
                            duplicateObject = new DuplicateObjectRequest() {{
                                objectId = "laborum";
                                objectIds = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "voluptatibus");
                                }};
                            }};
                            groupObjects = new GroupObjectsRequest() {{
                                childrenObjectIds = new String[]{{
                                    add("nihil"),
                                    add("praesentium"),
                                    add("voluptatibus"),
                                    add("ipsa"),
                                }};
                                groupObjectId = "omnis";
                            }};
                            insertTableColumns = new InsertTableColumnsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 451159;
                                    rowIndex = 739264;
                                }};
                                insertRight = false;
                                number = 19987;
                                tableObjectId = "doloremque";
                            }};
                            insertTableRows = new InsertTableRowsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 441711;
                                    rowIndex = 282807;
                                }};
                                insertBelow = false;
                                number = 979587;
                                tableObjectId = "dicta";
                            }};
                            insertText = new InsertTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 359444;
                                    rowIndex = 296140;
                                }};
                                insertionIndex = 480894;
                                objectId = "dicta";
                                text = "harum";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                objectId = "enim";
                                tableRange = new TableRange() {{
                                    columnSpan = 880476;
                                    location = new TableCellLocation() {{
                                        columnIndex = 414263;
                                        rowIndex = 918236;
                                    }};
                                    rowSpan = 64147;
                                }};
                            }};
                            refreshSheetsChart = new RefreshSheetsChartRequest() {{
                                objectId = "ipsum";
                            }};
                            replaceAllShapesWithImage = new ReplaceAllShapesWithImageRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "quidem";
                                }};
                                imageReplaceMethod = "CENTER_INSIDE";
                                imageUrl = "excepturi";
                                pageObjectIds = new String[]{{
                                    add("modi"),
                                    add("praesentium"),
                                    add("rem"),
                                    add("voluptates"),
                                }};
                                replaceMethod = "CENTER_INSIDE";
                            }};
                            replaceAllShapesWithSheetsChart = new ReplaceAllShapesWithSheetsChartRequest() {{
                                chartId = 921158;
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "sint";
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                pageObjectIds = new String[]{{
                                    add("incidunt"),
                                    add("enim"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                                spreadsheetId = "quibusdam";
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "explicabo";
                                }};
                                pageObjectIds = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("labore"),
                                }};
                                replaceText = "modi";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "qui";
                                imageReplaceMethod = "CENTER_INSIDE";
                                url = "cupiditate";
                            }};
                            rerouteLine = new RerouteLineRequest() {{
                                objectId = "quos";
                            }};
                            ungroupObjects = new UngroupObjectsRequest() {{
                                objectIds = new String[]{{
                                    add("magni"),
                                }};
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                objectId = "assumenda";
                                tableRange = new TableRange() {{
                                    columnSpan = 369808;
                                    location = new TableCellLocation() {{
                                        columnIndex = 4695;
                                        rowIndex = 146441;
                                    }};
                                    rowSpan = 677817;
                                }};
                            }};
                            updateImageProperties = new UpdateImagePropertiesRequest() {{
                                fields = "excepturi";
                                imageProperties = new ImageProperties() {{
                                    brightness = 2700.08;
                                    contrast = 7037.37;
                                    cropProperties = new CropProperties() {{
                                        angle = 7351.94;
                                        bottomOffset = 2884.76;
                                        leftOffset = 9621.89;
                                        rightOffset = 4332.88;
                                        topOffset = 2487.53;
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "eligendi";
                                        relativeLink = "PREVIOUS_SLIDE";
                                        slideIndex = 396098;
                                        url = "provident";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "LONG_DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 5722.52;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 6389.21;
                                                        green = 2230.81;
                                                        red = 8915.55;
                                                    }};
                                                    themeColor = "BACKGROUND2";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 4471.25;
                                            unit = "EMU";
                                        }};
                                    }};
                                    recolor = new Recolor() {{
                                        name = "GRAYSCALE";
                                        recolorStops = new org.openapis.openapi.models.shared.ColorStop[]{{
                                            add(new ColorStop() {{
                                                alpha = 6994.79;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 1162.02;
                                                        green = 2974.37;
                                                        red = 7670.24;
                                                    }};
                                                    themeColor = "TEXT1";
                                                }};
                                                position = 4118.2;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 3965.06;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 6754.39;
                                                        green = 8811.04;
                                                        red = 2497.96;
                                                    }};
                                                    themeColor = "ACCENT5";
                                                }};
                                                position = 3132.18;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 8817.36;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 9654.17;
                                                        green = 6925.32;
                                                        red = 5884.65;
                                                    }};
                                                    themeColor = "FOLLOWED_HYPERLINK";
                                                }};
                                                position = 6596.69;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 5013.24;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5332.06;
                                                        green = 9560.84;
                                                        red = 2305.33;
                                                    }};
                                                    themeColor = "ACCENT6";
                                                }};
                                                position = 3948.69;
                                            }}),
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "LEFT_CENTER";
                                        alpha = 6188.09;
                                        blurRadius = new Dimension() {{
                                            magnitude = 6063.93;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 191.93;
                                                green = 4701.32;
                                                red = 3015.75;
                                            }};
                                            themeColor = "FOLLOWED_HYPERLINK";
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 2879.91;
                                            scaleY = 2900.77;
                                            shearX = 3834.62;
                                            shearY = 6180.16;
                                            translateX = 7491.7;
                                            translateY = 4287.69;
                                            unit = "PT";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    transparency = 1028.63;
                                }};
                                objectId = "magnam";
                            }};
                            updateLineCategory = new UpdateLineCategoryRequest() {{
                                lineCategory = "LINE_CATEGORY_UNSPECIFIED";
                                objectId = "excepturi";
                            }};
                            updateLineProperties = new UpdateLinePropertiesRequest() {{
                                fields = "ullam";
                                lineProperties = new LineProperties() {{
                                    dashStyle = "DASH_DOT";
                                    endArrow = "FILL_DIAMOND";
                                    endConnection = new LineConnection() {{
                                        connectedObjectId = "sint";
                                        connectionSiteIndex = 33625;
                                    }};
                                    lineFill = new LineFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 6532.01;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9689.62;
                                                    green = 6521.03;
                                                    red = 3209.97;
                                                }};
                                                themeColor = "ACCENT3";
                                            }};
                                        }};
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "dolor";
                                        relativeLink = "LAST_SLIDE";
                                        slideIndex = 141264;
                                        url = "nemo";
                                    }};
                                    startArrow = "NONE";
                                    startConnection = new LineConnection() {{
                                        connectedObjectId = "iure";
                                        connectionSiteIndex = 984043;
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 8919.24;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                objectId = "maxime";
                            }};
                            updatePageElementAltText = new UpdatePageElementAltTextRequest() {{
                                description = "deleniti";
                                objectId = "facilis";
                                title = "Ms.";
                            }};
                            updatePageElementTransform = new UpdatePageElementTransformRequest() {{
                                applyMode = "APPLY_MODE_UNSPECIFIED";
                                objectId = "architecto";
                                transform = new AffineTransform() {{
                                    scaleX = 9194.83;
                                    scaleY = 3523.12;
                                    shearX = 7142.42;
                                    shearY = 4692.49;
                                    translateX = 9988.48;
                                    translateY = 8411.4;
                                    unit = "UNIT_UNSPECIFIED";
                                }};
                            }};
                            updatePageElementsZOrder = new UpdatePageElementsZOrderRequest() {{
                                operation = "SEND_TO_BACK";
                                pageElementObjectIds = new String[]{{
                                    add("accusantium"),
                                    add("consequuntur"),
                                    add("praesentium"),
                                    add("natus"),
                                }};
                            }};
                            updatePageProperties = new UpdatePagePropertiesRequest() {{
                                fields = "magni";
                                objectId = "sunt";
                                pageProperties = new PageProperties() {{
                                    colorScheme = new ColorScheme() {{
                                        colors = new org.openapis.openapi.models.shared.ThemeColorPair[]{{
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 8480.09;
                                                    green = 8649.34;
                                                    red = 8073.19;
                                                }};
                                                type = "ACCENT2";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 5691.01;
                                                    green = 1399.72;
                                                    red = 4071.83;
                                                }};
                                                type = "THEME_COLOR_TYPE_UNSPECIFIED";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 691.67;
                                                    green = 9825.75;
                                                    red = 6974.29;
                                                }};
                                                type = "ACCENT2";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 4535.43;
                                                    green = 4200.75;
                                                    red = 7220.56;
                                                }};
                                                type = "THEME_COLOR_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                    }};
                                    pageBackgroundFill = new PageBackgroundFill() {{
                                        propertyState = "INHERIT";
                                        solidFill = new SolidFill() {{
                                            alpha = 3654.96;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 9755.22;
                                                    green = 166.27;
                                                    red = 8558.04;
                                                }};
                                                themeColor = "DARK2";
                                            }};
                                        }};
                                        stretchedPictureFill = new StretchedPictureFill() {{
                                            contentUrl = "aut";
                                            size = new Size() {{
                                                height = new Dimension() {{
                                                    magnitude = 7649.12;
                                                    unit = "EMU";
                                                }};
                                                width = new Dimension() {{
                                                    magnitude = 9441.24;
                                                    unit = "PT";
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 749999;
                                    rowIndex = 171629;
                                }};
                                fields = "quis";
                                objectId = "totam";
                                style = new ParagraphStyle() {{
                                    alignment = "CENTER";
                                    direction = "TEXT_DIRECTION_UNSPECIFIED";
                                    indentEnd = new Dimension() {{
                                        magnitude = 3389.85;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 1794.9;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 1709.86;
                                        unit = "PT";
                                    }};
                                    lineSpacing = 4634.51;
                                    spaceAbove = new Dimension() {{
                                        magnitude = 2239.24;
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 3453.52;
                                        unit = "PT";
                                    }};
                                    spacingMode = "COLLAPSE_LISTS";
                                }};
                                textRange = new Range() {{
                                    endIndex = 608253;
                                    startIndex = 704415;
                                    type = "FROM_START_INDEX";
                                }};
                            }};
                            updateShapeProperties = new UpdateShapePropertiesRequest() {{
                                fields = "voluptatem";
                                objectId = "porro";
                                shapeProperties = new ShapeProperties() {{
                                    autofit = new Autofit() {{
                                        autofitType = "AUTOFIT_TYPE_UNSPECIFIED";
                                        fontScale = 5000.26;
                                        lineSpacingReduction = 6214.79;
                                    }};
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSPECIFIED";
                                    link = new Link() {{
                                        pageObjectId = "occaecati";
                                        relativeLink = "FIRST_SLIDE";
                                        slideIndex = 237893;
                                        url = "asperiores";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "LONG_DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 2672.62;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 6139.66;
                                                        green = 6790.91;
                                                        red = 5356.33;
                                                    }};
                                                    themeColor = "BACKGROUND1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 7508.44;
                                            unit = "PT";
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "BOTTOM_RIGHT";
                                        alpha = 3119.45;
                                        blurRadius = new Dimension() {{
                                            magnitude = 5542.42;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2123.9;
                                                green = 2098.43;
                                                red = 2224.43;
                                            }};
                                            themeColor = "DARK2";
                                        }};
                                        propertyState = "RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 9443.73;
                                            scaleY = 5695.74;
                                            shearX = 7395.51;
                                            shearY = 4521.09;
                                            translateX = 4904.59;
                                            translateY = 9702.37;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        type = "OUTER";
                                    }};
                                    shapeBackgroundFill = new ShapeBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 852.95;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 580.29;
                                                    green = 564.18;
                                                    red = 4344.17;
                                                }};
                                                themeColor = "ACCENT4";
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateSlideProperties = new UpdateSlidePropertiesRequest() {{
                                fields = "quaerat";
                                objectId = "accusamus";
                                slideProperties = new SlideProperties() {{
                                    isSkipped = false;
                                    layoutObjectId = "quidem";
                                    masterObjectId = "voluptatibus";
                                    notesPage = new Page() {{}};
                                }};
                            }};
                            updateSlidesPosition = new UpdateSlidesPositionRequest() {{
                                insertionIndex = 377752;
                                slideObjectIds = new String[]{{
                                    add("eos"),
                                    add("atque"),
                                    add("sit"),
                                }};
                            }};
                            updateTableBorderProperties = new UpdateTableBorderPropertiesRequest() {{
                                borderPosition = "RIGHT";
                                fields = "ab";
                                objectId = "soluta";
                                tableBorderProperties = new TableBorderProperties() {{
                                    dashStyle = "DASH_DOT";
                                    tableBorderFill = new TableBorderFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 4785.96;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4536.97;
                                                    green = 6770.82;
                                                    red = 5365.79;
                                                }};
                                                themeColor = "ACCENT6";
                                            }};
                                        }};
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 8966.72;
                                        unit = "PT";
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 990339;
                                    location = new TableCellLocation() {{
                                        columnIndex = 469497;
                                        rowIndex = 216897;
                                    }};
                                    rowSpan = 456015;
                                }};
                            }};
                            updateTableCellProperties = new UpdateTableCellPropertiesRequest() {{
                                fields = "id";
                                objectId = "saepe";
                                tableCellProperties = new TableCellProperties() {{
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSUPPORTED";
                                    tableCellBackgroundFill = new TableCellBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 206.51;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2292.19;
                                                    green = 7583.79;
                                                    red = 8815.86;
                                                }};
                                                themeColor = "ACCENT1";
                                            }};
                                        }};
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 904425;
                                    location = new TableCellLocation() {{
                                        columnIndex = 383464;
                                        rowIndex = 645785;
                                    }};
                                    rowSpan = 588317;
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(831049),
                                    add(519711),
                                }};
                                fields = "similique";
                                objectId = "alias";
                                tableColumnProperties = new TableColumnProperties() {{
                                    columnWidth = new Dimension() {{
                                        magnitude = 8726.51;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                            }};
                            updateTableRowProperties = new UpdateTableRowPropertiesRequest() {{
                                fields = "tempora";
                                objectId = "vel";
                                rowIndices = new Integer[]{{
                                    add(885338),
                                    add(185636),
                                    add(679880),
                                    add(952792),
                                }};
                                tableRowProperties = new TableRowProperties() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 4561.3;
                                        unit = "PT";
                                    }};
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 483409;
                                    rowIndex = 215507;
                                }};
                                fields = "quisquam";
                                objectId = "tenetur";
                                style = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2294.42;
                                                green = 7308.56;
                                                red = 8802.98;
                                            }};
                                            themeColor = "LIGHT2";
                                        }};
                                    }};
                                    baselineOffset = "NONE";
                                    bold = false;
                                    fontFamily = "dolorem";
                                    fontSize = new Dimension() {{
                                        magnitude = 9574.51;
                                        unit = "EMU";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 4717.52;
                                                green = 256.62;
                                                red = 7115.84;
                                            }};
                                            themeColor = "DARK2";
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        pageObjectId = "sed";
                                        relativeLink = "PREVIOUS_SLIDE";
                                        slideIndex = 730442;
                                        url = "voluptas";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "deserunt";
                                        weight = 463575;
                                    }};
                                }};
                                textRange = new Range() {{
                                    endIndex = 214880;
                                    startIndex = 277628;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            updateVideoProperties = new UpdateVideoPropertiesRequest() {{
                                fields = "cupiditate";
                                objectId = "maxime";
                                videoProperties = new VideoProperties() {{
                                    autoPlay = false;
                                    end = 863856;
                                    mute = false;
                                    outline = new Outline() {{
                                        dashStyle = "LONG_DASH";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 1175.31;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 6748.48;
                                                        green = 5173.79;
                                                        red = 2768.94;
                                                    }};
                                                    themeColor = "LIGHT1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 7168.6;
                                            unit = "PT";
                                        }};
                                    }};
                                    start = 396060;
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createImage = new CreateImageRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "quam";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 5654.21;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1832.8;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 1448.47;
                                        scaleY = 1649.59;
                                        shearX = 4880.56;
                                        shearY = 1248.33;
                                        translateX = 3556.13;
                                        translateY = 7220.81;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "voluptatem";
                                url = "cumque";
                            }};
                            createLine = new CreateLineRequest() {{
                                category = "BENT";
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "nobis";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 925.96;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2174.5;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 7492.55;
                                        scaleY = 5521.93;
                                        shearX = 7316.94;
                                        shearY = 5844.76;
                                        translateX = 456.14;
                                        translateY = 9619.37;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                lineCategory = "STRAIGHT";
                                objectId = "labore";
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_ARROW_DIAMOND_DISC";
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 677263;
                                    rowIndex = 100294;
                                }};
                                objectId = "quae";
                                textRange = new Range() {{
                                    endIndex = 16429;
                                    startIndex = 555649;
                                    type = "ALL";
                                }};
                            }};
                            createShape = new CreateShapeRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "consequatur";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6699.17;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7851.53;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 2817.3;
                                        scaleY = 7034.95;
                                        shearX = 5864.1;
                                        shearY = 1816.31;
                                        translateX = 639.55;
                                        translateY = 5123.93;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "occaecati";
                                shapeType = "ELLIPSE_RIBBON";
                            }};
                            createSheetsChart = new CreateSheetsChartRequest() {{
                                chartId = 787542;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "vero";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6064.76;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2184.03;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 4551.69;
                                        scaleY = 2317.01;
                                        shearX = 8788.7;
                                        shearY = 9493.19;
                                        translateX = 4922.68;
                                        translateY = 9413.78;
                                        unit = "PT";
                                    }};
                                }};
                                linkingMode = "LINKED";
                                objectId = "odio";
                                spreadsheetId = "similique";
                            }};
                            createSlide = new CreateSlideRequest() {{
                                insertionIndex = 708548;
                                objectId = "vero";
                                placeholderIdMappings = new org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping[]{{
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 293020;
                                            parentObjectId = "quibusdam";
                                            type = "TABLE";
                                        }};
                                        layoutPlaceholderObjectId = "sequi";
                                        objectId = "natus";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 773326;
                                            parentObjectId = "aut";
                                            type = "SLIDE_IMAGE";
                                        }};
                                        layoutPlaceholderObjectId = "exercitationem";
                                        objectId = "nulla";
                                    }}),
                                }};
                                slideLayoutReference = new LayoutReference() {{
                                    layoutId = "fugit";
                                    predefinedLayout = "ONE_COLUMN_TEXT";
                                }};
                            }};
                            createTable = new CreateTableRequest() {{
                                columns = 981830;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "doloribus";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 4783.7;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4973.91;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 6394.73;
                                        scaleY = 2694.79;
                                        shearX = 3685.84;
                                        shearY = 4104.92;
                                        translateX = 1369;
                                        translateY = 4282.24;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "magnam";
                                rows = 189848;
                            }};
                            createVideo = new CreateVideoRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "ex";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 5113.19;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2243.17;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 978.44;
                                        scaleY = 4061.2;
                                        shearX = 8621.92;
                                        shearY = 5692.11;
                                        translateX = 9729.2;
                                        translateY = 3436.05;
                                        unit = "PT";
                                    }};
                                }};
                                id = "quisquam";
                                objectId = "saepe";
                                source = "YOUTUBE";
                            }};
                            deleteObject = new DeleteObjectRequest() {{
                                objectId = "impedit";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 359271;
                                    rowIndex = 333145;
                                }};
                                objectId = "aliquid";
                                textRange = new Range() {{
                                    endIndex = 81101;
                                    startIndex = 301831;
                                    type = "FIXED_RANGE";
                                }};
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 775220;
                                    rowIndex = 232234;
                                }};
                                tableObjectId = "recusandae";
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 132487;
                                    rowIndex = 325310;
                                }};
                                tableObjectId = "eaque";
                            }};
                            deleteText = new DeleteTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 952871;
                                    rowIndex = 725595;
                                }};
                                objectId = "aut";
                                textRange = new Range() {{
                                    endIndex = 11427;
                                    startIndex = 533466;
                                    type = "ALL";
                                }};
                            }};
                            duplicateObject = new DuplicateObjectRequest() {{
                                objectId = "aliquam";
                                objectIds = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "inventore");
                                }};
                            }};
                            groupObjects = new GroupObjectsRequest() {{
                                childrenObjectIds = new String[]{{
                                    add("et"),
                                    add("dolorum"),
                                }};
                                groupObjectId = "laborum";
                            }};
                            insertTableColumns = new InsertTableColumnsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 810424;
                                    rowIndex = 245367;
                                }};
                                insertRight = false;
                                number = 432148;
                                tableObjectId = "autem";
                            }};
                            insertTableRows = new InsertTableRowsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 752135;
                                    rowIndex = 557369;
                                }};
                                insertBelow = false;
                                number = 829603;
                                tableObjectId = "nulla";
                            }};
                            insertText = new InsertTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 379034;
                                    rowIndex = 727044;
                                }};
                                insertionIndex = 96549;
                                objectId = "tempora";
                                text = "numquam";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                objectId = "explicabo";
                                tableRange = new TableRange() {{
                                    columnSpan = 591935;
                                    location = new TableCellLocation() {{
                                        columnIndex = 55374;
                                        rowIndex = 476477;
                                    }};
                                    rowSpan = 301598;
                                }};
                            }};
                            refreshSheetsChart = new RefreshSheetsChartRequest() {{
                                objectId = "odio";
                            }};
                            replaceAllShapesWithImage = new ReplaceAllShapesWithImageRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "eius";
                                }};
                                imageReplaceMethod = "CENTER_INSIDE";
                                imageUrl = "esse";
                                pageObjectIds = new String[]{{
                                    add("fuga"),
                                    add("reprehenderit"),
                                    add("quidem"),
                                }};
                                replaceMethod = "CENTER_CROP";
                            }};
                            replaceAllShapesWithSheetsChart = new ReplaceAllShapesWithSheetsChartRequest() {{
                                chartId = 283519;
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "eum";
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                pageObjectIds = new String[]{{
                                    add("eos"),
                                    add("praesentium"),
                                    add("quisquam"),
                                    add("veritatis"),
                                }};
                                spreadsheetId = "ipsa";
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "id";
                                }};
                                pageObjectIds = new String[]{{
                                    add("neque"),
                                    add("quo"),
                                    add("illum"),
                                }};
                                replaceText = "quo";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "fuga";
                                imageReplaceMethod = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
                                url = "eos";
                            }};
                            rerouteLine = new RerouteLineRequest() {{
                                objectId = "voluptas";
                            }};
                            ungroupObjects = new UngroupObjectsRequest() {{
                                objectIds = new String[]{{
                                    add("cupiditate"),
                                }};
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                objectId = "consequatur";
                                tableRange = new TableRange() {{
                                    columnSpan = 272822;
                                    location = new TableCellLocation() {{
                                        columnIndex = 892050;
                                        rowIndex = 370853;
                                    }};
                                    rowSpan = 133465;
                                }};
                            }};
                            updateImageProperties = new UpdateImagePropertiesRequest() {{
                                fields = "sequi";
                                imageProperties = new ImageProperties() {{
                                    brightness = 7791.92;
                                    contrast = 4598.56;
                                    cropProperties = new CropProperties() {{
                                        angle = 9251.64;
                                        bottomOffset = 446.12;
                                        leftOffset = 7151.79;
                                        rightOffset = 7997.96;
                                        topOffset = 4908.19;
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "inventore";
                                        relativeLink = "PREVIOUS_SLIDE";
                                        slideIndex = 518835;
                                        url = "accusamus";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 4884.1;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5775.43;
                                                        green = 4145.67;
                                                        red = 9594.34;
                                                    }};
                                                    themeColor = "LIGHT1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 4752.89;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    recolor = new Recolor() {{
                                        name = "DARK9";
                                        recolorStops = new org.openapis.openapi.models.shared.ColorStop[]{{
                                            add(new ColorStop() {{
                                                alpha = 5564.29;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5100.17;
                                                        green = 1598.67;
                                                        red = 5361.78;
                                                    }};
                                                    themeColor = "LIGHT1";
                                                }};
                                                position = 6813.93;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 6494.63;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 2775.96;
                                                        green = 5392.24;
                                                        red = 1288.6;
                                                    }};
                                                    themeColor = "ACCENT1";
                                                }};
                                                position = 3926.76;
                                            }}),
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "TOP_LEFT";
                                        alpha = 9564.06;
                                        blurRadius = new Dimension() {{
                                            magnitude = 1598.7;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 1294.12;
                                                green = 9039.84;
                                                red = 5789.22;
                                            }};
                                            themeColor = "ACCENT5";
                                        }};
                                        propertyState = "RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 4569.11;
                                            scaleY = 9105.45;
                                            shearX = 8820.42;
                                            shearY = 829.71;
                                            translateX = 4586.04;
                                            translateY = 8003.79;
                                            unit = "PT";
                                        }};
                                        type = "OUTER";
                                    }};
                                    transparency = 3990.25;
                                }};
                                objectId = "quasi";
                            }};
                            updateLineCategory = new UpdateLineCategoryRequest() {{
                                lineCategory = "CURVED";
                                objectId = "vel";
                            }};
                            updateLineProperties = new UpdateLinePropertiesRequest() {{
                                fields = "harum";
                                lineProperties = new LineProperties() {{
                                    dashStyle = "DASH";
                                    endArrow = "OPEN_ARROW";
                                    endConnection = new LineConnection() {{
                                        connectedObjectId = "occaecati";
                                        connectionSiteIndex = 327720;
                                    }};
                                    lineFill = new LineFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 7162.44;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 7567.79;
                                                    green = 270.69;
                                                    red = 6360.61;
                                                }};
                                                themeColor = "FOLLOWED_HYPERLINK";
                                            }};
                                        }};
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "adipisci";
                                        relativeLink = "FIRST_SLIDE";
                                        slideIndex = 160538;
                                        url = "consequatur";
                                    }};
                                    startArrow = "OPEN_CIRCLE";
                                    startConnection = new LineConnection() {{
                                        connectedObjectId = "quaerat";
                                        connectionSiteIndex = 959167;
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 2328.65;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "blanditiis";
                            }};
                            updatePageElementAltText = new UpdatePageElementAltTextRequest() {{
                                description = "provident";
                                objectId = "a";
                                title = "Dr.";
                            }};
                            updatePageElementTransform = new UpdatePageElementTransformRequest() {{
                                applyMode = "RELATIVE";
                                objectId = "esse";
                                transform = new AffineTransform() {{
                                    scaleX = 974.68;
                                    scaleY = 9518.75;
                                    shearX = 6216.79;
                                    shearY = 5757.51;
                                    translateX = 8630.23;
                                    translateY = 8207.67;
                                    unit = "UNIT_UNSPECIFIED";
                                }};
                            }};
                            updatePageElementsZOrder = new UpdatePageElementsZOrderRequest() {{
                                operation = "SEND_TO_BACK";
                                pageElementObjectIds = new String[]{{
                                    add("facere"),
                                    add("veritatis"),
                                    add("consequuntur"),
                                    add("quasi"),
                                }};
                            }};
                            updatePageProperties = new UpdatePagePropertiesRequest() {{
                                fields = "similique";
                                objectId = "culpa";
                                pageProperties = new PageProperties() {{
                                    colorScheme = new ColorScheme() {{
                                        colors = new org.openapis.openapi.models.shared.ThemeColorPair[]{{
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 9492.98;
                                                    green = 627.13;
                                                    red = 9367.47;
                                                }};
                                                type = "ACCENT3";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 4473.78;
                                                    green = 2586.84;
                                                    red = 7276.97;
                                                }};
                                                type = "BACKGROUND1";
                                            }}),
                                        }};
                                    }};
                                    pageBackgroundFill = new PageBackgroundFill() {{
                                        propertyState = "INHERIT";
                                        solidFill = new SolidFill() {{
                                            alpha = 333.04;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3069.86;
                                                    green = 9589.83;
                                                    red = 1197.71;
                                                }};
                                                themeColor = "ACCENT2";
                                            }};
                                        }};
                                        stretchedPictureFill = new StretchedPictureFill() {{
                                            contentUrl = "reprehenderit";
                                            size = new Size() {{
                                                height = new Dimension() {{
                                                    magnitude = 3567.07;
                                                    unit = "EMU";
                                                }};
                                                width = new Dimension() {{
                                                    magnitude = 163.28;
                                                    unit = "EMU";
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 185232;
                                    rowIndex = 845358;
                                }};
                                fields = "ex";
                                objectId = "deleniti";
                                style = new ParagraphStyle() {{
                                    alignment = "JUSTIFIED";
                                    direction = "RIGHT_TO_LEFT";
                                    indentEnd = new Dimension() {{
                                        magnitude = 996.15;
                                        unit = "EMU";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 9453.02;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 8694.89;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    lineSpacing = 4541.62;
                                    spaceAbove = new Dimension() {{
                                        magnitude = 559.65;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 865.32;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    spacingMode = "SPACING_MODE_UNSPECIFIED";
                                }};
                                textRange = new Range() {{
                                    endIndex = 614465;
                                    startIndex = 839513;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            updateShapeProperties = new UpdateShapePropertiesRequest() {{
                                fields = "rem";
                                objectId = "aut";
                                shapeProperties = new ShapeProperties() {{
                                    autofit = new Autofit() {{
                                        autofitType = "TEXT_AUTOFIT";
                                        fontScale = 4287.96;
                                        lineSpacingReduction = 6498.32;
                                    }};
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSPECIFIED";
                                    link = new Link() {{
                                        pageObjectId = "corrupti";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 32465;
                                        url = "dolor";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 2531.91;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 7710.89;
                                                        green = 1310.55;
                                                        red = 3762.26;
                                                    }};
                                                    themeColor = "THEME_COLOR_TYPE_UNSPECIFIED";
                                                }};
                                            }};
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 1154.84;
                                            unit = "PT";
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "RIGHT_CENTER";
                                        alpha = 2446.51;
                                        blurRadius = new Dimension() {{
                                            magnitude = 9742.57;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 9903.45;
                                                green = 456.59;
                                                red = 4090.54;
                                            }};
                                            themeColor = "ACCENT1";
                                        }};
                                        propertyState = "RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 8315.2;
                                            scaleY = 6387.62;
                                            shearX = 8070.23;
                                            shearY = 4903.05;
                                            translateX = 6400.24;
                                            translateY = 9894.1;
                                            unit = "EMU";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    shapeBackgroundFill = new ShapeBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 7832.35;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8018.36;
                                                    green = 2883.98;
                                                    red = 704.47;
                                                }};
                                                themeColor = "LIGHT2";
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateSlideProperties = new UpdateSlidePropertiesRequest() {{
                                fields = "fuga";
                                objectId = "id";
                                slideProperties = new SlideProperties() {{
                                    isSkipped = false;
                                    layoutObjectId = "suscipit";
                                    masterObjectId = "velit";
                                    notesPage = new Page() {{}};
                                }};
                            }};
                            updateSlidesPosition = new UpdateSlidesPositionRequest() {{
                                insertionIndex = 633931;
                                slideObjectIds = new String[]{{
                                    add("recusandae"),
                                    add("totam"),
                                    add("fugiat"),
                                }};
                            }};
                            updateTableBorderProperties = new UpdateTableBorderPropertiesRequest() {{
                                borderPosition = "INNER_HORIZONTAL";
                                fields = "ducimus";
                                objectId = "quos";
                                tableBorderProperties = new TableBorderProperties() {{
                                    dashStyle = "DOT";
                                    tableBorderFill = new TableBorderFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 2870.51;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8225.6;
                                                    green = 7065.75;
                                                    red = 7382.27;
                                                }};
                                                themeColor = "ACCENT3";
                                            }};
                                        }};
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 4471.44;
                                        unit = "EMU";
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 968904;
                                    location = new TableCellLocation() {{
                                        columnIndex = 828657;
                                        rowIndex = 363161;
                                    }};
                                    rowSpan = 924967;
                                }};
                            }};
                            updateTableCellProperties = new UpdateTableCellPropertiesRequest() {{
                                fields = "aliquid";
                                objectId = "aperiam";
                                tableCellProperties = new TableCellProperties() {{
                                    contentAlignment = "MIDDLE";
                                    tableCellBackgroundFill = new TableCellBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 4490.83;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3485.19;
                                                    green = 9372.85;
                                                    red = 8149.67;
                                                }};
                                                themeColor = "LIGHT2";
                                            }};
                                        }};
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 985492;
                                    location = new TableCellLocation() {{
                                        columnIndex = 381760;
                                        rowIndex = 968972;
                                    }};
                                    rowSpan = 697142;
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(897071),
                                    add(296556),
                                    add(121059),
                                    add(992012),
                                }};
                                fields = "adipisci";
                                objectId = "non";
                                tableColumnProperties = new TableColumnProperties() {{
                                    columnWidth = new Dimension() {{
                                        magnitude = 2282.63;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                            }};
                            updateTableRowProperties = new UpdateTableRowPropertiesRequest() {{
                                fields = "dignissimos";
                                objectId = "a";
                                rowIndices = new Integer[]{{
                                    add(233420),
                                    add(358107),
                                    add(689768),
                                    add(385237),
                                }};
                                tableRowProperties = new TableRowProperties() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 583.56;
                                        unit = "PT";
                                    }};
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 730709;
                                    rowIndex = 113816;
                                }};
                                fields = "accusamus";
                                objectId = "similique";
                                style = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2724.37;
                                                green = 1328.15;
                                                red = 3790.57;
                                            }};
                                            themeColor = "ACCENT2";
                                        }};
                                    }};
                                    baselineOffset = "NONE";
                                    bold = false;
                                    fontFamily = "minima";
                                    fontSize = new Dimension() {{
                                        magnitude = 7487.89;
                                        unit = "PT";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2378.07;
                                                green = 7955.35;
                                                red = 1718.53;
                                            }};
                                            themeColor = "ACCENT4";
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        pageObjectId = "in";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 304468;
                                        url = "officiis";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "temporibus";
                                        weight = 351870;
                                    }};
                                }};
                                textRange = new Range() {{
                                    endIndex = 237742;
                                    startIndex = 738391;
                                    type = "FROM_START_INDEX";
                                }};
                            }};
                            updateVideoProperties = new UpdateVideoPropertiesRequest() {{
                                fields = "quas";
                                objectId = "hic";
                                videoProperties = new VideoProperties() {{
                                    autoPlay = false;
                                    end = 201517;
                                    mute = false;
                                    outline = new Outline() {{
                                        dashStyle = "DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 5485.19;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 8672.9;
                                                        green = 5196.43;
                                                        red = 9402.1;
                                                    }};
                                                    themeColor = "ACCENT1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 246.19;
                                            unit = "PT";
                                        }};
                                    }};
                                    start = 148829;
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createImage = new CreateImageRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "reiciendis";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 1318.52;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7079.18;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 7090.72;
                                        scaleY = 708.69;
                                        shearX = 6117.49;
                                        shearY = 2927.94;
                                        translateX = 6719.07;
                                        translateY = 1523.54;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "commodi";
                                url = "quidem";
                            }};
                            createLine = new CreateLineRequest() {{
                                category = "LINE_CATEGORY_UNSPECIFIED";
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "voluptas";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6041.18;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3828.08;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 8953.86;
                                        scaleY = 724.34;
                                        shearX = 9677.95;
                                        shearY = 193;
                                        translateX = 5468.85;
                                        translateY = 9795.74;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                lineCategory = "STRAIGHT";
                                objectId = "provident";
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_ARROW_DIAMOND_DISC";
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 896762;
                                    rowIndex = 215529;
                                }};
                                objectId = "ea";
                                textRange = new Range() {{
                                    endIndex = 579912;
                                    startIndex = 552078;
                                    type = "ALL";
                                }};
                            }};
                            createShape = new CreateShapeRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "tempora";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 2730.09;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 9700.76;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 254.97;
                                        scaleY = 2484.13;
                                        shearX = 8880.44;
                                        shearY = 5058.66;
                                        translateX = 7086.09;
                                        translateY = 3103.81;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                objectId = "ipsam";
                                shapeType = "FLOW_CHART_PROCESS";
                            }};
                            createSheetsChart = new CreateSheetsChartRequest() {{
                                chartId = 524970;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "sit";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 7505.95;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 3335.07;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 9241.59;
                                        scaleY = 9671.22;
                                        shearX = 8623.19;
                                        shearY = 1685.76;
                                        translateX = 486.9;
                                        translateY = 9014.83;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                objectId = "in";
                                spreadsheetId = "officiis";
                            }};
                            createSlide = new CreateSlideRequest() {{
                                insertionIndex = 104627;
                                objectId = "laudantium";
                                placeholderIdMappings = new org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping[]{{
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 510629;
                                            parentObjectId = "cum";
                                            type = "DATE_AND_TIME";
                                        }};
                                        layoutPlaceholderObjectId = "dolorum";
                                        objectId = "voluptatum";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 622385;
                                            parentObjectId = "hic";
                                            type = "SLIDE_NUMBER";
                                        }};
                                        layoutPlaceholderObjectId = "debitis";
                                        objectId = "neque";
                                    }}),
                                }};
                                slideLayoutReference = new LayoutReference() {{
                                    layoutId = "dolorum";
                                    predefinedLayout = "TITLE_AND_BODY";
                                }};
                            }};
                            createTable = new CreateTableRequest() {{
                                columns = 639028;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "dolorum";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 5483.61;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2726.83;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 1482.68;
                                        scaleY = 2826.99;
                                        shearX = 8563.03;
                                        shearY = 302.35;
                                        translateX = 6350.57;
                                        translateY = 7103.37;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                objectId = "consequatur";
                                rows = 460220;
                            }};
                            createVideo = new CreateVideoRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "ipsam";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 245.27;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5580.65;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 3611.51;
                                        scaleY = 894.94;
                                        shearX = 5027.1;
                                        shearY = 4059.42;
                                        translateX = 1536.27;
                                        translateY = 243.13;
                                        unit = "EMU";
                                    }};
                                }};
                                id = "nostrum";
                                objectId = "saepe";
                                source = "YOUTUBE";
                            }};
                            deleteObject = new DeleteObjectRequest() {{
                                objectId = "consequatur";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 279068;
                                    rowIndex = 968865;
                                }};
                                objectId = "dolorem";
                                textRange = new Range() {{
                                    endIndex = 690894;
                                    startIndex = 115703;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 577140;
                                    rowIndex = 289776;
                                }};
                                tableObjectId = "quidem";
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 539074;
                                    rowIndex = 671957;
                                }};
                                tableObjectId = "nam";
                            }};
                            deleteText = new DeleteTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 948861;
                                    rowIndex = 388867;
                                }};
                                objectId = "alias";
                                textRange = new Range() {{
                                    endIndex = 227084;
                                    startIndex = 647197;
                                    type = "FIXED_RANGE";
                                }};
                            }};
                            duplicateObject = new DuplicateObjectRequest() {{
                                objectId = "unde";
                                objectIds = new java.util.HashMap<String, String>() {{
                                    put("provident", "repellendus");
                                    put("delectus", "voluptates");
                                    put("perferendis", "est");
                                    put("quidem", "reprehenderit");
                                }};
                            }};
                            groupObjects = new GroupObjectsRequest() {{
                                childrenObjectIds = new String[]{{
                                    add("fuga"),
                                    add("praesentium"),
                                    add("mollitia"),
                                    add("veniam"),
                                }};
                                groupObjectId = "voluptatem";
                            }};
                            insertTableColumns = new InsertTableColumnsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 790840;
                                    rowIndex = 919532;
                                }};
                                insertRight = false;
                                number = 97243;
                                tableObjectId = "atque";
                            }};
                            insertTableRows = new InsertTableRowsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 442036;
                                    rowIndex = 991142;
                                }};
                                insertBelow = false;
                                number = 519952;
                                tableObjectId = "suscipit";
                            }};
                            insertText = new InsertTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 693957;
                                    rowIndex = 806670;
                                }};
                                insertionIndex = 90885;
                                objectId = "esse";
                                text = "amet";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                objectId = "assumenda";
                                tableRange = new TableRange() {{
                                    columnSpan = 410301;
                                    location = new TableCellLocation() {{
                                        columnIndex = 539118;
                                        rowIndex = 623295;
                                    }};
                                    rowSpan = 887265;
                                }};
                            }};
                            refreshSheetsChart = new RefreshSheetsChartRequest() {{
                                objectId = "officiis";
                            }};
                            replaceAllShapesWithImage = new ReplaceAllShapesWithImageRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "accusamus";
                                }};
                                imageReplaceMethod = "CENTER_INSIDE";
                                imageUrl = "minima";
                                pageObjectIds = new String[]{{
                                    add("ex"),
                                }};
                                replaceMethod = "CENTER_CROP";
                            }};
                            replaceAllShapesWithSheetsChart = new ReplaceAllShapesWithSheetsChartRequest() {{
                                chartId = 544647;
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "at";
                                }};
                                linkingMode = "LINKED";
                                pageObjectIds = new String[]{{
                                    add("suscipit"),
                                    add("repudiandae"),
                                    add("atque"),
                                }};
                                spreadsheetId = "atque";
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "sunt";
                                }};
                                pageObjectIds = new String[]{{
                                    add("dolorum"),
                                    add("repellendus"),
                                    add("labore"),
                                    add("reiciendis"),
                                }};
                                replaceText = "doloremque";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "repudiandae";
                                imageReplaceMethod = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
                                url = "accusantium";
                            }};
                            rerouteLine = new RerouteLineRequest() {{
                                objectId = "beatae";
                            }};
                            ungroupObjects = new UngroupObjectsRequest() {{
                                objectIds = new String[]{{
                                    add("enim"),
                                }};
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                objectId = "laboriosam";
                                tableRange = new TableRange() {{
                                    columnSpan = 246535;
                                    location = new TableCellLocation() {{
                                        columnIndex = 952143;
                                        rowIndex = 562783;
                                    }};
                                    rowSpan = 300029;
                                }};
                            }};
                            updateImageProperties = new UpdateImagePropertiesRequest() {{
                                fields = "saepe";
                                imageProperties = new ImageProperties() {{
                                    brightness = 1604.67;
                                    contrast = 5801.07;
                                    cropProperties = new CropProperties() {{
                                        angle = 8863.05;
                                        bottomOffset = 5979.37;
                                        leftOffset = 4463.94;
                                        rightOffset = 2380.43;
                                        topOffset = 9078.76;
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "occaecati";
                                        relativeLink = "RELATIVE_SLIDE_LINK_UNSPECIFIED";
                                        slideIndex = 145870;
                                        url = "id";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 4402.64;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 6255.28;
                                                        green = 764.86;
                                                        red = 3613.06;
                                                    }};
                                                    themeColor = "HYPERLINK";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 2473.99;
                                            unit = "PT";
                                        }};
                                    }};
                                    recolor = new Recolor() {{
                                        name = "NONE";
                                        recolorStops = new org.openapis.openapi.models.shared.ColorStop[]{{
                                            add(new ColorStop() {{
                                                alpha = 599.44;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5176.12;
                                                        green = 610.78;
                                                        red = 4746.68;
                                                    }};
                                                    themeColor = "TEXT2";
                                                }};
                                                position = 1843.62;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 7398.84;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 4347.61;
                                                        green = 8980.63;
                                                        red = 1875.52;
                                                    }};
                                                    themeColor = "HYPERLINK";
                                                }};
                                                position = 7152.08;
                                            }}),
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "CENTER";
                                        alpha = 5230.06;
                                        blurRadius = new Dimension() {{
                                            magnitude = 3044.46;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 9979.63;
                                                green = 30.99;
                                                red = 3621.89;
                                            }};
                                            themeColor = "ACCENT6";
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 6490.78;
                                            scaleY = 3782.45;
                                            shearX = 51.89;
                                            shearY = 9795.27;
                                            translateX = 9702.22;
                                            translateY = 1746.58;
                                            unit = "EMU";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    transparency = 2931.44;
                                }};
                                objectId = "dolorum";
                            }};
                            updateLineCategory = new UpdateLineCategoryRequest() {{
                                lineCategory = "LINE_CATEGORY_UNSPECIFIED";
                                objectId = "quae";
                            }};
                            updateLineProperties = new UpdateLinePropertiesRequest() {{
                                fields = "recusandae";
                                lineProperties = new LineProperties() {{
                                    dashStyle = "DASH_DOT";
                                    endArrow = "FILL_ARROW";
                                    endConnection = new LineConnection() {{
                                        connectedObjectId = "molestiae";
                                        connectionSiteIndex = 403218;
                                    }};
                                    lineFill = new LineFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 2840;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6330.62;
                                                    green = 2384.13;
                                                    red = 8906.53;
                                                }};
                                                themeColor = "ACCENT4";
                                            }};
                                        }};
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "eum";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 928219;
                                        url = "esse";
                                    }};
                                    startArrow = "FILL_DIAMOND";
                                    startConnection = new LineConnection() {{
                                        connectedObjectId = "quis";
                                        connectionSiteIndex = 431785;
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 9704.94;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "aspernatur";
                            }};
                            updatePageElementAltText = new UpdatePageElementAltTextRequest() {{
                                description = "ullam";
                                objectId = "quasi";
                                title = "Miss";
                            }};
                            updatePageElementTransform = new UpdatePageElementTransformRequest() {{
                                applyMode = "RELATIVE";
                                objectId = "mollitia";
                                transform = new AffineTransform() {{
                                    scaleX = 5910.27;
                                    scaleY = 8217.19;
                                    shearX = 6591.77;
                                    shearY = 4027.67;
                                    translateX = 3972.57;
                                    translateY = 375.65;
                                    unit = "PT";
                                }};
                            }};
                            updatePageElementsZOrder = new UpdatePageElementsZOrderRequest() {{
                                operation = "SEND_TO_BACK";
                                pageElementObjectIds = new String[]{{
                                    add("in"),
                                    add("nam"),
                                }};
                            }};
                            updatePageProperties = new UpdatePagePropertiesRequest() {{
                                fields = "earum";
                                objectId = "officia";
                                pageProperties = new PageProperties() {{
                                    colorScheme = new ColorScheme() {{
                                        colors = new org.openapis.openapi.models.shared.ThemeColorPair[]{{
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 8130.54;
                                                    green = 2666.97;
                                                    red = 9762.26;
                                                }};
                                                type = "ACCENT5";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 8897.94;
                                                    green = 9569.33;
                                                    red = 7645.62;
                                                }};
                                                type = "DARK1";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 6982.49;
                                                    green = 2722.29;
                                                    red = 3354.98;
                                                }};
                                                type = "DARK1";
                                            }}),
                                        }};
                                    }};
                                    pageBackgroundFill = new PageBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 7652.71;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 626.36;
                                                    green = 216.88;
                                                    red = 2419.01;
                                                }};
                                                themeColor = "LIGHT1";
                                            }};
                                        }};
                                        stretchedPictureFill = new StretchedPictureFill() {{
                                            contentUrl = "eum";
                                            size = new Size() {{
                                                height = new Dimension() {{
                                                    magnitude = 2606.28;
                                                    unit = "EMU";
                                                }};
                                                width = new Dimension() {{
                                                    magnitude = 8710.83;
                                                    unit = "PT";
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 179410;
                                    rowIndex = 958741;
                                }};
                                fields = "eum";
                                objectId = "dicta";
                                style = new ParagraphStyle() {{
                                    alignment = "START";
                                    direction = "TEXT_DIRECTION_UNSPECIFIED";
                                    indentEnd = new Dimension() {{
                                        magnitude = 5834.04;
                                        unit = "EMU";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 9364.69;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 9407.82;
                                        unit = "PT";
                                    }};
                                    lineSpacing = 525.08;
                                    spaceAbove = new Dimension() {{
                                        magnitude = 9358.33;
                                        unit = "EMU";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 9834.27;
                                        unit = "PT";
                                    }};
                                    spacingMode = "NEVER_COLLAPSE";
                                }};
                                textRange = new Range() {{
                                    endIndex = 780931;
                                    startIndex = 380335;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            updateShapeProperties = new UpdateShapePropertiesRequest() {{
                                fields = "fugit";
                                objectId = "cumque";
                                shapeProperties = new ShapeProperties() {{
                                    autofit = new Autofit() {{
                                        autofitType = "TEXT_AUTOFIT";
                                        fontScale = 1890.62;
                                        lineSpacingReduction = 6567.62;
                                    }};
                                    contentAlignment = "BOTTOM";
                                    link = new Link() {{
                                        pageObjectId = "nulla";
                                        relativeLink = "RELATIVE_SLIDE_LINK_UNSPECIFIED";
                                        slideIndex = 97258;
                                        url = "et";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DASH";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 6191.83;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5810.82;
                                                        green = 3824.4;
                                                        red = 2415.57;
                                                    }};
                                                    themeColor = "DARK1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 9849.34;
                                            unit = "PT";
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "BOTTOM_CENTER";
                                        alpha = 585.34;
                                        blurRadius = new Dimension() {{
                                            magnitude = 2711.13;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 4731.9;
                                                green = 1158.34;
                                                red = 4797.54;
                                            }};
                                            themeColor = "ACCENT3";
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 9799.63;
                                            scaleY = 9672.6;
                                            shearX = 4237.06;
                                            shearY = 999.58;
                                            translateX = 8571.25;
                                            translateY = 396.5;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    shapeBackgroundFill = new ShapeBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 4582.59;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4037.93;
                                                    green = 2352.63;
                                                    red = 3998.12;
                                                }};
                                                themeColor = "DARK1";
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateSlideProperties = new UpdateSlidePropertiesRequest() {{
                                fields = "laborum";
                                objectId = "sunt";
                                slideProperties = new SlideProperties() {{
                                    isSkipped = false;
                                    layoutObjectId = "nostrum";
                                    masterObjectId = "fugiat";
                                    notesPage = new Page() {{}};
                                }};
                            }};
                            updateSlidesPosition = new UpdateSlidesPositionRequest() {{
                                insertionIndex = 713767;
                                slideObjectIds = new String[]{{
                                    add("officia"),
                                    add("suscipit"),
                                }};
                            }};
                            updateTableBorderProperties = new UpdateTableBorderPropertiesRequest() {{
                                borderPosition = "INNER_HORIZONTAL";
                                fields = "perferendis";
                                objectId = "eum";
                                tableBorderProperties = new TableBorderProperties() {{
                                    dashStyle = "DOT";
                                    tableBorderFill = new TableBorderFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 6145.28;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6616.07;
                                                    green = 700.42;
                                                    red = 6253.58;
                                                }};
                                                themeColor = "TEXT1";
                                            }};
                                        }};
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 9139.92;
                                        unit = "EMU";
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 671794;
                                    location = new TableCellLocation() {{
                                        columnIndex = 726343;
                                        rowIndex = 324083;
                                    }};
                                    rowSpan = 536923;
                                }};
                            }};
                            updateTableCellProperties = new UpdateTableCellPropertiesRequest() {{
                                fields = "enim";
                                objectId = "vitae";
                                tableCellProperties = new TableCellProperties() {{
                                    contentAlignment = "BOTTOM";
                                    tableCellBackgroundFill = new TableCellBackgroundFill() {{
                                        propertyState = "NOT_RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 7758.03;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4053.73;
                                                    green = 2811.53;
                                                    red = 3210.43;
                                                }};
                                                themeColor = "FOLLOWED_HYPERLINK";
                                            }};
                                        }};
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 29950;
                                    location = new TableCellLocation() {{
                                        columnIndex = 561577;
                                        rowIndex = 737254;
                                    }};
                                    rowSpan = 399660;
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(530860),
                                }};
                                fields = "omnis";
                                objectId = "veritatis";
                                tableColumnProperties = new TableColumnProperties() {{
                                    columnWidth = new Dimension() {{
                                        magnitude = 7032.18;
                                        unit = "EMU";
                                    }};
                                }};
                            }};
                            updateTableRowProperties = new UpdateTableRowPropertiesRequest() {{
                                fields = "culpa";
                                objectId = "voluptatem";
                                rowIndices = new Integer[]{{
                                    add(889288),
                                    add(103298),
                                    add(682119),
                                    add(867168),
                                }};
                                tableRowProperties = new TableRowProperties() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 8913.15;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 1207;
                                    rowIndex = 534917;
                                }};
                                fields = "earum";
                                objectId = "ex";
                                style = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 9583.08;
                                                green = 5241.84;
                                                red = 7963.2;
                                            }};
                                            themeColor = "ACCENT2";
                                        }};
                                    }};
                                    baselineOffset = "SUBSCRIPT";
                                    bold = false;
                                    fontFamily = "ratione";
                                    fontSize = new Dimension() {{
                                        magnitude = 3552.25;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 8483.41;
                                                green = 5181.5;
                                                red = 7706.75;
                                            }};
                                            themeColor = "BACKGROUND1";
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        pageObjectId = "nam";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 633415;
                                        url = "dolor";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "aliquam";
                                        weight = 80532;
                                    }};
                                }};
                                textRange = new Range() {{
                                    endIndex = 537279;
                                    startIndex = 85311;
                                    type = "FIXED_RANGE";
                                }};
                            }};
                            updateVideoProperties = new UpdateVideoPropertiesRequest() {{
                                fields = "dolor";
                                objectId = "consequatur";
                                videoProperties = new VideoProperties() {{
                                    autoPlay = false;
                                    end = 100014;
                                    mute = false;
                                    outline = new Outline() {{
                                        dashStyle = "DASH_STYLE_UNSPECIFIED";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 2650.39;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 1442.86;
                                                        green = 661.49;
                                                        red = 5137.6;
                                                    }};
                                                    themeColor = "DARK1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 8562.77;
                                            unit = "EMU";
                                        }};
                                    }};
                                    start = 162120;
                                }};
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "ipsa";
                    }};
                }};
                accessToken = "quas";
                alt = "proto";
                callback = "impedit";
                fields = "officiis";
                key = "esse";
                oauthToken = "necessitatibus";
                presentationId = "sed";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }}            

            SlidesPresentationsBatchUpdateResponse res = sdk.presentations.slidesPresentationsBatchUpdate(req, new SlidesPresentationsBatchUpdateSecurity() {{
                option1 = new SlidesPresentationsBatchUpdateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdatePresentationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### presentations

* `slidesPresentationsBatchUpdate` - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `slidesPresentationsCreate` - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
* `slidesPresentationsGet` - Gets the latest version of the specified presentation.
* `slidesPresentationsPagesGet` - Gets the latest version of the specified page in the presentation.
* `slidesPresentationsPagesGetThumbnail` - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
