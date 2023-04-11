import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * if this is JSONP or JSON
 */
export declare enum GetSectionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
/**
 * The section the story appears in.
 */
export declare enum GetSectionFormatSectionEnum {
    Home = "home",
    Opinion = "opinion",
    World = "world",
    National = "national",
    Politics = "politics",
    Upshot = "upshot",
    Nyregion = "nyregion",
    Business = "business",
    Technology = "technology",
    Science = "science",
    Health = "health",
    Sports = "sports",
    Arts = "arts",
    Books = "books",
    Movies = "movies",
    Theater = "theater",
    Sundayreview = "sundayreview",
    Fashion = "fashion",
    Tmagazine = "tmagazine",
    Food = "food",
    Travel = "travel",
    Magazine = "magazine",
    Realestate = "realestate",
    Automobiles = "automobiles",
    Obituaries = "obituaries",
    Insider = "insider"
}
export declare class GetSectionFormatRequest extends SpeakeasyBase {
    /**
     * The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.
     *
     * @remarks
     *
     */
    callback?: string;
    /**
     * if this is JSONP or JSON
     */
    format: GetSectionFormatFormatEnum;
    /**
     * The section the story appears in.
     */
    section: GetSectionFormatSectionEnum;
}
/**
 * An array of articles
 */
export declare class GetSectionFormat200ApplicationJSON extends SpeakeasyBase {
    results?: shared.Article[];
}
export declare class GetSectionFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of articles
     */
    getSectionFormat200ApplicationJSONObject?: GetSectionFormat200ApplicationJSON;
}
