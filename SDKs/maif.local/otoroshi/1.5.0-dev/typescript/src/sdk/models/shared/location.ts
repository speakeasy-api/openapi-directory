import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams: Record<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant: string;
}
