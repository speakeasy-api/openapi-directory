import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectsRow } from "./projectsrow";



export class OpenAqProjectsResultMeta extends SpeakeasyBase {
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


export class OpenAqProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: OpenAqProjectsResultMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ProjectsRow })
  results: ProjectsRow[];
}
