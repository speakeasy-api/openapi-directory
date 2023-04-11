import { SpeakeasyBase } from "../../../internal/utils";
import { CreateImageResponse } from "./createimageresponse";
import { CreateLineResponse } from "./createlineresponse";
import { CreateShapeResponse } from "./createshaperesponse";
import { CreateSheetsChartResponse } from "./createsheetschartresponse";
import { CreateSlideResponse } from "./createslideresponse";
import { CreateTableResponse } from "./createtableresponse";
import { CreateVideoResponse } from "./createvideoresponse";
import { DuplicateObjectResponse } from "./duplicateobjectresponse";
import { GroupObjectsResponse } from "./groupobjectsresponse";
import { ReplaceAllShapesWithImageResponse } from "./replaceallshapeswithimageresponse";
import { ReplaceAllShapesWithSheetsChartResponse } from "./replaceallshapeswithsheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
/**
 * A single response from an update.
 */
export declare class Response extends SpeakeasyBase {
    /**
     * The result of creating an image.
     */
    createImage?: CreateImageResponse;
    /**
     * The result of creating a line.
     */
    createLine?: CreateLineResponse;
    /**
     * The result of creating a shape.
     */
    createShape?: CreateShapeResponse;
    /**
     * The result of creating an embedded Google Sheets chart.
     */
    createSheetsChart?: CreateSheetsChartResponse;
    /**
     * The result of creating a slide.
     */
    createSlide?: CreateSlideResponse;
    /**
     * The result of creating a table.
     */
    createTable?: CreateTableResponse;
    /**
     * The result of creating a video.
     */
    createVideo?: CreateVideoResponse;
    /**
     * The response of duplicating an object.
     */
    duplicateObject?: DuplicateObjectResponse;
    /**
     * The result of grouping objects.
     */
    groupObjects?: GroupObjectsResponse;
    /**
     * The result of replacing shapes with an image.
     */
    replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse;
    /**
     * The result of replacing shapes with a Google Sheets chart.
     */
    replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse;
    /**
     * The result of replacing text.
     */
    replaceAllText?: ReplaceAllTextResponse;
}
