import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CombinedAge } from "./combinedage";
import { Sex } from "./sex";



export class ReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Combined Age" })
  combinedAge?: CombinedAge;

  @SpeakeasyMetadata({ data: "json, name=Sex" })
  sex?: Sex;
}
