import { SpeakeasyBase } from "../../../internal/utils";
import { CountriesRow } from "./countriesrow";
export declare class OpenAqCountriesResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
export declare class OpenAqCountriesResult extends SpeakeasyBase {
    meta?: OpenAqCountriesResultMeta;
    results: CountriesRow[];
}
