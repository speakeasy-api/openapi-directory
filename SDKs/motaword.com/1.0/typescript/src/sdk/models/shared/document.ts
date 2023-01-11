import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
import { ManualFile } from "./manualfile";



export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_type" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=has_custom_package" })
  hasCustomPackage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: DocumentLinks;

  @SpeakeasyMetadata({ data: "json, name=manual_files", elemType: ManualFile })
  manualFiles?: ManualFile[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "json, name=review_in_manual_editor" })
  reviewInManualEditor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=search_score" })
  searchScore?: number;

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=target_languages" })
  targetLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=uploaded_at" })
  uploadedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: number;
}
