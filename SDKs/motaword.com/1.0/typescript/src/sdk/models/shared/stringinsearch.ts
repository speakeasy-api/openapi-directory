import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringTranslationStateEnum } from "./stringtranslationstateenum";


export enum StringInSearchTypeEnum {
    LocalProject = "LOCAL_PROJECT",
    ImportedTm = "IMPORTED_TM"
}


export class StringInSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=internal_project_id" })
  internalProjectId?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "json, name=search_score" })
  searchScore?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StringTranslationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=string_id" })
  stringId?: number;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];

  @SpeakeasyMetadata({ data: "json, name=tm_name" })
  tmName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StringInSearchTypeEnum;
}
