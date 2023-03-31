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
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdatePathParams;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateQueryParams;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateRequest;
import org.openapis.openapi.models.operations.SlidesPresentationsBatchUpdateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SlidesPresentationsBatchUpdateRequest req = new SlidesPresentationsBatchUpdateRequest() {{
                security = new SlidesPresentationsBatchUpdateSecurity() {{
                    option1 = new SlidesPresentationsBatchUpdateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new SlidesPresentationsBatchUpdatePathParams() {{
                    presentationId = "corrupti";
                }};
                queryParams = new SlidesPresentationsBatchUpdateQueryParams() {{
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
                request = new BatchUpdatePresentationRequest() {{
                    requests = new org.openapis.openapi.models.shared.Request[]{{
                        add(new Request() {{
                            createImage = new CreateImageRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "iure";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 2975.34;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 567.13;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 2726.56;
                                        scaleY = 3834.41;
                                        shearX = 4776.65;
                                        shearY = 7917.25;
                                        translateX = 8121.69;
                                        translateY = 5288.95;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "excepturi";
                                url = "nisi";
                            }};
                            createLine = new CreateLineRequest() {{
                                category = "CURVED";
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "temporibus";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 710.36;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 871.29;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 202.18;
                                        scaleY = 3682.41;
                                        shearX = 8326.2;
                                        shearY = 9571.56;
                                        translateX = 7781.57;
                                        translateY = 1403.5;
                                        unit = "PT";
                                    }};
                                }};
                                lineCategory = "CURVED";
                                objectId = "maiores";
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE";
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 799159;
                                    rowIndex = 800911;
                                }};
                                objectId = "esse";
                                textRange = new Range() {{
                                    endIndex = 520478;
                                    startIndex = 780529;
                                    type = "FROM_START_INDEX";
                                }};
                            }};
                            createShape = new CreateShapeRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "dicta";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 7206.33;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5820.2;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 5373.73;
                                        scaleY = 9446.69;
                                        shearX = 7586.16;
                                        shearY = 5218.48;
                                        translateX = 1059.07;
                                        translateY = 4146.62;
                                        unit = "EMU";
                                    }};
                                }};
                                objectId = "modi";
                                shapeType = "DONUT";
                            }};
                            createSheetsChart = new CreateSheetsChartRequest() {{
                                chartId = 774234;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "cum";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 4561.5;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5684.34;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 187.89;
                                        scaleY = 3241.41;
                                        shearX = 6176.36;
                                        shearY = 1496.75;
                                        translateX = 6120.96;
                                        translateY = 2223.21;
                                        unit = "EMU";
                                    }};
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                objectId = "hic";
                                spreadsheetId = "saepe";
                            }};
                            createSlide = new CreateSlideRequest() {{
                                insertionIndex = 681820;
                                objectId = "in";
                                placeholderIdMappings = new org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping[]{{
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 613064;
                                            parentObjectId = "iure";
                                            type = "TITLE";
                                        }};
                                        layoutPlaceholderObjectId = "quidem";
                                        objectId = "architecto";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 60225;
                                            parentObjectId = "reiciendis";
                                            type = "PICTURE";
                                        }};
                                        layoutPlaceholderObjectId = "mollitia";
                                        objectId = "laborum";
                                    }}),
                                }};
                                slideLayoutReference = new LayoutReference() {{
                                    layoutId = "dolores";
                                    predefinedLayout = "CAPTION_ONLY";
                                }};
                            }};
                            createTable = new CreateTableRequest() {{
                                columns = 358152;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "explicabo";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 7506.86;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 6078.31;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 3250.47;
                                        scaleY = 5701.97;
                                        shearX = 384.25;
                                        shearY = 4386.01;
                                        translateX = 6342.74;
                                        translateY = 9883.74;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "architecto";
                                rows = 652790;
                            }};
                            createVideo = new CreateVideoRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "dolorem";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 6350.59;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 9953;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 5818.5;
                                        scaleY = 2532.91;
                                        shearX = 4143.69;
                                        shearY = 4663.11;
                                        translateX = 4746.97;
                                        translateY = 2444.25;
                                        unit = "EMU";
                                    }};
                                }};
                                id = "quia";
                                objectId = "quis";
                                source = "SOURCE_UNSPECIFIED";
                            }};
                            deleteObject = new DeleteObjectRequest() {{
                                objectId = "laborum";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 656330;
                                    rowIndex = 317202;
                                }};
                                objectId = "odit";
                                textRange = new Range() {{
                                    endIndex = 778346;
                                    startIndex = 196582;
                                    type = "ALL";
                                }};
                            }};
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 368725;
                                    rowIndex = 662527;
                                }};
                                tableObjectId = "possimus";
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 13571;
                                    rowIndex = 97101;
                                }};
                                tableObjectId = "error";
                            }};
                            deleteText = new DeleteTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 837945;
                                    rowIndex = 673660;
                                }};
                                objectId = "quasi";
                                textRange = new Range() {{
                                    endIndex = 971945;
                                    startIndex = 976460;
                                    type = "ALL";
                                }};
                            }};
                            duplicateObject = new DuplicateObjectRequest() {{
                                objectId = "nihil";
                                objectIds = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "ipsa");
                                    put("omnis", "voluptate");
                                    put("cum", "perferendis");
                                }};
                            }};
                            groupObjects = new GroupObjectsRequest() {{
                                childrenObjectIds = new String[]{{
                                    add("reprehenderit"),
                                }};
                                groupObjectId = "ut";
                            }};
                            insertTableColumns = new InsertTableColumnsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 979587;
                                    rowIndex = 120196;
                                }};
                                insertRight = false;
                                number = 359444;
                                tableObjectId = "dolore";
                            }};
                            insertTableRows = new InsertTableRowsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 480894;
                                    rowIndex = 118727;
                                }};
                                insertBelow = false;
                                number = 688661;
                                tableObjectId = "enim";
                            }};
                            insertText = new InsertTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 880476;
                                    rowIndex = 414263;
                                }};
                                insertionIndex = 918236;
                                objectId = "quae";
                                text = "ipsum";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                objectId = "quidem";
                                tableRange = new TableRange() {{
                                    columnSpan = 565189;
                                    location = new TableCellLocation() {{
                                        columnIndex = 566602;
                                        rowIndex = 865103;
                                    }};
                                    rowSpan = 265389;
                                }};
                            }};
                            refreshSheetsChart = new RefreshSheetsChartRequest() {{
                                objectId = "praesentium";
                            }};
                            replaceAllShapesWithImage = new ReplaceAllShapesWithImageRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "rem";
                                }};
                                imageReplaceMethod = "CENTER_CROP";
                                imageUrl = "quasi";
                                pageObjectIds = new String[]{{
                                    add("sint"),
                                    add("veritatis"),
                                    add("itaque"),
                                    add("incidunt"),
                                }};
                                replaceMethod = "CENTER_INSIDE";
                            }};
                            replaceAllShapesWithSheetsChart = new ReplaceAllShapesWithSheetsChartRequest() {{
                                chartId = 9356;
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "est";
                                }};
                                linkingMode = "LINKED";
                                pageObjectIds = new String[]{{
                                    add("deserunt"),
                                }};
                                spreadsheetId = "distinctio";
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "quibusdam";
                                }};
                                pageObjectIds = new String[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                                replaceText = "aliquid";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "cupiditate";
                                imageReplaceMethod = "CENTER_INSIDE";
                                url = "perferendis";
                            }};
                            rerouteLine = new RerouteLineRequest() {{
                                objectId = "magni";
                            }};
                            ungroupObjects = new UngroupObjectsRequest() {{
                                objectIds = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                objectId = "excepturi";
                                tableRange = new TableRange() {{
                                    columnSpan = 270008;
                                    location = new TableCellLocation() {{
                                        columnIndex = 703737;
                                        rowIndex = 735194;
                                    }};
                                    rowSpan = 288476;
                                }};
                            }};
                            updateImageProperties = new UpdateImagePropertiesRequest() {{
                                fields = "delectus";
                                imageProperties = new ImageProperties() {{
                                    brightness = 4332.88;
                                    contrast = 2487.53;
                                    cropProperties = new CropProperties() {{
                                        angle = 7561.07;
                                        bottomOffset = 5761.57;
                                        leftOffset = 3960.98;
                                        rightOffset = 5920.42;
                                        topOffset = 8960.39;
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "sint";
                                        relativeLink = "FIRST_SLIDE";
                                        slideIndex = 223081;
                                        url = "debitis";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "LONG_DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 6800.56;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 4471.25;
                                                        green = 4491.98;
                                                        red = 8464.09;
                                                    }};
                                                    themeColor = "BACKGROUND2";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 1162.02;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    recolor = new Recolor() {{
                                        name = "DARK9";
                                        recolorStops = new org.openapis.openapi.models.shared.ColorStop[]{{
                                            add(new ColorStop() {{
                                                alpha = 4118.2;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 3965.06;
                                                        green = 6754.39;
                                                        red = 8811.04;
                                                    }};
                                                    themeColor = "LIGHT2";
                                                }};
                                                position = 5812.73;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 3132.18;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 8817.36;
                                                        green = 9654.17;
                                                        red = 6925.32;
                                                    }};
                                                    themeColor = "ACCENT6";
                                                }};
                                                position = 7252.55;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 6596.69;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5013.24;
                                                        green = 5332.06;
                                                        red = 9560.84;
                                                    }};
                                                    themeColor = "DARK2";
                                                }};
                                                position = 6439.9;
                                            }}),
                                            add(new ColorStop() {{
                                                alpha = 3948.69;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 4238.55;
                                                        green = 6188.09;
                                                        red = 6063.93;
                                                    }};
                                                    themeColor = "ACCENT4";
                                                }};
                                                position = 191.93;
                                            }}),
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "LEFT_CENTER";
                                        alpha = 3015.75;
                                        blurRadius = new Dimension() {{
                                            magnitude = 7160.75;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2879.91;
                                                green = 2900.77;
                                                red = 3834.62;
                                            }};
                                            themeColor = "ACCENT6";
                                        }};
                                        propertyState = "INHERIT";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 4287.69;
                                            scaleY = 8784.53;
                                            shearX = 1354.74;
                                            shearY = 1028.63;
                                            translateX = 2982.82;
                                            translateY = 923.73;
                                            unit = "EMU";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    transparency = 5908.73;
                                }};
                                objectId = "quos";
                            }};
                            updateLineCategory = new UpdateLineCategoryRequest() {{
                                lineCategory = "BENT";
                                objectId = "accusantium";
                            }};
                            updateLineProperties = new UpdateLinePropertiesRequest() {{
                                fields = "mollitia";
                                lineProperties = new LineProperties() {{
                                    dashStyle = "LONG_DASH_DOT";
                                    endArrow = "OPEN_ARROW";
                                    endConnection = new LineConnection() {{
                                        connectedObjectId = "ad";
                                        connectionSiteIndex = 431418;
                                    }};
                                    lineFill = new LineFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 2212.62;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8965.47;
                                                    green = 1412.64;
                                                    red = 3675.62;
                                                }};
                                                themeColor = "DARK1";
                                            }};
                                        }};
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "iure";
                                        relativeLink = "LAST_SLIDE";
                                        slideIndex = 891924;
                                        url = "eius";
                                    }};
                                    startArrow = "OPEN_CIRCLE";
                                    startConnection = new LineConnection() {{
                                        connectedObjectId = "deleniti";
                                        connectionSiteIndex = 703889;
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 4479.26;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                objectId = "architecto";
                            }};
                            updatePageElementAltText = new UpdatePageElementAltTextRequest() {{
                                description = "repudiandae";
                                objectId = "ullam";
                                title = "Miss";
                            }};
                            updatePageElementTransform = new UpdatePageElementTransformRequest() {{
                                applyMode = "RELATIVE";
                                objectId = "repellat";
                                transform = new AffineTransform() {{
                                    scaleX = 8411.4;
                                    scaleY = 1494.48;
                                    shearX = 9046.48;
                                    shearY = 8681.26;
                                    translateX = 375.59;
                                    translateY = 1624.93;
                                    unit = "EMU";
                                }};
                            }};
                            updatePageElementsZOrder = new UpdatePageElementsZOrderRequest() {{
                                operation = "SEND_BACKWARD";
                                pageElementObjectIds = new String[]{{
                                    add("sunt"),
                                }};
                            }};
                            updatePageProperties = new UpdatePagePropertiesRequest() {{
                                fields = "quo";
                                objectId = "illum";
                                pageProperties = new PageProperties() {{
                                    colorScheme = new ColorScheme() {{
                                        colors = new org.openapis.openapi.models.shared.ThemeColorPair[]{{
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 8073.19;
                                                    green = 4113.97;
                                                    red = 5691.01;
                                                }};
                                                type = "LIGHT1";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 4071.83;
                                                    green = 332.22;
                                                    red = 691.67;
                                                }};
                                                type = "BACKGROUND2";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 6974.29;
                                                    green = 3732.91;
                                                    red = 4535.43;
                                                }};
                                                type = "ACCENT3";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 7220.56;
                                                    green = 505.88;
                                                    red = 8663.83;
                                                }};
                                                type = "ACCENT2";
                                            }}),
                                        }};
                                    }};
                                    pageBackgroundFill = new PageBackgroundFill() {{
                                        propertyState = "INHERIT";
                                        solidFill = new SolidFill() {{
                                            alpha = 166.27;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8558.04;
                                                    green = 2307.42;
                                                    red = 117.14;
                                                }};
                                                themeColor = "TEXT1";
                                            }};
                                        }};
                                        stretchedPictureFill = new StretchedPictureFill() {{
                                            contentUrl = "corporis";
                                            size = new Size() {{
                                                height = new Dimension() {{
                                                    magnitude = 9441.24;
                                                    unit = "PT";
                                                }};
                                                width = new Dimension() {{
                                                    magnitude = 7499.99;
                                                    unit = "UNIT_UNSPECIFIED";
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 339404;
                                    rowIndex = 521037;
                                }};
                                fields = "dignissimos";
                                objectId = "eaque";
                                style = new ParagraphStyle() {{
                                    alignment = "START";
                                    direction = "TEXT_DIRECTION_UNSPECIFIED";
                                    indentEnd = new Dimension() {{
                                        magnitude = 1794.9;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 1709.86;
                                        unit = "PT";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 4634.51;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    lineSpacing = 8745.73;
                                    spaceAbove = new Dimension() {{
                                        magnitude = 3453.52;
                                        unit = "PT";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 9280.82;
                                        unit = "EMU";
                                    }};
                                    spacingMode = "COLLAPSE_LISTS";
                                }};
                                textRange = new Range() {{
                                    endIndex = 596656;
                                    startIndex = 31838;
                                    type = "ALL";
                                }};
                            }};
                            updateShapeProperties = new UpdateShapePropertiesRequest() {{
                                fields = "consequuntur";
                                objectId = "blanditiis";
                                shapeProperties = new ShapeProperties() {{
                                    autofit = new Autofit() {{
                                        autofitType = "TEXT_AUTOFIT";
                                        fontScale = 503.7;
                                        lineSpacingReduction = 5772.29;
                                    }};
                                    contentAlignment = "MIDDLE";
                                    link = new Link() {{
                                        pageObjectId = "adipisci";
                                        relativeLink = "LAST_SLIDE";
                                        slideIndex = 934214;
                                        url = "modi";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 6790.91;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5356.33;
                                                        green = 8642.82;
                                                        red = 5899.1;
                                                    }};
                                                    themeColor = "FOLLOWED_HYPERLINK";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 9644.9;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "CENTER";
                                        alpha = 3982.21;
                                        blurRadius = new Dimension() {{
                                            magnitude = 2123.9;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 2224.43;
                                                green = 1861.93;
                                                red = 2187.49;
                                            }};
                                            themeColor = "BACKGROUND2";
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 7395.51;
                                            scaleY = 4521.09;
                                            shearX = 4904.59;
                                            shearY = 9702.37;
                                            translateX = 2274.14;
                                            translateY = 6805.45;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    shapeBackgroundFill = new ShapeBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 564.18;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 4344.17;
                                                    green = 4878.38;
                                                    red = 3117.96;
                                                }};
                                                themeColor = "BACKGROUND1";
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateSlideProperties = new UpdateSlidePropertiesRequest() {{
                                fields = "quidem";
                                objectId = "voluptatibus";
                                slideProperties = new SlideProperties() {{
                                    isSkipped = false;
                                    layoutObjectId = "voluptas";
                                    masterObjectId = "natus";
                                    notesPage = new Page() {{}};
                                }};
                            }};
                            updateSlidesPosition = new UpdateSlidesPositionRequest() {{
                                insertionIndex = 179603;
                                slideObjectIds = new String[]{{
                                    add("sit"),
                                    add("fugiat"),
                                    add("ab"),
                                }};
                            }};
                            updateTableBorderProperties = new UpdateTableBorderPropertiesRequest() {{
                                borderPosition = "OUTER";
                                fields = "dolorum";
                                objectId = "iusto";
                                tableBorderProperties = new TableBorderProperties() {{
                                    dashStyle = "DASH";
                                    tableBorderFill = new TableBorderFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 6770.82;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 5365.79;
                                                    green = 6070.45;
                                                    red = 8966.72;
                                                }};
                                                themeColor = "FOLLOWED_HYPERLINK";
                                            }};
                                        }};
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 9903.39;
                                        unit = "EMU";
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 216897;
                                    location = new TableCellLocation() {{
                                        columnIndex = 456015;
                                        rowIndex = 663078;
                                    }};
                                    rowSpan = 906418;
                                }};
                            }};
                            updateTableCellProperties = new UpdateTableCellPropertiesRequest() {{
                                fields = "eius";
                                objectId = "aspernatur";
                                tableCellProperties = new TableCellProperties() {{
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSPECIFIED";
                                    tableCellBackgroundFill = new TableCellBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 7583.79;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 8815.86;
                                                    green = 3200.17;
                                                    red = 9044.25;
                                                }};
                                                themeColor = "ACCENT2";
                                            }};
                                        }};
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 645785;
                                    location = new TableCellLocation() {{
                                        columnIndex = 588317;
                                        rowIndex = 324683;
                                    }};
                                    rowSpan = 831049;
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(628982),
                                    add(55),
                                    add(872651),
                                }};
                                fields = "quaerat";
                                objectId = "tempora";
                                tableColumnProperties = new TableColumnProperties() {{
                                    columnWidth = new Dimension() {{
                                        magnitude = 4254.51;
                                        unit = "PT";
                                    }};
                                }};
                            }};
                            updateTableRowProperties = new UpdateTableRowPropertiesRequest() {{
                                fields = "officiis";
                                objectId = "qui";
                                rowIndices = new Integer[]{{
                                    add(952792),
                                    add(456130),
                                    add(687488),
                                }};
                                tableRowProperties = new TableRowProperties() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 4834.09;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 788740;
                                    rowIndex = 947371;
                                }};
                                fields = "amet";
                                objectId = "tempore";
                                style = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 8802.98;
                                                green = 2539.41;
                                                red = 3136.92;
                                            }};
                                            themeColor = "DARK2";
                                        }};
                                    }};
                                    baselineOffset = "SUBSCRIPT";
                                    bold = false;
                                    fontFamily = "totam";
                                    fontSize = new Dimension() {{
                                        magnitude = 4717.52;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 7115.84;
                                                green = 2074.7;
                                                red = 1536.94;
                                            }};
                                            themeColor = "ACCENT3";
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        pageObjectId = "libero";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 646265;
                                        url = "quam";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "ipsum";
                                        weight = 277628;
                                    }};
                                }};
                                textRange = new Range() {{
                                    endIndex = 186458;
                                    startIndex = 586784;
                                    type = "ALL";
                                }};
                            }};
                            updateVideoProperties = new UpdateVideoPropertiesRequest() {{
                                fields = "pariatur";
                                objectId = "soluta";
                                videoProperties = new VideoProperties() {{
                                    autoPlay = false;
                                    end = 117531;
                                    mute = false;
                                    outline = new Outline() {{
                                        dashStyle = "DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 5173.79;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 2768.94;
                                                        green = 1320.68;
                                                        red = 1749.09;
                                                    }};
                                                    themeColor = "FOLLOWED_HYPERLINK";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 3960.6;
                                            unit = "EMU";
                                        }};
                                    }};
                                    start = 565421;
                                }};
                            }};
                        }}),
                        add(new Request() {{
                            createImage = new CreateImageRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "temporibus";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 1832.8;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 1448.47;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 4880.56;
                                        scaleY = 1248.33;
                                        shearX = 3556.13;
                                        shearY = 7220.81;
                                        translateX = 9404.32;
                                        translateY = 304.52;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "soluta";
                                url = "nobis";
                            }};
                            createLine = new CreateLineRequest() {{
                                category = "LINE_CATEGORY_UNSPECIFIED";
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "saepe";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 2174.5;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7492.55;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 7316.94;
                                        scaleY = 5844.76;
                                        shearX = 456.14;
                                        shearY = 9619.37;
                                        translateX = 2091.57;
                                        translateY = 2921.47;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                lineCategory = "STRAIGHT";
                                objectId = "dolorum";
                            }};
                            createParagraphBullets = new CreateParagraphBulletsRequest() {{
                                bulletPreset = "BULLET_DIAMONDX_ARROW3D_SQUARE";
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 63038;
                                    rowIndex = 16429;
                                }};
                                objectId = "quas";
                                textRange = new Range() {{
                                    endIndex = 929530;
                                    startIndex = 9240;
                                    type = "FROM_START_INDEX";
                                }};
                            }};
                            createShape = new CreateShapeRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "repellendus";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 7851.53;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 2817.3;
                                            unit = "PT";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 5864.1;
                                        scaleY = 1816.31;
                                        shearX = 639.55;
                                        shearY = 5123.93;
                                        translateX = 4856.28;
                                        translateY = 5804.47;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "quisquam";
                                shapeType = "FLOW_CHART_PREDEFINED_PROCESS";
                            }};
                            createSheetsChart = new CreateSheetsChartRequest() {{
                                chartId = 606476;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "quis";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 2184.03;
                                            unit = "PT";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 4551.69;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 8788.7;
                                        scaleY = 9493.19;
                                        shearX = 4922.68;
                                        shearY = 9413.78;
                                        translateX = 7155.61;
                                        translateY = 7992.03;
                                        unit = "EMU";
                                    }};
                                }};
                                linkingMode = "LINKED";
                                objectId = "facilis";
                                spreadsheetId = "vero";
                            }};
                            createSlide = new CreateSlideRequest() {{
                                insertionIndex = 498140;
                                objectId = "dolore";
                                placeholderIdMappings = new org.openapis.openapi.models.shared.LayoutPlaceholderIdMapping[]{{
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 848944;
                                            parentObjectId = "sequi";
                                            type = "OBJECT";
                                        }};
                                        layoutPlaceholderObjectId = "impedit";
                                        objectId = "aut";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 974259;
                                            parentObjectId = "exercitationem";
                                            type = "TABLE";
                                        }};
                                        layoutPlaceholderObjectId = "fugit";
                                        objectId = "porro";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 981830;
                                            parentObjectId = "doloribus";
                                            type = "HEADER";
                                        }};
                                        layoutPlaceholderObjectId = "eligendi";
                                        objectId = "ducimus";
                                    }}),
                                    add(new LayoutPlaceholderIdMapping() {{
                                        layoutPlaceholder = new Placeholder() {{
                                            index = 4048;
                                            parentObjectId = "officia";
                                            type = "CENTERED_TITLE";
                                        }};
                                        layoutPlaceholderObjectId = "ipsam";
                                        objectId = "ea";
                                    }}),
                                }};
                                slideLayoutReference = new LayoutReference() {{
                                    layoutId = "aspernatur";
                                    predefinedLayout = "TITLE_AND_TWO_COLUMNS";
                                }};
                            }};
                            createTable = new CreateTableRequest() {{
                                columns = 822118;
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "magnam";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 1898.48;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 5113.19;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 2243.17;
                                        scaleY = 9807;
                                        shearX = 978.44;
                                        shearY = 4061.2;
                                        translateX = 8621.92;
                                        translateY = 5692.11;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "nostrum";
                                rows = 960835;
                            }};
                            createVideo = new CreateVideoRequest() {{
                                elementProperties = new PageElementProperties() {{
                                    pageObjectId = "quisquam";
                                    size = new Size() {{
                                        height = new Dimension() {{
                                            magnitude = 9065.56;
                                            unit = "EMU";
                                        }};
                                        width = new Dimension() {{
                                            magnitude = 7740.48;
                                            unit = "EMU";
                                        }};
                                    }};
                                    transform = new AffineTransform() {{
                                        scaleX = 3331.45;
                                        scaleY = 3994.99;
                                        shearX = 811.01;
                                        shearY = 3018.31;
                                        translateX = 4072.41;
                                        translateY = 7752.2;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                }};
                                id = "recusandae";
                                objectId = "aspernatur";
                                source = "SOURCE_UNSPECIFIED";
                            }};
                            deleteObject = new DeleteObjectRequest() {{
                                objectId = "eaque";
                            }};
                            deleteParagraphBullets = new DeleteParagraphBulletsRequest() {{
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
                            deleteTableColumn = new DeleteTableColumnRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 304582;
                                    rowIndex = 146946;
                                }};
                                tableObjectId = "accusamus";
                            }};
                            deleteTableRow = new DeleteTableRowRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 79522;
                                    rowIndex = 250622;
                                }};
                                tableObjectId = "et";
                            }};
                            deleteText = new DeleteTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 677412;
                                    rowIndex = 672048;
                                }};
                                objectId = "placeat";
                                textRange = new Range() {{
                                    endIndex = 245367;
                                    startIndex = 432148;
                                    type = "FIXED_RANGE";
                                }};
                            }};
                            duplicateObject = new DuplicateObjectRequest() {{
                                objectId = "nobis";
                                objectIds = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "nulla");
                                    put("voluptas", "libero");
                                    put("quasi", "tempora");
                                }};
                            }};
                            groupObjects = new GroupObjectsRequest() {{
                                childrenObjectIds = new String[]{{
                                    add("explicabo"),
                                    add("provident"),
                                }};
                                groupObjectId = "ipsa";
                            }};
                            insertTableColumns = new InsertTableColumnsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 476477;
                                    rowIndex = 301598;
                                }};
                                insertRight = false;
                                number = 487935;
                                tableObjectId = "eius";
                            }};
                            insertTableRows = new InsertTableRowsRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 458515;
                                    rowIndex = 456141;
                                }};
                                insertBelow = false;
                                number = 524593;
                                tableObjectId = "fuga";
                            }};
                            insertText = new InsertTextRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 442015;
                                    rowIndex = 695626;
                                }};
                                insertionIndex = 852635;
                                objectId = "ut";
                                text = "eum";
                            }};
                            mergeTableCells = new MergeTableCellsRequest() {{
                                objectId = "suscipit";
                                tableRange = new TableRange() {{
                                    columnSpan = 826871;
                                    location = new TableCellLocation() {{
                                        columnIndex = 181151;
                                        rowIndex = 509342;
                                    }};
                                    rowSpan = 788546;
                                }};
                            }};
                            refreshSheetsChart = new RefreshSheetsChartRequest() {{
                                objectId = "veritatis";
                            }};
                            replaceAllShapesWithImage = new ReplaceAllShapesWithImageRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "ipsa";
                                }};
                                imageReplaceMethod = "CENTER_INSIDE";
                                imageUrl = "quidem";
                                pageObjectIds = new String[]{{
                                    add("quo"),
                                }};
                                replaceMethod = "CENTER_CROP";
                            }};
                            replaceAllShapesWithSheetsChart = new ReplaceAllShapesWithSheetsChartRequest() {{
                                chartId = 777408;
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "fuga";
                                }};
                                linkingMode = "NOT_LINKED_IMAGE";
                                pageObjectIds = new String[]{{
                                    add("voluptas"),
                                }};
                                spreadsheetId = "ab";
                            }};
                            replaceAllText = new ReplaceAllTextRequest() {{
                                containsText = new SubstringMatchCriteria() {{
                                    matchCase = false;
                                    text = "cupiditate";
                                }};
                                pageObjectIds = new String[]{{
                                    add("tempora"),
                                }};
                                replaceText = "debitis";
                            }};
                            replaceImage = new ReplaceImageRequest() {{
                                imageObjectId = "ipsam";
                                imageReplaceMethod = "IMAGE_REPLACE_METHOD_UNSPECIFIED";
                                url = "sequi";
                            }};
                            rerouteLine = new RerouteLineRequest() {{
                                objectId = "quo";
                            }};
                            ungroupObjects = new UngroupObjectsRequest() {{
                                objectIds = new String[]{{
                                    add("recusandae"),
                                    add("aperiam"),
                                }};
                            }};
                            unmergeTableCells = new UnmergeTableCellsRequest() {{
                                objectId = "distinctio";
                                tableRange = new TableRange() {{
                                    columnSpan = 799796;
                                    location = new TableCellLocation() {{
                                        columnIndex = 490819;
                                        rowIndex = 76956;
                                    }};
                                    rowSpan = 469498;
                                }};
                            }};
                            updateImageProperties = new UpdateImagePropertiesRequest() {{
                                fields = "totam";
                                imageProperties = new ImageProperties() {{
                                    brightness = 8827.1;
                                    contrast = 3068.1;
                                    cropProperties = new CropProperties() {{
                                        angle = 4884.1;
                                        bottomOffset = 5775.43;
                                        leftOffset = 4145.67;
                                        rightOffset = 9594.34;
                                        topOffset = 1741.12;
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "deserunt";
                                        relativeLink = "PREVIOUS_SLIDE";
                                        slideIndex = 35362;
                                        url = "porro";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DASH";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 5564.29;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 5100.17;
                                                        green = 1598.67;
                                                        red = 5361.78;
                                                    }};
                                                    themeColor = "LIGHT1";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 6494.63;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    recolor = new Recolor() {{
                                        name = "DARK3";
                                        recolorStops = new org.openapis.openapi.models.shared.ColorStop[]{{
                                            add(new ColorStop() {{
                                                alpha = 3256.85;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 3926.76;
                                                        green = 1470.14;
                                                        red = 9564.06;
                                                    }};
                                                    themeColor = "LIGHT1";
                                                }};
                                                position = 1871.31;
                                            }}),
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "TOP_LEFT";
                                        alpha = 9039.84;
                                        blurRadius = new Dimension() {{
                                            magnitude = 5789.22;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 922.6;
                                                green = 4569.11;
                                                red = 9105.45;
                                            }};
                                            themeColor = "BACKGROUND1";
                                        }};
                                        propertyState = "RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 4586.04;
                                            scaleY = 8003.79;
                                            shearX = 7241.68;
                                            shearY = 8771.31;
                                            translateX = 3990.25;
                                            translateY = 934.59;
                                            unit = "PT";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    transparency = 6900.25;
                                }};
                                objectId = "molestiae";
                            }};
                            updateLineCategory = new UpdateLineCategoryRequest() {{
                                lineCategory = "BENT";
                                objectId = "occaecati";
                            }};
                            updateLineProperties = new UpdateLinePropertiesRequest() {{
                                fields = "minima";
                                lineProperties = new LineProperties() {{
                                    dashStyle = "LONG_DASH";
                                    endArrow = "OPEN_CIRCLE";
                                    endConnection = new LineConnection() {{
                                        connectedObjectId = "sit";
                                        connectionSiteIndex = 636061;
                                    }};
                                    lineFill = new LineFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 7313.98;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2400.2;
                                                    green = 7669.64;
                                                    red = 1605.38;
                                                }};
                                                themeColor = "THEME_COLOR_TYPE_UNSPECIFIED";
                                            }};
                                        }};
                                    }};
                                    link = new Link() {{
                                        pageObjectId = "minus";
                                        relativeLink = "NEXT_SLIDE";
                                        slideIndex = 959167;
                                        url = "consectetur";
                                    }};
                                    startArrow = "FILL_SQUARE";
                                    startConnection = new LineConnection() {{
                                        connectedObjectId = "blanditiis";
                                        connectionSiteIndex = 590984;
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 9537.22;
                                        unit = "PT";
                                    }};
                                }};
                                objectId = "quas";
                            }};
                            updatePageElementAltText = new UpdatePageElementAltTextRequest() {{
                                description = "esse";
                                objectId = "quasi";
                                title = "Dr.";
                            }};
                            updatePageElementTransform = new UpdatePageElementTransformRequest() {{
                                applyMode = "RELATIVE";
                                objectId = "sint";
                                transform = new AffineTransform() {{
                                    scaleX = 8630.23;
                                    scaleY = 8207.67;
                                    shearX = 1576.32;
                                    shearY = 9088.44;
                                    translateX = 9924.3;
                                    translateY = 8155.24;
                                    unit = "UNIT_UNSPECIFIED";
                                }};
                            }};
                            updatePageElementsZOrder = new UpdatePageElementsZOrderRequest() {{
                                operation = "Z_ORDER_OPERATION_UNSPECIFIED";
                                pageElementObjectIds = new String[]{{
                                    add("similique"),
                                }};
                            }};
                            updatePageProperties = new UpdatePagePropertiesRequest() {{
                                fields = "culpa";
                                objectId = "aliquid";
                                pageProperties = new PageProperties() {{
                                    colorScheme = new ColorScheme() {{
                                        colors = new org.openapis.openapi.models.shared.ThemeColorPair[]{{
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 627.13;
                                                    green = 9367.47;
                                                    red = 4240.32;
                                                }};
                                                type = "ACCENT3";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 2586.84;
                                                    green = 7276.97;
                                                    red = 8490.39;
                                                }};
                                                type = "FOLLOWED_HYPERLINK";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 333.04;
                                                    green = 3069.86;
                                                    red = 9589.83;
                                                }};
                                                type = "LIGHT1";
                                            }}),
                                            add(new ThemeColorPair() {{
                                                color = new RgbColor() {{
                                                    blue = 3553.69;
                                                    green = 4438.79;
                                                    red = 3567.07;
                                                }};
                                                type = "ACCENT2";
                                            }}),
                                        }};
                                    }};
                                    pageBackgroundFill = new PageBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 5318.49;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 1852.32;
                                                    green = 8453.58;
                                                    red = 4012.59;
                                                }};
                                                themeColor = "ACCENT5";
                                            }};
                                        }};
                                        stretchedPictureFill = new StretchedPictureFill() {{
                                            contentUrl = "itaque";
                                            size = new Size() {{
                                                height = new Dimension() {{
                                                    magnitude = 6802.7;
                                                    unit = "UNIT_UNSPECIFIED";
                                                }};
                                                width = new Dimension() {{
                                                    magnitude = 6091.78;
                                                    unit = "PT";
                                                }};
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateParagraphStyle = new UpdateParagraphStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 98478;
                                    rowIndex = 869489;
                                }};
                                fields = "et";
                                objectId = "voluptate";
                                style = new ParagraphStyle() {{
                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                    direction = "TEXT_DIRECTION_UNSPECIFIED";
                                    indentEnd = new Dimension() {{
                                        magnitude = 865.32;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    indentFirstLine = new Dimension() {{
                                        magnitude = 2371.73;
                                        unit = "EMU";
                                    }};
                                    indentStart = new Dimension() {{
                                        magnitude = 8395.13;
                                        unit = "UNIT_UNSPECIFIED";
                                    }};
                                    lineSpacing = 5223.71;
                                    spaceAbove = new Dimension() {{
                                        magnitude = 156.06;
                                        unit = "EMU";
                                    }};
                                    spaceBelow = new Dimension() {{
                                        magnitude = 4287.96;
                                        unit = "EMU";
                                    }};
                                    spacingMode = "SPACING_MODE_UNSPECIFIED";
                                }};
                                textRange = new Range() {{
                                    endIndex = 544591;
                                    startIndex = 251941;
                                    type = "RANGE_TYPE_UNSPECIFIED";
                                }};
                            }};
                            updateShapeProperties = new UpdateShapePropertiesRequest() {{
                                fields = "dolor";
                                objectId = "occaecati";
                                shapeProperties = new ShapeProperties() {{
                                    autofit = new Autofit() {{
                                        autofitType = "NONE";
                                        fontScale = 7710.89;
                                        lineSpacingReduction = 1310.55;
                                    }};
                                    contentAlignment = "CONTENT_ALIGNMENT_UNSUPPORTED";
                                    link = new Link() {{
                                        pageObjectId = "aut";
                                        relativeLink = "PREVIOUS_SLIDE";
                                        slideIndex = 115484;
                                        url = "maiores";
                                    }};
                                    outline = new Outline() {{
                                        dashStyle = "DASH_DOT";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 2446.51;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 9742.57;
                                                        green = 3743.23;
                                                        red = 9903.45;
                                                    }};
                                                    themeColor = "THEME_COLOR_TYPE_UNSPECIFIED";
                                                }};
                                            }};
                                        }};
                                        propertyState = "NOT_RENDERED";
                                        weight = new Dimension() {{
                                            magnitude = 3100.67;
                                            unit = "UNIT_UNSPECIFIED";
                                        }};
                                    }};
                                    shadow = new Shadow() {{
                                        alignment = "BOTTOM_CENTER";
                                        alpha = 6387.62;
                                        blurRadius = new Dimension() {{
                                            magnitude = 8070.23;
                                            unit = "EMU";
                                        }};
                                        color = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 6400.24;
                                                green = 9894.1;
                                                red = 3681.02;
                                            }};
                                            themeColor = "DARK1";
                                        }};
                                        propertyState = "RENDERED";
                                        rotateWithShape = false;
                                        transform = new AffineTransform() {{
                                            scaleX = 7832.35;
                                            scaleY = 8018.36;
                                            shearX = 2883.98;
                                            shearY = 704.47;
                                            translateX = 2414.18;
                                            translateY = 6835.73;
                                            unit = "EMU";
                                        }};
                                        type = "SHADOW_TYPE_UNSPECIFIED";
                                    }};
                                    shapeBackgroundFill = new ShapeBackgroundFill() {{
                                        propertyState = "RENDERED";
                                        solidFill = new SolidFill() {{
                                            alpha = 6339.31;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 6658.59;
                                                    green = 9268.8;
                                                    red = 5173.09;
                                                }};
                                                themeColor = "BACKGROUND1";
                                            }};
                                        }};
                                    }};
                                }};
                            }};
                            updateSlideProperties = new UpdateSlidePropertiesRequest() {{
                                fields = "vel";
                                objectId = "ducimus";
                                slideProperties = new SlideProperties() {{
                                    isSkipped = false;
                                    layoutObjectId = "quos";
                                    masterObjectId = "vel";
                                    notesPage = new Page() {{}};
                                }};
                            }};
                            updateSlidesPosition = new UpdateSlidesPositionRequest() {{
                                insertionIndex = 287051;
                                slideObjectIds = new String[]{{
                                    add("facilis"),
                                    add("cum"),
                                    add("commodi"),
                                    add("in"),
                                }};
                            }};
                            updateTableBorderProperties = new UpdateTableBorderPropertiesRequest() {{
                                borderPosition = "INNER_HORIZONTAL";
                                fields = "reiciendis";
                                objectId = "assumenda";
                                tableBorderProperties = new TableBorderProperties() {{
                                    dashStyle = "DOT";
                                    tableBorderFill = new TableBorderFill() {{
                                        solidFill = new SolidFill() {{
                                            alpha = 9249.67;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 3975.33;
                                                    green = 460.07;
                                                    red = 7386.83;
                                                }};
                                                themeColor = "DARK2";
                                            }};
                                        }};
                                    }};
                                    weight = new Dimension() {{
                                        magnitude = 4490.83;
                                        unit = "EMU";
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 937285;
                                    location = new TableCellLocation() {{
                                        columnIndex = 814967;
                                        rowIndex = 257233;
                                    }};
                                    rowSpan = 985492;
                                }};
                            }};
                            updateTableCellProperties = new UpdateTableCellPropertiesRequest() {{
                                fields = "suscipit";
                                objectId = "reiciendis";
                                tableCellProperties = new TableCellProperties() {{
                                    contentAlignment = "MIDDLE";
                                    tableCellBackgroundFill = new TableCellBackgroundFill() {{
                                        propertyState = "INHERIT";
                                        solidFill = new SolidFill() {{
                                            alpha = 8970.71;
                                            color = new OpaqueColor() {{
                                                rgbColor = new RgbColor() {{
                                                    blue = 2965.56;
                                                    green = 1210.59;
                                                    red = 9920.12;
                                                }};
                                                themeColor = "LIGHT2";
                                            }};
                                        }};
                                    }};
                                }};
                                tableRange = new TableRange() {{
                                    columnSpan = 249420;
                                    location = new TableCellLocation() {{
                                        columnIndex = 228263;
                                        rowIndex = 105906;
                                    }};
                                    rowSpan = 489509;
                                }};
                            }};
                            updateTableColumnProperties = new UpdateTableColumnPropertiesRequest() {{
                                columnIndices = new Integer[]{{
                                    add(891523),
                                    add(233420),
                                    add(358107),
                                    add(689768),
                                }};
                                fields = "laboriosam";
                                objectId = "ipsa";
                                tableColumnProperties = new TableColumnProperties() {{
                                    columnWidth = new Dimension() {{
                                        magnitude = 9167.27;
                                        unit = "PT";
                                    }};
                                }};
                            }};
                            updateTableRowProperties = new UpdateTableRowPropertiesRequest() {{
                                fields = "vitae";
                                objectId = "accusamus";
                                rowIndices = new Integer[]{{
                                    add(272437),
                                    add(132815),
                                    add(379057),
                                }};
                                tableRowProperties = new TableRowProperties() {{
                                    minRowHeight = new Dimension() {{
                                        magnitude = 3742.44;
                                        unit = "EMU";
                                    }};
                                }};
                            }};
                            updateTextStyle = new UpdateTextStyleRequest() {{
                                cellLocation = new TableCellLocation() {{
                                    columnIndex = 324405;
                                    rowIndex = 748789;
                                }};
                                fields = "dolorum";
                                objectId = "adipisci";
                                style = new TextStyle() {{
                                    backgroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 7955.35;
                                                green = 1718.53;
                                                red = 5039.34;
                                            }};
                                            themeColor = "ACCENT3";
                                        }};
                                    }};
                                    baselineOffset = "NONE";
                                    bold = false;
                                    fontFamily = "aliquam";
                                    fontSize = new Dimension() {{
                                        magnitude = 8859.63;
                                        unit = "PT";
                                    }};
                                    foregroundColor = new OptionalColor() {{
                                        opaqueColor = new OpaqueColor() {{
                                            rgbColor = new RgbColor() {{
                                                blue = 3518.7;
                                                green = 2377.42;
                                                red = 7383.91;
                                            }};
                                            themeColor = "ACCENT4";
                                        }};
                                    }};
                                    italic = false;
                                    link = new Link() {{
                                        pageObjectId = "quas";
                                        relativeLink = "LAST_SLIDE";
                                        slideIndex = 201517;
                                        url = "culpa";
                                    }};
                                    smallCaps = false;
                                    strikethrough = false;
                                    underline = false;
                                    weightedFontFamily = new WeightedFontFamily() {{
                                        fontFamily = "corrupti";
                                        weight = 867290;
                                    }};
                                }};
                                textRange = new Range() {{
                                    endIndex = 519643;
                                    startIndex = 940210;
                                    type = "FIXED_RANGE";
                                }};
                            }};
                            updateVideoProperties = new UpdateVideoPropertiesRequest() {{
                                fields = "nobis";
                                objectId = "sit";
                                videoProperties = new VideoProperties() {{
                                    autoPlay = false;
                                    end = 699575;
                                    mute = false;
                                    outline = new Outline() {{
                                        dashStyle = "SOLID";
                                        outlineFill = new OutlineFill() {{
                                            solidFill = new SolidFill() {{
                                                alpha = 9679.66;
                                                color = new OpaqueColor() {{
                                                    rgbColor = new RgbColor() {{
                                                        blue = 1318.52;
                                                        green = 9944.01;
                                                        red = 7079.18;
                                                    }};
                                                    themeColor = "ACCENT3";
                                                }};
                                            }};
                                        }};
                                        propertyState = "INHERIT";
                                        weight = new Dimension() {{
                                            magnitude = 708.69;
                                            unit = "EMU";
                                        }};
                                    }};
                                    start = 292794;
                                }};
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "laborum";
                    }};
                }};
            }};            

            SlidesPresentationsBatchUpdateResponse res = sdk.presentations.slidesPresentationsBatchUpdate(req);

            if (res.batchUpdatePresentationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
