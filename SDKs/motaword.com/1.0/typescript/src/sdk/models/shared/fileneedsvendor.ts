import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileNeedsVendor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguage" })
  targetLanguage?: string[];

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: string[];
}
