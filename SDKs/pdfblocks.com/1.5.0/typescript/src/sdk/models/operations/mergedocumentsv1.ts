import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeDocumentsV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file;json=true" })
  file?: Uint8Array[];
}


export class MergeDocumentsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class MergeDocumentsV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: MergeDocumentsV1RequestBody;
}


export class MergeDocumentsV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  mergeDocumentsV14XXApplicationProblemPlusJsonObject?: MergeDocumentsV14XxApplicationProblemPlusJson;
}
