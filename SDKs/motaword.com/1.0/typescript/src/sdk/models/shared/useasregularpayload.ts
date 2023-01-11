import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UseAsRegularPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOriginalFilePreview" })
  allowOriginalFilePreview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowReviewInManualEditor" })
  allowReviewInManualEditor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableInvitations" })
  disableInvitations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fromManualTranslationFileId" })
  fromManualTranslationFileId?: number;

  @SpeakeasyMetadata({ data: "json, name=hideNumbers" })
  hideNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recreate" })
  recreate?: boolean;
}
