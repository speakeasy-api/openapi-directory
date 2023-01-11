import { SpeakeasyBase } from "../../../internal/utils";
import { CitiesRow } from "./citiesrow";
export declare class OpenAqCitiesResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
export declare class OpenAqCitiesResult extends SpeakeasyBase {
    meta?: OpenAqCitiesResultMeta;
    results: CitiesRow[];
}
