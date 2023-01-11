import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JiraFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issue_id" })
  issueId?: string;

  @SpeakeasyMetadata({ data: "json, name=selective_sync" })
  selectiveSync?: boolean;
}
