import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientProjectStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_projects" })
  numberOfProjects?: number;

  @SpeakeasyMetadata({ data: "json, name=total_spending" })
  totalSpending?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: string;
}
