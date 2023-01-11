import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EarningWithTqsStatusEnum {
    Paid = "paid",
    Pending = "pending",
    Failed = "failed"
}


export class EarningWithTqs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_above_average" })
  isAboveAverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EarningWithTqsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=strings_edited" })
  stringsEdited?: number;

  @SpeakeasyMetadata({ data: "json, name=strings_translated" })
  stringsTranslated?: number;

  @SpeakeasyMetadata({ data: "json, name=words" })
  words?: number;

  @SpeakeasyMetadata({ data: "json, name=words_approved" })
  wordsApproved?: number;

  @SpeakeasyMetadata({ data: "json, name=words_translated" })
  wordsTranslated?: number;
}
