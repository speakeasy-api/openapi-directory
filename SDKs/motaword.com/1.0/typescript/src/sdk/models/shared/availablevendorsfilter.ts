import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AvailableVendorsFilterTypesEnum {
    Translator = "translator",
    Proofreader = "proofreader",
    Both = "both"
}


export class AvailableVendorsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corporateId" })
  corporateId?: number;

  @SpeakeasyMetadata({ data: "json, name=manualWorkPermission" })
  manualWorkPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguage" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguages" })
  targetLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: AvailableVendorsFilterTypesEnum[];
}
