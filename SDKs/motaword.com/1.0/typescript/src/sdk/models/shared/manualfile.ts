import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManualFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFileId" })
  driveFileId?: number;

  @SpeakeasyMetadata({ data: "json, name=isProofread" })
  isProofread?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTranslated" })
  isTranslated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=proofreadingFileId" })
  proofreadingFileId?: number;

  @SpeakeasyMetadata({ data: "json, name=translationFileId" })
  translationFileId?: number;
}
