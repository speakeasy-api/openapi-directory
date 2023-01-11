import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CitiesRow } from "./citiesrow";



export class OpenAqCitiesResultMeta extends SpeakeasyBase {
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


export class OpenAqCitiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: OpenAqCitiesResultMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CitiesRow })
  results: CitiesRow[];
}
