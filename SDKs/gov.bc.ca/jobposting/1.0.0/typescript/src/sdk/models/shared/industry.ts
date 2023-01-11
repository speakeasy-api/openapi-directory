import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubIndustry } from "./subindustry";



export class Industry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=SubIndustries", elemType: SubIndustry })
  subIndustries?: SubIndustry[];
}
