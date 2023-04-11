import { SpeakeasyBase } from "../../../internal/utils";
import { CitiesRow } from "./citiesrow";
export declare class OpenAQCitiesResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
/**
 * Successful Response
 */
export declare class OpenAQCitiesResult extends SpeakeasyBase {
    meta?: OpenAQCitiesResultMeta;
    results: CitiesRow[];
}
