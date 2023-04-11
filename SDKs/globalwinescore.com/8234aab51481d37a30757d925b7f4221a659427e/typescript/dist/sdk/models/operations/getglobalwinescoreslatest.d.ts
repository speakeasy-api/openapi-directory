import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The lowercase color of the wine.
 */
export declare enum GetGlobalwinescoresLatestColorEnum {
    Red = "red",
    White = "white",
    Pink = "pink"
}
/**
 * Which field to use when ordering the results.
 */
export declare enum GetGlobalwinescoresLatestOrderingEnum {
    Date = "date",
    MinusDate = "-date",
    Score = "score",
    MinusScore = "-score"
}
export declare class GetGlobalwinescoresLatestRequest extends SpeakeasyBase {
    authorization?: string;
    /**
     * The lowercase color of the wine.
     */
    color?: GetGlobalwinescoresLatestColorEnum;
    /**
     * Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores
     *
     * @remarks
     *
     */
    isPrimeurs?: boolean;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
     *
     * @remarks
     *
     */
    lwin?: string;
    /**
     * L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
     *
     * @remarks
     *
     */
    lwin11?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: GetGlobalwinescoresLatestOrderingEnum;
    /**
     * The vintage you want to search against.
     */
    vintage?: string;
    /**
     * The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>
     *
     * @remarks
     *
     */
    wineId?: number[];
}
export declare class GetGlobalwinescoresLatestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
