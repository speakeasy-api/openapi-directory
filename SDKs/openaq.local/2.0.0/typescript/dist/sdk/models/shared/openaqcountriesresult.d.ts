import { SpeakeasyBase } from "../../../internal/utils";
import { CountriesRow } from "./countriesrow";
export declare class OpenAQCountriesResultMeta extends SpeakeasyBase {
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
export declare class OpenAQCountriesResult extends SpeakeasyBase {
    meta?: OpenAQCountriesResultMeta;
    results: CountriesRow[];
}
