import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountriesRow } from "./countriesrow";



export class OpenAqCountriesResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=found" })
  found?: number;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class OpenAqCountriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: OpenAqCountriesResultMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CountriesRow })
  results: CountriesRow[];
}
